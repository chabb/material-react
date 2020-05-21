import PropTypes, { InferProps } from 'prop-types';
import React, { MutableRefObject, useContext, useEffect, useRef } from 'react';
import Simple3DScene from './Simple3DScene';
import { subscribe } from './Simple3DSceneDownloadEvent';
import './Simple3DScene.less';
import { download } from './utils';
import {
  AnimationStyle,
  DEBUG_STYLE,
  DEFAULT_SCENE_SIZE,
  MOUNT_DEBUG_NODE_CLASS,
  MOUNT_NODE_CLASS,
  MOUNT_NODE_STYLE
} from './constants';
import { CameraContext } from './camera-context';
import { CameraReducerAction } from './camera-reducer';
import SimpleSlider from './animation-slider';
import { usePrevious } from '../../../utils/hooks';

const getSceneSize = sceneSize => (sceneSize ? sceneSize : DEFAULT_SCENE_SIZE);

let ID_GENERATOR = 0;
/**
 * Simple3DSceneComponent is intended to draw simple 3D scenes using the popular
 * Three.js scene graph library. In particular, the JSON representing the 3D scene
 * is intended to be human-readable, and easily generated via Python. This is not
 * intended to be a replacement for a full scene graph library, but for rapid
 * prototyping by non-experts.
 */
export default function Simple3DSceneComponent({
  id,
  debug,
  data,
  inletSize,
  inletPadding,
  settings,
  animation,
  downloadRequest = {},
  onObjectClicked,
  toggleVisibility,
  axisView,
  sceneSize
}: InferProps<typeof Simple3DSceneComponent.propTypes>) {
  // mount nodes, those are passed in the template and are populated when
  // the component is mounted
  const mountNodeRef = useRef(null);
  const mountNodeDebugRef = useRef(null);
  const _id = useRef(++ID_GENERATOR + '');
  const previousAnimationSetting = usePrevious(animation);
  // we use a ref to keep a reference to the underlying scene
  const scene: MutableRefObject<Simple3DScene | null> = useRef(null);

  // called after the component is mounted, so refs are correctly populated
  useEffect(() => {
    const _s = (scene.current = new Simple3DScene(
      data,
      mountNodeRef.current!,
      settings,
      inletSize,
      inletPadding,
      objects => {
        if (onObjectClicked) {
          onObjectClicked(objects);
        }
      },
      (position, quaternion, zoom) => {
        cameraContext.dispatch &&
          cameraContext.dispatch({
            type: CameraReducerAction.NEW_POSITION,
            payload: {
              componentId: _id.current,
              position,
              quaternion,
              zoom
            }
          });
      },
      mountNodeDebugRef.current!
    ));
    const subscription = subscribe(({ filename, filetype }) => download(filename, filetype, _s));
    return () => {
      // clean up code
      subscription.unsubscribe();
      _s.onDestroy();
    };
  }, []);

  // Note(chab) those hooks will be executed sequentially at mount time, and on change of the deps array elements
  useEffect(() => scene.current!.enableDebug(debug!, mountNodeDebugRef.current), [debug]);
  // An interesting classical react issue that we fixed : look at the stories, we do not pass anymore an empty object,
  // but a reference to an empty object, otherwise, it will be a different reference, and treated as a different object, thus
  // triggering the effect
  useEffect(() => {
    if (!data || !(data as any).name || !(data as any).contents) {
      console.warn('no data passed ( or missing name /content ), scene will not be updated', data);
      return;
    }

    //FIXME(chab) we have to much calls to renderScene
    !!data && scene.current!.addToScene(data, true);
    scene.current!.toggleVisibility(toggleVisibility as any);
    //scene.current!.cloneScene(data, 5, 1.2, -1, 10);
  }, [data]);
  useEffect(() => scene.current!.toggleVisibility(toggleVisibility as any), [toggleVisibility]);
  useEffect(() => scene.current!.updateInsetSettings(inletSize!, inletPadding!, axisView), [
    inletSize,
    inletPadding,
    axisView
  ]);

  useEffect(() => {
    scene.current!.resizeRendererToDisplaySize();
  }, [sceneSize]);

  useEffect(() => {
    const { filename, fileType, n_requests } = downloadRequest as any;
    if (n_requests > 0 && filename && filename.length > 0) {
      download(filename, fileType, scene.current!);
    }
  }, [(downloadRequest as any).n_requests]);

  // use to dispatch camera changes, and react to them
  // not this is not the  implementation, as react will re-render
  // when dispatch is called ( ideally, we could just use RxJS to react to the changes,
  // in that case we will just update the camera position... instead of re-rendering the component )
  // but the perf impact is like 0.20

  const cameraContext = useContext(CameraContext);
  if (cameraContext.state) {
    const state = cameraContext.state;
    useEffect(() => {
      if (
        _id.current == state.fromComponent ||
        !state.position ||
        !state.quaternion ||
        !state.zoom
      ) {
      } else {
        scene.current!.updateCamera(state.position, state.quaternion, state.zoom);
      }
    }, [state.position, state.quaternion]);
  }
  //
  useEffect(() => {
    animation && scene.current!.updateAnimationStyle(animation as AnimationStyle);
  }, [animation]);

  const size = getSceneSize(sceneSize);

  // NOTE(chab) we could let the user opt for a flex layout, instead of using relative/absolute
  return (
    <>
      <div className="three-wrapper" style={{ position: 'relative', width: size, height: size }}>
        <div
          id={id!}
          style={{ ...MOUNT_NODE_STYLE, width: size, height: size }}
          className={MOUNT_NODE_CLASS}
          ref={mountNodeRef}
        />
      </div>
      {debug && (
        <div style={DEBUG_STYLE} className={MOUNT_DEBUG_NODE_CLASS} ref={mountNodeDebugRef} />
      )}

      {animation === AnimationStyle.SLIDER && (
        <SimpleSlider
          onUpdate={a => {
            scene.current!.updateTime(a / 100);
          }}
        />
      )}
    </>
  );
}

//TODO(chab) add isRequired stuff, so TS will not complain
// or just use plain types, and use propTypes in dash

Simple3DSceneComponent.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks
   */
  id: PropTypes.string,

  /**
   * Add a debugging view
   */
  debug: PropTypes.bool,

  /**
   * Simple3DScene JSON, the easiest way to generate this is to use the Scene class
   * in crystal_toolkit.core.scene and its to_json method.
   */
  data: PropTypes.object,

  /**
   * Options used for generating scene.
   * Supported options and their defaults are given as follows:
   * {
   *    antialias: true, // set to false to improve performance
   *    renderer: 'webgl', // 'svg' also an option, used for unit testing
   *    transparentBackground: false, // transparent background
   *    background: '#ffffff', // background color if not transparent,
   *    sphereSegments: 32, // decrease to improve performance
   *    cylinderSegments: 16, // decrease to improve performance
   *    staticScene: true, // disable if animation required
   *    defaultZoom: 1, // 1 will fill the screen with sufficient room to rotate
   *    extractAxis: false // will remove the axis from the main scene
   * }
   * There are several additional options used for debugging and testing,
   * please consult the source code directly for these.
   */
  settings: PropTypes.object,

  /**
   * Hide/show nodes in scene by its name (key), value is 1 to show the node
   * and 0 to hide it.
   */
  toggleVisibility: PropTypes.object,

  /**
   * Set to trigger a screenshot or scene download. Should be an object with
   * the structure:
   * {
   *    "n_requests": n_requests, // increment to trigger a new download request
   *    "filename": request_filename, // the download filename
   *    "filetype": "png", // the download format
   * }
   */
  downloadRequest: PropTypes.object,
  onObjectClicked: PropTypes.func,
  /**
   * Size of axis inlet
   */
  inletSize: PropTypes.number,
  /**
   * Size of scene
   */
  sceneSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * Padding of axis inlet
   */
  inletPadding: PropTypes.number,
  /**
   * Orientation of axis view
   */
  axisView: PropTypes.string,
  /**
   * Animation
   *
   * Set up animation styles
   *
   * 'play'
   * 'none'
   * 'slider'
   */
  animation: PropTypes.string
};
