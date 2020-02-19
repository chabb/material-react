import * as THREE from 'three';
import { JSON3DObject, Material, Renderer } from './constants';
import { ConvexBufferGeometry } from 'three/examples/jsm/geometries/ConvexGeometry';
import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer';

/**
 *
 *  This class builds Three.js object.
 *
 *  TODO: implements lights/camera
 *
 */
export class ThreeBuilder {
  constructor(private settings) {}

  public makeCylinders(object_json, obj) {
    const radius = object_json.radius || 1;
    const geom = new THREE.CylinderBufferGeometry(
      radius * this.settings.cylinderScale,
      radius * this.settings.cylinderScale,
      1.0,
      this.settings.cylinderSegments
    );
    const mat = this.makeMaterial(object_json.color);
    const vec_y = new THREE.Vector3(0, 1, 0); // initial axis of cylinder
    const quaternion = new THREE.Quaternion();
    object_json.positionPairs.forEach(positionPair => {
      // the following is technically correct but could be optimized?
      const mesh = new THREE.Mesh(geom, mat);
      const vec_a = new THREE.Vector3(...positionPair[0]);
      const vec_b = new THREE.Vector3(...positionPair[1]);
      const vec_rel = vec_b.sub(vec_a);
      // scale cylinder to correct length
      mesh.scale.y = vec_rel.length();
      // set origin at midpoint of cylinder
      const vec_midpoint = vec_a.add(vec_rel.clone().multiplyScalar(0.5));
      mesh.position.set(vec_midpoint.x, vec_midpoint.y, vec_midpoint.z);
      // rotate cylinder into correct orientation
      quaternion.setFromUnitVectors(vec_y, vec_rel.normalize());
      mesh.setRotationFromQuaternion(quaternion);
      obj.add(mesh);
    });
    return obj;
  }

  public makeLine(object_json, obj) {
    const verts = new THREE.Float32BufferAttribute([].concat.apply([], object_json.positions), 3);
    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', verts);

    let mat;
    if (object_json.dashSize || object_json.scale || object_json.gapSize) {
      mat = new THREE.LineDashedMaterial({
        color: object_json.color || '#000000',
        linewidth: object_json.line_width || 1,
        scale: object_json.scale || 1,
        dashSize: object_json.dashSize || 3,
        gapSize: object_json.gapSize || 1
      });
    } else {
      mat = new THREE.LineBasicMaterial({
        color: object_json.color || '#2c3c54',
        linewidth: object_json.line_width || 1
      });
    }

    const mesh = new THREE.LineSegments(geom, mat);
    if (object_json.dashSize || object_json.scale || object_json.gapSize) {
      mesh.computeLineDistances();
    }
    obj.add(mesh);
    return obj;
  }

  public makeCube(object_json, obj) {
    const size = object_json.width * this.settings.sphereScale;
    const geom = new THREE.BoxBufferGeometry(size, size, size);
    const mat = this.makeMaterial(object_json.color);
    object_json.positions.forEach(position => {
      const mesh = new THREE.Mesh(geom, mat);
      mesh.position.set(...(position as [number, number, number]));
      obj.add(mesh);
    });

    return obj;
  }

  public makeSurfaces(object_json, obj) {
    const verts = new THREE.Float32BufferAttribute([].concat.apply([], object_json.positions), 3);
    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', verts);

    const opacity = object_json.opacity || this.settings.defaultSurfaceOpacity;
    const mat = this.makeMaterial(object_json.color, opacity);

    if (object_json.normals) {
      const normals = new THREE.Float32BufferAttribute([].concat.apply([], object_json.normals), 3);

      geom.setAttribute('normal', normals);
    } else {
      // see if there is alternative.. i think openGL dont provide it anymore
      //FIXME(chab) is it even called ?
      geom.computeVertexNormals(); // instead of computefacenormals ?
      mat.side = THREE.DoubleSide; // not sure if this is necessary if we compute normals correctly
    }

    if (opacity) {
      mat.transparent = true;
      mat.depthWrite = false;
    }

    const mesh = new THREE.Mesh(geom, mat);
    obj.add(mesh);
    // TODO: smooth the surfaces?
    return obj;
  }

  public makeConvex(object_json, obj) {
    const points = object_json.positions.map(p => new THREE.Vector3(...p));
    const geom = new ConvexBufferGeometry(points);
    const opacity = object_json.opacity || this.settings.defaultSurfaceOpacity;
    const mat = this.makeMaterial(object_json.color, opacity);
    if (opacity) {
      mat.transparent = true;
      mat.depthWrite = false;
    }

    const mesh = new THREE.Mesh(geom, mat);
    obj.add(mesh);
    const edges = new THREE.EdgesGeometry(geom);
    const line = new THREE.LineSegments(
      edges,
      new THREE.LineBasicMaterial({ color: object_json.color })
    );
    obj.add(line);
    return obj;
  }

  public makeArrow(object_json, obj) {
    // TODO obj is the parent object, rename to a better name

    const radius = object_json.radius || 1;
    const headLength = object_json.headLength || 2;
    const headWidth = object_json.headWidth || 2;

    // body
    const geom_cyl = new THREE.CylinderBufferGeometry(
      radius * this.settings.cylinderScale,
      radius * this.settings.cylinderScale,
      1.0,
      this.settings.cylinderSegments
    );
    // head
    const geom_head = new THREE.ConeBufferGeometry(
      headWidth * this.settings.cylinderScale,
      headLength * this.settings.cylinderScale,
      this.settings.cylinderSegments
    );

    const mat = this.makeMaterial(object_json.color);

    const vec_y = new THREE.Vector3(0, 1, 0); // initial axis of cylinder
    const quaternion = new THREE.Quaternion();
    const quaternion_head = new THREE.Quaternion();

    object_json.positionPairs.forEach(positionPair => {
      // the following is technically correct but could be optimized?

      const mesh = new THREE.Mesh(geom_cyl, mat);
      const vec_a = new THREE.Vector3(...positionPair[0]);
      const vec_b = new THREE.Vector3(...positionPair[1]);
      const vec_head = new THREE.Vector3(...positionPair[1]);
      const vec_rel = vec_b.sub(vec_a);

      // scale cylinder to correct length
      mesh.scale.y = vec_rel.length();

      // set origin at midpoint of cylinder
      const vec_midpoint = vec_a.add(vec_rel.clone().multiplyScalar(0.5));
      mesh.position.set(vec_midpoint.x, vec_midpoint.y, vec_midpoint.z);

      // rotate cylinder into correct orientation
      quaternion.setFromUnitVectors(vec_y, vec_rel.normalize());
      mesh.setRotationFromQuaternion(quaternion);

      obj.add(mesh);

      // add arrowhead
      const mesh_head = new THREE.Mesh(geom_head, mat);
      mesh_head.position.set(vec_head.x, vec_head.y, vec_head.z);
      // rotate cylinder into correct orientation
      quaternion_head.setFromUnitVectors(vec_y, vec_rel.normalize());
      mesh_head.setRotationFromQuaternion(quaternion_head);
      obj.add(mesh_head);
    });
    return obj;
  }

  public makeMaterial(color = '#52afb0', opacity = 1.0) {
    const parameters = Object.assign(this.settings.material.parameters, {
      color: color,
      opacity: opacity
    });

    if (this.settings.renderer === Renderer.SVG) {
      return new THREE.MeshBasicMaterial(parameters);
    }

    switch (this.settings.material.type) {
      case Material.standard: {
        const mat = new THREE.MeshStandardMaterial(parameters);
        mat.side = THREE.DoubleSide;
        return mat;
      }
      default:
        throw new Error('Unknown material.');
    }
  }

  public makeSphere(object_json, obj) {
    const { geom, mat } = this.getSphereBuffer(
      object_json.radius * this.settings.sphereScale,
      object_json.color,
      object_json.phiStart,
      object_json.phiEnd
    );
    object_json.positions.forEach(position => {
      const mesh = new THREE.Mesh(geom, mat);
      mesh.position.set(...(position as [number, number, number])); //FIXME
      obj.add(mesh);
      return mesh;
    });
    return obj;
  }

  public makeLabel(object_json, obj) {
    const label = document.createElement('div');
    label.className = 'tooltip';
    label.textContent = object_json.label;
    if (object_json.hoverLabel) {
      const hoverLabel = document.createElement('span');
      hoverLabel.textContent = object_json.hoverLabel;
      hoverLabel.className = 'tooltiptext';
      label.appendChild(hoverLabel);
    }
    const labelObject = new CSS2DObject(label);
    obj.add(labelObject);
    return obj;
  }

  public makeEllipsoids(object_json, obj) {
    const { geom, mat } = this.getSphereBuffer(
      this.settings.sphereScale,
      object_json.color,
      object_json.phiStart,
      object_json.phiEnd
    );
    const meshes = object_json.positions.map(position => {
      const mesh = new THREE.Mesh(geom, mat);
      mesh.position.set(...(position as [number, number, number]));
      mesh.scale.set(...(object_json.scale as [number, number, number])); // TODO: Is this valid JS?
      meshes.push(mesh);
    });
    // TODO: test axes are correct!
    const vec_z = new THREE.Vector3(0, 0, 1);
    const quaternion = new THREE.Quaternion();
    object_json.rotate_to.forEach((rotation, index) => {
      const rotation_vec = new THREE.Vector3(...rotation);
      quaternion.setFromUnitVectors(vec_z, rotation_vec.normalize());
      meshes[index].setRotationFromQuaternion(quaternion);
    });
    meshes.forEach(mesh => obj.add(mesh));
    return obj;
  }

  public makeObject(object_json, obj) {
    switch (object_json.type as JSON3DObject) {
      case JSON3DObject.SPHERES: {
        return this.makeSphere(object_json, obj);
      }
      case JSON3DObject.ELLIPSOIDS: {
        return this.makeEllipsoids(object_json, obj);
      }
      case JSON3DObject.CYLINDERS: {
        return this.makeCylinders(object_json, obj);
      }
      case JSON3DObject.CUBES: {
        return this.makeCube(object_json, obj);
      }
      case JSON3DObject.LINES: {
        return this.makeLine(object_json, obj);
      }
      case JSON3DObject.SURFACES: {
        return this.makeSurfaces(object_json, obj);
      }
      case JSON3DObject.CONVEX: {
        return this.makeConvex(object_json, obj);
      }
      case JSON3DObject.ARROWS: {
        // take inspiration from ArrowHelper, user cones and cylinders
        return this.makeArrow(object_json, obj);
      }
      case JSON3DObject.LABEL: {
        return this.makeLabel(object_json, obj);
      }
      default: {
        return obj;
      }
    }
  }

  private getSphereBuffer(scale: number, color: string, phiStart: number, phiEnd: number) {
    const geom = new THREE.SphereBufferGeometry(
      scale,
      this.settings.sphereSegments,
      this.settings.sphereSegments,
      phiStart || 0,
      phiEnd || Math.PI * 2
    );
    return { geom, mat: this.makeMaterial(color) };
  }
}
