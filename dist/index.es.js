import React__default, { createContext, useState, useContext, useEffect, createElement, Fragment, useMemo, useRef, useReducer, Component } from 'react';
import { Subject as Subject$1 } from 'rxjs';
import { Vector2, Mesh, Color as Color$1, BufferGeometry, TubeBufferGeometry, Vector3, Float32BufferAttribute, Quaternion, MeshStandardMaterial, LineDashedMaterial, LineBasicMaterial, LineSegments, BoxBufferGeometry, DoubleSide, EdgesGeometry, ConeBufferGeometry, CylinderBufferGeometry, MeshBasicMaterial, SphereBufferGeometry, Object3D, HemisphereLight, AmbientLight, DirectionalLight, HemisphereLightHelper, DirectionalLightHelper, Scene as Scene$1, QuadraticBezierCurve3, OrthographicCamera, CameraHelper, Box3, WebGLRenderer, AxesHelper, GridHelper, PerspectiveCamera, Clock, VectorKeyframeTrack, NumberKeyframeTrack, BufferAttribute, AnimationClip, AnimationMixer, Raycaster, Matrix4 } from 'three';
import { useMediaQuery } from 'react-responsive';
import { CSS2DObject, CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer';
import { SVGRenderer } from 'three/examples/jsm/renderers/SVGRenderer';
import { ConvexBufferGeometry } from 'three/examples/jsm/geometries/ConvexGeometry';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OutlineEffect } from 'three/examples/jsm/effects/OutlineEffect';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';
import { Slider, Rail, Handles, Tracks, Ticks } from 'react-compound-slider';
import PropTypes from 'prop-types';
import useDeepCompareEffect from 'use-deep-compare-effect';
import { useLocation, useHistory, BrowserRouter } from 'react-router-dom';
import toDataUrl from 'svgtodatauri';
import { ColladaExporter } from 'three/examples/jsm/exporters/ColladaExporter';
import ReactJson from 'react-json-view';
import Graph from 'react-graph-vis';
import ReactTooltip from 'react-tooltip';
import axios from 'axios';
import qs from 'qs';
import 'xlsx';
import { nest, scaleLinear, format as format$1 } from 'd3';
import classNames from 'classnames';
import { Dropdown, Form, Button } from 'react-bulma-components';
import { Range, getTrackBackground } from 'react-range';
import ReactSelect from 'react-select';
import DataTable from 'react-data-table-component';
export { default as DataTable } from 'react-data-table-component';
import NumberFormat from 'react-number-format';
import { Wrapper, Button as Button$1, Menu, MenuItem } from 'react-aria-menubutton';
import { v4 } from 'uuid';
import { toByteArray } from 'base64-js';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isFunction(x) {
    return typeof x === 'function';
}

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var _enable_super_gross_mode_that_will_cause_bad_things = false;
var config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = /*@__PURE__*/ new Error();
            /*@__PURE__*/ console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function hostReportError(err) {
    setTimeout(function () { throw err; }, 0);
}

/** PURE_IMPORTS_START _config,_util_hostReportError PURE_IMPORTS_END */
var empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            hostReportError(err);
        }
    },
    complete: function () { }
};

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var isArray = /*@__PURE__*/ (function () { return Array.isArray || (function (x) { return x && typeof x.length === 'number'; }); })();

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isObject(x) {
    return x !== null && typeof x === 'object';
}

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var UnsubscriptionErrorImpl = /*@__PURE__*/ (function () {
    function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ?
            errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
    }
    UnsubscriptionErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    return UnsubscriptionErrorImpl;
})();
var UnsubscriptionError = UnsubscriptionErrorImpl;

/** PURE_IMPORTS_START _util_isArray,_util_isObject,_util_isFunction,_util_UnsubscriptionError PURE_IMPORTS_END */
var Subscription = /*@__PURE__*/ (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._ctorUnsubscribe = true;
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parentOrParents = _a._parentOrParents, _ctorUnsubscribe = _a._ctorUnsubscribe, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
        }
        else if (_parentOrParents !== null) {
            for (var index = 0; index < _parentOrParents.length; ++index) {
                var parent_1 = _parentOrParents[index];
                parent_1.remove(this);
            }
        }
        if (isFunction(_unsubscribe)) {
            if (_ctorUnsubscribe) {
                this._unsubscribe = undefined;
            }
            try {
                _unsubscribe.call(this);
            }
            catch (e) {
                errors = e instanceof UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if (isArray(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject(sub)) {
                    try {
                        sub.unsubscribe();
                    }
                    catch (e) {
                        errors = errors || [];
                        if (e instanceof UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
                            errors.push(e);
                        }
                    }
                }
            }
        }
        if (errors) {
            throw new UnsubscriptionError(errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        var subscription = teardown;
        if (!teardown) {
            return Subscription.EMPTY;
        }
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) {
            subscription._parentOrParents = this;
        }
        else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
                return subscription;
            }
            subscription._parentOrParents = [_parentOrParents, this];
        }
        else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
        }
        else {
            return subscription;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions === null) {
            this._subscriptions = [subscription];
        }
        else {
            subscriptions.push(subscription);
        }
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError) ? err.errors : err); }, []);
}

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var rxSubscriber = /*@__PURE__*/ (function () {
    return typeof Symbol === 'function'
        ? /*@__PURE__*/ Symbol('rxSubscriber')
        : '@@rxSubscriber_' + /*@__PURE__*/ Math.random();
})();

/** PURE_IMPORTS_START tslib,_util_isFunction,_Observer,_Subscription,_internal_symbol_rxSubscriber,_config,_util_hostReportError PURE_IMPORTS_END */
var Subscriber = /*@__PURE__*/ (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
            case 0:
                _this.destination = empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    }
                    else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[rxSubscriber] = function () { return this; };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
    };
    return Subscriber;
}(Subscription));
var SafeSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== empty) {
                context = Object.create(observerOrNext);
                if (isFunction(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = config.useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                hostReportError(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    hostReportError(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                hostReportError(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                hostReportError(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));

/** PURE_IMPORTS_START _Subscriber PURE_IMPORTS_END */
function canReportError(observer) {
    while (observer) {
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) {
            return false;
        }
        else if (destination && destination instanceof Subscriber) {
            observer = destination;
        }
        else {
            observer = null;
        }
    }
    return true;
}

/** PURE_IMPORTS_START _Subscriber,_symbol_rxSubscriber,_Observer PURE_IMPORTS_END */
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber]) {
            return nextOrObserver[rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber(empty);
    }
    return new Subscriber(nextOrObserver, error, complete);
}

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var observable = /*@__PURE__*/ (function () { return typeof Symbol === 'function' && Symbol.observable || '@@observable'; })();

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function identity(x) {
    return x;
}

/** PURE_IMPORTS_START _identity PURE_IMPORTS_END */
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}

/** PURE_IMPORTS_START _util_canReportError,_util_toSubscriber,_symbol_observable,_util_pipe,_config PURE_IMPORTS_END */
var Observable = /*@__PURE__*/ (function () {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber(observerOrNext, error, complete);
        if (operator) {
            sink.add(operator.call(sink, this.source));
        }
        else {
            sink.add(this.source || (config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (config.useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (canReportError(sink)) {
                sink.error(err);
            }
            else {
                console.warn(err);
            }
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor =  Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var subscribeToArray = function (array) {
    return function (subscriber) {
        for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
            subscriber.next(array[i]);
        }
        subscriber.complete();
    };
};

/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */
var Action = /*@__PURE__*/ (function (_super) {
    __extends(Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function (state, delay) {
        return this;
    };
    return Action;
}(Subscription));

/** PURE_IMPORTS_START tslib,_Action PURE_IMPORTS_END */
var AsyncAction = /*@__PURE__*/ (function (_super) {
    __extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (this.closed) {
            return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        clearInterval(id);
        return undefined;
    };
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    };
    return AsyncAction;
}(Action));

var Scheduler = /*@__PURE__*/ (function () {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) {
            now = Scheduler.now;
        }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) {
            delay = 0;
        }
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = function () { return Date.now(); };
    return Scheduler;
}());

/** PURE_IMPORTS_START tslib,_Scheduler PURE_IMPORTS_END */
var AsyncScheduler = /*@__PURE__*/ (function (_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) {
            now = Scheduler.now;
        }
        var _this = _super.call(this, SchedulerAction, function () {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) {
                return AsyncScheduler.delegate.now();
            }
            else {
                return now();
            }
        }) || this;
        _this.actions = [];
        _this.active = false;
        _this.scheduled = undefined;
        return _this;
    }
    AsyncScheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) {
            delay = 0;
        }
        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
            return AsyncScheduler.delegate.schedule(work, delay, state);
        }
        else {
            return _super.prototype.schedule.call(this, work, delay, state);
        }
    };
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift());
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler));

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isScheduler(value) {
    return value && typeof value.schedule === 'function';
}

/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */
function scheduleArray(input, scheduler) {
    return new Observable(function (subscriber) {
        var sub = new Subscription();
        var i = 0;
        sub.add(scheduler.schedule(function () {
            if (i === input.length) {
                subscriber.complete();
                return;
            }
            subscriber.next(input[i++]);
            if (!subscriber.closed) {
                sub.add(this.schedule());
            }
        }));
        return sub;
    });
}

/** PURE_IMPORTS_START _Observable,_util_subscribeToArray,_scheduled_scheduleArray PURE_IMPORTS_END */
function fromArray(input, scheduler) {
    if (!scheduler) {
        return new Observable(subscribeToArray(input));
    }
    else {
        return scheduleArray(input, scheduler);
    }
}

/** PURE_IMPORTS_START _util_isScheduler,_fromArray,_scheduled_scheduleArray PURE_IMPORTS_END */
function of() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = args[args.length - 1];
    if (isScheduler(scheduler)) {
        args.pop();
        return scheduleArray(args, scheduler);
    }
    else {
        return fromArray(args);
    }
}

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function map(project, thisArg) {
    return function mapOperation(source) {
        if (typeof project !== 'function') {
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
        }
        return source.lift(new MapOperator(project, thisArg));
    };
}
var MapOperator = /*@__PURE__*/ (function () {
    function MapOperator(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
    }
    MapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
    };
    return MapOperator;
}());
var MapSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(MapSubscriber, _super);
    function MapSubscriber(destination, project, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.count = 0;
        _this.thisArg = thisArg || _this;
        return _this;
    }
    MapSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.project.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return MapSubscriber;
}(Subscriber));

/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
var EMPTY = /*@__PURE__*/ new Observable(function (subscriber) { return subscriber.complete(); });
function empty$1(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
    return new Observable(function (subscriber) { return scheduler.schedule(function () { return subscriber.complete(); }); });
}

/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
function throwError(error, scheduler) {
    if (!scheduler) {
        return new Observable(function (subscriber) { return subscriber.error(error); });
    }
    else {
        return new Observable(function (subscriber) { return scheduler.schedule(dispatch, 0, { error: error, subscriber: subscriber }); });
    }
}
function dispatch(_a) {
    var error = _a.error, subscriber = _a.subscriber;
    subscriber.error(error);
}

/** PURE_IMPORTS_START _observable_empty,_observable_of,_observable_throwError PURE_IMPORTS_END */
var Notification = /*@__PURE__*/ (function () {
    function Notification(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === 'N';
    }
    Notification.prototype.observe = function (observer) {
        switch (this.kind) {
            case 'N':
                return observer.next && observer.next(this.value);
            case 'E':
                return observer.error && observer.error(this.error);
            case 'C':
                return observer.complete && observer.complete();
        }
    };
    Notification.prototype.do = function (next, error, complete) {
        var kind = this.kind;
        switch (kind) {
            case 'N':
                return next && next(this.value);
            case 'E':
                return error && error(this.error);
            case 'C':
                return complete && complete();
        }
    };
    Notification.prototype.accept = function (nextOrObserver, error, complete) {
        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
            return this.observe(nextOrObserver);
        }
        else {
            return this.do(nextOrObserver, error, complete);
        }
    };
    Notification.prototype.toObservable = function () {
        var kind = this.kind;
        switch (kind) {
            case 'N':
                return of(this.value);
            case 'E':
                return throwError(this.error);
            case 'C':
                return empty$1();
        }
        throw new Error('unexpected notification kind value');
    };
    Notification.createNext = function (value) {
        if (typeof value !== 'undefined') {
            return new Notification('N', value);
        }
        return Notification.undefinedValueNotification;
    };
    Notification.createError = function (err) {
        return new Notification('E', undefined, err);
    };
    Notification.createComplete = function () {
        return Notification.completeNotification;
    };
    Notification.completeNotification = new Notification('C');
    Notification.undefinedValueNotification = new Notification('N', undefined);
    return Notification;
}());

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function distinctUntilChanged(compare, keySelector) {
    return function (source) { return source.lift(new DistinctUntilChangedOperator(compare, keySelector)); };
}
var DistinctUntilChangedOperator = /*@__PURE__*/ (function () {
    function DistinctUntilChangedOperator(compare, keySelector) {
        this.compare = compare;
        this.keySelector = keySelector;
    }
    DistinctUntilChangedOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
    };
    return DistinctUntilChangedOperator;
}());
var DistinctUntilChangedSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(DistinctUntilChangedSubscriber, _super);
    function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
        var _this = _super.call(this, destination) || this;
        _this.keySelector = keySelector;
        _this.hasKey = false;
        if (typeof compare === 'function') {
            _this.compare = compare;
        }
        return _this;
    }
    DistinctUntilChangedSubscriber.prototype.compare = function (x, y) {
        return x === y;
    };
    DistinctUntilChangedSubscriber.prototype._next = function (value) {
        var key;
        try {
            var keySelector = this.keySelector;
            key = keySelector ? keySelector(value) : value;
        }
        catch (err) {
            return this.destination.error(err);
        }
        var result = false;
        if (this.hasKey) {
            try {
                var compare = this.compare;
                result = compare(this.key, key);
            }
            catch (err) {
                return this.destination.error(err);
            }
        }
        else {
            this.hasKey = true;
        }
        if (!result) {
            this.key = key;
            this.destination.next(value);
        }
    };
    return DistinctUntilChangedSubscriber;
}(Subscriber));

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var ObjectUnsubscribedErrorImpl = /*@__PURE__*/ (function () {
    function ObjectUnsubscribedErrorImpl() {
        Error.call(this);
        this.message = 'object unsubscribed';
        this.name = 'ObjectUnsubscribedError';
        return this;
    }
    ObjectUnsubscribedErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    return ObjectUnsubscribedErrorImpl;
})();
var ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;

/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */
var SubjectSubscription = /*@__PURE__*/ (function (_super) {
    __extends(SubjectSubscription, _super);
    function SubjectSubscription(subject, subscriber) {
        var _this = _super.call(this) || this;
        _this.subject = subject;
        _this.subscriber = subscriber;
        _this.closed = false;
        return _this;
    }
    SubjectSubscription.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
        }
        var subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    };
    return SubjectSubscription;
}(Subscription));

/** PURE_IMPORTS_START tslib,_Observable,_Subscriber,_Subscription,_util_ObjectUnsubscribedError,_SubjectSubscription,_internal_symbol_rxSubscriber PURE_IMPORTS_END */
var SubjectSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(SubjectSubscriber, _super);
    function SubjectSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        return _this;
    }
    return SubjectSubscriber;
}(Subscriber));
var Subject = /*@__PURE__*/ (function (_super) {
    __extends(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.observers = [];
        _this.closed = false;
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype[rxSubscriber] = function () {
        return new SubjectSubscriber(this);
    };
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype.next = function (value) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].next(value);
            }
        }
    };
    Subject.prototype.error = function (err) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].error(err);
        }
        this.observers.length = 0;
    };
    Subject.prototype.complete = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].complete();
        }
        this.observers.length = 0;
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    };
    Subject.prototype._trySubscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        else {
            return _super.prototype._trySubscribe.call(this, subscriber);
        }
    };
    Subject.prototype._subscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        else if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription.EMPTY;
        }
        else if (this.isStopped) {
            subscriber.complete();
            return Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            return new SubjectSubscription(this, subscriber);
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable));
var AnonymousSubject = /*@__PURE__*/ (function (_super) {
    __extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var destination = this.destination;
        if (destination && destination.next) {
            destination.next(value);
        }
    };
    AnonymousSubject.prototype.error = function (err) {
        var destination = this.destination;
        if (destination && destination.error) {
            this.destination.error(err);
        }
    };
    AnonymousSubject.prototype.complete = function () {
        var destination = this.destination;
        if (destination && destination.complete) {
            this.destination.complete();
        }
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var source = this.source;
        if (source) {
            return this.source.subscribe(subscriber);
        }
        else {
            return Subscription.EMPTY;
        }
    };
    return AnonymousSubject;
}(Subject));

/** PURE_IMPORTS_START tslib,_Subscriber,_Notification PURE_IMPORTS_END */
var ObserveOnSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(ObserveOnSubscriber, _super);
    function ObserveOnSubscriber(destination, scheduler, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        var _this = _super.call(this, destination) || this;
        _this.scheduler = scheduler;
        _this.delay = delay;
        return _this;
    }
    ObserveOnSubscriber.dispatch = function (arg) {
        var notification = arg.notification, destination = arg.destination;
        notification.observe(destination);
        this.unsubscribe();
    };
    ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
        var destination = this.destination;
        destination.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
    };
    ObserveOnSubscriber.prototype._next = function (value) {
        this.scheduleMessage(Notification.createNext(value));
    };
    ObserveOnSubscriber.prototype._error = function (err) {
        this.scheduleMessage(Notification.createError(err));
        this.unsubscribe();
    };
    ObserveOnSubscriber.prototype._complete = function () {
        this.scheduleMessage(Notification.createComplete());
        this.unsubscribe();
    };
    return ObserveOnSubscriber;
}(Subscriber));
var ObserveOnMessage = /*@__PURE__*/ (function () {
    function ObserveOnMessage(notification, destination) {
        this.notification = notification;
        this.destination = destination;
    }
    return ObserveOnMessage;
}());

/** PURE_IMPORTS_START tslib,_AsyncAction PURE_IMPORTS_END */
var QueueAction = /*@__PURE__*/ (function (_super) {
    __extends(QueueAction, _super);
    function QueueAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    QueueAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay > 0) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    };
    QueueAction.prototype.execute = function (state, delay) {
        return (delay > 0 || this.closed) ?
            _super.prototype.execute.call(this, state, delay) :
            this._execute(state, delay);
    };
    QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        return scheduler.flush(this);
    };
    return QueueAction;
}(AsyncAction));

/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */
var QueueScheduler = /*@__PURE__*/ (function (_super) {
    __extends(QueueScheduler, _super);
    function QueueScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return QueueScheduler;
}(AsyncScheduler));

/** PURE_IMPORTS_START _QueueAction,_QueueScheduler PURE_IMPORTS_END */
var queueScheduler = /*@__PURE__*/ new QueueScheduler(QueueAction);
var queue = queueScheduler;

/** PURE_IMPORTS_START tslib,_Subject,_scheduler_queue,_Subscription,_operators_observeOn,_util_ObjectUnsubscribedError,_SubjectSubscription PURE_IMPORTS_END */
var ReplaySubject = /*@__PURE__*/ (function (_super) {
    __extends(ReplaySubject, _super);
    function ReplaySubject(bufferSize, windowTime, scheduler) {
        if (bufferSize === void 0) {
            bufferSize = Number.POSITIVE_INFINITY;
        }
        if (windowTime === void 0) {
            windowTime = Number.POSITIVE_INFINITY;
        }
        var _this = _super.call(this) || this;
        _this.scheduler = scheduler;
        _this._events = [];
        _this._infiniteTimeWindow = false;
        _this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
        _this._windowTime = windowTime < 1 ? 1 : windowTime;
        if (windowTime === Number.POSITIVE_INFINITY) {
            _this._infiniteTimeWindow = true;
            _this.next = _this.nextInfiniteTimeWindow;
        }
        else {
            _this.next = _this.nextTimeWindow;
        }
        return _this;
    }
    ReplaySubject.prototype.nextInfiniteTimeWindow = function (value) {
        if (!this.isStopped) {
            var _events = this._events;
            _events.push(value);
            if (_events.length > this._bufferSize) {
                _events.shift();
            }
        }
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype.nextTimeWindow = function (value) {
        if (!this.isStopped) {
            this._events.push(new ReplayEvent(this._getNow(), value));
            this._trimBufferThenGetEvents();
        }
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype._subscribe = function (subscriber) {
        var _infiniteTimeWindow = this._infiniteTimeWindow;
        var _events = _infiniteTimeWindow ? this._events : this._trimBufferThenGetEvents();
        var scheduler = this.scheduler;
        var len = _events.length;
        var subscription;
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        else if (this.isStopped || this.hasError) {
            subscription = Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            subscription = new SubjectSubscription(this, subscriber);
        }
        if (scheduler) {
            subscriber.add(subscriber = new ObserveOnSubscriber(subscriber, scheduler));
        }
        if (_infiniteTimeWindow) {
            for (var i = 0; i < len && !subscriber.closed; i++) {
                subscriber.next(_events[i]);
            }
        }
        else {
            for (var i = 0; i < len && !subscriber.closed; i++) {
                subscriber.next(_events[i].value);
            }
        }
        if (this.hasError) {
            subscriber.error(this.thrownError);
        }
        else if (this.isStopped) {
            subscriber.complete();
        }
        return subscription;
    };
    ReplaySubject.prototype._getNow = function () {
        return (this.scheduler || queue).now();
    };
    ReplaySubject.prototype._trimBufferThenGetEvents = function () {
        var now = this._getNow();
        var _bufferSize = this._bufferSize;
        var _windowTime = this._windowTime;
        var _events = this._events;
        var eventsCount = _events.length;
        var spliceCount = 0;
        while (spliceCount < eventsCount) {
            if ((now - _events[spliceCount].time) < _windowTime) {
                break;
            }
            spliceCount++;
        }
        if (eventsCount > _bufferSize) {
            spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
        }
        if (spliceCount > 0) {
            _events.splice(0, spliceCount);
        }
        return _events;
    };
    return ReplaySubject;
}(Subject));
var ReplayEvent = /*@__PURE__*/ (function () {
    function ReplayEvent(time, value) {
        this.time = time;
        this.value = value;
    }
    return ReplayEvent;
}());

/** PURE_IMPORTS_START _ReplaySubject PURE_IMPORTS_END */
function shareReplay(configOrBufferSize, windowTime, scheduler) {
    var config;
    if (configOrBufferSize && typeof configOrBufferSize === 'object') {
        config = configOrBufferSize;
    }
    else {
        config = {
            bufferSize: configOrBufferSize,
            windowTime: windowTime,
            refCount: false,
            scheduler: scheduler
        };
    }
    return function (source) { return source.lift(shareReplayOperator(config)); };
}
function shareReplayOperator(_a) {
    var _b = _a.bufferSize, bufferSize = _b === void 0 ? Number.POSITIVE_INFINITY : _b, _c = _a.windowTime, windowTime = _c === void 0 ? Number.POSITIVE_INFINITY : _c, useRefCount = _a.refCount, scheduler = _a.scheduler;
    var subject;
    var refCount = 0;
    var subscription;
    var hasError = false;
    var isComplete = false;
    return function shareReplayOperation(source) {
        refCount++;
        var innerSub;
        if (!subject || hasError) {
            hasError = false;
            subject = new ReplaySubject(bufferSize, windowTime, scheduler);
            innerSub = subject.subscribe(this);
            subscription = source.subscribe({
                next: function (value) { subject.next(value); },
                error: function (err) {
                    hasError = true;
                    subject.error(err);
                },
                complete: function () {
                    isComplete = true;
                    subscription = undefined;
                    subject.complete();
                },
            });
        }
        else {
            innerSub = subject.subscribe(this);
        }
        this.add(function () {
            refCount--;
            innerSub.unsubscribe();
            if (subscription && !isComplete && useRefCount && refCount === 0) {
                subscription.unsubscribe();
                subscription = undefined;
                subject = undefined;
            }
        });
    };
}

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function noop() { }

/** PURE_IMPORTS_START tslib,_Subscriber,_util_noop,_util_isFunction PURE_IMPORTS_END */
function tap(nextOrObserver, error, complete) {
    return function tapOperatorFunction(source) {
        return source.lift(new DoOperator(nextOrObserver, error, complete));
    };
}
var DoOperator = /*@__PURE__*/ (function () {
    function DoOperator(nextOrObserver, error, complete) {
        this.nextOrObserver = nextOrObserver;
        this.error = error;
        this.complete = complete;
    }
    DoOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new TapSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
    };
    return DoOperator;
}());
var TapSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(TapSubscriber, _super);
    function TapSubscriber(destination, observerOrNext, error, complete) {
        var _this = _super.call(this, destination) || this;
        _this._tapNext = noop;
        _this._tapError = noop;
        _this._tapComplete = noop;
        _this._tapError = error || noop;
        _this._tapComplete = complete || noop;
        if (isFunction(observerOrNext)) {
            _this._context = _this;
            _this._tapNext = observerOrNext;
        }
        else if (observerOrNext) {
            _this._context = observerOrNext;
            _this._tapNext = observerOrNext.next || noop;
            _this._tapError = observerOrNext.error || noop;
            _this._tapComplete = observerOrNext.complete || noop;
        }
        return _this;
    }
    TapSubscriber.prototype._next = function (value) {
        try {
            this._tapNext.call(this._context, value);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(value);
    };
    TapSubscriber.prototype._error = function (err) {
        try {
            this._tapError.call(this._context, err);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.error(err);
    };
    TapSubscriber.prototype._complete = function () {
        try {
            this._tapComplete.call(this._context);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        return this.destination.complete();
    };
    return TapSubscriber;
}(Subscriber));

function disposeNode(node) {
    if (node instanceof Mesh) {
        if (node.geometry) {
            node.geometry.dispose();
        }
        if (node.material) {
            const materials = !Array.isArray(node.material) ? [node.material] : node.material;
            materials.forEach((mtrl) => {
                mtrl.map && mtrl.map.dispose();
                mtrl.lightMap && mtrl.lightMap.dispose();
                mtrl.bumpMap && mtrl.bumpMap.dispose();
                mtrl.normalMap && mtrl.normalMap.dispose();
                mtrl.specularMap && mtrl.specularMap.dispose();
                mtrl.envMap && mtrl.envMap.dispose();
                mtrl.alphaMap && mtrl.alphaMap.dispose();
                mtrl.aoMap && mtrl.aoMap.dispose();
                mtrl.displacementMap && mtrl.displacementMap.dispose();
                mtrl.emissiveMap && mtrl.emissiveMap.dispose();
                mtrl.gradientMap && mtrl.gradientMap.dispose();
                mtrl.metalnessMap && mtrl.metalnessMap.dispose();
                mtrl.roughnessMap && mtrl.roughnessMap.dispose();
                mtrl.dispose(); // disposes any programs associated with the material
            });
        }
    }
} // disposeNode
function disposeSceneHierarchy(scene) {
    scene.children.forEach((childNode) => {
        disposeSceneHierarchy(childNode);
        disposeNode(childNode);
    });
}
// this will give the x/y coordinate in the normalized device coordinates, whose center is (0,0) and w-h is 2
// NW -> -1 / 1
// NE -> 1 / 1
// SW -> - 1 / -1
// SE -> 1 / -1
// let' suppose i have a (500, 500) viewport, i click on the center
// CENTER = > ( 250 / 500 * 2 - 1 = 0, - (250/500) * 2 + 1 = 0)
// SE (500/500 * 2 -1 ) = 1, ( - (500/500) * 2 + 1 = -1)
// SW (0 - 1) = -1, -(500 / 500 ) * 2 + 1 = -1)
function getThreeScreenCoordinate(size, clientX, clientY) {
    return new Vector2((clientX / size.width) * 2 - 1, -(clientY / size.height) * 2 + 1);
}
function getScreenCoordinate(size, point, camera) {
    point = point.clone();
    const vector = point.project(camera);
    // we are in NDC space
    vector.x = ((vector.x + 1) / 2) * size.width;
    vector.y = (-(vector.y - 1) / 2) * size.height;
    return vector;
}
function moveAndUnprojectPoint(size, point, camera, delta) {
    point = point.clone();
    if (delta) {
        point.x = point.x + delta.x < 0 ? point.x - delta.x : point.x + delta.x;
        point.y = point.y + delta.y < 0 ? point.y - delta.y : point.y + delta.y;
    }
    // go back in NDC space
    point.x = (point.x / size.width) * 2 - 1;
    point.y = -(point.y / size.height) * 2 + 1;
    // go back in scene coordinate
    const vector = point.unproject(camera);
    return vector;
}
class ObjectRegistry {
    constructor() {
        this.objectRegistry = {};
    }
    clear() {
        this.objectRegistry = {};
    }
    addToObjectRegisty(o) {
        this.objectRegistry[o.uuid] = o;
    }
    deleteObject(o) {
        if (!this.registryHasObject(o)) {
            console.warn('Object does not exits');
        }
        delete this.objectRegistry[o.uuid];
    }
    registryHasObject(o) {
        return !!this.objectRegistry[o.uuid];
    }
    getObjectFromRegistry(uuid) {
        if (!this.objectRegistry[uuid]) {
            console.warn('Non existent object', uuid);
        }
        return this.objectRegistry[uuid];
    }
}
function mapArrayToBooleanObject(array, value = true) {
    if (Array.isArray(array)) {
        return array.reduce((acc, id) => {
            acc[id] = value;
            return acc;
        }, {});
    }
    else {
        return array;
    }
}
/**
 * Takes an array of arrays and merges the inner arrays into a single array.
 * This is a scalable alternative to [].concat.apply([], arr)
 */
function mergeInnerArrays(arr) {
    const result = [];
    arr.forEach((p) => {
        if (Array.isArray(p)) {
            p.forEach((d) => result.push(d));
        }
        else {
            result.push(p);
        }
    });
    return result;
}

var TableSelectionStyle;
(function (TableSelectionStyle) {
    TableSelectionStyle["ENABLE_DISABLE"] = "enableDisable";
    TableSelectionStyle["SELECT"] = "select";
    TableSelectionStyle["MULTI_INPUTS_SELECT"] = "mis";
})(TableSelectionStyle || (TableSelectionStyle = {}));
const getDefaultState = () => ({
    disabledElements: {},
    enabledElements: {},
    detailedElement: null,
    hiddenElements: {},
    forwardOuterChange: true,
    lastAction: {},
});
function getPeriodicSelectionStore() {
    let state = getDefaultState();
    const state$ = new Subject$1();
    state$.next(state);
    let maxItemAllowed = 5; // Number.MAX_SAFE_INTEGER;
    const observable = !process.env.DEBUG && !("production" === 'test')
        ? state$.pipe(shareReplay(1))
        : state$.pipe(tap((s) => {
            /*console.log(s)*/
        }), shareReplay(1));
    let lastElementsToggled = '';
    const actions = {
        // only use it in test, instead, change the props of the context react element
        init: (initialState = getDefaultState()) => {
            // use object assign instead
            if (initialState.disabledElements)
                state.disabledElements = mapArrayToBooleanObject(initialState.disabledElements);
            if (initialState.enabledElements)
                state.enabledElements = mapArrayToBooleanObject(initialState.enabledElements);
            if (initialState.hiddenElements)
                state.hiddenElements = mapArrayToBooleanObject(initialState.hiddenElements);
            if (initialState.detailedElement)
                state.detailedElement = initialState.detailedElement;
            if (initialState.forwardOuterChange)
                state.forwardOuterChange = initialState.forwardOuterChange;
            state$.next(Object.assign({}, state));
        },
        selectionStyle: TableSelectionStyle.SELECT,
        // used when doing multi-inputs-selection
        currentElementIndex: 0,
        selectedElements: {},
        //
        setForwardChange: (fwdChange) => (state.forwardOuterChange = fwdChange),
        setEnabledElements: (enabledElements) => (state = Object.assign(Object.assign({}, state), { enabledElements })) && state$.next(state),
        setDisabledElements: (disabledElements) => (state = Object.assign(Object.assign({}, state), { disabledElements })) && state$.next(state),
        clear: () => state$.next(getDefaultState()),
        setDetailedElement: (el) => (state = Object.assign(Object.assign({}, state), { detailedElement: el })) && state$.next(state),
        setHiddenElements: (hiddenElements) => (state = Object.assign(Object.assign({}, state), { hiddenElements })) && state$.next(state),
        //TODO(chab) add check to prever unnecessary state mutation
        addEnabledElement: (enabledElement) => {
            state.lastAction = {};
            (state.enabledElements = Object.assign(Object.assign({}, state.enabledElements), { [enabledElement]: true })) &&
                state$.next(state);
        },
        toggleDisabledElement: (disabledElement) => {
            if (!state.disabledElements[disabledElement]) {
                state.disabledElements = Object.assign(Object.assign({}, state.disabledElements), { [disabledElement]: true });
            }
            else {
                const _s = Object.assign({}, state.disabledElements);
                delete _s[disabledElement];
                state.disabledElements = _s;
            }
            state$.next(Object.assign(Object.assign({}, state), { forwardOuterChange: actions.selectionStyle === TableSelectionStyle.ENABLE_DISABLE }));
        },
        addDisabledElement: (disabledElement) => (state.disabledElements = Object.assign(Object.assign({}, state.disabledElements), { [disabledElement]: true })) &&
            state$.next(state),
        removeEnabledElement: (enabledElement) => {
            state.lastAction = {};
            if (!state.enabledElements[enabledElement]) {
                // if element is already removed, we do not want to trigger a state change
                state$.next(state);
                return;
            }
            const _s = Object.assign({}, state.enabledElements);
            delete _s[enabledElement];
            (state.enabledElements = _s) && state$.next(state);
        },
        removeDisabledElement: (disabledElement) => {
            const _s = Object.assign({}, state.disabledElements);
            delete _s[disabledElement];
            (state.disabledElements = _s) && state$.next(state);
        },
        toggleEnabledElement: (enabledElement) => {
            // we always forward toggling
            state.lastAction = {};
            state.lastAction.element = enabledElement;
            if (!state.disabledElements[enabledElement]) {
                state.lastAction.type = 'select';
                if (!state.enabledElements[enabledElement]) {
                    if (actions.selectionStyle === TableSelectionStyle.MULTI_INPUTS_SELECT) {
                        if (actions.selectedElements.current[actions.currentElementIndex]) {
                            //TODO(call own method)
                            const _s = Object.assign({}, state.enabledElements);
                            delete _s[actions.selectedElements.current[actions.currentElementIndex]];
                            state.enabledElements = _s;
                        }
                    }
                    const _s = Object.assign({}, state.enabledElements);
                    if (Object.keys(state.enabledElements).length === maxItemAllowed) {
                        delete _s[lastElementsToggled];
                        _s[enabledElement] = true;
                        lastElementsToggled = enabledElement;
                        state.enabledElements = _s;
                        state$.next(Object.assign(Object.assign({}, state), { forwardOuterChange: true }));
                    }
                    else {
                        lastElementsToggled = enabledElement;
                        _s[enabledElement] = true;
                        (state.enabledElements = _s) && state$.next(Object.assign(Object.assign({}, state), { forwardOuterChange: true }));
                    }
                }
                else {
                    delete state.enabledElements[enabledElement];
                    state.lastAction.type = 'deselect';
                    (state.enabledElements = Object.assign({}, state.enabledElements)) &&
                        state$.next(Object.assign(Object.assign({}, state), { forwardOuterChange: true }));
                }
            }
        },
        setMaxSelectionLimit: (maxItem) => {
            maxItemAllowed = maxItem;
        },
    };
    return {
        observable,
        actions,
    };
}
const PeriodicSelectionContext = createContext({
    observable: {},
    actions: {},
});
/**
 *
 * Call this function inside a component. It will make the components aware of which elements are selected/disabled
 * Be careful, as this will trigger a rendering every time a component is selected/unselected
 *
 **/
function useElements(maxElementSelection = 10, onStateChange) {
    const [disabledElements, setDisabled] = useState({});
    const [enabledElements, setEnabled] = useState({});
    const [hiddenElements, setHiddenElements] = useState({});
    const [lastAction, setLastAction] = useState();
    const { observable, actions } = useContext(PeriodicSelectionContext);
    useEffect(() => {
        actions.setMaxSelectionLimit(maxElementSelection);
        // Update the view of the components that use it
        const subscription = observable.subscribe(({ enabledElements, disabledElements, hiddenElements, lastAction }) => {
            setDisabled(disabledElements);
            setEnabled(enabledElements);
            setHiddenElements(hiddenElements);
            setLastAction(lastAction);
        });
        // Triggers external callback that dash user will provide
        const enabledElementsSubscription = observable
            .pipe(
        //tap(a => console.log(a)),
        map(({ enabledElements, disabledElements, forwardOuterChange }) => ({
            enabledElements,
            disabledElements,
            forwardOuterChange,
        })), distinctUntilChanged((p, q) => {
            return (p.enabledElements === q.enabledElements && p.disabledElements === q.disabledElements);
        }))
            .subscribe(({ enabledElements, disabledElements, forwardOuterChange }) => {
            forwardOuterChange &&
                onStateChange &&
                onStateChange({
                    enabledElements: Object.keys(enabledElements),
                    disabledElements: Object.keys(disabledElements),
                });
        });
        // clean up subscription;
        return () => {
            subscription.unsubscribe();
            enabledElementsSubscription.unsubscribe();
        };
    }, []); // by passing an empty array, we tell React to only run this effect ONCE
    return { disabledElements, enabledElements, hiddenElements, lastAction, actions };
}
function useDetailedElement() {
    const [detailedElement, setDetailedElement] = useState('');
    const { observable } = useContext(PeriodicSelectionContext);
    //FIXME(chab) this is a hack for the tests, this situation would not happen in real life
    // No context defined, you need to manage detailed element by yourself
    if (!observable.subscribe) {
        return detailedElement;
    }
    useEffect(() => {
        const subscription = observable.subscribe(({ detailedElement }) => {
            setDetailedElement(detailedElement);
        });
        // clean up subscription;
        return () => subscription.unsubscribe();
    }, []); // by passing an empty array, we tell React to only run this effect ONCE
    return detailedElement;
}

//TODO(chab) have an abstraction to support grouping of elements ( = lantanid/actinoid)
const TABLE_V2 = [
    {
        name: 'Hydrogen',
        appearance: 'colorless gas',
        atomic_mass: 1.008,
        boil: 20.271,
        category: 'diatomic nonmetal',
        color: null,
        density: 0.08988,
        discovered_by: 'Henry Cavendish',
        melt: 13.99,
        molar_heat: 28.836,
        named_by: 'Antoine Lavoisier',
        number: 1,
        period: 1,
        phase: 'Gas',
        source: 'https://en.wikipedia.org/wiki/Hydrogen',
        spectral_img: 'https://en.wikipedia.org/wiki/File:Hydrogen_Spectra.jpg',
        summary: 'Hydrogen is a chemical element with chemical symbol H and atomic number 1. With an atomic weight of 1.00794 u, hydrogen is the lightest element on the periodic table. Its monatomic form (H) is the most abundant chemical substance in the Universe, constituting roughly 75% of all baryonic mass.',
        symbol: 'H',
        xpos: 1,
        ypos: 1,
        shells: [1],
        electron_configuration: '1s1',
        electron_affinity: 72.769,
        electronegativity_pauling: 2.2,
        ionization_energies: [1312.0]
    },
    {
        name: 'Helium',
        appearance: 'colorless gas, exhibiting a red-orange glow when placed in a high-voltage electric field',
        atomic_mass: 4.0026022,
        boil: 4.222,
        category: 'noble gas',
        color: null,
        density: 0.1786,
        discovered_by: 'Pierre Janssen',
        melt: 0.95,
        molar_heat: null,
        named_by: null,
        number: 2,
        period: 1,
        phase: 'Gas',
        source: 'https://en.wikipedia.org/wiki/Helium',
        spectral_img: 'https://en.wikipedia.org/wiki/File:Helium_spectrum.jpg',
        summary: 'Helium is a chemical element with symbol He and atomic number 2. It is a colorless, odorless, tasteless, non-toxic, inert, monatomic gas that heads the noble gas group in the periodic table. Its boiling and melting points are the lowest among all the elements.',
        symbol: 'He',
        xpos: 18,
        ypos: 1,
        shells: [2],
        electron_configuration: '1s2',
        electron_affinity: -48,
        electronegativity_pauling: null,
        ionization_energies: [2372.3, 5250.5]
    },
    {
        name: 'Lithium',
        appearance: 'silvery-white',
        atomic_mass: 6.94,
        boil: 1603,
        category: 'alkali metal',
        color: null,
        density: 0.534,
        discovered_by: 'Johan August Arfwedson',
        melt: 453.65,
        molar_heat: 24.86,
        named_by: null,
        number: 3,
        period: 2,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Lithium',
        spectral_img: null,
        summary: 'Lithium (from Greek:\u03bb\u03af\u03b8\u03bf\u03c2 lithos, "stone") is a chemical element with the symbol Li and atomic number 3. It is a soft, silver-white metal belonging to the alkali metal group of chemical elements. Under standard conditions it is the lightest metal and the least dense solid element.',
        symbol: 'Li',
        xpos: 1,
        ypos: 2,
        shells: [2, 1],
        electron_configuration: '1s2 2s1',
        electron_affinity: 59.6326,
        electronegativity_pauling: 0.98,
        ionization_energies: [520.2, 7298.1, 11815.0]
    },
    {
        name: 'Beryllium',
        appearance: 'white-gray metallic',
        atomic_mass: 9.01218315,
        boil: 2742,
        category: 'alkaline earth metal',
        color: null,
        density: 1.85,
        discovered_by: 'Louis Nicolas Vauquelin',
        melt: 1560,
        molar_heat: 16.443,
        named_by: null,
        number: 4,
        period: 2,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Beryllium',
        spectral_img: null,
        summary: 'Beryllium is a chemical element with symbol Be and atomic number 4. It is created through stellar nucleosynthesis and is a relatively rare element in the universe. It is a divalent element which occurs naturally only in combination with other elements in minerals.',
        symbol: 'Be',
        xpos: 2,
        ypos: 2,
        shells: [2, 2],
        electron_configuration: '1s2 2s2',
        electron_affinity: -48,
        electronegativity_pauling: 1.57,
        ionization_energies: [899.5, 1757.1, 14848.7, 21006.6]
    },
    {
        name: 'Boron',
        appearance: 'black-brown',
        atomic_mass: 10.81,
        boil: 4200,
        category: 'metalloid',
        color: null,
        density: 2.08,
        discovered_by: 'Joseph Louis Gay-Lussac',
        melt: 2349,
        molar_heat: 11.087,
        named_by: null,
        number: 5,
        period: 2,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Boron',
        spectral_img: null,
        summary: "Boron is a metalloid chemical element with symbol B and atomic number 5. Produced entirely by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a low-abundance element in both the Solar system and the Earth's crust. Boron is concentrated on Earth by the water-solubility of its more common naturally occurring compounds, the borate minerals.",
        symbol: 'B',
        xpos: 13,
        ypos: 2,
        shells: [2, 3],
        electron_configuration: '1s2 2s2 2p1',
        electron_affinity: 26.989,
        electronegativity_pauling: 2.04,
        ionization_energies: [800.6, 2427.1, 3659.7, 25025.8, 32826.7]
    },
    {
        name: 'Carbon',
        appearance: null,
        atomic_mass: 12.011,
        boil: null,
        category: 'polyatomic nonmetal',
        color: null,
        density: 1.821,
        discovered_by: 'Ancient Egypt',
        melt: null,
        molar_heat: 8.517,
        named_by: null,
        number: 6,
        period: 2,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Carbon',
        spectral_img: 'https://en.wikipedia.org/wiki/File:Carbon_Spectra.jpg',
        summary: 'Carbon (from Latin:carbo "coal") is a chemical element with symbol C and atomic number 6. On the periodic table, it is the first (row 2) of six elements in column (group) 14, which have in common the composition of their outer electron shell. It is nonmetallic and tetravalent\u2014making four electrons available to form covalent chemical bonds.',
        symbol: 'C',
        xpos: 14,
        ypos: 2,
        shells: [2, 4],
        electron_configuration: '1s2 2s2 2p2',
        electron_affinity: 121.7763,
        electronegativity_pauling: 2.55,
        ionization_energies: [1086.5, 2352.6, 4620.5, 6222.7, 37831, 47277.0]
    },
    {
        name: 'Nitrogen',
        appearance: 'colorless gas, liquid or solid',
        atomic_mass: 14.007,
        boil: 77.355,
        category: 'diatomic nonmetal',
        color: null,
        density: 1.251,
        discovered_by: 'Daniel Rutherford',
        melt: 63.15,
        molar_heat: null,
        named_by: 'Jean-Antoine Chaptal',
        number: 7,
        period: 2,
        phase: 'Gas',
        source: 'https://en.wikipedia.org/wiki/Nitrogen',
        spectral_img: 'https://en.wikipedia.org/wiki/File:Nitrogen_Spectra.jpg',
        summary: 'Nitrogen is a chemical element with symbol N and atomic number 7. It is the lightest pnictogen and at room temperature, it is a transparent, odorless diatomic gas. Nitrogen is a common element in the universe, estimated at about seventh in total abundance in the Milky Way and the Solar System.',
        symbol: 'N',
        xpos: 15,
        ypos: 2,
        shells: [2, 5],
        electron_configuration: '1s2 2s2 2p3',
        electron_affinity: -6.8,
        electronegativity_pauling: 3.04,
        ionization_energies: [1402.3, 2856, 4578.1, 7475.0, 9444.9, 53266.6, 64360]
    },
    {
        name: 'Oxygen',
        appearance: null,
        atomic_mass: 15.999,
        boil: 90.188,
        category: 'diatomic nonmetal',
        color: null,
        density: 1.429,
        discovered_by: 'Carl Wilhelm Scheele',
        melt: 54.36,
        molar_heat: null,
        named_by: 'Antoine Lavoisier',
        number: 8,
        period: 2,
        phase: 'Gas',
        source: 'https://en.wikipedia.org/wiki/Oxygen',
        spectral_img: 'https://en.wikipedia.org/wiki/File:Oxygen_spectre.jpg',
        summary: 'Oxygen is a chemical element with symbol O and atomic number 8. It is a member of the chalcogen group on the periodic table and is a highly reactive nonmetal and oxidizing agent that readily forms compounds (notably oxides) with most elements. By mass, oxygen is the third-most abundant element in the universe, after hydrogen and helium.',
        symbol: 'O',
        xpos: 16,
        ypos: 2,
        shells: [2, 6],
        electron_configuration: '1s2 2s2 2p4',
        electron_affinity: 140.976,
        electronegativity_pauling: 3.44,
        ionization_energies: [1313.9, 3388.3, 5300.5, 7469.2, 10989.5, 13326.5, 71330, 84078.0]
    },
    {
        name: 'Fluorine',
        appearance: null,
        atomic_mass: 18.9984031636,
        boil: 85.03,
        category: 'diatomic nonmetal',
        color: null,
        density: 1.696,
        discovered_by: 'Andr\u00e9-Marie Amp\u00e8re',
        melt: 53.48,
        molar_heat: null,
        named_by: 'Humphry Davy',
        number: 9,
        period: 2,
        phase: 'Gas',
        source: 'https://en.wikipedia.org/wiki/Fluorine',
        spectral_img: null,
        summary: 'Fluorine is a chemical element with symbol F and atomic number 9. It is the lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard conditions. As the most electronegative element, it is extremely reactive:almost all other elements, including some noble gases, form compounds with fluorine.',
        symbol: 'F',
        xpos: 17,
        ypos: 2,
        shells: [2, 7],
        electron_configuration: '1s2 2s2 2p5',
        electron_affinity: 328.1649,
        electronegativity_pauling: 3.98,
        ionization_energies: [
            1681.0,
            3374.2,
            6050.4,
            8407.7,
            11022.7,
            15164.1,
            17868,
            92038.1,
            106434.3
        ]
    },
    {
        name: 'Neon',
        appearance: 'colorless gas exhibiting an orange-red glow when placed in a high voltage electric field',
        atomic_mass: 20.17976,
        boil: 27.104,
        category: 'noble gas',
        color: null,
        density: 0.9002,
        discovered_by: 'Morris Travers',
        melt: 24.56,
        molar_heat: null,
        named_by: null,
        number: 10,
        period: 2,
        phase: 'Gas',
        source: 'https://en.wikipedia.org/wiki/Neon',
        spectral_img: 'https://en.wikipedia.org/wiki/File:Neon_spectra.jpg',
        summary: 'Neon is a chemical element with symbol Ne and atomic number 10. It is in group 18 (noble gases) of the periodic table. Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about two-thirds the density of air.',
        symbol: 'Ne',
        xpos: 18,
        ypos: 2,
        shells: [2, 8],
        electron_configuration: '1s2 2s2 2p6',
        electron_affinity: -116,
        electronegativity_pauling: null,
        ionization_energies: [
            2080.7,
            3952.3,
            6122,
            9371,
            12177,
            15238,
            19999.0,
            23069.5,
            115379.5,
            131432
        ]
    },
    {
        name: 'Sodium',
        appearance: 'silvery white metallic',
        atomic_mass: 22.989769282,
        boil: 1156.09,
        category: 'alkali metal',
        color: null,
        density: 0.968,
        discovered_by: 'Humphry Davy',
        melt: 370.944,
        molar_heat: 28.23,
        named_by: null,
        number: 11,
        period: 3,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Sodium',
        spectral_img: 'https://en.wikipedia.org/wiki/File:Sodium_Spectra.jpg',
        summary: 'Sodium /\u02c8so\u028adi\u0259m/ is a chemical element with symbol Na (from Ancient Greek \u039d\u03ac\u03c4\u03c1\u03b9\u03bf) and atomic number 11. It is a soft, silver-white, highly reactive metal. In the Periodic table it is in column 1 (alkali metals), and shares with the other six elements in that column that it has a single electron in its outer shell, which it readily donates, creating a positively charged atom - a cation.',
        symbol: 'Na',
        xpos: 1,
        ypos: 3,
        shells: [2, 8, 1],
        electron_configuration: '1s2 2s2 2p6 3s1',
        electron_affinity: 52.867,
        electronegativity_pauling: 0.93,
        ionization_energies: [
            495.8,
            4562,
            6910.3,
            9543,
            13354,
            16613,
            20117,
            25496,
            28932,
            141362,
            159076
        ]
    },
    {
        name: 'Magnesium',
        appearance: 'shiny grey solid',
        atomic_mass: 24.305,
        boil: 1363,
        category: 'alkaline earth metal',
        color: null,
        density: 1.738,
        discovered_by: 'Joseph Black',
        melt: 923,
        molar_heat: 24.869,
        named_by: null,
        number: 12,
        period: 3,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Magnesium',
        spectral_img: 'https://en.wikipedia.org/wiki/File:Magnesium_Spectra.jpg',
        summary: 'Magnesium is a chemical element with symbol Mg and atomic number 12. It is a shiny gray solid which bears a close physical resemblance to the other five elements in the second column (Group 2, or alkaline earth metals) of the periodic table:they each have the same electron configuration in their outer electron shell producing a similar crystal structure. Magnesium is the ninth most abundant element in the universe.',
        symbol: 'Mg',
        xpos: 2,
        ypos: 3,
        shells: [2, 8, 2],
        electron_configuration: '1s2 2s2 2p6 3s2',
        electron_affinity: -40,
        electronegativity_pauling: 1.31,
        ionization_energies: [
            737.7,
            1450.7,
            7732.7,
            10542.5,
            13630,
            18020,
            21711,
            25661,
            31653,
            35458,
            169988,
            189368
        ]
    },
    {
        name: 'Aluminium',
        appearance: 'silvery gray metallic',
        atomic_mass: 26.98153857,
        boil: 2743,
        category: 'post-transition metal',
        color: null,
        density: 2.7,
        discovered_by: null,
        melt: 933.47,
        molar_heat: 24.2,
        named_by: 'Humphry Davy',
        number: 13,
        period: 3,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Aluminium',
        spectral_img: null,
        summary: "Aluminium (or aluminum; see different endings) is a chemical element in the boron group with symbol Al and atomic number 13. It is a silvery-white, soft, nonmagnetic, ductile metal. Aluminium is the third most abundant element (after oxygen and silicon), and the most abundant metal, in the Earth's crust.",
        symbol: 'Al',
        xpos: 13,
        ypos: 3,
        shells: [2, 8, 3],
        electron_configuration: '1s2 2s2 2p6 3s2 3p1',
        electron_affinity: 41.762,
        electronegativity_pauling: 1.61,
        ionization_energies: [
            577.5,
            1816.7,
            2744.8,
            11577,
            14842,
            18379,
            23326,
            27465,
            31853,
            38473,
            42647,
            201266,
            222316
        ]
    },
    {
        name: 'Silicon',
        appearance: 'crystalline, reflective with bluish-tinged faces',
        atomic_mass: 28.085,
        boil: 3538,
        category: 'metalloid',
        color: null,
        density: 2.329,
        discovered_by: 'J\u00f6ns Jacob Berzelius',
        melt: 1687,
        molar_heat: 19.789,
        named_by: 'Thomas Thomson (chemist)',
        number: 14,
        period: 3,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Silicon',
        spectral_img: 'https://en.wikipedia.org/wiki/File:Silicon_Spectra.jpg',
        summary: "Silicon is a chemical element with symbol Si and atomic number 14. It is a tetravalent metalloid, more reactive than germanium, the metalloid directly below it in the table. Controversy about silicon's character dates to its discovery.",
        symbol: 'Si',
        xpos: 14,
        ypos: 3,
        shells: [2, 8, 4],
        electron_configuration: '1s2 2s2 2p6 3s2 3p2',
        electron_affinity: 134.0684,
        electronegativity_pauling: 1.9,
        ionization_energies: [
            786.5,
            1577.1,
            3231.6,
            4355.5,
            16091,
            19805,
            23780,
            29287,
            33878,
            38726,
            45962,
            50502,
            235196,
            257923
        ]
    },
    {
        name: 'Phosphorus',
        appearance: 'colourless, waxy white, yellow, scarlet, red, violet, black',
        atomic_mass: 30.9737619985,
        boil: null,
        category: 'polyatomic nonmetal',
        color: null,
        density: 1.823,
        discovered_by: 'Hennig Brand',
        melt: null,
        molar_heat: 23.824,
        named_by: null,
        number: 15,
        period: 3,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Phosphorus',
        spectral_img: null,
        summary: 'Phosphorus is a chemical element with symbol P and atomic number 15. As an element, phosphorus exists in two major forms\u2014white phosphorus and red phosphorus\u2014but due to its high reactivity, phosphorus is never found as a free element on Earth. Instead phosphorus-containing minerals are almost always present in their maximally oxidised state, as inorganic phosphate rocks.',
        symbol: 'P',
        xpos: 15,
        ypos: 3,
        shells: [2, 8, 5],
        electron_configuration: '1s2 2s2 2p6 3s2 3p3',
        electron_affinity: 72.037,
        electronegativity_pauling: 2.19,
        ionization_energies: [
            1011.8,
            1907,
            2914.1,
            4963.6,
            6273.9,
            21267,
            25431,
            29872,
            35905,
            40950,
            46261,
            54110,
            59024,
            271791,
            296195
        ]
    },
    {
        name: 'Sulfur',
        appearance: 'lemon yellow sintered microcrystals',
        atomic_mass: 32.06,
        boil: 717.8,
        category: 'polyatomic nonmetal',
        color: null,
        density: 2.07,
        discovered_by: 'Ancient china',
        melt: 388.36,
        molar_heat: 22.75,
        named_by: null,
        number: 16,
        period: 3,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Sulfur',
        spectral_img: 'https://en.wikipedia.org/wiki/File:Sulfur_Spectrum.jpg',
        summary: 'Sulfur or sulphur (see spelling differences) is a chemical element with symbol S and atomic number 16. It is an abundant, multivalent non-metal. Under normal conditions, sulfur atoms form cyclic octatomic molecules with chemical formula S8.',
        symbol: 'S',
        xpos: 16,
        ypos: 3,
        shells: [2, 8, 6],
        electron_configuration: '1s2 2s2 2p6 3s2 3p4',
        electron_affinity: 200.4101,
        electronegativity_pauling: 2.58,
        ionization_energies: [
            999.6,
            2252,
            3357,
            4556,
            7004.3,
            8495.8,
            27107,
            31719,
            36621,
            43177,
            48710,
            54460,
            62930,
            68216,
            311048,
            337138
        ]
    },
    {
        name: 'Chlorine',
        appearance: 'pale yellow-green gas',
        atomic_mass: 35.45,
        boil: 239.11,
        category: 'diatomic nonmetal',
        color: null,
        density: 3.2,
        discovered_by: 'Carl Wilhelm Scheele',
        melt: 171.6,
        molar_heat: null,
        named_by: null,
        number: 17,
        period: 3,
        phase: 'Gas',
        source: 'https://en.wikipedia.org/wiki/Chlorine',
        spectral_img: 'https://en.wikipedia.org/wiki/File:Chlorine_spectrum_visible.png',
        summary: 'Chlorine is a chemical element with symbol Cl and atomic number 17. It also has a relative atomic mass of 35.5. Chlorine is in the halogen group (17) and is the second lightest halogen following fluorine.',
        symbol: 'Cl',
        xpos: 17,
        ypos: 3,
        shells: [2, 8, 7],
        electron_configuration: '1s2 2s2 2p6 3s2 3p5',
        electron_affinity: 348.575,
        electronegativity_pauling: 3.16,
        ionization_energies: [
            1251.2,
            2298,
            3822,
            5158.6,
            6542,
            9362,
            11018,
            33604,
            38600,
            43961,
            51068,
            57119,
            63363,
            72341,
            78095,
            352994,
            380760
        ]
    },
    {
        name: 'Argon',
        appearance: 'colorless gas exhibiting a lilac/violet glow when placed in a high voltage electric field',
        atomic_mass: 39.9481,
        boil: 87.302,
        category: 'noble gas',
        color: null,
        density: 1.784,
        discovered_by: 'Lord Rayleigh',
        melt: 83.81,
        molar_heat: null,
        named_by: null,
        number: 18,
        period: 3,
        phase: 'Gas',
        source: 'https://en.wikipedia.org/wiki/Argon',
        spectral_img: 'https://en.wikipedia.org/wiki/File:Argon_Spectrum.png',
        summary: "Argon is a chemical element with symbol Ar and atomic number 18. It is in group 18 of the periodic table and is a noble gas. Argon is the third most common gas in the Earth's atmosphere, at 0.934% (9,340 ppmv), making it over twice as abundant as the next most common atmospheric gas, water vapor (which averages about 4000 ppmv, but varies greatly), and 23 times as abundant as the next most common non-condensing atmospheric gas, carbon dioxide (400 ppmv), and more than 500 times as abundant as the next most common noble gas, neon (18 ppmv).",
        symbol: 'Ar',
        xpos: 18,
        ypos: 3,
        shells: [2, 8, 8],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6',
        electron_affinity: -96,
        electronegativity_pauling: null,
        ionization_energies: [
            1520.6,
            2665.8,
            3931,
            5771,
            7238,
            8781,
            11995,
            13842,
            40760,
            46186,
            52002,
            59653,
            66199,
            72918,
            82473,
            88576,
            397605,
            427066
        ]
    },
    {
        name: 'Potassium',
        appearance: 'silvery gray',
        atomic_mass: 39.09831,
        boil: 1032,
        category: 'alkali metal',
        color: null,
        density: 0.862,
        discovered_by: 'Humphry Davy',
        melt: 336.7,
        molar_heat: 29.6,
        named_by: null,
        number: 19,
        period: 4,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Potassium',
        spectral_img: 'https://en.wikipedia.org/wiki/File:Potassium_Spectrum.jpg',
        summary: 'Potassium is a chemical element with symbol K (derived from Neo-Latin, kalium) and atomic number 19. It was first isolated from potash, the ashes of plants, from which its name is derived. In the Periodic table, potassium is one of seven elements in column (group) 1 (alkali metals):they all have a single valence electron in their outer electron shell, which they readily give up to create an atom with a positive charge - a cation, and combine with anions to form salts.',
        symbol: 'K',
        xpos: 1,
        ypos: 4,
        shells: [2, 8, 8, 1],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 4s1',
        electron_affinity: 48.383,
        electronegativity_pauling: 0.82,
        ionization_energies: [
            418.8,
            3052,
            4420,
            5877,
            7975,
            9590,
            11343,
            14944,
            16963.7,
            48610,
            54490,
            60730,
            68950,
            75900,
            83080,
            93400,
            99710,
            444880,
            476063
        ]
    },
    {
        name: 'Calcium',
        appearance: null,
        atomic_mass: 40.0784,
        boil: 1757,
        category: 'alkaline earth metal',
        color: null,
        density: 1.55,
        discovered_by: 'Humphry Davy',
        melt: 1115,
        molar_heat: 25.929,
        named_by: null,
        number: 20,
        period: 4,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Calcium',
        spectral_img: 'https://en.wikipedia.org/wiki/File:Calcium_Spectrum.png',
        summary: "Calcium is a chemical element with symbol Ca and atomic number 20. Calcium is a soft gray alkaline earth metal, fifth-most-abundant element by mass in the Earth's crust. The ion Ca2+ is also the fifth-most-abundant dissolved ion in seawater by both molarity and mass, after sodium, chloride, magnesium, and sulfate.",
        symbol: 'Ca',
        xpos: 2,
        ypos: 4,
        shells: [2, 8, 8, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 4s2',
        electron_affinity: 2.37,
        electronegativity_pauling: 1.0,
        ionization_energies: [
            589.8,
            1145.4,
            4912.4,
            6491,
            8153,
            10496,
            12270,
            14206,
            18191,
            20385,
            57110,
            63410,
            70110,
            78890,
            86310,
            94000,
            104900,
            111711,
            494850,
            527762
        ]
    },
    {
        name: 'Scandium',
        appearance: 'silvery white',
        atomic_mass: 44.9559085,
        boil: 3109,
        category: 'transition metal',
        color: null,
        density: 2.985,
        discovered_by: 'Lars Fredrik Nilson',
        melt: 1814,
        molar_heat: 25.52,
        named_by: null,
        number: 21,
        period: 4,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Scandium',
        spectral_img: null,
        summary: 'Scandium is a chemical element with symbol Sc and atomic number 21. A silvery-white metallic d-block element, it has historically been sometimes classified as a rare earth element, together with yttrium and the lanthanoids. It was discovered in 1879 by spectral analysis of the minerals euxenite and gadolinite from Scandinavia.',
        symbol: 'Sc',
        xpos: 3,
        ypos: 4,
        shells: [2, 8, 9, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d1 4s2',
        electron_affinity: 18,
        electronegativity_pauling: 1.36,
        ionization_energies: [
            633.1,
            1235.0,
            2388.6,
            7090.6,
            8843,
            10679,
            13310,
            15250,
            17370,
            21726,
            24102,
            66320,
            73010,
            80160,
            89490,
            97400,
            105600,
            117000,
            124270,
            547530,
            582163
        ]
    },
    {
        name: 'Titanium',
        appearance: 'silvery grey-white metallic',
        atomic_mass: 47.8671,
        boil: 3560,
        category: 'transition metal',
        color: null,
        density: 4.506,
        discovered_by: 'William Gregor',
        melt: 1941,
        molar_heat: 25.06,
        named_by: 'Martin Heinrich Klaproth',
        number: 22,
        period: 4,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Titanium',
        spectral_img: null,
        summary: 'Titanium is a chemical element with symbol Ti and atomic number 22. It is a lustrous transition metal with a silver color, low density and high strength. It is highly resistant to corrosion in sea water, aqua regia and chlorine.',
        symbol: 'Ti',
        xpos: 4,
        ypos: 4,
        shells: [2, 8, 10, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d2 4s2',
        electron_affinity: 7.289,
        electronegativity_pauling: 1.54,
        ionization_energies: [
            658.8,
            1309.8,
            2652.5,
            4174.6,
            9581,
            11533,
            13590,
            16440,
            18530,
            20833,
            25575,
            28125,
            76015,
            83280,
            90880,
            100700,
            109100,
            117800,
            129900,
            137530,
            602930,
            639294
        ]
    },
    {
        name: 'Vanadium',
        appearance: 'blue-silver-grey metal',
        atomic_mass: 50.94151,
        boil: 3680,
        category: 'transition metal',
        color: null,
        density: 6.0,
        discovered_by: 'Andr\u00e9s Manuel del R\u00edo',
        melt: 2183,
        molar_heat: 24.89,
        named_by: 'Isotopes of vanadium',
        number: 23,
        period: 4,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Vanadium',
        spectral_img: null,
        summary: 'Vanadium is a chemical element with symbol V and atomic number 23. It is a hard, silvery grey, ductile and malleable transition metal. The element is found only in chemically combined form in nature, but once isolated artificially, the formation of an oxide layer stabilizes the free metal somewhat against further oxidation.',
        symbol: 'V',
        xpos: 5,
        ypos: 4,
        shells: [2, 8, 11, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d3 4s2',
        electron_affinity: 50.911,
        electronegativity_pauling: 1.63,
        ionization_energies: [
            650.9,
            1414,
            2830,
            4507,
            6298.7,
            12363,
            14530,
            16730,
            19860,
            22240,
            24670,
            29730,
            32446,
            86450,
            94170,
            102300,
            112700,
            121600,
            130700,
            143400,
            151440,
            661050,
            699144
        ]
    },
    {
        name: 'Chromium',
        appearance: 'silvery metallic',
        atomic_mass: 51.99616,
        boil: 2944,
        category: 'transition metal',
        color: null,
        density: 7.19,
        discovered_by: 'Louis Nicolas Vauquelin',
        melt: 2180,
        molar_heat: 23.35,
        named_by: null,
        number: 24,
        period: 4,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Chromium',
        spectral_img: null,
        summary: 'Chromium is a chemical element with symbol Cr and atomic number 24. It is the first element in Group 6. It is a steely-gray, lustrous, hard and brittle metal which takes a high polish, resists tarnishing, and has a high melting point.',
        symbol: 'Cr',
        xpos: 6,
        ypos: 4,
        shells: [2, 8, 13, 1],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d5 4s1',
        electron_affinity: 65.21,
        electronegativity_pauling: 1.66,
        ionization_energies: [
            652.9,
            1590.6,
            2987,
            4743,
            6702,
            8744.9,
            15455,
            17820,
            20190,
            23580,
            26130,
            28750,
            34230,
            37066,
            97510,
            105800,
            114300,
            125300,
            134700,
            144300,
            157700,
            166090,
            721870,
            761733
        ]
    },
    {
        name: 'Manganese',
        appearance: 'silvery metallic',
        atomic_mass: 54.9380443,
        boil: 2334,
        category: 'transition metal',
        color: null,
        density: 7.21,
        discovered_by: 'Torbern Olof Bergman',
        melt: 1519,
        molar_heat: 26.32,
        named_by: null,
        number: 25,
        period: 4,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Manganese',
        spectral_img: null,
        summary: 'Manganese is a chemical element with symbol Mn and atomic number 25. It is not found as a free element in nature; it is often found in combination with iron, and in many minerals. Manganese is a metal with important industrial metal alloy uses, particularly in stainless steels.',
        symbol: 'Mn',
        xpos: 7,
        ypos: 4,
        shells: [2, 8, 13, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d5 4s2',
        electron_affinity: -50,
        electronegativity_pauling: 1.55,
        ionization_energies: [
            717.3,
            1509.0,
            3248,
            4940,
            6990,
            9220,
            11500,
            18770,
            21400,
            23960,
            27590,
            30330,
            33150,
            38880,
            41987,
            109480,
            118100,
            127100,
            138600,
            148500,
            158600,
            172500,
            181380,
            785450,
            827067
        ]
    },
    {
        name: 'Iron',
        appearance: 'lustrous metallic with a grayish tinge',
        atomic_mass: 55.8452,
        boil: 3134,
        category: 'transition metal',
        color: null,
        density: 7.874,
        discovered_by: '5000 BC',
        melt: 1811,
        molar_heat: 25.1,
        named_by: null,
        number: 26,
        period: 4,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Iron',
        spectral_img: 'https://en.wikipedia.org/wiki/File:Iron_Spectrum.jpg',
        summary: "Iron is a chemical element with symbol Fe (from Latin:ferrum) and atomic number 26. It is a metal in the first transition series. It is by mass the most common element on Earth, forming much of Earth's outer and inner core.",
        symbol: 'Fe',
        xpos: 8,
        ypos: 4,
        shells: [2, 8, 14, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d6 4s2',
        electron_affinity: 14.785,
        electronegativity_pauling: 1.83,
        ionization_energies: [
            762.5,
            1561.9,
            2957,
            5290,
            7240,
            9560,
            12060,
            14580,
            22540,
            25290,
            28000,
            31920,
            34830,
            37840,
            44100,
            47206,
            122200,
            131000,
            140500,
            152600,
            163000,
            173600,
            188100,
            195200,
            851800,
            895161
        ]
    },
    {
        name: 'Cobalt',
        appearance: 'hard lustrous gray metal',
        atomic_mass: 58.9331944,
        boil: 3200,
        category: 'transition metal',
        color: 'metallic gray',
        density: 8.9,
        discovered_by: 'Georg Brandt',
        melt: 1768,
        molar_heat: 24.81,
        named_by: null,
        number: 27,
        period: 4,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Cobalt',
        spectral_img: null,
        summary: "Cobalt is a chemical element with symbol Co and atomic number 27. Like nickel, cobalt in the Earth's crust is found only in chemically combined form, save for small deposits found in alloys of natural meteoric iron. The free element, produced by reductive smelting, is a hard, lustrous, silver-gray metal.",
        symbol: 'Co',
        xpos: 9,
        ypos: 4,
        shells: [2, 8, 15, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d7 4s2',
        electron_affinity: 63.898,
        electronegativity_pauling: 1.88,
        ionization_energies: [
            760.4,
            1648,
            3232,
            4950,
            7670,
            9840,
            12440,
            15230,
            17959,
            26570,
            29400,
            32400,
            36600,
            39700,
            42800,
            49396,
            52737,
            134810,
            145170,
            154700,
            167400,
            178100,
            189300,
            204500,
            214100,
            920870,
            966023
        ]
    },
    {
        name: 'Nickel',
        appearance: 'lustrous, metallic, and silver with a gold tinge',
        atomic_mass: 58.69344,
        boil: 3003,
        category: 'transition metal',
        color: null,
        density: 8.908,
        discovered_by: 'Axel Fredrik Cronstedt',
        melt: 1728,
        molar_heat: 26.07,
        named_by: null,
        number: 28,
        period: 4,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Nickel',
        spectral_img: null,
        summary: 'Nickel is a chemical element with symbol Ni and atomic number 28. It is a silvery-white lustrous metal with a slight golden tinge. Nickel belongs to the transition metals and is hard and ductile.',
        symbol: 'Ni',
        xpos: 10,
        ypos: 4,
        shells: [2, 8, 16, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d8 4s2',
        electron_affinity: 111.65,
        electronegativity_pauling: 1.91,
        ionization_energies: [
            737.1,
            1753.0,
            3395,
            5300,
            7339,
            10400,
            12800,
            15600,
            18600,
            21670,
            30970,
            34000,
            37100,
            41500,
            44800,
            48100,
            55101,
            58570,
            148700,
            159000,
            169400,
            182700,
            194000,
            205600,
            221400,
            231490,
            992718,
            1039668
        ]
    },
    {
        name: 'Copper',
        appearance: 'red-orange metallic luster',
        atomic_mass: 63.5463,
        boil: 2835,
        category: 'transition metal',
        color: null,
        density: 8.96,
        discovered_by: 'Middle East',
        melt: 1357.77,
        molar_heat: 24.44,
        named_by: null,
        number: 29,
        period: 4,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Copper',
        spectral_img: null,
        summary: 'Copper is a chemical element with symbol Cu (from Latin:cuprum) and atomic number 29. It is a soft, malleable and ductile metal with very high thermal and electrical conductivity. A freshly exposed surface of pure copper has a reddish-orange color.',
        symbol: 'Cu',
        xpos: 11,
        ypos: 4,
        shells: [2, 8, 18, 1],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s1',
        electron_affinity: 119.235,
        electronegativity_pauling: 1.9,
        ionization_energies: [
            745.5,
            1957.9,
            3555,
            5536,
            7700,
            9900,
            13400,
            16000,
            19200,
            22400,
            25600,
            35600,
            38700,
            42000,
            46700,
            50200,
            53700,
            61100,
            64702,
            163700,
            174100,
            184900,
            198800,
            210500,
            222700,
            239100,
            249660,
            1067358,
            1116105
        ]
    },
    {
        name: 'Zinc',
        appearance: 'silver-gray',
        atomic_mass: 65.382,
        boil: 1180,
        category: 'transition metal',
        color: null,
        density: 7.14,
        discovered_by: 'India',
        melt: 692.68,
        molar_heat: 25.47,
        named_by: null,
        number: 30,
        period: 4,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Zinc',
        spectral_img: null,
        summary: 'Zinc, in commerce also spelter, is a chemical element with symbol Zn and atomic number 30. It is the first element of group 12 of the periodic table. In some respects zinc is chemically similar to magnesium:its ion is of similar size and its only common oxidation state is +2.',
        symbol: 'Zn',
        xpos: 12,
        ypos: 4,
        shells: [2, 8, 18, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d1 4s2',
        electron_affinity: -58,
        electronegativity_pauling: 1.65,
        ionization_energies: [
            906.4,
            1733.3,
            3833,
            5731,
            7970,
            10400,
            12900,
            16800,
            19600,
            23000,
            26400,
            29990,
            40490,
            43800,
            47300,
            52300,
            55900,
            59700,
            67300,
            71200,
            179100
        ]
    },
    {
        name: 'Gallium',
        appearance: 'silver-white',
        atomic_mass: 69.7231,
        boil: 2673,
        category: 'post-transition metal',
        color: null,
        density: 5.91,
        discovered_by: 'Lecoq de Boisbaudran',
        melt: 302.9146,
        molar_heat: 25.86,
        named_by: null,
        number: 31,
        period: 4,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Gallium',
        spectral_img: null,
        summary: 'Gallium is a chemical element with symbol Ga and atomic number 31. Elemental gallium does not occur in free form in nature, but as the gallium(III) compounds that are in trace amounts in zinc ores and in bauxite. Gallium is a soft, silvery metal, and elemental gallium is a brittle solid at low temperatures, and melts at 29.76 \u00b0C (85.57 \u00b0F) (slightly above room temperature).',
        symbol: 'Ga',
        xpos: 13,
        ypos: 4,
        shells: [2, 8, 18, 3],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p1',
        electron_affinity: 41,
        electronegativity_pauling: 1.81,
        ionization_energies: [578.8, 1979.3, 2963, 6180]
    },
    {
        name: 'Germanium',
        appearance: 'grayish-white',
        atomic_mass: 72.6308,
        boil: 3106,
        category: 'metalloid',
        color: null,
        density: 5.323,
        discovered_by: 'Clemens Winkler',
        melt: 1211.4,
        molar_heat: 23.222,
        named_by: null,
        number: 32,
        period: 4,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Germanium',
        spectral_img: null,
        summary: 'Germanium is a chemical element with symbol Ge and atomic number 32. It is a lustrous, hard, grayish-white metalloid in the carbon group, chemically similar to its group neighbors tin and silicon. Purified germanium is a semiconductor, with an appearance most similar to elemental silicon.',
        symbol: 'Ge',
        xpos: 14,
        ypos: 4,
        shells: [2, 8, 18, 4],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p2',
        electron_affinity: 118.9352,
        electronegativity_pauling: 2.01,
        ionization_energies: [762, 1537.5, 3302.1, 4411, 9020]
    },
    {
        name: 'Arsenic',
        appearance: 'metallic grey',
        atomic_mass: 74.9215956,
        boil: null,
        category: 'metalloid',
        color: null,
        density: 5.727,
        discovered_by: 'Bronze Age',
        melt: null,
        molar_heat: 24.64,
        named_by: null,
        number: 33,
        period: 4,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Arsenic',
        spectral_img: null,
        summary: 'Arsenic is a chemical element with symbol As and atomic number 33. Arsenic occurs in many minerals, usually in conjunction with sulfur and metals, and also as a pure elemental crystal. Arsenic is a metalloid.',
        symbol: 'As',
        xpos: 15,
        ypos: 4,
        shells: [2, 8, 18, 5],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p3',
        electron_affinity: 77.65,
        electronegativity_pauling: 2.18,
        ionization_energies: [947.0, 1798, 2735, 4837, 6043, 12310]
    },
    {
        name: 'Selenium',
        appearance: 'black, red, and gray (not pictured) allotropes',
        atomic_mass: 78.9718,
        boil: 958,
        category: 'polyatomic nonmetal',
        color: null,
        density: 4.81,
        discovered_by: 'J\u00f6ns Jakob Berzelius',
        melt: 494,
        molar_heat: 25.363,
        named_by: null,
        number: 34,
        period: 4,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Selenium',
        spectral_img: null,
        summary: 'Selenium is a chemical element with symbol Se and atomic number 34. It is a nonmetal with properties that are intermediate between those of its periodic table column-adjacent chalcogen elements sulfur and tellurium. It rarely occurs in its elemental state in nature, or as pure ore compounds.',
        symbol: 'Se',
        xpos: 16,
        ypos: 4,
        shells: [2, 8, 18, 6],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p4',
        electron_affinity: 194.9587,
        electronegativity_pauling: 2.55,
        ionization_energies: [941.0, 2045, 2973.7, 4144, 6590, 7880, 14990]
    },
    {
        name: 'Bromine',
        appearance: null,
        atomic_mass: 79.904,
        boil: 332.0,
        category: 'diatomic nonmetal',
        color: null,
        density: 3.1028,
        discovered_by: 'Antoine J\u00e9r\u00f4me Balard',
        melt: 265.8,
        molar_heat: null,
        named_by: null,
        number: 35,
        period: 4,
        phase: 'Liquid',
        source: 'https://en.wikipedia.org/wiki/Bromine',
        spectral_img: null,
        summary: 'Bromine (from Ancient Greek:\u03b2\u03c1\u1ff6\u03bc\u03bf\u03c2, br\u00f3mos, meaning "stench") is a chemical element with symbol Br, and atomic number 35. It is a halogen. The element was isolated independently by two chemists, Carl Jacob L\u00f6wig and Antoine Jerome Balard, in 1825\u20131826.',
        symbol: 'Br',
        xpos: 17,
        ypos: 4,
        shells: [2, 8, 18, 7],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p5',
        electron_affinity: 324.537,
        electronegativity_pauling: 2.96,
        ionization_energies: [1139.9, 2103, 3470, 4560, 5760, 8550, 9940, 18600]
    },
    {
        name: 'Krypton',
        appearance: 'colorless gas, exhibiting a whitish glow in a high electric field',
        atomic_mass: 83.7982,
        boil: 119.93,
        category: 'noble gas',
        color: null,
        density: 3.749,
        discovered_by: 'William Ramsay',
        melt: 115.78,
        molar_heat: null,
        named_by: null,
        number: 36,
        period: 4,
        phase: 'Gas',
        source: 'https://en.wikipedia.org/wiki/Krypton',
        spectral_img: 'https://en.wikipedia.org/wiki/File:Krypton_Spectrum.jpg',
        summary: 'Krypton (from Greek:\u03ba\u03c1\u03c5\u03c0\u03c4\u03cc\u03c2 kryptos "the hidden one") is a chemical element with symbol Kr and atomic number 36. It is a member of group 18 (noble gases) elements. A colorless, odorless, tasteless noble gas, krypton occurs in trace amounts in the atmosphere, is isolated by fractionally distilling liquefied air, and is often used with other rare gases in fluorescent lamps.',
        symbol: 'Kr',
        xpos: 18,
        ypos: 4,
        shells: [2, 8, 18, 8],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6',
        electron_affinity: -96,
        electronegativity_pauling: 3.0,
        ionization_energies: [
            1350.8,
            2350.4,
            3565,
            5070,
            6240,
            7570,
            10710,
            12138,
            22274,
            25880,
            29700,
            33800,
            37700,
            43100,
            47500,
            52200,
            57100,
            61800,
            75800,
            80400,
            85300,
            90400,
            96300,
            101400,
            111100,
            116290,
            282500,
            296200,
            311400,
            326200
        ]
    },
    {
        name: 'Rubidium',
        appearance: 'grey white',
        atomic_mass: 85.46783,
        boil: 961,
        category: 'alkali metal',
        color: null,
        density: 1.532,
        discovered_by: 'Robert Bunsen',
        melt: 312.45,
        molar_heat: 31.06,
        named_by: null,
        number: 37,
        period: 5,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Rubidium',
        spectral_img: null,
        summary: 'Rubidium is a chemical element with symbol Rb and atomic number 37. Rubidium is a soft, silvery-white metallic element of the alkali metal group, with an atomic mass of 85.4678. Elemental rubidium is highly reactive, with properties similar to those of other alkali metals, such as very rapid oxidation in air.',
        symbol: 'Rb',
        xpos: 1,
        ypos: 5,
        shells: [2, 8, 18, 8, 1],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 5s1',
        electron_affinity: 46.884,
        electronegativity_pauling: 0.82,
        ionization_energies: [403.0, 2633, 3860, 5080, 6850, 8140, 9570, 13120, 14500, 26740]
    },
    {
        name: 'Strontium',
        appearance: null,
        atomic_mass: 87.621,
        boil: 1650,
        category: 'alkaline earth metal',
        color: null,
        density: 2.64,
        discovered_by: 'William Cruickshank (chemist)',
        melt: 1050,
        molar_heat: 26.4,
        named_by: null,
        number: 38,
        period: 5,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Strontium',
        spectral_img: null,
        summary: 'Strontium is a chemical element with symbol Sr and atomic number 38. An alkaline earth metal, strontium is a soft silver-white or yellowish metallic element that is highly reactive chemically. The metal turns yellow when it is exposed to air.',
        symbol: 'Sr',
        xpos: 2,
        ypos: 5,
        shells: [2, 8, 18, 8, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 5s2',
        electron_affinity: 5.023,
        electronegativity_pauling: 0.95,
        ionization_energies: [549.5, 1064.2, 4138, 5500, 6910, 8760, 10230, 11800, 15600, 17100, 31270]
    },
    {
        name: 'Yttrium',
        appearance: 'silvery white',
        atomic_mass: 88.905842,
        boil: 3203,
        category: 'transition metal',
        color: null,
        density: 4.472,
        discovered_by: 'Johan Gadolin',
        melt: 1799,
        molar_heat: 26.53,
        named_by: null,
        number: 39,
        period: 5,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Yttrium',
        spectral_img: null,
        summary: 'Yttrium is a chemical element with symbol Y and atomic number 39. It is a silvery-metallic transition metal chemically similar to the lanthanides and it has often been classified as a "rare earth element". Yttrium is almost always found combined with the lanthanides in rare earth minerals and is never found in nature as a free element.',
        symbol: 'Y',
        xpos: 3,
        ypos: 5,
        shells: [2, 8, 18, 9, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d1 5s2',
        electron_affinity: 29.6,
        electronegativity_pauling: 1.22,
        ionization_energies: [
            600,
            1180,
            1980,
            5847,
            7430,
            8970,
            11190,
            12450,
            14110,
            18400,
            19900,
            36090
        ]
    },
    {
        name: 'Zirconium',
        appearance: 'silvery white',
        atomic_mass: 91.2242,
        boil: 4650,
        category: 'transition metal',
        color: null,
        density: 6.52,
        discovered_by: 'Martin Heinrich Klaproth',
        melt: 2128,
        molar_heat: 25.36,
        named_by: null,
        number: 40,
        period: 5,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Zirconium',
        spectral_img: null,
        summary: 'Zirconium is a chemical element with symbol Zr and atomic number 40. The name of zirconium is taken from the name of the mineral zircon, the most important source of zirconium. The word zircon comes from the Persian word zargun \u0632\u0631\u06af\u0648\u0646, meaning "gold-colored".',
        symbol: 'Zr',
        xpos: 4,
        ypos: 5,
        shells: [2, 8, 18, 10, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d2 5s2',
        electron_affinity: 41.806,
        electronegativity_pauling: 1.33,
        ionization_energies: [640.1, 1270, 2218, 3313, 7752, 9500]
    },
    {
        name: 'Niobium',
        appearance: 'gray metallic, bluish when oxidized',
        atomic_mass: 92.906372,
        boil: 5017,
        category: 'transition metal',
        color: null,
        density: 8.57,
        discovered_by: 'Charles Hatchett',
        melt: 2750,
        molar_heat: 24.6,
        named_by: null,
        number: 41,
        period: 5,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Niobium',
        spectral_img: null,
        summary: 'Niobium, formerly columbium, is a chemical element with symbol Nb (formerly Cb) and atomic number 41. It is a soft, grey, ductile transition metal, which is often found in the pyrochlore mineral, the main commercial source for niobium, and columbite. The name comes from Greek mythology:Niobe, daughter of Tantalus since it is so similar to tantalum.',
        symbol: 'Nb',
        xpos: 5,
        ypos: 5,
        shells: [2, 8, 18, 12, 1],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d4 5s1',
        electron_affinity: 88.516,
        electronegativity_pauling: 1.6,
        ionization_energies: [652.1, 1380, 2416, 3700, 4877, 9847, 12100]
    },
    {
        name: 'Molybdenum',
        appearance: 'gray metallic',
        atomic_mass: 95.951,
        boil: 4912,
        category: 'transition metal',
        color: null,
        density: 10.28,
        discovered_by: 'Carl Wilhelm Scheele',
        melt: 2896,
        molar_heat: 24.06,
        named_by: null,
        number: 42,
        period: 5,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Molybdenum',
        spectral_img: null,
        summary: 'Molybdenum is a chemical element with symbol Mo and atomic number 42. The name is from Neo-Latin molybdaenum, from Ancient Greek \u039c\u03cc\u03bb\u03c5\u03b2\u03b4\u03bf\u03c2 molybdos, meaning lead, since its ores were confused with lead ores. Molybdenum minerals have been known throughout history, but the element was discovered (in the sense of differentiating it as a new entity from the mineral salts of other metals) in 1778 by Carl Wilhelm Scheele.',
        symbol: 'Mo',
        xpos: 6,
        ypos: 5,
        shells: [2, 8, 18, 13, 1],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d5 5s1',
        electron_affinity: 72.1,
        electronegativity_pauling: 2.16,
        ionization_energies: [
            684.3,
            1560,
            2618,
            4480,
            5257,
            6640.8,
            12125,
            13860,
            15835,
            17980,
            20190,
            22219,
            26930,
            29196,
            52490,
            55000,
            61400,
            67700,
            74000,
            80400,
            87000,
            93400,
            98420,
            104400,
            121900,
            127700,
            133800,
            139800,
            148100,
            154500
        ]
    },
    {
        name: 'Technetium',
        appearance: 'shiny gray metal',
        atomic_mass: 98,
        boil: 4538,
        category: 'transition metal',
        color: null,
        density: 11,
        discovered_by: 'Emilio Segr\u00e8',
        melt: 2430,
        molar_heat: 24.27,
        named_by: null,
        number: 43,
        period: 5,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Technetium',
        spectral_img: null,
        summary: 'Technetium (/t\u025bk\u02c8ni\u02d0\u0283i\u0259m/) is a chemical element with symbol Tc and atomic number 43. It is the element with the lowest atomic number in the periodic table that has no stable isotopes:every form of it is radioactive. Nearly all technetium is produced synthetically, and only minute amounts are found in nature.',
        symbol: 'Tc',
        xpos: 7,
        ypos: 5,
        shells: [2, 8, 18, 13, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d5 5s2',
        electron_affinity: 53,
        electronegativity_pauling: 1.9,
        ionization_energies: [702, 1470, 2850]
    },
    {
        name: 'Ruthenium',
        appearance: 'silvery white metallic',
        atomic_mass: 101.072,
        boil: 4423,
        category: 'transition metal',
        color: null,
        density: 12.45,
        discovered_by: 'Karl Ernst Claus',
        melt: 2607,
        molar_heat: 24.06,
        named_by: null,
        number: 44,
        period: 5,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Ruthenium',
        spectral_img: null,
        summary: 'Ruthenium is a chemical element with symbol Ru and atomic number 44. It is a rare transition metal belonging to the platinum group of the periodic table. Like the other metals of the platinum group, ruthenium is inert to most other chemicals.',
        symbol: 'Ru',
        xpos: 8,
        ypos: 5,
        shells: [2, 8, 18, 15, 1],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d7 5s1',
        electron_affinity: 100.96,
        electronegativity_pauling: 2.2,
        ionization_energies: [710.2, 1620, 2747]
    },
    {
        name: 'Rhodium',
        appearance: 'silvery white metallic',
        atomic_mass: 102.905502,
        boil: 3968,
        category: 'transition metal',
        color: null,
        density: 12.41,
        discovered_by: 'William Hyde Wollaston',
        melt: 2237,
        molar_heat: 24.98,
        named_by: null,
        number: 45,
        period: 5,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Rhodium',
        spectral_img: null,
        summary: 'Rhodium is a chemical element with symbol Rh and atomic number 45. It is a rare, silvery-white, hard, and chemically inert transition metal. It is a member of the platinum group.',
        symbol: 'Rh',
        xpos: 9,
        ypos: 5,
        shells: [2, 8, 18, 16, 1],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d8 5s1',
        electron_affinity: 110.27,
        electronegativity_pauling: 2.28,
        ionization_energies: [719.7, 1740, 2997]
    },
    {
        name: 'Palladium',
        appearance: 'silvery white',
        atomic_mass: 106.421,
        boil: 3236,
        category: 'transition metal',
        color: null,
        density: 12.023,
        discovered_by: 'William Hyde Wollaston',
        melt: 1828.05,
        molar_heat: 25.98,
        named_by: null,
        number: 46,
        period: 5,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Palladium',
        spectral_img: null,
        summary: 'Palladium is a chemical element with symbol Pd and atomic number 46. It is a rare and lustrous silvery-white metal discovered in 1803 by William Hyde Wollaston. He named it after the asteroid Pallas, which was itself named after the epithet of the Greek goddess Athena, acquired by her when she slew Pallas.',
        symbol: 'Pd',
        xpos: 10,
        ypos: 5,
        shells: [2, 8, 18, 18],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10',
        electron_affinity: 54.24,
        electronegativity_pauling: 2.2,
        ionization_energies: [804.4, 1870, 3177]
    },
    {
        name: 'Silver',
        appearance: 'lustrous white metal',
        atomic_mass: 107.86822,
        boil: 2435,
        category: 'transition metal',
        color: null,
        density: 10.49,
        discovered_by: 'unknown, before 5000 BC',
        melt: 1234.93,
        molar_heat: 25.35,
        named_by: null,
        number: 47,
        period: 5,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Silver',
        spectral_img: null,
        summary: 'Silver is a chemical element with symbol Ag (Greek:\u03ac\u03c1\u03b3\u03c5\u03c1\u03bf\u03c2 \u00e1rguros, Latin:argentum, both from the Indo-European root *h\u2082er\u01f5- for "grey" or "shining") and atomic number 47. A soft, white, lustrous transition metal, it possesses the highest electrical conductivity, thermal conductivity and reflectivity of any metal. The metal occurs naturally in its pure, free form (native silver), as an alloy with gold and other metals, and in minerals such as argentite and chlorargyrite.',
        symbol: 'Ag',
        xpos: 11,
        ypos: 5,
        shells: [2, 8, 18, 18, 1],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 5s1',
        electron_affinity: 125.862,
        electronegativity_pauling: 1.93,
        ionization_energies: [731.0, 2070, 3361]
    },
    {
        name: 'Cadmium',
        appearance: 'silvery bluish-gray metallic',
        atomic_mass: 112.4144,
        boil: 1040,
        category: 'transition metal',
        color: null,
        density: 8.65,
        discovered_by: 'Karl Samuel Leberecht Hermann',
        melt: 594.22,
        molar_heat: 26.02,
        named_by: 'Isotopes of cadmium',
        number: 48,
        period: 5,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Cadmium',
        spectral_img: null,
        summary: 'Cadmium is a chemical element with symbol Cd and atomic number 48. This soft, bluish-white metal is chemically similar to the two other stable metals in group 12, zinc and mercury. Like zinc, it prefers oxidation state +2 in most of its compounds and like mercury it shows a low melting point compared to transition metals.',
        symbol: 'Cd',
        xpos: 12,
        ypos: 5,
        shells: [2, 8, 18, 18, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 5s2',
        electron_affinity: -68,
        electronegativity_pauling: 1.69,
        ionization_energies: [867.8, 1631.4, 3616]
    },
    {
        name: 'Indium',
        appearance: 'silvery lustrous gray',
        atomic_mass: 114.8181,
        boil: 2345,
        category: 'post-transition metal',
        color: null,
        density: 7.31,
        discovered_by: 'Ferdinand Reich',
        melt: 429.7485,
        molar_heat: 26.74,
        named_by: null,
        number: 49,
        period: 5,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Indium',
        spectral_img: null,
        summary: "Indium is a chemical element with symbol In and atomic number 49. It is a post-transition metallic element that is rare in Earth's crust. The metal is very soft, malleable and easily fusible, with a melting point higher than sodium, but lower than lithium or tin.",
        symbol: 'In',
        xpos: 13,
        ypos: 5,
        shells: [2, 8, 18, 18, 3],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 5s2 5p1',
        electron_affinity: 37.043,
        electronegativity_pauling: 1.78,
        ionization_energies: [558.3, 1820.7, 2704, 5210]
    },
    {
        name: 'Tin',
        appearance: 'silvery-white (beta, \u03b2) or gray (alpha, \u03b1)',
        atomic_mass: 118.7107,
        boil: 2875,
        category: 'post-transition metal',
        color: null,
        density: 7.365,
        discovered_by: 'unknown, before 3500 BC',
        melt: 505.08,
        molar_heat: 27.112,
        named_by: null,
        number: 50,
        period: 5,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Tin',
        spectral_img: null,
        summary: 'Tin is a chemical element with the symbol Sn (for Latin:stannum) and atomic number 50. It is a main group metal in group 14 of the periodic table. Tin shows a chemical similarity to both neighboring group-14 elements, germanium and lead, and has two possible oxidation states, +2 and the slightly more stable +4.',
        symbol: 'Sn',
        xpos: 14,
        ypos: 5,
        shells: [2, 8, 18, 18, 4],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 5s2 5p2',
        electron_affinity: 107.2984,
        electronegativity_pauling: 1.96,
        ionization_energies: [708.6, 1411.8, 2943.0, 3930.3, 7456]
    },
    {
        name: 'Antimony',
        appearance: 'silvery lustrous gray',
        atomic_mass: 121.7601,
        boil: 1908,
        category: 'metalloid',
        color: null,
        density: 6.697,
        discovered_by: 'unknown, before 3000 BC',
        melt: 903.78,
        molar_heat: 25.23,
        named_by: null,
        number: 51,
        period: 5,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Antimony',
        spectral_img: null,
        summary: 'Antimony is a chemical element with symbol Sb (from Latin:stibium) and atomic number 51. A lustrous gray metalloid, it is found in nature mainly as the sulfide mineral stibnite (Sb2S3). Antimony compounds have been known since ancient times and were used for cosmetics; metallic antimony was also known, but it was erroneously identified as lead upon its discovery.',
        symbol: 'Sb',
        xpos: 15,
        ypos: 5,
        shells: [2, 8, 18, 18, 5],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 5s2 5p3',
        electron_affinity: 101.059,
        electronegativity_pauling: 2.05,
        ionization_energies: [834, 1594.9, 2440, 4260, 5400, 10400]
    },
    {
        name: 'Tellurium',
        appearance: null,
        atomic_mass: 127.603,
        boil: 1261,
        category: 'metalloid',
        color: null,
        density: 6.24,
        discovered_by: 'Franz-Joseph M\u00fcller von Reichenstein',
        melt: 722.66,
        molar_heat: 25.73,
        named_by: null,
        number: 52,
        period: 5,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Tellurium',
        spectral_img: null,
        summary: 'Tellurium is a chemical element with symbol Te and atomic number 52. It is a brittle, mildly toxic, rare, silver-white metalloid. Tellurium is chemically related to selenium and sulfur.',
        symbol: 'Te',
        xpos: 16,
        ypos: 5,
        shells: [2, 8, 18, 18, 6],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 5s2 5p4',
        electron_affinity: 190.161,
        electronegativity_pauling: 2.1,
        ionization_energies: [869.3, 1790, 2698, 3610, 5668, 6820, 13200]
    },
    {
        name: 'Iodine',
        appearance: 'lustrous metallic gray, violet as a gas',
        atomic_mass: 126.904473,
        boil: 457.4,
        category: 'diatomic nonmetal',
        color: null,
        density: 4.933,
        discovered_by: 'Bernard Courtois',
        melt: 386.85,
        molar_heat: null,
        named_by: null,
        number: 53,
        period: 5,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Iodine',
        spectral_img: null,
        summary: 'Iodine is a chemical element with symbol I and atomic number 53. The name is from Greek \u1f30\u03bf\u03b5\u03b9\u03b4\u03ae\u03c2 ioeid\u0113s, meaning violet or purple, due to the color of iodine vapor. Iodine and its compounds are primarily used in nutrition, and industrially in the production of acetic acid and certain polymers.',
        symbol: 'I',
        xpos: 17,
        ypos: 5,
        shells: [2, 8, 18, 18, 7],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 5s2 5p5',
        electron_affinity: 295.1531,
        electronegativity_pauling: 2.66,
        ionization_energies: [1008.4, 1845.9, 3180]
    },
    {
        name: 'Xenon',
        appearance: 'colorless gas, exhibiting a blue glow when placed in a high voltage electric field',
        atomic_mass: 131.2936,
        boil: 165.051,
        category: 'noble gas',
        color: null,
        density: 5.894,
        discovered_by: 'William Ramsay',
        melt: 161.4,
        molar_heat: null,
        named_by: null,
        number: 54,
        period: 5,
        phase: 'Gas',
        source: 'https://en.wikipedia.org/wiki/Xenon',
        spectral_img: 'https://en.wikipedia.org/wiki/File:Xenon_Spectrum.jpg',
        summary: "Xenon is a chemical element with symbol Xe and atomic number 54. It is a colorless, dense, odorless noble gas, that occurs in the Earth's atmosphere in trace amounts. Although generally unreactive, xenon can undergo a few chemical reactions such as the formation of xenon hexafluoroplatinate, the first noble gas compound to be synthesized.",
        symbol: 'Xe',
        xpos: 18,
        ypos: 5,
        shells: [2, 8, 18, 18, 8],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 5s2 5p6',
        electron_affinity: -77,
        electronegativity_pauling: 2.6,
        ionization_energies: [1170.4, 2046.4, 3099.4]
    },
    {
        name: 'Cesium',
        appearance: 'silvery gold',
        atomic_mass: 132.905451966,
        boil: 944,
        category: 'alkali metal',
        color: null,
        density: 1.93,
        discovered_by: 'Robert Bunsen',
        melt: 301.7,
        molar_heat: 32.21,
        named_by: null,
        number: 55,
        period: 6,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Cesium',
        spectral_img: null,
        summary: 'Caesium or cesium is a chemical element with symbol Cs and atomic number 55. It is a soft, silvery-gold alkali metal with a melting point of 28 \u00b0C (82 \u00b0F), which makes it one of only five elemental metals that are liquid at or near room temperature. Caesium is an alkali metal and has physical and chemical properties similar to those of rubidium and potassium.',
        symbol: 'Cs',
        xpos: 1,
        ypos: 6,
        shells: [2, 8, 18, 18, 8, 1],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 5s2 5p6 6s1',
        electron_affinity: 45.505,
        electronegativity_pauling: 0.79,
        ionization_energies: [375.7, 2234.3, 3400]
    },
    {
        name: 'Barium',
        appearance: null,
        atomic_mass: 137.3277,
        boil: 2118,
        category: 'alkaline earth metal',
        color: null,
        density: 3.51,
        discovered_by: 'Carl Wilhelm Scheele',
        melt: 1000,
        molar_heat: 28.07,
        named_by: null,
        number: 56,
        period: 6,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Barium',
        spectral_img: null,
        summary: 'Barium is a chemical element with symbol Ba and atomic number 56. It is the fifth element in Group 2, a soft silvery metallic alkaline earth metal. Because of its high chemical reactivity barium is never found in nature as a free element.',
        symbol: 'Ba',
        xpos: 2,
        ypos: 6,
        shells: [2, 8, 18, 18, 8, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 5s2 5p6 6s2',
        electron_affinity: 13.954,
        electronegativity_pauling: 0.89,
        ionization_energies: [502.9, 965.2, 3600]
    },
    {
        symbol: 'La-Lu',
        number: '57-71',
        category: 'Lanthanide',
        appearance: '',
        color: null,
        discovered_by: null,
        melt: 0,
        name: 'Lanthanide',
        hasGroup: true,
        atomic_mass: 0,
        boil: 0,
        density: 0,
        molar_heat: 0,
        named_by: null,
        period: 0,
        phase: 'Solid',
        source: '',
        spectral_img: '',
        summary: '',
        xpos: 0,
        ypos: 6,
        shells: [],
        electron_configuration: '',
        electron_affinity: 0,
        electronegativity_pauling: 0,
        ionization_energies: []
    },
    {
        name: 'Hafnium',
        appearance: 'steel gray',
        atomic_mass: 178.492,
        boil: 4876,
        category: 'transition metal',
        color: null,
        density: 13.31,
        discovered_by: 'Dirk Coster',
        melt: 2506,
        molar_heat: 25.73,
        named_by: null,
        number: 72,
        period: 6,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Hafnium',
        spectral_img: 'https://en.wikipedia.org/wiki/File:Hafnium_spectrum_visible.png',
        summary: 'Hafnium is a chemical element with symbol Hf and atomic number 72. A lustrous, silvery gray, tetravalent transition metal, hafnium chemically resembles zirconium and is found in zirconium minerals. Its existence was predicted by Dmitri Mendeleev in 1869, though it was not identified until 1923, making it the penultimate stable element to be discovered (rhenium was identified two years later).',
        symbol: 'Hf',
        xpos: 4,
        ypos: 6,
        shells: [2, 8, 18, 32, 10, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d2 6s2',
        electron_affinity: 17.18,
        electronegativity_pauling: 1.3,
        ionization_energies: [658.5, 1440, 2250, 3216]
    },
    {
        name: 'Tantalum',
        appearance: 'gray blue',
        atomic_mass: 180.947882,
        boil: 5731,
        category: 'transition metal',
        color: null,
        density: 16.69,
        discovered_by: 'Anders Gustaf Ekeberg',
        melt: 3290,
        molar_heat: 25.36,
        named_by: null,
        number: 73,
        period: 6,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Tantalum',
        spectral_img: 'https://en.wikipedia.org/wiki/File:Tantalum_spectrum_visible.png',
        summary: 'Tantalum is a chemical element with symbol Ta and atomic number 73. Previously known as tantalium, its name comes from Tantalus, an antihero from Greek mythology. Tantalum is a rare, hard, blue-gray, lustrous transition metal that is highly corrosion-resistant.',
        symbol: 'Ta',
        xpos: 5,
        ypos: 6,
        shells: [2, 8, 18, 32, 11, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d3 6s2',
        electron_affinity: 31,
        electronegativity_pauling: 1.5,
        ionization_energies: [761, 1500]
    },
    {
        name: 'Tungsten',
        appearance: 'grayish white, lustrous',
        atomic_mass: 183.841,
        boil: 6203,
        category: 'transition metal',
        color: null,
        density: 19.25,
        discovered_by: 'Carl Wilhelm Scheele',
        melt: 3695,
        molar_heat: 24.27,
        named_by: null,
        number: 74,
        period: 6,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Tungsten',
        spectral_img: null,
        summary: 'Tungsten, also known as wolfram, is a chemical element with symbol W and atomic number 74. The word tungsten comes from the Swedish language tung sten, which directly translates to heavy stone. Its name in Swedish is volfram, however, in order to distinguish it from scheelite, which in Swedish is alternatively named tungsten.',
        symbol: 'W',
        xpos: 6,
        ypos: 6,
        shells: [2, 8, 18, 32, 12, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d4 6s2',
        electron_affinity: 78.76,
        electronegativity_pauling: 2.36,
        ionization_energies: [770, 1700]
    },
    {
        name: 'Rhenium',
        appearance: 'silvery-grayish',
        atomic_mass: 186.2071,
        boil: 5869,
        category: 'transition metal',
        color: null,
        density: 21.02,
        discovered_by: 'Masataka Ogawa',
        melt: 3459,
        molar_heat: 25.48,
        named_by: 'Walter Noddack',
        number: 75,
        period: 6,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Rhenium',
        spectral_img: null,
        summary: "Rhenium is a chemical element with symbol Re and atomic number 75. It is a silvery-white, heavy, third-row transition metal in group 7 of the periodic table. With an estimated average concentration of 1 part per billion (ppb), rhenium is one of the rarest elements in the Earth's crust.",
        symbol: 'Re',
        xpos: 7,
        ypos: 6,
        shells: [2, 8, 18, 32, 13, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d5 6s2',
        electron_affinity: 5.8273,
        electronegativity_pauling: 1.9,
        ionization_energies: [760, 1260, 2510, 3640]
    },
    {
        name: 'Osmium',
        appearance: 'silvery, blue cast',
        atomic_mass: 190.233,
        boil: 5285,
        category: 'transition metal',
        color: null,
        density: 22.59,
        discovered_by: 'Smithson Tennant',
        melt: 3306,
        molar_heat: 24.7,
        named_by: null,
        number: 76,
        period: 6,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Osmium',
        spectral_img: null,
        summary: 'Osmium (from Greek osme (\u1f40\u03c3\u03bc\u03ae) meaning "smell") is a chemical element with symbol Os and atomic number 76. It is a hard, brittle, bluish-white transition metal in the platinum group that is found as a trace element in alloys, mostly in platinum ores. Osmium is the densest naturally occurring element, with a density of 22.59 g/cm3.',
        symbol: 'Os',
        xpos: 8,
        ypos: 6,
        shells: [2, 8, 18, 32, 14, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d6 6s2',
        electron_affinity: 103.99,
        electronegativity_pauling: 2.2,
        ionization_energies: [840, 1600]
    },
    {
        name: 'Iridium',
        appearance: 'silvery white',
        atomic_mass: 192.2173,
        boil: 4403,
        category: 'transition metal',
        color: null,
        density: 22.56,
        discovered_by: 'Smithson Tennant',
        melt: 2719,
        molar_heat: 25.1,
        named_by: null,
        number: 77,
        period: 6,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Iridium',
        spectral_img: null,
        summary: 'Iridium is a chemical element with symbol Ir and atomic number 77. A very hard, brittle, silvery-white transition metal of the platinum group, iridium is generally credited with being the second densest element (after osmium) based on measured density, although calculations involving the space lattices of the elements show that iridium is denser. It is also the most corrosion-resistant metal, even at temperatures as high as 2000 \u00b0C. Although only certain molten salts and halogens are corrosive to solid iridium, finely divided iridium dust is much more reactive and can be flammable.',
        symbol: 'Ir',
        xpos: 9,
        ypos: 6,
        shells: [2, 8, 18, 32, 15, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d7 6s2',
        electron_affinity: 150.94,
        electronegativity_pauling: 2.2,
        ionization_energies: [880, 1600]
    },
    {
        name: 'Platinum',
        appearance: 'silvery white',
        atomic_mass: 195.0849,
        boil: 4098,
        category: 'transition metal',
        color: null,
        density: 21.45,
        discovered_by: 'Antonio de Ulloa',
        melt: 2041.4,
        molar_heat: 25.86,
        named_by: null,
        number: 78,
        period: 6,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Platinum',
        spectral_img: null,
        summary: 'Platinum is a chemical element with symbol Pt and atomic number 78. It is a dense, malleable, ductile, highly unreactive, precious, gray-white transition metal. Its name is derived from the Spanish term platina, which is literally translated into "little silver".',
        symbol: 'Pt',
        xpos: 10,
        ypos: 6,
        shells: [2, 8, 18, 32, 17, 1],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d9 6s1',
        electron_affinity: 205.041,
        electronegativity_pauling: 2.28,
        ionization_energies: [870, 1791]
    },
    {
        name: 'Gold',
        appearance: 'metallic yellow',
        atomic_mass: 196.9665695,
        boil: 3243,
        category: 'transition metal',
        color: null,
        density: 19.3,
        discovered_by: 'Middle East',
        melt: 1337.33,
        molar_heat: 25.418,
        named_by: null,
        number: 79,
        period: 6,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Gold',
        spectral_img: null,
        summary: 'Gold is a chemical element with symbol Au (from Latin:aurum) and atomic number 79. In its purest form, it is a bright, slightly reddish yellow, dense, soft, malleable and ductile metal. Chemically, gold is a transition metal and a group 11 element.',
        symbol: 'Au',
        xpos: 11,
        ypos: 6,
        shells: [2, 8, 18, 32, 18, 1],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 6s1',
        electron_affinity: 222.747,
        electronegativity_pauling: 2.54,
        ionization_energies: [890.1, 1980]
    },
    {
        name: 'Mercury',
        appearance: 'silvery',
        atomic_mass: 200.5923,
        boil: 629.88,
        category: 'transition metal',
        color: null,
        density: 13.534,
        discovered_by: 'unknown, before 2000 BCE',
        melt: 234.321,
        molar_heat: 27.983,
        named_by: null,
        number: 80,
        period: 6,
        phase: 'Liquid',
        source: 'https://en.wikipedia.org/wiki/Mercury (Element)',
        spectral_img: null,
        summary: 'Mercury is a chemical element with symbol Hg and atomic number 80. It is commonly known as quicksilver and was formerly named hydrargyrum (/ha\u026a\u02c8dr\u0251\u02d0rd\u0292\u0259r\u0259m/). A heavy, silvery d-block element, mercury is the only metallic element that is liquid at standard conditions for temperature and pressure; the only other element that is liquid under these conditions is bromine, though metals such as caesium, gallium, and rubidium melt just above room temperature.',
        symbol: 'Hg',
        xpos: 12,
        ypos: 6,
        shells: [2, 8, 18, 32, 18, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 6s2',
        electron_affinity: -48,
        electronegativity_pauling: 2.0,
        ionization_energies: [1007.1, 1810, 3300]
    },
    {
        name: 'Thallium',
        appearance: 'silvery white',
        atomic_mass: 204.38,
        boil: 1746,
        category: 'post-transition metal',
        color: null,
        density: 11.85,
        discovered_by: 'William Crookes',
        melt: 577,
        molar_heat: 26.32,
        named_by: null,
        number: 81,
        period: 6,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Thallium',
        spectral_img: null,
        summary: 'Thallium is a chemical element with symbol Tl and atomic number 81. This soft gray post-transition metal is not found free in nature. When isolated, it resembles tin, but discolors when exposed to air.',
        symbol: 'Tl',
        xpos: 13,
        ypos: 6,
        shells: [2, 8, 18, 32, 18, 3],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 6s2 6p1',
        electron_affinity: 36.4,
        electronegativity_pauling: 1.62,
        ionization_energies: [589.4, 1971, 2878]
    },
    {
        name: 'Lead',
        appearance: 'metallic gray',
        atomic_mass: 207.21,
        boil: 2022,
        category: 'post-transition metal',
        color: null,
        density: 11.34,
        discovered_by: 'Middle East',
        melt: 600.61,
        molar_heat: 26.65,
        named_by: null,
        number: 82,
        period: 6,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Lead_(element)',
        spectral_img: null,
        summary: 'Lead (/l\u025bd/) is a chemical element in the carbon group with symbol Pb (from Latin:plumbum) and atomic number 82. Lead is a soft, malleable and heavy post-transition metal. Metallic lead has a bluish-white color after being freshly cut, but it soon tarnishes to a dull grayish color when exposed to air.',
        symbol: 'Pb',
        xpos: 14,
        ypos: 6,
        shells: [2, 8, 18, 32, 18, 4],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 6s2 6p2',
        electron_affinity: 34.4204,
        electronegativity_pauling: 1.87,
        ionization_energies: [715.6, 1450.5, 3081.5, 4083, 6640]
    },
    {
        name: 'Bismuth',
        appearance: 'lustrous silver',
        atomic_mass: 208.980401,
        boil: 1837,
        category: 'post-transition metal',
        color: null,
        density: 9.78,
        discovered_by: 'Claude Fran\u00e7ois Geoffroy',
        melt: 544.7,
        molar_heat: 25.52,
        named_by: null,
        number: 83,
        period: 6,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Bismuth',
        spectral_img: null,
        summary: 'Bismuth is a chemical element with symbol Bi and atomic number 83. Bismuth, a pentavalent post-transition metal, chemically resembles arsenic and antimony. Elemental bismuth may occur naturally, although its sulfide and oxide form important commercial ores.',
        symbol: 'Bi',
        xpos: 15,
        ypos: 6,
        shells: [2, 8, 18, 32, 18, 5],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 6s2 6p3',
        electron_affinity: 90.924,
        electronegativity_pauling: 2.02,
        ionization_energies: [703, 1610, 2466, 4370, 5400, 8520]
    },
    {
        name: 'Polonium',
        appearance: 'silvery',
        atomic_mass: 209,
        boil: 1235,
        category: 'post-transition metal',
        color: null,
        density: 9.196,
        discovered_by: 'Pierre Curie',
        melt: 527,
        molar_heat: 26.4,
        named_by: null,
        number: 84,
        period: 6,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Polonium',
        spectral_img: null,
        summary: 'Polonium is a chemical element with symbol Po and atomic number 84, discovered in 1898 by Marie Curie and Pierre Curie. A rare and highly radioactive element with no stable isotopes, polonium is chemically similar to bismuth and tellurium, and it occurs in uranium ores. Applications of polonium are few.',
        symbol: 'Po',
        xpos: 16,
        ypos: 6,
        shells: [2, 8, 18, 32, 18, 6],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 6s2 6p4',
        electron_affinity: 136,
        electronegativity_pauling: 2.0,
        ionization_energies: [812.1]
    },
    {
        name: 'Astatine',
        appearance: 'unknown, probably metallic',
        atomic_mass: 210,
        boil: 610,
        category: 'metalloid',
        color: null,
        density: 6.35,
        discovered_by: 'Dale R. Corson',
        melt: 575,
        molar_heat: null,
        named_by: null,
        number: 85,
        period: 6,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Astatine',
        spectral_img: null,
        summary: 'Astatine is a very rare radioactive chemical element with the chemical symbol At and atomic number 85. It occurs on Earth as the decay product of various heavier elements. All its isotopes are short-lived; the most stable is astatine-210, with a half-life of 8.1 hours.',
        symbol: 'At',
        xpos: 17,
        ypos: 6,
        shells: [2, 8, 18, 32, 18, 7],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 6s2 6p5',
        electron_affinity: 233,
        electronegativity_pauling: 2.2,
        ionization_energies: [899.003]
    },
    {
        name: 'Radon',
        appearance: 'colorless gas, occasionally glows green or red in discharge tubes',
        atomic_mass: 222,
        boil: 211.5,
        category: 'noble gas',
        color: null,
        density: 9.73,
        discovered_by: 'Friedrich Ernst Dorn',
        melt: 202,
        molar_heat: null,
        named_by: null,
        number: 86,
        period: 6,
        phase: 'Gas',
        source: 'https://en.wikipedia.org/wiki/Radon',
        spectral_img: 'https://en.wikipedia.org/wiki/File:Radon_spectrum.png',
        summary: 'Radon is a chemical element with symbol Rn and atomic number 86. It is a radioactive, colorless, odorless, tasteless noble gas, occurring naturally as a decay product of radium. Its most stable isotope, 222Rn, has a half-life of 3.8 days.',
        symbol: 'Rn',
        xpos: 18,
        ypos: 6,
        shells: [2, 8, 18, 32, 18, 8],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 6s2 6p6',
        electron_affinity: -68,
        electronegativity_pauling: 2.2,
        ionization_energies: [1037]
    },
    {
        name: 'Francium',
        appearance: null,
        atomic_mass: 223,
        boil: 950,
        category: 'alkali metal',
        color: null,
        density: 1.87,
        discovered_by: 'Marguerite Perey',
        melt: 300,
        molar_heat: null,
        named_by: null,
        number: 87,
        period: 7,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Francium',
        spectral_img: null,
        summary: 'Francium is a chemical element with symbol Fr and atomic number 87. It used to be known as eka-caesium and actinium K. It is the second-least electronegative element, behind only caesium. Francium is a highly radioactive metal that decays into astatine, radium, and radon.',
        symbol: 'Fr',
        xpos: 1,
        ypos: 7,
        shells: [2, 8, 18, 32, 18, 8, 1],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s24p6 4d10 4f14 5s2 5p6 5d10 6s2 6p6 7s1',
        electron_affinity: 46.89,
        electronegativity_pauling: 0.79,
        ionization_energies: [380]
    },
    {
        name: 'Radium',
        appearance: 'silvery white metallic',
        atomic_mass: 226,
        boil: 2010,
        category: 'alkaline earth metal',
        color: null,
        density: 5.5,
        discovered_by: 'Pierre Curie',
        melt: 1233,
        molar_heat: null,
        named_by: null,
        number: 88,
        period: 7,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Radium',
        spectral_img: null,
        summary: 'Radium is a chemical element with symbol Ra and atomic number 88. It is the sixth element in group 2 of the periodic table, also known as the alkaline earth metals. Pure radium is almost colorless, but it readily combines with nitrogen (rather than oxygen) on exposure to air, forming a black surface layer of radium nitride (Ra3N2).',
        symbol: 'Ra',
        xpos: 2,
        ypos: 7,
        shells: [2, 8, 18, 32, 18, 8, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 6s2 6p6 7s2',
        electron_affinity: 9.6485,
        electronegativity_pauling: 0.9,
        ionization_energies: [509.3, 979.0]
    },
    {
        category: 'actinide',
        number: '89-103',
        symbol: 'Ac-Lr',
        hasGroup: true,
        density: 0,
        name: 'Actinide',
        atomic_mass: 0,
        boil: 0,
        molar_heat: 0,
        appearance: '',
        color: null,
        discovered_by: null,
        melt: 0,
        named_by: null,
        period: 0,
        phase: 'Solid',
        source: '',
        spectral_img: '',
        summary: '',
        xpos: 0,
        ypos: 6,
        shells: [],
        electron_configuration: '',
        electron_affinity: 0,
        electronegativity_pauling: 0,
        ionization_energies: []
    },
    {
        name: 'Rutherfordium',
        appearance: null,
        atomic_mass: 267,
        boil: 5800,
        category: 'transition metal',
        color: null,
        density: 23.2,
        discovered_by: 'Joint Institute for Nuclear Research',
        melt: 2400,
        molar_heat: null,
        named_by: null,
        number: 104,
        period: 7,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Rutherfordium',
        spectral_img: null,
        summary: 'Rutherfordium is a chemical element with symbol Rf and atomic number 104, named in honor of physicist Ernest Rutherford. It is a synthetic element (an element that can be created in a laboratory but is not found in nature) and radioactive; the most stable known isotope, 267Rf, has a half-life of approximately 1.3 hours. In the periodic table of the elements, it is a d - block element and the second of the fourth - row transition elements.',
        symbol: 'Rf',
        xpos: 4,
        ypos: 7,
        shells: [2, 8, 18, 32, 32, 10, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f14 6s2 6p6 6d2 7s2',
        electron_affinity: null,
        electronegativity_pauling: null,
        ionization_energies: [580]
    },
    {
        name: 'Dubnium',
        appearance: null,
        atomic_mass: 268,
        boil: null,
        category: 'transition metal',
        color: null,
        density: 29.3,
        discovered_by: 'Joint Institute for Nuclear Research',
        melt: null,
        molar_heat: null,
        named_by: null,
        number: 105,
        period: 7,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Dubnium',
        spectral_img: null,
        summary: 'Dubnium is a chemical element with symbol Db and atomic number 105. It is named after the town of Dubna in Russia (north of Moscow), where it was first produced. It is a synthetic element (an element that can be created in a laboratory but is not found in nature) and radioactive; the most stable known isotope, dubnium-268, has a half-life of approximately 28 hours.',
        symbol: 'Db',
        xpos: 5,
        ypos: 7,
        shells: [2, 8, 18, 32, 32, 11, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f14 6s2 6p6 6d3 7s2',
        electron_affinity: null,
        electronegativity_pauling: null,
        ionization_energies: []
    },
    {
        name: 'Seaborgium',
        appearance: null,
        atomic_mass: 269,
        boil: null,
        category: 'transition metal',
        color: null,
        density: 35.0,
        discovered_by: 'Lawrence Berkeley National Laboratory',
        melt: null,
        molar_heat: null,
        named_by: null,
        number: 106,
        period: 7,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Seaborgium',
        spectral_img: null,
        summary: 'Seaborgium is a synthetic element with symbol Sg and atomic number 106. Its most stable isotope 271Sg has a half-life of 1.9 minutes. A more recently discovered isotope 269Sg has a potentially slightly longer half-life (ca.',
        symbol: 'Sg',
        xpos: 6,
        ypos: 7,
        shells: [2, 8, 18, 32, 32, 12, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f14 6s2 6p6 6d4 7s2',
        electron_affinity: null,
        electronegativity_pauling: null,
        ionization_energies: []
    },
    {
        name: 'Bohrium',
        appearance: null,
        atomic_mass: 270,
        boil: null,
        category: 'transition metal',
        color: null,
        density: 37.1,
        discovered_by: 'Gesellschaft f\u00fcr Schwerionenforschung',
        melt: null,
        molar_heat: null,
        named_by: null,
        number: 107,
        period: 7,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Bohrium',
        spectral_img: null,
        summary: 'Bohrium is a chemical element with symbol Bh and atomic number 107. It is named after Danish physicist Niels Bohr. It is a synthetic element (an element that can be created in a laboratory but is not found in nature) and radioactive; the most stable known isotope, 270Bh, has a half-life of approximately 61 seconds.',
        symbol: 'Bh',
        xpos: 7,
        ypos: 7,
        shells: [2, 8, 18, 32, 32, 13, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f14 6s2 6p6 6d5 7s2',
        electron_affinity: null,
        electronegativity_pauling: null,
        ionization_energies: []
    },
    {
        name: 'Hassium',
        appearance: null,
        atomic_mass: 269,
        boil: null,
        category: 'transition metal',
        color: null,
        density: 40.7,
        discovered_by: 'Gesellschaft f\u00fcr Schwerionenforschung',
        melt: 126,
        molar_heat: null,
        named_by: null,
        number: 108,
        period: 7,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Hassium',
        spectral_img: null,
        summary: 'Hassium is a chemical element with symbol Hs and atomic number 108, named after the German state of Hesse. It is a synthetic element (an element that can be created in a laboratory but is not found in nature) and radioactive; the most stable known isotope, 269Hs, has a half-life of approximately 9.7 seconds, although an unconfirmed metastable state, 277mHs, may have a longer half-life of about 130 seconds. More than 100 atoms of hassium have been synthesized to date.',
        symbol: 'Hs',
        xpos: 8,
        ypos: 7,
        shells: [2, 8, 18, 32, 32, 14, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f14 6s2 6p6 6d6 7s2',
        electron_affinity: null,
        electronegativity_pauling: null,
        ionization_energies: []
    },
    {
        name: 'Meitnerium',
        appearance: null,
        atomic_mass: 278,
        boil: null,
        category: 'unknown',
        category_2: 'metal',
        color: null,
        density: 37.4,
        discovered_by: 'Gesellschaft f\u00fcr Schwerionenforschung',
        melt: null,
        molar_heat: null,
        named_by: null,
        number: 109,
        period: 7,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Meitnerium',
        spectral_img: null,
        summary: 'Meitnerium is a chemical element with symbol Mt and atomic number 109. It is an extremely radioactive synthetic element (an element not found in nature that can be created in a laboratory). The most stable known isotope, meitnerium-278, has a half-life of 7.6 seconds.',
        symbol: 'Mt',
        xpos: 9,
        ypos: 7,
        shells: [2, 8, 18, 32, 32, 15, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f14 6s2 6p6 6d7 7s2',
        electron_affinity: null,
        electronegativity_pauling: null,
        ionization_energies: []
    },
    {
        name: 'Darmstadtium',
        appearance: null,
        atomic_mass: 281,
        boil: null,
        category: 'unknown',
        category_2: 'transition metal',
        color: null,
        density: 34.8,
        discovered_by: 'Gesellschaft f\u00fcr Schwerionenforschung',
        melt: null,
        molar_heat: null,
        named_by: null,
        number: 110,
        period: 7,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Darmstadtium',
        spectral_img: null,
        summary: 'Darmstadtium is a chemical element with symbol Ds and atomic number 110. It is an extremely radioactive synthetic element. The most stable known isotope, darmstadtium-281, has a half-life of approximately 10 seconds.',
        symbol: 'Ds',
        xpos: 10,
        ypos: 7,
        shells: [2, 8, 18, 32, 32, 16, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f14 6s2 6p6 6d8 7s2',
        electron_affinity: null,
        electronegativity_pauling: null,
        ionization_energies: []
    },
    {
        name: 'Roentgenium',
        appearance: null,
        atomic_mass: 282,
        boil: null,
        category: 'unknown',
        category_2: 'transition metal',
        color: null,
        density: 28.7,
        discovered_by: 'Gesellschaft f\u00fcr Schwerionenforschung',
        melt: null,
        molar_heat: null,
        named_by: null,
        number: 111,
        period: 7,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Roentgenium',
        spectral_img: null,
        summary: 'Roentgenium is a chemical element with symbol Rg and atomic number 111. It is an extremely radioactive synthetic element (an element that can be created in a laboratory but is not found in nature); the most stable known isotope, roentgenium-282, has a half-life of 2.1 minutes. Roentgenium was first created in 1994 by the GSI Helmholtz Centre for Heavy Ion Research near Darmstadt, Germany.',
        symbol: 'Rg',
        xpos: 11,
        ypos: 7,
        shells: [2, 8, 18, 32, 32, 17, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f14 6s2 6p6 6d9 7s2',
        electron_affinity: 151.0,
        electronegativity_pauling: null,
        ionization_energies: []
    },
    {
        name: 'Copernicium',
        appearance: null,
        atomic_mass: 285,
        boil: 3570,
        category: 'transition metal',
        color: null,
        density: 23.7,
        discovered_by: 'Gesellschaft f\u00fcr Schwerionenforschung',
        melt: null,
        molar_heat: null,
        named_by: null,
        number: 112,
        period: 7,
        phase: 'Gas',
        source: 'https://en.wikipedia.org/wiki/Copernicium',
        spectral_img: null,
        summary: 'Copernicium is a chemical element with symbol Cn and atomic number 112. It is an extremely radioactive synthetic element that can only be created in a laboratory. The most stable known isotope, copernicium-285, has a half-life of approximately 29 seconds, but it is possible that this copernicium isotope may have a nuclear isomer with a longer half-life, 8.9 min.',
        symbol: 'Cn',
        xpos: 12,
        ypos: 7,
        shells: [2, 8, 18, 32, 32, 18, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f14 6s2 6p6 6d10 7s2',
        electron_affinity: null,
        electronegativity_pauling: null,
        ionization_energies: []
    },
    {
        name: 'Nihonium',
        appearance: null,
        atomic_mass: 286,
        boil: 1430,
        category: 'unknown',
        category_2: 'transition metal',
        color: null,
        density: 16,
        discovered_by: 'RIKEN',
        melt: 700,
        molar_heat: null,
        named_by: null,
        number: 113,
        period: 7,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Ununtrium',
        spectral_img: null,
        summary: 'Nihonium is a chemical element with atomic number 113. It has a symbol Nh. It is a synthetic element (an element that can be created in a laboratory but is not found in nature) and is extremely radioactive; its most stable known isotope, nihonium-286, has a half-life of 20 seconds.',
        symbol: 'Nh',
        xpos: 13,
        ypos: 7,
        shells: [2, 8, 18, 32, 32, 18, 3],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f14 6s2 6p6 6d10 7s2 7p1',
        electron_affinity: 66.6,
        electronegativity_pauling: null,
        ionization_energies: []
    },
    {
        name: 'Flerovium',
        appearance: null,
        atomic_mass: 289,
        boil: 420,
        category: 'post-transition metal',
        color: null,
        density: 14,
        discovered_by: 'Joint Institute for Nuclear Research',
        melt: 340,
        molar_heat: null,
        named_by: null,
        number: 114,
        period: 7,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Flerovium',
        spectral_img: null,
        summary: 'Flerovium is a superheavy artificial chemical element with symbol Fl and atomic number 114. It is an extremely radioactive synthetic element. The element is named after the Flerov Laboratory of Nuclear Reactions of the Joint Institute for Nuclear Research in Dubna, Russia, where the element was discovered in 1998.',
        symbol: 'Fl',
        xpos: 14,
        ypos: 7,
        shells: [2, 8, 18, 32, 32, 18, 4],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f14 6s2 6p6 6d10 7s2 7p2',
        electron_affinity: null,
        electronegativity_pauling: null,
        ionization_energies: []
    },
    {
        name: 'Moscovium',
        appearance: null,
        atomic_mass: 289,
        boil: 1400,
        category: 'unknown',
        category_2: 'post-transition metal',
        color: null,
        density: 13.5,
        discovered_by: 'Joint Institute for Nuclear Research',
        melt: 670,
        molar_heat: null,
        named_by: null,
        number: 115,
        period: 7,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Ununpentium',
        spectral_img: null,
        summary: 'Moscovium is the name of a synthetic superheavy element in the periodic table that has the symbol Mc and has the atomic number 115. It is an extremely radioactive element; its most stable known isotope, moscovium-289, has a half-life of only 220 milliseconds. It is also known as eka-bismuth or simply element 115.',
        symbol: 'Mc',
        xpos: 15,
        ypos: 7,
        shells: [2, 8, 18, 32, 32, 18, 5],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f14 6s2 6p6 6d10 7s2 7p3',
        electron_affinity: 35.3,
        electronegativity_pauling: null,
        ionization_energies: []
    },
    {
        name: 'Livermorium',
        appearance: null,
        atomic_mass: 293,
        boil: 1085,
        category: 'unknown',
        category_2: 'post-transition metal',
        color: null,
        density: 12.9,
        discovered_by: 'Joint Institute for Nuclear Research',
        melt: 709,
        molar_heat: null,
        named_by: null,
        number: 116,
        period: 7,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Livermorium',
        spectral_img: null,
        summary: 'Livermorium is a synthetic superheavy element with symbol Lv and atomic number 116. It is an extremely radioactive element that has only been created in the laboratory and has not been observed in nature. The element is named after the Lawrence Livermore National Laboratory in the United States, which collaborated with the Joint Institute for Nuclear Research in Dubna, Russia to discover livermorium in 2000.',
        symbol: 'Lv',
        xpos: 16,
        ypos: 7,
        shells: [2, 8, 18, 32, 32, 18, 6],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f14 6s2 6p6 6d10 7s2 7p4',
        electron_affinity: 74.9,
        electronegativity_pauling: null,
        ionization_energies: []
    },
    {
        name: 'Tennessine',
        appearance: null,
        atomic_mass: 294,
        boil: 883,
        category: 'unknown',
        category_2: 'metalloid',
        color: null,
        density: 7.17,
        discovered_by: 'Joint Institute for Nuclear Research',
        melt: 723,
        molar_heat: null,
        named_by: null,
        number: 117,
        period: 7,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Tennessine',
        spectral_img: null,
        summary: 'Tennessine is a superheavy artificial chemical element with an atomic number of 117 and a symbol of Ts. Also known as eka-astatine or element 117, it is the second-heaviest known element and penultimate element of the 7th period of the periodic table. As of 2016, fifteen tennessine atoms have been observed:six when it was first synthesized in 2010, seven in 2012, and two in 2014.',
        symbol: 'Ts',
        xpos: 17,
        ypos: 7,
        shells: [2, 8, 18, 32, 32, 18, 7],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f14 6s2 6p6 6d10 7s2 7p5',
        electron_affinity: 165.9,
        electronegativity_pauling: null,
        ionization_energies: []
    },
    {
        name: 'Oganesson',
        appearance: null,
        atomic_mass: 294,
        boil: 350,
        category: 'unknown',
        category_2: 'noble gas',
        color: null,
        density: 4.95,
        discovered_by: 'Joint Institute for Nuclear Research',
        melt: null,
        molar_heat: null,
        named_by: null,
        number: 118,
        period: 7,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Oganesson',
        spectral_img: null,
        summary: "Oganesson is IUPAC's name for the transactinide element with the atomic number 118 and element symbol Og. It is also known as eka-radon or element 118, and on the periodic table of the elements it is a p-block element and the last one of the 7th period. Oganesson is currently the only synthetic member of group 18.",
        symbol: 'Og',
        xpos: 18,
        ypos: 7,
        shells: [2, 8, 18, 32, 32, 18, 8],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f14 6s2 6p6 6d10 7s2 7p6',
        electron_affinity: 5.40318,
        electronegativity_pauling: null,
        ionization_energies: []
    },
    {
        name: 'Lanthanum',
        appearance: 'silvery white',
        atomic_mass: 138.905477,
        boil: 3737,
        category: 'lanthanide',
        color: null,
        density: 6.162,
        discovered_by: 'Carl Gustaf Mosander',
        melt: 1193,
        molar_heat: 27.11,
        named_by: null,
        number: 57,
        period: 6,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Lanthanum',
        spectral_img: null,
        summary: 'Lanthanum is a soft, ductile, silvery-white metallic chemical element with symbol La and atomic number 57. It tarnishes rapidly when exposed to air and is soft enough to be cut with a knife. It gave its name to the lanthanide series, a group of 15 similar elements between lanthanum and lutetium in the periodic table:it is also sometimes considered the first element of the 6th-period transition metals.',
        symbol: 'La',
        xpos: 3,
        ypos: 9,
        shells: [2, 8, 18, 18, 9, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 5s2 5p6 5d1 6s2',
        electron_affinity: 53,
        electronegativity_pauling: 1.1,
        ionization_energies: [538.1, 1067, 1850.3, 4819, 5940]
    },
    {
        name: 'Cerium',
        appearance: 'silvery white',
        atomic_mass: 140.1161,
        boil: 3716,
        category: 'lanthanide',
        color: null,
        density: 6.77,
        discovered_by: 'Martin Heinrich Klaproth',
        melt: 1068,
        molar_heat: 26.94,
        named_by: null,
        number: 58,
        period: 6,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Cerium',
        spectral_img: null,
        summary: 'Cerium is a chemical element with symbol Ce and atomic number 58. It is a soft, silvery, ductile metal which easily oxidizes in air. Cerium was named after the dwarf planet Ceres (itself named after the Roman goddess of agriculture).',
        symbol: 'Ce',
        xpos: 4,
        ypos: 9,
        shells: [2, 8, 18, 19, 9, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f1 5s2 5p6 5d1 6s2',
        electron_affinity: 55,
        electronegativity_pauling: 1.12,
        ionization_energies: [534.4, 1050, 1949, 3547, 6325, 7490]
    },
    {
        name: 'Praseodymium',
        appearance: 'grayish white',
        atomic_mass: 140.907662,
        boil: 3403,
        category: 'lanthanide',
        color: null,
        density: 6.77,
        discovered_by: 'Carl Auer von Welsbach',
        melt: 1208,
        molar_heat: 27.2,
        named_by: null,
        number: 59,
        period: 6,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Praseodymium',
        spectral_img: null,
        summary: 'Praseodymium is a chemical element with symbol Pr and atomic number 59. Praseodymium is a soft, silvery, malleable and ductile metal in the lanthanide group. It is valued for its magnetic, electrical, chemical, and optical properties.',
        symbol: 'Pr',
        xpos: 5,
        ypos: 9,
        shells: [2, 8, 18, 21, 8, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f3 5s2 5p6 6s2',
        electron_affinity: 93,
        electronegativity_pauling: 1.13,
        ionization_energies: [527, 1020, 2086, 3761, 5551]
    },
    {
        name: 'Neodymium',
        appearance: 'silvery white',
        atomic_mass: 144.2423,
        boil: 3347,
        category: 'lanthanide',
        color: null,
        density: 7.01,
        discovered_by: 'Carl Auer von Welsbach',
        melt: 1297,
        molar_heat: 27.45,
        named_by: null,
        number: 60,
        period: 6,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Neodymium',
        spectral_img: null,
        summary: 'Neodymium is a chemical element with symbol Nd and atomic number 60. It is a soft silvery metal that tarnishes in air. Neodymium was discovered in 1885 by the Austrian chemist Carl Auer von Welsbach.',
        symbol: 'Nd',
        xpos: 6,
        ypos: 9,
        shells: [2, 8, 18, 22, 8, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f4 5s2 5p6 6s2',
        electron_affinity: 184.87,
        electronegativity_pauling: 1.14,
        ionization_energies: [533.1, 1040, 2130, 3900]
    },
    {
        name: 'Promethium',
        appearance: 'metallic',
        atomic_mass: 145,
        boil: 3273,
        category: 'lanthanide',
        color: null,
        density: 7.26,
        discovered_by: 'Chien Shiung Wu',
        melt: 1315,
        molar_heat: null,
        named_by: 'Isotopes of promethium',
        number: 61,
        period: 6,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Promethium',
        spectral_img: null,
        summary: 'Promethium, originally prometheum, is a chemical element with the symbol Pm and atomic number 61. All of its isotopes are radioactive; it is one of only two such elements that are followed in the periodic table by elements with stable forms, a distinction shared with technetium. Chemically, promethium is a lanthanide, which forms salts when combined with other elements.',
        symbol: 'Pm',
        xpos: 7,
        ypos: 9,
        shells: [2, 8, 18, 23, 8, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f5 5s2 5p6 6s2',
        electron_affinity: 12.45,
        electronegativity_pauling: 1.13,
        ionization_energies: [540, 1050, 2150, 3970]
    },
    {
        name: 'Samarium',
        appearance: 'silvery white',
        atomic_mass: 150.362,
        boil: 2173,
        category: 'lanthanide',
        color: null,
        density: 7.52,
        discovered_by: 'Lecoq de Boisbaudran',
        melt: 1345,
        molar_heat: 29.54,
        named_by: null,
        number: 62,
        period: 6,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Samarium',
        spectral_img: null,
        summary: 'Samarium is a chemical element with symbol Sm and atomic number 62. It is a moderately hard silvery metal that readily oxidizes in air. Being a typical member of the lanthanide series, samarium usually assumes the oxidation state +3.',
        symbol: 'Sm',
        xpos: 8,
        ypos: 9,
        shells: [2, 8, 18, 24, 8, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f6 5s2 5p6 6s2',
        electron_affinity: 15.63,
        electronegativity_pauling: 1.17,
        ionization_energies: [544.5, 1070, 2260, 3990]
    },
    {
        name: 'Europium',
        appearance: null,
        atomic_mass: 151.9641,
        boil: 1802,
        category: 'lanthanide',
        color: null,
        density: 5.264,
        discovered_by: 'Eug\u00e8ne-Anatole Demar\u00e7ay',
        melt: 1099,
        molar_heat: 27.66,
        named_by: null,
        number: 63,
        period: 6,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Europium',
        spectral_img: null,
        summary: 'Europium is a chemical element with symbol Eu and atomic number 63. It was isolated in 1901 and is named after the continent of Europe. It is a moderately hard, silvery metal which readily oxidizes in air and water.',
        symbol: 'Eu',
        xpos: 9,
        ypos: 9,
        shells: [2, 8, 18, 25, 8, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f7 5s2 5p6 6s2',
        electron_affinity: 11.2,
        electronegativity_pauling: 1.2,
        ionization_energies: [547.1, 1085, 2404, 4120]
    },
    {
        name: 'Gadolinium',
        appearance: 'silvery white',
        atomic_mass: 157.253,
        boil: 3273,
        category: 'lanthanide',
        color: null,
        density: 7.9,
        discovered_by: 'Jean Charles Galissard de Marignac',
        melt: 1585,
        molar_heat: 37.03,
        named_by: null,
        number: 64,
        period: 6,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Gadolinium',
        spectral_img: null,
        summary: 'Gadolinium is a chemical element with symbol Gd and atomic number 64. It is a silvery-white, malleable and ductile rare-earth metal. It is found in nature only in combined (salt) form.',
        symbol: 'Gd',
        xpos: 10,
        ypos: 9,
        shells: [2, 8, 18, 25, 9, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f7 5s2 5p6 5d1 6s2',
        electron_affinity: 13.22,
        electronegativity_pauling: 1.2,
        ionization_energies: [593.4, 1170, 1990, 4250]
    },
    {
        name: 'Terbium',
        appearance: 'silvery white',
        atomic_mass: 158.925352,
        boil: 3396,
        category: 'lanthanide',
        color: null,
        density: 8.23,
        discovered_by: 'Carl Gustaf Mosander',
        melt: 1629,
        molar_heat: 28.91,
        named_by: null,
        number: 65,
        period: 6,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Terbium',
        spectral_img: null,
        summary: 'Terbium is a chemical element with symbol Tb and atomic number 65. It is a silvery-white rare earth metal that is malleable, ductile and soft enough to be cut with a knife. Terbium is never found in nature as a free element, but it is contained in many minerals, including cerite, gadolinite, monazite, xenotime and euxenite.',
        symbol: 'Tb',
        xpos: 11,
        ypos: 9,
        shells: [2, 8, 18, 27, 8, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f9 5s2 5p6 6s2',
        electron_affinity: 112.4,
        electronegativity_pauling: 1.1,
        ionization_energies: [565.8, 1110, 2114, 3839]
    },
    {
        name: 'Dysprosium',
        appearance: 'silvery white',
        atomic_mass: 162.5001,
        boil: 2840,
        category: 'lanthanide',
        color: null,
        density: 8.54,
        discovered_by: 'Lecoq de Boisbaudran',
        melt: 1680,
        molar_heat: 27.7,
        named_by: null,
        number: 66,
        period: 6,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Dysprosium',
        spectral_img: null,
        summary: 'Dysprosium is a chemical element with the symbol Dy and atomic number 66. It is a rare earth element with a metallic silver luster. Dysprosium is never found in nature as a free element, though it is found in various minerals, such as xenotime.',
        symbol: 'Dy',
        xpos: 12,
        ypos: 9,
        shells: [2, 8, 18, 28, 8, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f10 5s2 5p6 6s2',
        electron_affinity: 33.96,
        electronegativity_pauling: 1.22,
        ionization_energies: [573.0, 1130, 2200, 3990]
    },
    {
        name: 'Holmium',
        appearance: 'silvery white',
        atomic_mass: 164.930332,
        boil: 2873,
        category: 'lanthanide',
        color: null,
        density: 8.79,
        discovered_by: 'Marc Delafontaine',
        melt: 1734,
        molar_heat: 27.15,
        named_by: null,
        number: 67,
        period: 6,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Holmium',
        spectral_img: null,
        summary: 'Holmium is a chemical element with symbol Ho and atomic number 67. Part of the lanthanide series, holmium is a rare earth element. Holmium was discovered by Swedish chemist Per Theodor Cleve.',
        symbol: 'Ho',
        xpos: 13,
        ypos: 9,
        shells: [2, 8, 18, 29, 8, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f11 5s2 5p6 6s2',
        electron_affinity: 32.61,
        electronegativity_pauling: 1.23,
        ionization_energies: [581.0, 1140, 2204, 4100]
    },
    {
        name: 'Erbium',
        appearance: 'silvery white',
        atomic_mass: 167.2593,
        boil: 3141,
        category: 'lanthanide',
        color: null,
        density: 9.066,
        discovered_by: 'Carl Gustaf Mosander',
        melt: 1802,
        molar_heat: 28.12,
        named_by: null,
        number: 68,
        period: 6,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Erbium',
        spectral_img: null,
        summary: 'Erbium is a chemical element in the lanthanide series, with symbol Er and atomic number 68. A silvery-white solid metal when artificially isolated, natural erbium is always found in chemical combination with other elements on Earth. As such, it is a rare earth element which is associated with several other rare elements in the mineral gadolinite from Ytterby in Sweden, where yttrium, ytterbium, and terbium were discovered.',
        symbol: 'Er',
        xpos: 14,
        ypos: 9,
        shells: [2, 8, 18, 30, 8, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f12 5s2 5p6 6s2',
        electron_affinity: 30.1,
        electronegativity_pauling: 1.24,
        ionization_energies: [589.3, 1150, 2194, 4120]
    },
    {
        name: 'Thulium',
        appearance: 'silvery gray',
        atomic_mass: 168.934222,
        boil: 2223,
        category: 'lanthanide',
        color: null,
        density: 9.32,
        discovered_by: 'Per Teodor Cleve',
        melt: 1818,
        molar_heat: 27.03,
        named_by: null,
        number: 69,
        period: 6,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Thulium',
        spectral_img: null,
        summary: 'Thulium is a chemical element with symbol Tm and atomic number 69. It is the thirteenth and antepenultimate (third-last) element in the lanthanide series. Like the other lanthanides, the most common oxidation state is +3, seen in its oxide, halides and other compounds.',
        symbol: 'Tm',
        xpos: 15,
        ypos: 9,
        shells: [2, 8, 18, 31, 8, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f13 5s2 5p6 6s2',
        electron_affinity: 99,
        electronegativity_pauling: 1.25,
        ionization_energies: [596.7, 1160, 2285, 4120]
    },
    {
        name: 'Ytterbium',
        appearance: null,
        atomic_mass: 173.0451,
        boil: 1469,
        category: 'lanthanide',
        color: null,
        density: 6.9,
        discovered_by: 'Jean Charles Galissard de Marignac',
        melt: 1097,
        molar_heat: 26.74,
        named_by: null,
        number: 70,
        period: 6,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Ytterbium',
        spectral_img: null,
        summary: 'Ytterbium is a chemical element with symbol Yb and atomic number 70. It is the fourteenth and penultimate element in the lanthanide series, which is the basis of the relative stability of its +2 oxidation state. However, like the other lanthanides, its most common oxidation state is +3, seen in its oxide, halides and other compounds.',
        symbol: 'Yb',
        xpos: 16,
        ypos: 9,
        shells: [2, 8, 18, 32, 8, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 6s2',
        electron_affinity: -1.93,
        electronegativity_pauling: 1.1,
        ionization_energies: [603.4, 1174.8, 2417, 4203]
    },
    {
        name: 'Lutetium',
        appearance: 'silvery white',
        atomic_mass: 174.96681,
        boil: 3675,
        category: 'lanthanide',
        color: null,
        density: 9.841,
        discovered_by: 'Georges Urbain',
        melt: 1925,
        molar_heat: 26.86,
        named_by: null,
        number: 71,
        period: 6,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Lutetium',
        spectral_img: null,
        summary: 'Lutetium is a chemical element with symbol Lu and atomic number 71. It is a silvery white metal, which resists corrosion in dry, but not in moist air. It is considered the first element of the 6th-period transition metals and the last element in the lanthanide series, and is traditionally counted among the rare earths.',
        symbol: 'Lu',
        xpos: 17,
        ypos: 9,
        shells: [2, 8, 18, 32, 9, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d1 6s2',
        electron_affinity: 33.4,
        electronegativity_pauling: 1.27,
        ionization_energies: [523.5, 1340, 2022.3, 4370, 6445]
    },
    {
        name: 'Actinium',
        appearance: null,
        atomic_mass: 227,
        boil: 3500,
        category: 'actinide',
        color: null,
        density: 10,
        discovered_by: 'Friedrich Oskar Giesel',
        melt: 1500,
        molar_heat: 27.2,
        named_by: null,
        number: 89,
        period: 7,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Actinium',
        spectral_img: null,
        summary: 'Actinium is a radioactive chemical element with symbol Ac (not to be confused with the abbreviation for an acetyl group) and atomic number 89, which was discovered in 1899. It was the first non-primordial radioactive element to be isolated. Polonium, radium and radon were observed before actinium, but they were not isolated until 1902.',
        symbol: 'Ac',
        xpos: 3,
        ypos: 10,
        shells: [2, 8, 18, 32, 18, 9, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 6s2 6p6 6d1 7s2',
        electron_affinity: 33.77,
        electronegativity_pauling: 1.1,
        ionization_energies: [499, 1170]
    },
    {
        name: 'Thorium',
        appearance: 'silvery, often with black tarnish',
        atomic_mass: 232.03774,
        boil: 5061,
        category: 'actinide',
        color: null,
        density: 11.724,
        discovered_by: 'J\u00f6ns Jakob Berzelius',
        melt: 2023,
        molar_heat: 26.23,
        named_by: null,
        number: 90,
        period: 7,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Thorium',
        spectral_img: null,
        summary: 'Thorium is a chemical element with symbol Th and atomic number 90. A radioactive actinide metal, thorium is one of only two significantly radioactive elements that still occur naturally in large quantities as a primordial element (the other being uranium). It was discovered in 1828 by the Norwegian Reverend and amateur mineralogist Morten Thrane Esmark and identified by the Swedish chemist J\u00f6ns Jakob Berzelius, who named it after Thor, the Norse god of thunder.',
        symbol: 'Th',
        xpos: 4,
        ypos: 10,
        shells: [2, 8, 18, 32, 18, 10, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 6s2 6p6 6d2 7s2',
        electron_affinity: 112.72,
        electronegativity_pauling: 1.3,
        ionization_energies: [587, 1110, 1930, 2780]
    },
    {
        name: 'Protactinium',
        appearance: 'bright, silvery metallic luster',
        atomic_mass: 231.035882,
        boil: 4300,
        category: 'actinide',
        color: null,
        density: 15.37,
        discovered_by: 'William Crookes',
        melt: 1841,
        molar_heat: null,
        named_by: 'Otto Hahn',
        number: 91,
        period: 7,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Protactinium',
        spectral_img: null,
        summary: 'Protactinium is a chemical element with symbol Pa and atomic number 91. It is a dense, silvery-gray metal which readily reacts with oxygen, water vapor and inorganic acids. It forms various chemical compounds where protactinium is usually present in the oxidation state +5, but can also assume +4 and even +2 or +3 states.',
        symbol: 'Pa',
        xpos: 5,
        ypos: 10,
        shells: [2, 8, 18, 32, 20, 9, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f2 6s2 6p6 6d1 7s2',
        electron_affinity: 53.03,
        electronegativity_pauling: 1.5,
        ionization_energies: [568]
    },
    {
        name: 'Uranium',
        appearance: null,
        atomic_mass: 238.028913,
        boil: 4404,
        category: 'actinide',
        color: null,
        density: 19.1,
        discovered_by: 'Martin Heinrich Klaproth',
        melt: 1405.3,
        molar_heat: 27.665,
        named_by: null,
        number: 92,
        period: 7,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Uranium',
        spectral_img: null,
        summary: 'Uranium is a chemical element with symbol U and atomic number 92. It is a silvery-white metal in the actinide series of the periodic table. A uranium atom has 92 protons and 92 electrons, of which 6 are valence electrons.',
        symbol: 'U',
        xpos: 6,
        ypos: 10,
        shells: [2, 8, 18, 32, 21, 9, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f3 6s2 6p6 6d1 7s2',
        electron_affinity: 50.94,
        electronegativity_pauling: 1.38,
        ionization_energies: [597.6, 1420]
    },
    {
        name: 'Neptunium',
        appearance: 'silvery metallic',
        atomic_mass: 237,
        boil: 4447,
        category: 'actinide',
        color: null,
        density: 20.45,
        discovered_by: 'Edwin McMillan',
        melt: 912,
        molar_heat: 29.46,
        named_by: null,
        number: 93,
        period: 7,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Neptunium',
        spectral_img: null,
        summary: 'Neptunium is a chemical element with symbol Np and atomic number 93. A radioactive actinide metal, neptunium is the first transuranic element. Its position in the periodic table just after uranium, named after the planet Uranus, led to it being named after Neptune, the next planet beyond Uranus.',
        symbol: 'Np',
        xpos: 7,
        ypos: 10,
        shells: [2, 8, 18, 32, 22, 9, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f4 6s2 6p6 6d1 7s2',
        electron_affinity: 45.85,
        electronegativity_pauling: 1.36,
        ionization_energies: [604.5]
    },
    {
        name: 'Plutonium',
        appearance: 'silvery white, tarnishing to dark gray in air',
        atomic_mass: 244,
        boil: 3505,
        category: 'actinide',
        color: null,
        density: 19.816,
        discovered_by: 'Glenn T. Seaborg',
        melt: 912.5,
        molar_heat: 35.5,
        named_by: null,
        number: 94,
        period: 7,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Plutonium',
        spectral_img: null,
        summary: 'Plutonium is a transuranic radioactive chemical element with symbol Pu and atomic number 94. It is an actinide metal of silvery-gray appearance that tarnishes when exposed to air, and forms a dull coating when oxidized. The element normally exhibits six allotropes and four oxidation states.',
        symbol: 'Pu',
        xpos: 8,
        ypos: 10,
        shells: [2, 8, 18, 32, 24, 8, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f6 6s2 6p6 7s2',
        electron_affinity: -48.33,
        electronegativity_pauling: 1.28,
        ionization_energies: [584.7]
    },
    {
        name: 'Americium',
        appearance: 'silvery white',
        atomic_mass: 243,
        boil: 2880,
        category: 'actinide',
        color: null,
        density: 12,
        discovered_by: 'Glenn T. Seaborg',
        melt: 1449,
        molar_heat: 62.7,
        named_by: null,
        number: 95,
        period: 7,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Americium',
        spectral_img: 'https://en.wikipedia.org/wiki/File:Americium_spectrum_visible.png',
        summary: 'Americium is a radioactive transuranic chemical element with symbol Am and atomic number 95. This member of the actinide series is located in the periodic table under the lanthanide element europium, and thus by analogy was named after the Americas. Americium was first produced in 1944 by the group of Glenn T.Seaborg from Berkeley, California, at the metallurgical laboratory of University of Chicago.',
        symbol: 'Am',
        xpos: 9,
        ypos: 10,
        shells: [2, 8, 18, 32, 25, 8, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f7 6s2 6p6 7s2',
        electron_affinity: 9.93,
        electronegativity_pauling: 1.13,
        ionization_energies: [578]
    },
    {
        name: 'Curium',
        appearance: 'silvery metallic, glows purple in the dark',
        atomic_mass: 247,
        boil: 3383,
        category: 'actinide',
        color: null,
        density: 13.51,
        discovered_by: 'Glenn T. Seaborg',
        melt: 1613,
        molar_heat: null,
        named_by: null,
        number: 96,
        period: 7,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Curium',
        spectral_img: null,
        summary: 'Curium is a transuranic radioactive chemical element with symbol Cm and atomic number 96. This element of the actinide series was named after Marie and Pierre Curie \u2013 both were known for their research on radioactivity. Curium was first intentionally produced and identified in July 1944 by the group of Glenn T. Seaborg at the University of California, Berkeley.',
        symbol: 'Cm',
        xpos: 10,
        ypos: 10,
        shells: [2, 8, 18, 32, 25, 9, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f7 6s2 6p6 6d1 7s2',
        electron_affinity: 27.17,
        electronegativity_pauling: 1.28,
        ionization_energies: [581]
    },
    {
        name: 'Berkelium',
        appearance: 'silvery',
        atomic_mass: 247,
        boil: 2900,
        category: 'actinide',
        color: null,
        density: 14.78,
        discovered_by: 'Lawrence Berkeley National Laboratory',
        melt: 1259,
        molar_heat: null,
        named_by: null,
        number: 97,
        period: 7,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Berkelium',
        spectral_img: null,
        summary: 'Berkelium is a transuranic radioactive chemical element with symbol Bk and atomic number 97. It is a member of the actinide and transuranium element series. It is named after the city of Berkeley, California, the location of the University of California Radiation Laboratory where it was discovered in December 1949.',
        symbol: 'Bk',
        xpos: 11,
        ypos: 10,
        shells: [2, 8, 18, 32, 27, 8, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f9 6s2 6p6 7s2',
        electron_affinity: -165.24,
        electronegativity_pauling: 1.3,
        ionization_energies: [601]
    },
    {
        name: 'Californium',
        appearance: 'silvery',
        atomic_mass: 251,
        boil: 1743,
        category: 'actinide',
        color: null,
        density: 15.1,
        discovered_by: 'Lawrence Berkeley National Laboratory',
        melt: 1173,
        molar_heat: null,
        named_by: null,
        number: 98,
        period: 7,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Californium',
        spectral_img: null,
        summary: 'Californium is a radioactive metallic chemical element with symbol Cf and atomic number 98. The element was first made in 1950 at the University of California Radiation Laboratory in Berkeley, by bombarding curium with alpha particles (helium-4 ions). It is an actinide element, the sixth transuranium element to be synthesized, and has the second-highest atomic mass of all the elements that have been produced in amounts large enough to see with the unaided eye (after einsteinium).',
        symbol: 'Cf',
        xpos: 12,
        ypos: 10,
        shells: [2, 8, 18, 32, 28, 8, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f10 6s2 6p6 7s2',
        electron_affinity: -97.31,
        electronegativity_pauling: 1.3,
        ionization_energies: [608]
    },
    {
        name: 'Einsteinium',
        appearance: 'silver-colored',
        atomic_mass: 252,
        boil: 1269,
        category: 'actinide',
        color: null,
        density: 8.84,
        discovered_by: 'Lawrence Berkeley National Laboratory',
        melt: 1133,
        molar_heat: null,
        named_by: null,
        number: 99,
        period: 7,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Einsteinium',
        spectral_img: null,
        summary: 'Einsteinium is a synthetic element with symbol Es and atomic number 99. It is the seventh transuranic element, and an actinide. Einsteinium was discovered as a component of the debris of the first hydrogen bomb explosion in 1952, and named after Albert Einstein.',
        symbol: 'Es',
        xpos: 13,
        ypos: 10,
        shells: [2, 8, 18, 32, 29, 8, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f11 6s2 6p6 7s2',
        electron_affinity: -28.6,
        electronegativity_pauling: 1.3,
        ionization_energies: [619]
    },
    {
        name: 'Fermium',
        appearance: null,
        atomic_mass: 257,
        boil: null,
        category: 'actinide',
        color: null,
        density: null,
        discovered_by: 'Lawrence Berkeley National Laboratory',
        melt: 1800,
        molar_heat: null,
        named_by: null,
        number: 100,
        period: 7,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Fermium',
        spectral_img: null,
        summary: 'Fermium is a synthetic element with symbol Fm and atomic number 100. It is a member of the actinide series. It is the heaviest element that can be formed by neutron bombardment of lighter elements, and hence the last element that can be prepared in macroscopic quantities, although pure fermium metal has not yet been prepared.',
        symbol: 'Fm',
        xpos: 14,
        ypos: 10,
        shells: [2, 8, 18, 32, 30, 8, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f12 6s2 6p6 7s2',
        electron_affinity: 33.96,
        electronegativity_pauling: 1.3,
        ionization_energies: [627]
    },
    {
        name: 'Mendelevium',
        appearance: null,
        atomic_mass: 258,
        boil: null,
        category: 'actinide',
        color: null,
        density: null,
        discovered_by: 'Lawrence Berkeley National Laboratory',
        melt: 1100,
        molar_heat: null,
        named_by: null,
        number: 101,
        period: 7,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Mendelevium',
        spectral_img: null,
        summary: 'Mendelevium is a synthetic element with chemical symbol Md (formerly Mv) and atomic number 101. A metallic radioactive transuranic element in the actinide series, it is the first element that currently cannot be produced in macroscopic quantities through neutron bombardment of lighter elements. It is the antepenultimate actinide and the ninth transuranic element.',
        symbol: 'Md',
        xpos: 15,
        ypos: 10,
        shells: [2, 8, 18, 32, 31, 8, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f13 6s2 6p6 7s2',
        electron_affinity: 93.91,
        electronegativity_pauling: 1.3,
        ionization_energies: [635]
    },
    {
        name: 'Nobelium',
        appearance: null,
        atomic_mass: 259,
        boil: null,
        category: 'actinide',
        color: null,
        density: null,
        discovered_by: 'Joint Institute for Nuclear Research',
        melt: 1100,
        molar_heat: null,
        named_by: null,
        number: 102,
        period: 7,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Nobelium',
        spectral_img: null,
        summary: 'Nobelium is a synthetic chemical element with symbol No and atomic number 102. It is named in honor of Alfred Nobel, the inventor of dynamite and benefactor of science. A radioactive metal, it is the tenth transuranic element and is the penultimate member of the actinide series.',
        symbol: 'No',
        xpos: 16,
        ypos: 10,
        shells: [2, 8, 18, 32, 32, 8, 2],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f14 6s2 6p6 7s2',
        electron_affinity: -223.22,
        electronegativity_pauling: 1.3,
        ionization_energies: [642]
    },
    {
        name: 'Lawrencium',
        appearance: null,
        atomic_mass: 266,
        boil: null,
        category: 'actinide',
        color: null,
        density: null,
        discovered_by: 'Lawrence Berkeley National Laboratory',
        melt: 1900,
        molar_heat: null,
        named_by: null,
        number: 103,
        period: 7,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Lawrencium',
        spectral_img: null,
        summary: 'Lawrencium is a synthetic chemical element with chemical symbol Lr (formerly Lw) and atomic number 103. It is named in honor of Ernest Lawrence, inventor of the cyclotron, a device that was used to discover many artificial radioactive elements. A radioactive metal, lawrencium is the eleventh transuranic element and is also the final member of the actinide series.',
        symbol: 'Lr',
        xpos: 17,
        ypos: 10,
        shells: [2, 8, 18, 32, 32, 8, 3],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f14 6s2 6p6 7s2 7p1',
        electron_affinity: -30.04,
        electronegativity_pauling: 1.3,
        ionization_energies: [470]
    },
    {
        name: 'Ununennium',
        appearance: null,
        atomic_mass: 315,
        boil: 630,
        category: 'unknown',
        category_2: 'alkali metal',
        color: null,
        density: 3,
        discovered_by: 'GSI Helmholtz Centre for Heavy Ion Research',
        melt: null,
        molar_heat: null,
        named_by: null,
        number: 119,
        period: 8,
        phase: 'Solid',
        source: 'https://en.wikipedia.org/wiki/Ununennium',
        spectral_img: null,
        summary: 'Ununennium, also known as eka-francium or simply element 119, is the hypothetical chemical element with symbol Uue and atomic number 119. Ununennium and Uue are the temporary systematic IUPAC name and symbol respectively, until a permanent name is decided upon. In the periodic table of the elements, it is expected to be an s-block element, an alkali metal, and the first element in the eighth period.',
        symbol: 'Uue',
        xpos: 1,
        ypos: 8,
        shells: [2, 8, 18, 32, 32, 18, 8, 1],
        electron_configuration: '1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 4f14 5s2 5p6 5d10 5f14 6s2 6p6 6d10 7s2 7p6 8s1',
        electron_affinity: 63.87,
        electronegativity_pauling: null,
        ionization_energies: []
    }
].slice(0, 120);
const TABLE_DICO_V2 = TABLE_V2.reduce((acc, el) => {
    acc[el.symbol] = el;
    return acc;
}, {});
Object.seal(TABLE_DICO_V2);

const TABLE = [
    {
        class: 'element-non-metal',
        symbol: 'H',
        elementNumber: '1'
    },
    {
        class: 'element-noble-gas',
        symbol: 'He',
        elementNumber: '2'
    },
    {
        class: 'element-alkali-metal',
        symbol: 'Li',
        elementNumber: '3'
    },
    {
        class: 'element-alkali-earth-metal',
        symbol: 'Be',
        elementNumber: '4'
    },
    {
        class: 'element-metalloid',
        symbol: 'B',
        elementNumber: '5'
    },
    {
        class: 'element-non-metal',
        symbol: 'C',
        elementNumber: '6'
    },
    {
        class: 'element-non-metal',
        symbol: 'N',
        elementNumber: '7'
    },
    {
        class: 'element-non-metal',
        symbol: 'O',
        elementNumber: '8'
    },
    {
        class: 'element-halogen',
        symbol: 'F',
        elementNumber: '9'
    },
    {
        class: 'element-noble-gas',
        symbol: 'Ne',
        elementNumber: '10'
    },
    {
        class: 'element-alkali-metal',
        symbol: 'Na',
        elementNumber: '11'
    },
    {
        class: 'element-alkali-earth-metal',
        symbol: 'Mg',
        elementNumber: '12'
    },
    {
        class: 'element-metal',
        symbol: 'Al',
        elementNumber: '13'
    },
    {
        class: 'element-metalloid',
        symbol: 'Si',
        elementNumber: '14'
    },
    {
        class: 'element-non-metal',
        symbol: 'P',
        elementNumber: '15'
    },
    {
        class: 'element-non-metal',
        symbol: 'S',
        elementNumber: '16'
    },
    {
        class: 'element-halogen',
        symbol: 'Cl',
        elementNumber: '17'
    },
    {
        class: 'element-noble-gas',
        symbol: 'Ar',
        elementNumber: '18'
    },
    {
        class: 'element-alkali-metal',
        symbol: 'K',
        elementNumber: '19'
    },
    {
        class: 'element-alkali-earth-metal',
        symbol: 'Ca',
        elementNumber: '20'
    },
    {
        class: 'element-transition-metal',
        symbol: 'Sc',
        elementNumber: '21'
    },
    {
        class: 'element-transition-metal',
        symbol: 'Ti',
        elementNumber: '22'
    },
    {
        class: 'element-transition-metal',
        symbol: 'V',
        elementNumber: '23'
    },
    {
        class: 'element-transition-metal',
        symbol: 'Cr',
        elementNumber: '24'
    },
    {
        class: 'element-transition-metal',
        symbol: 'Mn',
        elementNumber: '25'
    },
    {
        class: 'element-transition-metal',
        symbol: 'Fe',
        elementNumber: '26'
    },
    {
        class: 'element-transition-metal',
        symbol: 'Co',
        elementNumber: '27'
    },
    {
        class: 'element-transition-metal',
        symbol: 'Ni',
        elementNumber: '28'
    },
    {
        class: 'element-transition-metal',
        symbol: 'Cu',
        elementNumber: '29'
    },
    {
        class: 'element-metal',
        symbol: 'Zn',
        elementNumber: '30'
    },
    {
        class: 'element-metal',
        symbol: 'Ga',
        elementNumber: '31'
    },
    {
        class: 'element-metalloid',
        symbol: 'Ge',
        elementNumber: '32'
    },
    {
        class: 'element-metalloid',
        symbol: 'As',
        elementNumber: '33'
    },
    {
        class: 'element-non-metal',
        symbol: 'Se',
        elementNumber: '34'
    },
    {
        class: 'element-halogen',
        symbol: 'Br',
        elementNumber: '35'
    },
    {
        class: 'element-noble-gas',
        symbol: 'Kr',
        elementNumber: '36'
    },
    {
        class: 'element-alkali-metal',
        symbol: 'Rb',
        elementNumber: '37'
    },
    {
        class: 'element-alkali-earth-metal',
        symbol: 'Sr',
        elementNumber: '38'
    },
    {
        class: 'element-transition-metal',
        symbol: 'Y',
        elementNumber: '39'
    },
    {
        class: 'element-transition-metal',
        symbol: 'Zr',
        elementNumber: '40'
    },
    {
        class: 'element-transition-metal',
        symbol: 'Nb',
        elementNumber: '41'
    },
    {
        class: 'element-transition-metal',
        symbol: 'Mo',
        elementNumber: '42'
    },
    {
        class: 'element-transition-metal',
        symbol: 'Tc',
        elementNumber: '43'
    },
    {
        class: 'element-transition-metal',
        symbol: 'Ru',
        elementNumber: '44'
    },
    {
        class: 'element-transition-metal',
        symbol: 'Rh',
        elementNumber: '45'
    },
    {
        class: 'element-transition-metal',
        symbol: 'Pd',
        elementNumber: '46'
    },
    {
        class: 'element-transition-metal',
        symbol: 'Ag',
        elementNumber: '47'
    },
    {
        class: 'element-metal',
        symbol: 'Cd',
        elementNumber: '48'
    },
    {
        class: 'element-metal',
        symbol: 'In',
        elementNumber: '49'
    },
    {
        class: 'element-metal',
        symbol: 'Sn',
        elementNumber: '50'
    },
    {
        class: 'element-metalloid',
        symbol: 'Sb',
        elementNumber: '51'
    },
    {
        class: 'element-metalloid',
        symbol: 'Te',
        elementNumber: '52'
    },
    {
        class: 'element-halogen',
        symbol: 'I',
        elementNumber: '53'
    },
    {
        class: 'element-noble-gas',
        symbol: 'Xe',
        elementNumber: '54'
    },
    {
        class: 'element-alkali-metal',
        symbol: 'Cs',
        elementNumber: '55'
    },
    {
        class: 'element-alkali-earth-metal',
        symbol: 'Ba',
        elementNumber: '56'
    },
    {
        class: 'element-lanthanoid-transitional-metal',
        symbol: 'La-Lu',
        elementNumber: '57-71'
    },
    {
        class: 'element-transition-metal',
        symbol: 'Hf',
        elementNumber: '72'
    },
    {
        class: 'element-transition-metal',
        symbol: 'Ta',
        elementNumber: '73'
    },
    {
        class: 'element-transition-metal',
        symbol: 'W',
        elementNumber: '74'
    },
    {
        class: 'element-transition-metal',
        symbol: 'Re',
        elementNumber: '75'
    },
    {
        class: 'element-transition-metal',
        symbol: 'Os',
        elementNumber: '76'
    },
    {
        class: 'element-transition-metal',
        symbol: 'Ir',
        elementNumber: '77'
    },
    {
        class: 'element-transition-metal',
        symbol: 'Pt',
        elementNumber: '78'
    },
    {
        class: 'element-transition-metal',
        symbol: 'Au',
        elementNumber: '79'
    },
    {
        class: 'element-metal',
        symbol: 'Hg',
        elementNumber: '80'
    },
    {
        class: 'element-metal',
        symbol: 'Tl',
        elementNumber: '81'
    },
    {
        class: 'element-metal',
        symbol: 'Pb',
        elementNumber: '82'
    },
    {
        class: 'element-metalloid',
        symbol: 'Bi',
        elementNumber: '83'
    },
    {
        class: 'element-metalloid',
        symbol: 'Po',
        elementNumber: '84'
    },
    {
        class: 'element-halogen',
        symbol: 'At',
        elementNumber: '85'
    },
    {
        class: 'element-noble-gas',
        symbol: 'Rn',
        elementNumber: '86'
    },
    {
        class: 'element-alkali-metal',
        symbol: 'Fr',
        elementNumber: '87'
    },
    {
        class: 'element-alkali-earth-metal',
        symbol: 'Ra',
        elementNumber: '88'
    },
    {
        class: 'element-actinoid-transitional-metal',
        symbol: 'Ac-Lr',
        elementNumber: '89-103'
    },
    {
        class: 'element-transition-metal',
        symbol: 'Rf',
        elementNumber: '104'
    },
    {
        class: 'element-transition-metal',
        symbol: 'Db',
        elementNumber: '105'
    },
    {
        class: 'element-transition-metal',
        symbol: 'Sg',
        elementNumber: '106'
    },
    {
        class: 'element-transition-metal',
        symbol: 'Bh',
        elementNumber: '107'
    },
    {
        class: 'element-transition-metal',
        symbol: 'Hs',
        elementNumber: '108'
    },
    {
        class: 'element-transition-metal',
        symbol: 'Mt',
        elementNumber: '109'
    },
    {
        class: 'element-transition-metal',
        symbol: 'Ds',
        elementNumber: '110'
    },
    {
        class: 'element-transition-metal',
        symbol: 'Rg',
        elementNumber: '111'
    },
    {
        class: 'element-transition-metal',
        symbol: 'Cn',
        elementNumber: '112'
    },
    {
        class: 'element-lanthoid',
        symbol: 'La',
        elementNumber: '57'
    },
    {
        class: 'element-lanthoid',
        symbol: 'Ce',
        elementNumber: '58'
    },
    {
        class: 'element-lanthoid',
        symbol: 'Pr',
        elementNumber: '59'
    },
    {
        class: 'element-lanthoid',
        symbol: 'Nd',
        elementNumber: '60'
    },
    {
        class: 'element-lanthoid',
        symbol: 'Pm',
        elementNumber: '61'
    },
    {
        class: 'element-lanthoid',
        symbol: 'Sm',
        elementNumber: '62'
    },
    {
        class: 'element-lanthoid',
        symbol: 'Eu',
        elementNumber: '63'
    },
    {
        class: 'element-lanthoid',
        symbol: 'Gd',
        elementNumber: '64'
    },
    {
        class: 'element-lanthoid',
        symbol: 'Tb',
        elementNumber: '65'
    },
    {
        class: 'element-lanthoid',
        symbol: 'Dy',
        elementNumber: '66'
    },
    {
        class: 'element-lanthoid',
        symbol: 'Ho',
        elementNumber: '67'
    },
    {
        class: 'element-lanthoid',
        symbol: 'Er',
        elementNumber: '68'
    },
    {
        class: 'element-lanthoid',
        symbol: 'Tm',
        elementNumber: '69'
    },
    {
        class: 'element-lanthoid',
        symbol: 'Yb',
        elementNumber: '70'
    },
    {
        class: 'element-lanthoid',
        symbol: 'Lu',
        elementNumber: '71'
    },
    {
        class: 'element-actinoid',
        symbol: 'Ac',
        elementNumber: '89'
    },
    {
        class: 'element-actinoid',
        symbol: 'Th',
        elementNumber: '90'
    },
    {
        class: 'element-actinoid',
        symbol: 'Pa',
        elementNumber: '91'
    },
    {
        class: 'element-actinoid',
        symbol: 'U',
        elementNumber: '92'
    },
    {
        class: 'element-actinoid',
        symbol: 'Np',
        elementNumber: '93'
    },
    {
        class: 'element-actinoid',
        symbol: 'Pu',
        elementNumber: '94'
    },
    {
        class: 'element-actinoid',
        symbol: 'Am',
        elementNumber: '95'
    },
    {
        class: 'element-actinoid',
        symbol: 'Cm',
        elementNumber: '96'
    },
    {
        class: 'element-actinoid',
        symbol: 'Bk',
        elementNumber: '97'
    },
    {
        class: 'element-actinoid',
        symbol: 'Cf',
        elementNumber: '98'
    },
    {
        class: 'element-actinoid',
        symbol: 'Es',
        elementNumber: '99'
    },
    {
        class: 'element-actinoid',
        symbol: 'Fm',
        elementNumber: '100'
    },
    {
        class: 'element-actinoid',
        symbol: 'Md',
        elementNumber: '101'
    },
    {
        class: 'element-actinoid',
        symbol: 'No',
        elementNumber: '102'
    },
    {
        class: 'element-actinoid',
        symbol: 'Lr',
        elementNumber: '103'
    }
];
Object.seal(TABLE);
const TABLE_DICO_CLASS = TABLE.reduce((acc, el) => {
    acc[el.symbol] = el.class;
    return acc;
}, {});
Object.seal(TABLE_DICO_CLASS);

var DISPLAY_MODE;
(function (DISPLAY_MODE) {
    /** only display number-symbol-name */
    DISPLAY_MODE["SIMPLE"] = "simple";
    /** displays other properties of the element */
    DISPLAY_MODE["DETAILED"] = "detailed";
})(DISPLAY_MODE || (DISPLAY_MODE = {}));
//TODO(chab) use render props to customize layout
function PeriodicElement({ element, displayMode = DISPLAY_MODE.SIMPLE, hidden = false, enabled = false, disabled = false, color, onElementClicked = () => { }, onElementMouseOver = () => { }, onElementMouseLeave = () => { } }) {
    const handleClick = (element) => !element.hasGroup && onElementClicked(element);
    const handleHover = (element) => onElementMouseOver(element);
    const handleLeave = (element) => onElementMouseLeave(element);
    const cl = {
        enabled: !hidden && enabled && !disabled,
        disabled: !hidden && disabled,
        hidden: hidden
    };
    if (typeof element === 'string') {
        if (!TABLE_DICO_V2[element]) {
            console.error('Element', element, ' not found');
            return createElement("div", null);
        }
        element = TABLE_DICO_V2[element];
    }
    return (createElement("button", { onClick: () => handleClick(element), onMouseOver: () => handleHover(element), onMouseLeave: () => handleLeave(element), style: color ? { background: color } : {}, className: `mat-element ${displayMode} ${TABLE_DICO_CLASS[element.symbol]} ${cl.hidden ? 'hidden' : ''} ${cl.enabled ? 'enabled' : ''}
          ${element.hasGroup ? 'mat-group' : ''}  ${cl.disabled ? 'disabled' : ''}`, disabled: cl.disabled || cl.hidden, "aria-disabled": cl.disabled, "aria-hidden": cl.hidden }, displayMode === DISPLAY_MODE.SIMPLE ? (createElement(Fragment, null,
        createElement("div", { className: "mat-number" }, element.number),
        createElement("div", { className: "mat-symbol" },
            " ",
            element.symbol))) : (createElement(Fragment, null,
        createElement("div", { className: "main-panel" },
            createElement("div", { className: "mat-number" }, element.number),
            createElement("div", { className: "mat-symbol" },
                " ",
                element.symbol),
            createElement("div", { className: "mat-name" }, element.name),
            !element.hasGroup && createElement("div", { className: "mat-weight" }, element.atomic_mass)),
        element.shells && !element.hasGroup && (createElement("div", { className: "mat-side-panel" }, element.shells.map((shell, idx) => (createElement("div", { key: idx }, shell)))))))));
}

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

function bisector(compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
}

function ascendingComparator(f) {
  return function(d, x) {
    return ascending(f(d), x);
  };
}

var ascendingBisect = bisector(ascending);
var bisectRight = ascendingBisect.right;

function extent(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  return [min, max];
}

var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

function ticks(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;

  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    start = Math.ceil(start / step);
    stop = Math.floor(stop / step);
    ticks = new Array(n = Math.ceil(stop - start + 1));
    while (++i < n) ticks[i] = (start + i) * step;
  } else {
    start = Math.floor(start * step);
    stop = Math.ceil(stop * step);
    ticks = new Array(n = Math.ceil(start - stop + 1));
    while (++i < n) ticks[i] = (start - i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
}

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}

function initRange(domain, range) {
  switch (arguments.length) {
    case 0: break;
    case 1: this.range(domain); break;
    default: this.range(range).domain(domain); break;
  }
  return this;
}

function initInterpolator(domain, interpolator) {
  switch (arguments.length) {
    case 0: break;
    case 1: this.interpolator(domain); break;
    default: this.interpolator(interpolator).domain(domain); break;
  }
  return this;
}

var prefix = "$";

function Map() {}

Map.prototype = map$1.prototype = {
  constructor: Map,
  has: function(key) {
    return (prefix + key) in this;
  },
  get: function(key) {
    return this[prefix + key];
  },
  set: function(key, value) {
    this[prefix + key] = value;
    return this;
  },
  remove: function(key) {
    var property = prefix + key;
    return property in this && delete this[property];
  },
  clear: function() {
    for (var property in this) if (property[0] === prefix) delete this[property];
  },
  keys: function() {
    var keys = [];
    for (var property in this) if (property[0] === prefix) keys.push(property.slice(1));
    return keys;
  },
  values: function() {
    var values = [];
    for (var property in this) if (property[0] === prefix) values.push(this[property]);
    return values;
  },
  entries: function() {
    var entries = [];
    for (var property in this) if (property[0] === prefix) entries.push({key: property.slice(1), value: this[property]});
    return entries;
  },
  size: function() {
    var size = 0;
    for (var property in this) if (property[0] === prefix) ++size;
    return size;
  },
  empty: function() {
    for (var property in this) if (property[0] === prefix) return false;
    return true;
  },
  each: function(f) {
    for (var property in this) if (property[0] === prefix) f(this[property], property.slice(1), this);
  }
};

function map$1(object, f) {
  var map = new Map;

  // Copy constructor.
  if (object instanceof Map) object.each(function(value, key) { map.set(key, value); });

  // Index array by numeric index or specified key function.
  else if (Array.isArray(object)) {
    var i = -1,
        n = object.length,
        o;

    if (f == null) while (++i < n) map.set(i, object[i]);
    else while (++i < n) map.set(f(o = object[i], i, object), o);
  }

  // Convert object to map.
  else if (object) for (var key in object) map.set(key, object[key]);

  return map;
}

function Set$1() {}

var proto = map$1.prototype;

Set$1.prototype = set.prototype = {
  constructor: Set$1,
  has: proto.has,
  add: function(value) {
    value += "";
    this[prefix + value] = value;
    return this;
  },
  remove: proto.remove,
  clear: proto.clear,
  values: proto.keys,
  size: proto.size,
  empty: proto.empty,
  each: proto.each
};

function set(object, f) {
  var set = new Set$1;

  // Copy constructor.
  if (object instanceof Set$1) object.each(function(value) { set.add(value); });

  // Otherwise, assume it’s an array.
  else if (object) {
    var i = -1, n = object.length;
    if (f == null) while (++i < n) set.add(object[i]);
    else while (++i < n) set.add(f(object[i], i, object));
  }

  return set;
}

var array = Array.prototype;

var map$2 = array.map;
var slice = array.slice;

function define(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}

function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex = /^#([0-9a-f]{3,8})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

define(Color, color, {
  copy: function(channels) {
    return Object.assign(new this.constructor, this, channels);
  },
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: color_formatHex, // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});

function color_formatHex() {
  return this.rgb().formatHex();
}

function color_formatHsl() {
  return hslConvert(this).formatHsl();
}

function color_formatRgb() {
  return this.rgb().formatRgb();
}

function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
      : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
      : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
      : l === 4 ? rgba((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
      : null) // invalid hex
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

define(Rgb, rgb, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (-0.5 <= this.r && this.r < 255.5)
        && (-0.5 <= this.g && this.g < 255.5)
        && (-0.5 <= this.b && this.b < 255.5)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex, // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));

function rgb_formatHex() {
  return "#" + hex(this.r) + hex(this.g) + hex(this.b);
}

function rgb_formatRgb() {
  var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
  return (a === 1 ? "rgb(" : "rgba(")
      + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
      + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
      + Math.max(0, Math.min(255, Math.round(this.b) || 0))
      + (a === 1 ? ")" : ", " + a + ")");
}

function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

define(Hsl, hsl, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "hsl(" : "hsla(")
        + (this.h || 0) + ", "
        + (this.s || 0) * 100 + "%, "
        + (this.l || 0) * 100 + "%"
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}

var deg2rad = Math.PI / 180;
var rad2deg = 180 / Math.PI;

var A = -0.14861,
    B = +1.78277,
    C = -0.29227,
    D = -0.90649,
    E = +1.97294,
    ED = E * D,
    EB = E * B,
    BC_DA = B * C - D * A;

function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Rgb)) o = rgbConvert(o);
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
      bl = b - l,
      k = (E * (g - l) - C * bl) / D,
      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
      h = s ? Math.atan2(k, bl) * rad2deg - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}

function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}

function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

define(Cubehelix, cubehelix, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * deg2rad,
        l = +this.l,
        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
        cosh = Math.cos(h),
        sinh = Math.sin(h);
    return new Rgb(
      255 * (l + a * (A * cosh + B * sinh)),
      255 * (l + a * (C * cosh + D * sinh)),
      255 * (l + a * (E * cosh)),
      this.opacity
    );
  }
}));

function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

function basis$1(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

function constant(x) {
  return function() {
    return x;
  };
}

function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : constant(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : constant(isNaN(a) ? b : a);
}

var rgb$1 = (function rgbGamma(y) {
  var color = gamma(y);

  function rgb$1(start, end) {
    var r = color((start = rgb(start)).r, (end = rgb(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb$1.gamma = rgbGamma;

  return rgb$1;
})(1);

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = rgb(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(basis$1);

function numberArray(a, b) {
  if (!b) b = [];
  var n = a ? Math.min(b.length, a.length) : 0,
      c = b.slice(),
      i;
  return function(t) {
    for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
}

function isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}

function genericArray(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = interpolateValue(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
}

function date(a, b) {
  var d = new Date;
  return a = +a, b = +b, function(t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
}

function interpolateNumber(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}

function object(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = interpolateValue(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
}

var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

function string(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: interpolateNumber(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
}

function interpolateValue(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? constant(b)
      : (t === "number" ? interpolateNumber
      : t === "string" ? ((c = color(b)) ? (b = c, rgb$1) : string)
      : b instanceof color ? rgb$1
      : b instanceof Date ? date
      : isNumberArray(b) ? numberArray
      : Array.isArray(b) ? genericArray
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object
      : interpolateNumber)(a, b);
}

function interpolateRound(a, b) {
  return a = +a, b = +b, function(t) {
    return Math.round(a * (1 - t) + b * t);
  };
}

function cubehelix$1(hue) {
  return (function cubehelixGamma(y) {
    y = +y;

    function cubehelix$1(start, end) {
      var h = hue((start = cubehelix(start)).h, (end = cubehelix(end)).h),
          s = nogamma(start.s, end.s),
          l = nogamma(start.l, end.l),
          opacity = nogamma(start.opacity, end.opacity);
      return function(t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + "";
      };
    }

    cubehelix$1.gamma = cubehelixGamma;

    return cubehelix$1;
  })(1);
}

cubehelix$1(hue);
var cubehelixLong = cubehelix$1(nogamma);

function constant$1(x) {
  return function() {
    return x;
  };
}

function number(x) {
  return +x;
}

var unit = [0, 1];

function identity$1(x) {
  return x;
}

function normalize(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : constant$1(isNaN(b) ? NaN : 0.5);
}

function clamper(domain) {
  var a = domain[0], b = domain[domain.length - 1], t;
  if (a > b) t = a, a = b, b = t;
  return function(x) { return Math.max(a, Math.min(b, x)); };
}

// normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
function bimap(domain, range, interpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
  else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function polymap(domain, range, interpolate) {
  var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }

  while (++i < j) {
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate(range[i], range[i + 1]);
  }

  return function(x) {
    var i = bisectRight(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .range(source.range())
      .interpolate(source.interpolate())
      .clamp(source.clamp())
      .unknown(source.unknown());
}

function transformer() {
  var domain = unit,
      range = unit,
      interpolate = interpolateValue,
      transform,
      untransform,
      unknown,
      clamp = identity$1,
      piecewise,
      output,
      input;

  function rescale() {
    piecewise = Math.min(domain.length, range.length) > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate)))(transform(clamp(x)));
  }

  scale.invert = function(y) {
    return clamp(untransform((input || (input = piecewise(range, domain.map(transform), interpolateNumber)))(y)));
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = map$2.call(_, number), clamp === identity$1 || (clamp = clamper(domain)), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = slice.call(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = slice.call(_), interpolate = interpolateRound, rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = _ ? clamper(domain) : identity$1, scale) : clamp !== identity$1;
  };

  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t, u) {
    transform = t, untransform = u;
    return rescale();
  };
}

function continuous(transform, untransform) {
  return transformer()(transform, untransform);
}

// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimal(1.23) returns ["123", 0].
function formatDecimal(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i, coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
}

function exponent(x) {
  return x = formatDecimal(Math.abs(x)), x ? x[1] : NaN;
}

function formatGroup(grouping, thousands) {
  return function(value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
}

function formatNumerals(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
}

// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}

formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
  this.align = specifier.align === undefined ? ">" : specifier.align + "";
  this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === undefined ? undefined : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === undefined ? "" : specifier.type + "";
}

FormatSpecifier.prototype.toString = function() {
  return this.fill
      + this.align
      + this.sign
      + this.symbol
      + (this.zero ? "0" : "")
      + (this.width === undefined ? "" : Math.max(1, this.width | 0))
      + (this.comma ? "," : "")
      + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0))
      + (this.trim ? "~" : "")
      + this.type;
};

// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
function formatTrim(s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".": i0 = i1 = i; break;
      case "0": if (i0 === 0) i0 = i; i1 = i; break;
      default: if (!+s[i]) break out; if (i0 > 0) i0 = 0; break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}

var prefixExponent;

function formatPrefixAuto(x, p) {
  var d = formatDecimal(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1],
      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
      n = coefficient.length;
  return i === n ? coefficient
      : i > n ? coefficient + new Array(i - n + 1).join("0")
      : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
      : "0." + new Array(1 - i).join("0") + formatDecimal(x, Math.max(0, p + i - 1))[0]; // less than 1y!
}

function formatRounded(x, p) {
  var d = formatDecimal(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
      : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
      : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}

var formatTypes = {
  "%": function(x, p) { return (x * 100).toFixed(p); },
  "b": function(x) { return Math.round(x).toString(2); },
  "c": function(x) { return x + ""; },
  "d": function(x) { return Math.round(x).toString(10); },
  "e": function(x, p) { return x.toExponential(p); },
  "f": function(x, p) { return x.toFixed(p); },
  "g": function(x, p) { return x.toPrecision(p); },
  "o": function(x) { return Math.round(x).toString(8); },
  "p": function(x, p) { return formatRounded(x * 100, p); },
  "r": formatRounded,
  "s": formatPrefixAuto,
  "X": function(x) { return Math.round(x).toString(16).toUpperCase(); },
  "x": function(x) { return Math.round(x).toString(16); }
};

function identity$2(x) {
  return x;
}

var map$3 = Array.prototype.map,
    prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

function formatLocale(locale) {
  var group = locale.grouping === undefined || locale.thousands === undefined ? identity$2 : formatGroup(map$3.call(locale.grouping, Number), locale.thousands + ""),
      currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "",
      currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "",
      decimal = locale.decimal === undefined ? "." : locale.decimal + "",
      numerals = locale.numerals === undefined ? identity$2 : formatNumerals(map$3.call(locale.numerals, String)),
      percent = locale.percent === undefined ? "%" : locale.percent + "",
      minus = locale.minus === undefined ? "-" : locale.minus + "",
      nan = locale.nan === undefined ? "NaN" : locale.nan + "";

  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);

    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        trim = specifier.trim,
        type = specifier.type;

    // The "n" type is an alias for ",g".
    if (type === "n") comma = true, type = "g";

    // The "" type, and any invalid type, is an alias for ".12~g".
    else if (!formatTypes[type]) precision === undefined && (precision = 12), trim = true, type = "g";

    // If zero fill is specified, padding goes after sign and before digits.
    if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = formatTypes[type],
        maybeSuffix = /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision === undefined ? 6
        : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
        : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i, n, c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Determine the sign. -0 is not less than 0, but 1 / -0 is!
        var valueNegative = value < 0 || 1 / value < 0;

        // Perform the initial formatting.
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);

        // Trim insignificant zeros.
        if (trim) value = formatTrim(value);

        // If a negative value rounds to zero after formatting, and no explicit positive sign is requested, hide the sign.
        if (valueNegative && +value === 0 && sign !== "+") valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? (sign === "(" ? sign : minus) : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<": value = valuePrefix + value + valueSuffix + padding; break;
        case "=": value = valuePrefix + padding + value + valueSuffix; break;
        case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
        default: value = padding + valuePrefix + value + valueSuffix; break;
      }

      return numerals(value);
    }

    format.toString = function() {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function(value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
}

var locale;
var format;
var formatPrefix;

defaultLocale({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""],
  minus: "-"
});

function defaultLocale(definition) {
  locale = formatLocale(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}

function precisionFixed(step) {
  return Math.max(0, -exponent(Math.abs(step)));
}

function precisionPrefix(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3 - exponent(Math.abs(step)));
}

function precisionRound(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, exponent(max) - exponent(step)) + 1;
}

function tickFormat(start, stop, count, specifier) {
  var step = tickStep(start, stop, count),
      precision;
  specifier = formatSpecifier(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = precisionPrefix(step, value))) specifier.precision = precision;
      return formatPrefix(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = precisionRound(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = precisionFixed(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return format(specifier);
}

function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    var d = domain();
    return tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
  };

  scale.nice = function(count) {
    if (count == null) count = 10;

    var d = domain(),
        i0 = 0,
        i1 = d.length - 1,
        start = d[i0],
        stop = d[i1],
        step;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }

    step = tickIncrement(start, stop, count);

    if (step > 0) {
      start = Math.floor(start / step) * step;
      stop = Math.ceil(stop / step) * step;
      step = tickIncrement(start, stop, count);
    } else if (step < 0) {
      start = Math.ceil(start * step) / step;
      stop = Math.floor(stop * step) / step;
      step = tickIncrement(start, stop, count);
    }

    if (step > 0) {
      d[i0] = Math.floor(start / step) * step;
      d[i1] = Math.ceil(stop / step) * step;
      domain(d);
    } else if (step < 0) {
      d[i0] = Math.ceil(start * step) / step;
      d[i1] = Math.floor(stop * step) / step;
      domain(d);
    }

    return scale;
  };

  return scale;
}

function linear$1() {
  var scale = continuous(identity$1, identity$1);

  scale.copy = function() {
    return copy(scale, linear$1());
  };

  initRange.apply(scale, arguments);

  return linearish(scale);
}

function transformer$1() {
  var x0 = 0,
      x1 = 1,
      t0,
      t1,
      k10,
      transform,
      interpolator = identity$1,
      clamp = false,
      unknown;

  function scale(x) {
    return isNaN(x = +x) ? unknown : interpolator(k10 === 0 ? 0.5 : (x = (transform(x) - t0) * k10, clamp ? Math.max(0, Math.min(1, x)) : x));
  }

  scale.domain = function(_) {
    return arguments.length ? (t0 = transform(x0 = +_[0]), t1 = transform(x1 = +_[1]), k10 = t0 === t1 ? 0 : 1 / (t1 - t0), scale) : [x0, x1];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t) {
    transform = t, t0 = t(x0), t1 = t(x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0);
    return scale;
  };
}

function copy$1(source, target) {
  return target
      .domain(source.domain())
      .interpolator(source.interpolator())
      .clamp(source.clamp())
      .unknown(source.unknown());
}

function sequential() {
  var scale = linearish(transformer$1()(identity$1));

  scale.copy = function() {
    return copy$1(scale, sequential());
  };

  return initInterpolator.apply(scale, arguments);
}

function colors(specifier) {
  var n = specifier.length / 6 | 0, colors = new Array(n), i = 0;
  while (i < n) colors[i] = "#" + specifier.slice(i * 6, ++i * 6);
  return colors;
}

function ramp(scheme) {
  return rgbBasis(scheme[scheme.length - 1]);
}

var scheme = new Array(3).concat(
  "deebf79ecae13182bd",
  "eff3ffbdd7e76baed62171b5",
  "eff3ffbdd7e76baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b"
).map(colors);

var Blues = ramp(scheme);

var scheme$1 = new Array(3).concat(
  "e5f5e0a1d99b31a354",
  "edf8e9bae4b374c476238b45",
  "edf8e9bae4b374c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b"
).map(colors);

var Greens = ramp(scheme$1);

var scheme$2 = new Array(3).concat(
  "efedf5bcbddc756bb1",
  "f2f0f7cbc9e29e9ac86a51a3",
  "f2f0f7cbc9e29e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d"
).map(colors);

var Purples = ramp(scheme$2);

var scheme$3 = new Array(3).concat(
  "fee0d2fc9272de2d26",
  "fee5d9fcae91fb6a4acb181d",
  "fee5d9fcae91fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d"
).map(colors);

var Reds = ramp(scheme$3);

var scheme$4 = new Array(3).concat(
  "fee6cefdae6be6550d",
  "feeddefdbe85fd8d3cd94701",
  "feeddefdbe85fd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704"
).map(colors);

var Oranges = ramp(scheme$4);

function cividis(t) {
  t = Math.max(0, Math.min(1, t));
  return "rgb("
      + Math.max(0, Math.min(255, Math.round(-4.54 - t * (35.34 - t * (2381.73 - t * (6402.7 - t * (7024.72 - t * 2710.57))))))) + ", "
      + Math.max(0, Math.min(255, Math.round(32.49 + t * (170.73 + t * (52.82 - t * (131.46 - t * (176.58 - t * 67.37))))))) + ", "
      + Math.max(0, Math.min(255, Math.round(81.24 + t * (442.36 - t * (2482.43 - t * (6167.24 - t * (6614.94 - t * 2475.67)))))))
      + ")";
}

var cubehelix$2 = cubehelixLong(cubehelix(300, 0.5, 0.0), cubehelix(-240, 0.5, 1.0));

function turbo(t) {
  t = Math.max(0, Math.min(1, t));
  return "rgb("
      + Math.max(0, Math.min(255, Math.round(34.61 + t * (1172.33 - t * (10793.56 - t * (33300.12 - t * (38394.49 - t * 14825.05))))))) + ", "
      + Math.max(0, Math.min(255, Math.round(23.31 + t * (557.33 + t * (1225.33 - t * (3574.96 - t * (1073.77 + t * 707.56))))))) + ", "
      + Math.max(0, Math.min(255, Math.round(27.2 + t * (3211.1 - t * (15327.97 - t * (27814 - t * (22569.18 - t * 6838.66)))))))
      + ")";
}

function ramp$1(range) {
  var n = range.length;
  return function(t) {
    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
}

var viridis = ramp$1(colors("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));

var magma = ramp$1(colors("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));

var inferno = ramp$1(colors("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));

var plasma = ramp$1(colors("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));

const PeriodicTableSpacer = (props) => {
    const detailedElement = useDetailedElement();
    let pluginComponent = props.plugin;
    if (props.disabled || !props.plugin) {
        pluginComponent = (React__default.createElement(React__default.Fragment, null,
            React__default.createElement("div", { className: "first-span" }),
            React__default.createElement("div", { className: "second-span" })));
    }
    return (React__default.createElement(React__default.Fragment, null,
        pluginComponent,
        React__default.createElement("div", { className: "element-description" }, detailedElement && (React__default.createElement(PeriodicElement, { displayMode: DISPLAY_MODE.DETAILED, disabled: false, enabled: false, hidden: false, color: undefined, element: TABLE_DICO_V2[detailedElement] }))),
        React__default.createElement("div", { className: "separator-span" }),
        React__default.createElement("div", { className: "first-lower-span" }),
        React__default.createElement("div", { className: "second-lower-span" })));
};

const DEFAULT_HEATMAP_COLOR = '#EDEEED';
const COLORSCHEME = {
    Viridis: viridis,
    Turbo: turbo,
    CubeHelix: cubehelix$2,
    Cividis: cividis,
    Inferno: inferno,
    Blues: Blues,
    Oranges: Oranges,
    Greens: Greens,
    Reds: Reds,
    Purples: Purples,
};
Object.freeze(COLORSCHEME);
var TableLayout;
(function (TableLayout) {
    TableLayout["SPACED"] = "spaced";
    TableLayout["COMPACT"] = "compact";
    TableLayout["MINI"] = "small";
    TableLayout["MAP"] = "map";
})(TableLayout || (TableLayout = {}));
const N_LEGEND_ITEMS = 10;
function computeHeatmap(h, max, min, scheme) {
    if (!h)
        return { linearScale: null, legendScale: null };
    const heatmapExtent = extent(Object.values(h));
    const legendPosition = linear$1().domain(heatmapExtent).range([0, 100]);
    if (COLORSCHEME[scheme]) {
        return {
            linearScale: sequential(COLORSCHEME[scheme]).domain(heatmapExtent),
            legendScale: sequential(COLORSCHEME[scheme]).domain([0, N_LEGEND_ITEMS]),
            legendPosition,
        };
    }
    const linearScale = linear$1().range([min, max]);
    linearScale.domain(heatmapExtent);
    const legendScale = linear$1().range([min, max]).domain([0, N_LEGEND_ITEMS]);
    return { linearScale, legendScale, legendPosition };
}
function Table({ disabledElement, enabledElement, hiddenElement, onElementClicked, onElementMouseOver, onElementMouseLeave = () => { }, forceTableLayout, heatmap, heatmapMax, heatmapMin, colorScheme, showSwitcher, selectorWidget, plugin, disabled, }) {
    const [isShown, setIsShown] = useState(true);
    const [legendPosition, setLegendPosition] = useState(-1);
    const isDesktop = useMediaQuery({ minWidth: 1436 });
    const isTablet = useMediaQuery({ minWidth: 900, maxWidth: 1436 });
    const isMobile = useMediaQuery({ maxWidth: 900 });
    // DO NOT REFACTORING USING || IT WILL CRASH THE APP, BECAUSE A DIFFERENT NUMBER OF HOOKS WILL BE
    // CALLED
    const isDesktopH = useMediaQuery({ minHeight: 670 });
    const isTabletH = useMediaQuery({ maxHeight: 670, minHeight: 400 });
    const isMobileH = useMediaQuery({ maxHeight: 400 });
    // we consider that either those properties are all defined, or not
    const { linearScale: heatmapscale, legendScale, legendPosition: legendPositionScale, } = useMemo(() => computeHeatmap(heatmap, heatmapMax, heatmapMin, colorScheme), [
        heatmapMax,
        heatmapMin,
        heatmap,
        colorScheme,
    ]);
    // TODO(chab) allow people to pass the number of subdivisions OR to have a continuous legend
    const legendItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    const onHover = (element) => {
        if (!hasHeatmap(heatmap)) {
            onElementMouseOver(element);
            return;
        }
        const value = heatmap[element.symbol];
        if (!value) {
            setLegendPosition(-1);
        }
        else {
            const legendPosition = legendPositionScale(value);
            setLegendPosition(legendPosition);
        }
        onElementMouseOver(element);
    };
    return (createElement("div", { className: 'table-legend-container' },
        createElement("div", { className: `table-container ${getLayout(isDesktop || isDesktopH, isTablet || isTabletH, isMobile || isMobileH, forceTableLayout)} ${isShown ? '' : 'elements-hidden'}` },
            createElement(PeriodicTableSpacer, { plugin: plugin, disabled: disabled }),
            TABLE_V2.map((element) => (createElement(PeriodicElement, { onElementMouseOver: (element) => onHover(element), onElementMouseLeave: (element) => {
                    onElementMouseLeave(element);
                }, onElementClicked: (element) => !DEFAULT_DISABLED_ELEMENTS[element.symbol] && onElementClicked(element), color: hasHeatmap(heatmap)
                    ? heatmap[element.symbol]
                        ? heatmapscale(heatmap[element.symbol])
                        : DEFAULT_HEATMAP_COLOR // TODO(maybe arbitrary color ?)
                    : null, key: `${element.symbol}--${element.number}`, hidden: hiddenElement[element.symbol], disabled: disabled ||
                    disabledElement[element.symbol] ||
                    DEFAULT_DISABLED_ELEMENTS[element.symbol], enabled: enabledElement[element.symbol], element: element })))),
        hasHeatmap(heatmap) && (createElement("div", { className: 'legend-container' },
            createElement("div", { className: 'table-legend' },
                legendItems.map((n) => (createElement("div", { key: `legend${n}`, className: 'legend-division', style: {
                        background: legendScale(n),
                        width: '10px',
                        height: `${100 / legendItems.length}%`,
                    } }, ' '))),
                createElement("div", { className: 'table-legend-pointer', style: {
                        position: 'absolute',
                        width: '12px',
                        height: '2px',
                        right: '-1px',
                        top: `${legendPosition}%`,
                        background: 'black',
                    } }))))));
}
function getLayout(isDesktop, isTablet, isMobile, tableLayout) {
    if (tableLayout)
        return tableLayout;
    if (isMobile) {
        return TableLayout.MINI;
    }
    if (isTablet) {
        return TableLayout.COMPACT;
    }
    if (isDesktop) {
        return TableLayout.SPACED;
    }
    return TableLayout.SPACED;
}
function hasHeatmap(heatmap) {
    return !!heatmap && Object.keys(heatmap).length > 0;
}
const DEFAULT_DISABLED_ELEMENTS = {
    Po: true,
    Rn: true,
    Ra: true,
    At: true,
    Fr: true,
    Rf: true,
    Db: true,
    Sg: true,
    Bh: true,
    Hs: true,
    Mt: true,
    Ds: true,
    Rg: true,
    Cn: true,
    Nh: true,
    Fl: true,
    Mc: true,
    Lv: true,
    Ts: true,
    Og: true,
    'La-Lu': true,
    'Ac-Lr': true,
    Am: true,
    Cm: true,
    Bk: true,
    Cf: true,
    Es: true,
    Fm: true,
    Md: true,
    No: true,
    Lr: true,
};

function SelectableTable(props) {
    const { tableStateStore, disabledEls, hiddenEls, enabledEls } = useElementsWithState(props);
    return (createElement(Table, Object.assign({ onElementClicked: (element) => tableStateStore.selectionStyle === TableSelectionStyle.SELECT ||
            tableStateStore.selectionStyle === TableSelectionStyle.MULTI_INPUTS_SELECT
            ? tableStateStore.toggleEnabledElement(element.symbol)
            : tableStateStore.toggleDisabledElement(element.symbol), onElementMouseOver: (element) => tableStateStore.setDetailedElement(element.symbol), onElementMouseLeave: (element) => tableStateStore.setDetailedElement(null), forceTableLayout: props.forceTableLayout, disabledElement: disabledEls, hiddenElement: hiddenEls, enabledElement: enabledEls, showSwitcher: true }, props)));
}
const useElementsWithState = (props) => {
    // could be memoized
    const { enabledElements: enabledEls, disabledElements: disabledEls, hiddenElements: hiddenEls, actions: tableStateStore, } = useElements(props.maxElementSelectable, props.onStateChange);
    useEffect(() => {
        tableStateStore.setForwardChange(props.forwardOuterChange);
    }, [props.forwardOuterChange]);
    useEffect(() => {
        //TODO(chab) let's suppose this change on the fly, we might need to deselect all the extraneous element
        tableStateStore.setMaxSelectionLimit(props.maxElementSelectable);
    }, [props.maxElementSelectable]);
    return {
        tableStateStore,
        enabledEls,
        disabledEls,
        hiddenEls,
    };
};

// map displayed value to data value
//TODO(chab) leverage TS to prevent errors, if we know the shape of the filters and the shape of the datas
// we can have static validations
const FILTER_VALUE_MAPPER = {
    Gases: 'Gas',
    Liquids: 'Liquid',
    Solids: 'Solid',
    Unknown: 'unknown',
    Alkali: 'element-alkali-metal',
    'Alkali Earth Metals': 'element-alkali-earth-metal',
    Actinides: 'element-actinoid',
    Metalloids: 'element-metalloid',
    'Transition Metals': 'element-transition-metal',
    'Post-Transition Metals': 'element-metal',
    Lanthanides: 'element-lanthoid',
    'Noble Gases': 'element-noble-gas',
    Halogens: 'element-halogen',
    Nonmetals: 'element-non-metal'
};
const FILTERS = {
    categories: [
        [{ name: 'All', subGroups: [] }],
        [
            {
                name: 'Metals',
                key: 'category',
                subGroups: [
                    { name: 'Alkali' },
                    { name: 'Alkali Earth Metals' },
                    { name: 'Transition Metals' },
                    { name: 'Post-Transition Metals' },
                    { name: 'Metalloids' },
                    { name: 'Lanthanides' },
                    { name: 'Actinides' }
                ]
            },
            {
                name: 'Nonmetals',
                key: 'category',
                subGroups: [{ name: 'Nonmetals' }, { name: 'Halogens' }, { name: 'Noble Gases' }]
            }
        ],
        [
            {
                name: 'Phase',
                key: 'phase',
                subGroups: [{ name: 'Gases' }, { name: 'Liquids' }, { name: 'Solids' }]
            }
        ],
        [
            {
                name: 'Groups',
                key: 'group',
                subGroups: [
                    { name: 1 },
                    { name: 2 },
                    { name: 3 },
                    { name: 4 },
                    { name: 5 },
                    { name: 6 },
                    { name: 7 },
                    { name: 8 },
                    { name: 9 },
                    { name: 10 },
                    { name: 11 },
                    { name: 12 },
                    { name: 13 },
                    { name: 14 },
                    { name: 15 },
                    { name: 16 },
                    { name: 17 },
                    { name: 18 }
                ]
            },
            {
                name: 'Periods',
                key: 'period',
                subGroups: [
                    { name: 1 },
                    { name: 2 },
                    { name: 3 },
                    { name: 4 },
                    { name: 5 },
                    { name: 6 },
                    { name: 7 }
                ]
            }
        ]
    ]
};
const FILTER_BY_CATEGORY = FILTERS.categories.reduce((acc, filters) => {
    return filters.reduce((_, filter) => {
        acc[filter.name] = filter.subGroups;
        return acc;
    }, acc);
}, {});

//TODO(chab) cache computations
function performFilter(array, key, value) {
    return array.reduce((acc, element) => {
        const _isFiltered = isFiltered(element);
        if (!_isFiltered) {
            acc[element.symbol] = true; // we allow type coercion, we put hidden elements in the dico
        }
        return acc;
    }, {});
    function isFiltered(element) {
        if (key === 'category') {
            //console.log(value, TABLE_DICO_CLASS[a.symbol]);
            return TABLE_DICO_CLASS[element.symbol] == value;
        }
        else {
            return element[key] == value;
        }
    }
}
/**
 *
 * Filter is entirely managed by the period context
 *
 * @constructor
 */
function TableFilter() {
    // TODO support multi filtering, detach filters from the the store
    const [filter, setFilter] = useState({
        topFilter: { name: 'All' },
        lowerFilter: { name: 'All' }
    });
    const { actions } = useContext(PeriodicSelectionContext);
    function dispatchFilter(f) {
        setFilter(Object.assign(Object.assign({}, filter), { lowerFilter: f }));
        let filterValue = FILTER_VALUE_MAPPER[f.name];
        if (!filterValue) {
            //TODO(chab) use a boolean flag instead
            console.warn('no mapping value found, falling back to default value');
            filterValue = f.name;
        }
        const filteredElements = performFilter(TABLE_V2, filter.topFilter.key, filterValue);
        actions.setHiddenElements(filteredElements);
    }
    return (createElement("div", { className: "mat-table-filter" },
        createElement("div", { className: "left-side" }, "Filters"),
        createElement("div", { className: "right-side" },
            createElement("div", { className: "filter-selector" }, FILTERS.categories.map((filterGroup, idx) => (createElement("div", { key: idx, className: "filter-group" }, filterGroup.map(f => (createElement("div", { key: f.name, onClick: () => {
                    setFilter({
                        lowerFilter: f.name === 'All' ? 'All' : filter.lowerFilter,
                        topFilter: f
                    });
                    f.name === 'All' && actions.setHiddenElements({});
                }, className: `current-filter-selector ${f.name === filter.topFilter.name ? 'selected' : ''}` }, f.name))))))),
            createElement("div", { className: "sub-filter-selector" }, FILTER_BY_CATEGORY[filter.topFilter.name].map(f => (createElement("div", { key: f.name, onClick: () => dispatchFilter(f), className: `current-filter-selector ${f.name === filter.lowerFilter.name || filter.lowerFilter.name === 'All'
                    ? 'selected'
                    : ''}` }, f.name)))))));
}

// allow to pass the layout
function StandalonePeriodicComponent(_a) {
    var { size } = _a, remainingProps = __rest(_a, ["size"]);
    const style = {
        width: size,
        height: size
    };
    return (createElement("div", { className: "mp-element-wrapper", style: style },
        createElement(PeriodicElement, Object.assign({}, remainingProps))));
}

const arrayToDictionnary = (array, dicoValue = true) => array.reduce((acc, el) => {
    acc[el] = dicoValue;
    return acc;
}, {});
const linkOnClick = (event, href) => {
    // if ctrl or meta key are held on click, allow default behavior of opening link in new tab
    if (event.metaKey || event.ctrlKey) {
        return;
    }
    // prevent full page reload
    event.preventDefault();
    // update url
    window.history.pushState({}, "", href);
    // communicate to Routes that URL has changed
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
};

function PeriodicContext(props) {
    const store = useMemo(() => getPeriodicSelectionStore(), []);
    const isMounted = useRef(false);
    useEffect(() => {
        isMounted.current &&
            store.actions.setEnabledElements(turnToDictionnaryIfNeeded(props.enabledElements));
    }, [props.enabledElements]);
    useEffect(() => {
        isMounted.current &&
            store.actions.setDisabledElements(turnToDictionnaryIfNeeded(props.disabledElements));
    }, [props.disabledElements]);
    useEffect(() => {
        isMounted.current &&
            store.actions.setHiddenElements(turnToDictionnaryIfNeeded(props.hiddenElements));
    }, [props.hiddenElements]);
    useEffect(() => {
        store.actions.init({
            enabledElements: props.enabledElements || {},
            disabledElements: props.disabledElements || {},
            hiddenElements: props.hiddenElements || {},
            forwardOuterChange: props.forwardOuterChange,
            detailedElement: props.detailedElement,
            lastAction: {}
        });
        isMounted.current = true;
    }, []);
    return (createElement(PeriodicSelectionContext.Provider, { value: store }, props.children));
}
function turnToDictionnaryIfNeeded(arrayOrObject) {
    return Array.isArray(arrayOrObject) ? arrayToDictionnary(arrayOrObject) : arrayOrObject;
}

var Renderer;
(function (Renderer) {
    Renderer["SVG"] = "svg";
    Renderer["WEBGL"] = "webgl";
})(Renderer || (Renderer = {}));
var ExportType;
(function (ExportType) {
    ExportType["png"] = "png";
    ExportType["dae"] = "dae";
})(ExportType || (ExportType = {}));
var Material;
(function (Material) {
    Material["standard"] = "MeshStandardMaterial";
})(Material || (Material = {}));
var Light;
(function (Light) {
    Light["DirectionalLight"] = "DirectionalLight";
    Light["AmbientLight"] = "AmbientLight";
    Light["HemisphereLight"] = "HemisphereLight";
})(Light || (Light = {}));
var Control;
(function (Control) {
    Control["TRACKBALL"] = "trackball";
    Control["ORBIT"] = "orbit";
})(Control || (Control = {}));
var AnimationStyle;
(function (AnimationStyle) {
    AnimationStyle["PLAY"] = "play";
    AnimationStyle["SLIDER"] = "slider";
    AnimationStyle["NONE"] = "none";
})(AnimationStyle || (AnimationStyle = {}));
var CameraAxis;
(function (CameraAxis) {
    CameraAxis["X"] = "x";
    CameraAxis["Y"] = "y";
    CameraAxis["Z"] = "z";
})(CameraAxis || (CameraAxis = {}));
var CameraPosition;
(function (CameraPosition) {
    CameraPosition["BACK"] = "back";
    CameraPosition["FRONT"] = " front";
})(CameraPosition || (CameraPosition = {}));
// maybe move to settings
const TUBE_SEGMENTS = 150;
const RADIUS_SEGMENTS = 20;
const defaults = {
    antialias: true,
    cameraAxis: 'z',
    cameraPosition: 'back',
    animation: AnimationStyle.NONE,
    transparentBackground: true,
    renderer: Renderer.WEBGL,
    renderDivBackground: false,
    background: '#ffffff',
    sphereSegments: 32,
    cylinderSegments: 16,
    staticScene: true,
    sphereScale: 1.0,
    cylinderScale: 1.0,
    extractAxis: false,
    defaultSurfaceOpacity: 0.5,
    lights: [
        {
            type: Light.HemisphereLight,
            args: ['#eeeeee', '#999999', 1.0],
        },
        {
            type: Light.DirectionalLight,
            args: ['#ffffff', 0.15],
            position: [0, 0, -10],
        },
        {
            type: Light.DirectionalLight,
            args: ['#ffffff', 0.15],
            position: [-10, 10, 10],
        },
    ],
    material: {
        type: Material.standard,
        parameters: {
            roughness: 0.07,
            metalness: 0.0,
        },
    },
    controls: Control.TRACKBALL,
    enableZoom: true,
    secondaryObjectView: true,
    defaultZoom: 0.8,
    zoomToFit2D: false,
};
var JSON3DObject;
(function (JSON3DObject) {
    JSON3DObject["ELLIPSOIDS"] = "ellipsoids";
    JSON3DObject["CYLINDERS"] = "cylinders";
    JSON3DObject["SPHERES"] = "spheres";
    JSON3DObject["ARROWS"] = "arrows";
    JSON3DObject["CUBES"] = "cubes";
    JSON3DObject["LINES"] = "lines";
    JSON3DObject["SURFACES"] = "surface";
    JSON3DObject["CONVEX"] = "convex";
    JSON3DObject["LABEL"] = "labels";
    JSON3DObject["BEZIER"] = "bezier";
})(JSON3DObject || (JSON3DObject = {}));
const DEBUG_STYLE = {
    width: '500px',
    height: '500px',
    top: 0,
    left: '700px',
    position: 'absolute',
};
const MOUNT_NODE_STYLE = { position: 'absolute' };
const MOUNT_NODE_CLASS = 'three-container';
const MOUNT_DEBUG_NODE_CLASS = 'three-debug-container';
const DEFAULT_SCENE_SIZE = 500;
var FieldType;
(function (FieldType) {
    FieldType["VEC3"] = "vec3";
    FieldType["VEC3_PAIRS"] = "vec3Pair";
    FieldType["COLOR"] = "color";
    FieldType["NUMBER"] = "number";
    FieldType["LIST"] = "list";
})(FieldType || (FieldType = {}));
const fieldColor = { id: 'color', name: 'Color', type: FieldType.COLOR };
const fieldRadius = { id: 'radius', name: 'Radius', type: FieldType.NUMBER };
const fieldWidth = { id: 'headWidth', name: 'Head Width', type: FieldType.NUMBER };
const fieldLength = { id: 'headLength', name: 'Head Length', type: FieldType.NUMBER };
const fieldScale = { id: 'scale', name: 'Scale', type: FieldType.VEC3 };
const positionPairs = {
    id: 'positionPairs',
    name: 'Position pairs',
    type: FieldType.LIST,
    listModel: FieldType.VEC3_PAIRS,
};
const position = {
    id: 'positions',
    name: 'Position',
    type: FieldType.LIST,
    listModel: FieldType.VEC3,
};
const fields = [
    fieldLength,
    fieldRadius,
    fieldWidth,
    fieldScale,
    positionPairs,
    position,
    fieldColor,
];
// map field id to to field definition
const fieldIndex = fields.reduce((acc, f) => (Object.assign(Object.assign({}, acc), { [f.id]: f })), {});
//positionPairs:
//  color: 'red',/
//  radius: 0.07,
//  headLength: 0.24,
//  headWidth: 0.14,
//  type: 'arrows',
//  clickable: false
const OBJECT_TO_FIELDS = {
    [JSON3DObject.LABEL]: null,
    [JSON3DObject.CYLINDERS]: [fieldColor, fieldRadius, positionPairs],
    [JSON3DObject.ARROWS]: [fieldRadius, fieldColor, fieldWidth, fieldLength, positionPairs],
    [JSON3DObject.SURFACES]: null,
    [JSON3DObject.CONVEX]: [fieldColor, position],
    [JSON3DObject.SPHERES]: [fieldColor, fieldRadius, position],
    [JSON3DObject.LINES]: [],
    [JSON3DObject.ELLIPSOIDS]: [fieldColor, fieldRadius, position],
    [JSON3DObject.CUBES]: [],
    [JSON3DObject.BEZIER]: [],
};

class TooltipHelper {
    constructor() {
        this.tooltipedJsonObject = null;
        this.tooltipedThreeObject = null;
        const label = document.createElement('div');
        label.className = 'tooltiptext';
        const hoverLabel = document.createElement('span');
        hoverLabel.className = '';
        label.appendChild(hoverLabel);
        const labelObject = new CSS2DObject(label);
        this.tooltip = labelObject;
        this.moveOffscreen();
    }
    updateTooltip(point, jsonObject, sceneObject) {
        if (!(this.tooltipedJsonObject === jsonObject)) {
            sceneObject.children.forEach(c => {
                if (c instanceof Mesh) {
                    const color = rgb(jsonObject.color).brighter(1);
                    c.material.color = new Color$1(color.formatHex());
                }
            });
            this.tooltipedJsonObject = jsonObject;
            this.tooltipedThreeObject = sceneObject;
        }
        this.tooltip.position.x = point.x;
        this.tooltip.position.y = point.y;
        this.tooltip.position.z = point.z;
        // TODO(chab) support markdown ?
        this.tooltip.element.textContent = jsonObject.tooltip;
    }
    /**
     *
     * Return true if the tooltip was removed
     */
    hideTooltipIfNeeded() {
        if (this.tooltipedThreeObject) {
            this.tooltipedThreeObject.children.forEach(c => {
                if (c instanceof Mesh) {
                    c.material.color = new Color$1(this.tooltipedJsonObject.color);
                }
            });
            this.tooltipedThreeObject = null;
            this.tooltipedJsonObject = null;
            this.moveOffscreen();
            return true;
        }
        return false;
    }
    moveOffscreen() {
        this.tooltip.translateX(Number.MAX_SAFE_INTEGER);
        this.tooltip.translateY(Number.MAX_SAFE_INTEGER);
        this.tooltip.translateZ(Number.MAX_SAFE_INTEGER);
    }
}

// TubeBufferGeometry
function RadiusTubeBufferGeometry(path, tubularSegments, radius, radialSegments, closed, taper) {
    BufferGeometry.call(this);
    this.type = 'RadiusTubeBufferGeometry';
    this.parameters = {
        path: path,
        tubularSegments: tubularSegments,
        radius: radius,
        radialSegments: radialSegments,
        closed: closed,
    };
    tubularSegments = tubularSegments || 64;
    radius = radius || 1;
    radialSegments = radialSegments || 8;
    closed = closed || false;
    var frames = path.computeFrenetFrames(tubularSegments, closed);
    // expose internals
    this.tangents = frames.tangents;
    this.normals = frames.normals;
    this.binormals = frames.binormals;
    // helper variables
    var vertex = new Vector3();
    var normal = new Vector3();
    var uv = new Vector2();
    var P = new Vector3();
    var i, j;
    // buffer
    var vertices = [];
    var normals = [];
    var uvs = [];
    var indices = [];
    // create buffer data
    generateBufferData();
    // build geometry
    this.setIndex(indices);
    this.setAttribute('position', new Float32BufferAttribute(vertices, 3));
    this.setAttribute('normal', new Float32BufferAttribute(normals, 3));
    this.setAttribute('uv', new Float32BufferAttribute(uvs, 2));
    // functions
    function generateBufferData() {
        for (i = 0; i < tubularSegments; i++) {
            generateSegment(i);
        }
        // if the geometry is not closed, generate the last row of vertices and normals
        // at the regular position on the given path
        //
        // if the geometry is closed, duplicate the first row of vertices and normals (uvs will differ)
        generateSegment(closed === false ? tubularSegments : 0);
        // uvs are generated in a separate function.
        // this makes it easy compute correct values for closed geometries
        generateUVs();
        // finally create faces
        generateIndices();
    }
    function generateSegment(i) {
        // we use getPointAt to sample evenly distributed points from the given path
        P = path.getPointAt(i / tubularSegments, P);
        // retrieve corresponding normal and binormal
        var N = frames.normals[i];
        var B = frames.binormals[i];
        // generate normals and vertices for the current segment
        for (j = 0; j <= radialSegments; j++) {
            var v = (j / radialSegments) * Math.PI * 2;
            var sin = Math.sin(v);
            var cos = -Math.cos(v);
            // normal
            normal.x = cos * N.x + sin * B.x;
            normal.y = cos * N.y + sin * B.y;
            normal.z = cos * N.z + sin * B.z;
            normal.normalize();
            normals.push(normal.x, normal.y, normal.z);
            // vertex
            vertex.x = P.x + taper(radius, i) * normal.x;
            vertex.y = P.y + taper(radius, i) * normal.y;
            vertex.z = P.z + taper(radius, i) * normal.z;
            vertices.push(vertex.x, vertex.y, vertex.z);
        }
    }
    function generateIndices() {
        for (j = 1; j <= tubularSegments; j++) {
            for (i = 1; i <= radialSegments; i++) {
                var a = (radialSegments + 1) * (j - 1) + (i - 1);
                var b = (radialSegments + 1) * j + (i - 1);
                var c = (radialSegments + 1) * j + i;
                var d = (radialSegments + 1) * (j - 1) + i;
                // faces
                indices.push(a, b, d);
                indices.push(b, c, d);
            }
        }
    }
    function generateUVs() {
        for (i = 0; i <= tubularSegments; i++) {
            for (j = 0; j <= radialSegments; j++) {
                uv.x = i / tubularSegments;
                uv.y = j / radialSegments;
                uvs.push(uv.x, uv.y);
            }
        }
    }
}
RadiusTubeBufferGeometry.prototype = Object.create(BufferGeometry.prototype);
RadiusTubeBufferGeometry.prototype.constructor = TubeBufferGeometry;
RadiusTubeBufferGeometry.prototype.toJSON = function () {
    var data = BufferGeometry.prototype.toJSON.call(this);
    data.path = this.parameters.path.toJSON();
    return data;
};

const DEFAULT_DASHED_LINE_COLOR = '#000000';
const DEFAULT_LINE_COLOR = '#2c3c54';
const DEFAULT_MATERIAL_COLOR = '#52afb0';
// i think it would be better to have a mixin or a decorator, so we do not need
// to create a sub class for each kind of curve. we would store the original curve and
// just forward the calls to it
class QuadraticSteppedBezierCurver extends QuadraticBezierCurve3 {
    // the length of the vector array
    constructor(v0, v1, v2) {
        super(v0, v1, v2);
        this.delta = 0;
        this.parts = 2; // let's suppose we use a spline, we'll need to derive the parts from
    }
    setPart(part) {
        if (part >= this.parts) {
            console.error('Part index is too high :', part, '.Curve has:', this.parts, ' parts');
        }
        this.delta = (1 / this.parts) * part;
    }
    getPoint(t, optionalTarget) {
        return super.getPoint(this.delta + t / this.parts);
    }
}
/**
 *
 *  This class builds Three.js object.
 *
 *  TODO: implements lights/camera
 *
 */
class ThreeBuilder {
    constructor(settings) {
        this.settings = settings;
    }
    validateRadiusArrays({ radiusTop, radiusBottom, positionPairs }) {
        if (!Array.isArray(radiusBottom)) {
            console.error('radiusBottom is not an array', radiusBottom);
            return;
        }
        if (radiusTop.length !== radiusBottom.length) {
            console.error('radiusTop/Bottom arrays have different length');
        }
        if (radiusTop.length !== positionPairs.length || radiusBottom.length !== positionPairs.length) {
            console.warn('radiusTop/Bottom length does not match positions array, will fallback to radius for missing values');
        }
    }
    makeBezierTube(object_json, obj) {
        object_json.controlPoints.forEach((controlPoints) => {
            const cps = controlPoints.map((cp) => new Vector3(...cp));
            const curve = new QuadraticSteppedBezierCurver(...cps);
            const numberOfParts = controlPoints.length - 1;
            for (let i = 0; i < numberOfParts; i++) {
                curve.setPart(i);
                const radiusStart = object_json.radius[i];
                const radiusEnd = object_json.radius[i + 1];
                const geometry = new RadiusTubeBufferGeometry(curve, TUBE_SEGMENTS, radiusStart, RADIUS_SEGMENTS, false, (a, b) => a + (radiusEnd - radiusStart) * (b / TUBE_SEGMENTS));
                obj.add(new Mesh(geometry, this.makeMaterial(object_json.color[i], object_json.animate)));
            }
        });
        return obj;
    }
    makeCylinders(object_json, obj) {
        const { radius = 1, radiusTop, radiusBottom, color } = object_json;
        const perCylinderGeometry = Array.isArray(radiusTop);
        perCylinderGeometry && this.validateRadiusArrays(object_json);
        const perCylinderMaterial = Array.isArray(color);
        const geom = this.getCylinderGeometry(radius, radiusTop, radiusBottom);
        const mat = this.makeMaterial(color, object_json.animate);
        const vec_y = new Vector3(0, 1, 0); // initial axis of cylinder
        const quaternion = new Quaternion();
        object_json.positionPairs.forEach((positionPair, idx) => {
            // the following is technically correct but could be optimized?
            const currentGeometry = perCylinderGeometry
                ? this.getCylinderGeometry(radius, radiusTop[idx], radiusBottom[idx])
                : geom;
            const currentMaterial = perCylinderMaterial && mat instanceof MeshStandardMaterial ? mat.clone() : mat;
            perCylinderMaterial && (mat.color = new Color$1(color[idx]));
            const mesh = new Mesh(currentGeometry, currentMaterial);
            const vec_a = new Vector3(...positionPair[0]);
            const vec_b = new Vector3(...positionPair[1]);
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
    makeLine(object_json, obj) {
        const verts = new Float32BufferAttribute(mergeInnerArrays(object_json.positions), 3);
        const geom = new BufferGeometry();
        geom.setAttribute('position', verts);
        let mat;
        if (object_json.dashSize || object_json.scale || object_json.gapSize) {
            mat = new LineDashedMaterial({
                color: object_json.color || DEFAULT_DASHED_LINE_COLOR,
                linewidth: object_json.line_width || 1,
                scale: object_json.scale || 1,
                dashSize: object_json.dashSize || 3,
                gapSize: object_json.gapSize || 1,
            });
        }
        else {
            mat = new LineBasicMaterial({
                color: object_json.color || DEFAULT_LINE_COLOR,
                linewidth: object_json.line_width || 1,
            });
        }
        const mesh = new LineSegments(geom, mat);
        if (object_json.dashSize || object_json.scale || object_json.gapSize) {
            mesh.computeLineDistances();
        }
        obj.add(mesh);
        return obj;
    }
    makeCube(object_json, obj) {
        const size = object_json.width * this.settings.sphereScale;
        const geom = new BoxBufferGeometry(size, size, size);
        const mat = this.makeMaterial(object_json.color, object_json.animate);
        object_json.positions.forEach((position) => {
            const mesh = new Mesh(geom, mat);
            mesh.position.set(...position);
            obj.add(mesh);
        });
        return obj;
    }
    makeSurfaces(object_json, obj) {
        const verts = new Float32BufferAttribute(mergeInnerArrays(object_json.positions), 3);
        const geom = new BufferGeometry();
        geom.setAttribute('position', verts);
        const opacity = object_json.opacity || this.settings.defaultSurfaceOpacity;
        const mat = this.makeMaterial(object_json.color, object_json.animate, opacity);
        if (object_json.normals) {
            const normals = new Float32BufferAttribute(mergeInnerArrays(object_json.normals), 3);
            geom.setAttribute('normal', normals);
        }
        else {
            // see if there is alternative.. i think openGL dont provide it anymore
            //FIXME(chab) is it even called ?
            geom.computeVertexNormals(); // instead of computefacenormals ?
            mat.side = DoubleSide; // not sure if this is necessary if we compute normals correctly
        }
        if (opacity) {
            mat.transparent = true;
            mat.depthWrite = false;
        }
        const mesh = new Mesh(geom, mat);
        obj.add(mesh);
        // TODO: smooth the surfaces?
        return obj;
    }
    makeConvex(object_json, obj) {
        const points = object_json.positions.map((p) => new Vector3(...p));
        const geom = new ConvexBufferGeometry(points);
        const opacity = object_json.opacity || this.settings.defaultSurfaceOpacity;
        const mat = this.makeMaterial(object_json.color, object_json.animate, opacity);
        if (opacity) {
            mat.transparent = true;
            mat.depthWrite = false;
        }
        const mesh = new Mesh(geom, mat);
        obj.add(mesh);
        const edges = new EdgesGeometry(geom);
        const line = new LineSegments(edges, new LineBasicMaterial({ color: object_json.color }));
        obj.add(line);
        return obj;
    }
    getHeadGeometry(headWidth, headLength) {
        return new ConeBufferGeometry(headWidth * this.settings.cylinderScale, headLength * this.settings.cylinderScale, this.settings.cylinderSegments);
    }
    getCylinderGeometry(radius, radiusTop, radiusBottom) {
        // body
        radiusTop == undefined && (radiusTop = radius);
        radiusBottom == undefined && (radiusBottom = radius);
        return new CylinderBufferGeometry(radiusTop * this.settings.cylinderScale, radiusBottom * this.settings.cylinderScale, 1.0, this.settings.cylinderSegments);
    }
    makeArrow(object_json, obj) {
        // TODO obj is the parent object, rename to a better name
        const { radius = 1, radiusTop, radiusBottom, headLength = 2, headWidth = 2 } = object_json;
        // body
        const geom_cyl = this.getCylinderGeometry(radius, radiusTop, radiusBottom);
        // head
        const geom_head = this.getHeadGeometry(headWidth, headLength);
        const mat = this.makeMaterial(object_json.color);
        const vec_y = new Vector3(0, 1, 0); // initial axis of cylinder
        const quaternion = new Quaternion();
        // for each pairs, we have one cylinder and one head, so obj will have meshes as children
        // for 2 position pairs, 1cylinder, 1head, 2cylinder, 2head
        object_json.positionPairs.forEach((positionPair) => {
            // the following is technically correct but could be optimized?
            const mesh = new Mesh(geom_cyl, mat);
            const vec_a = new Vector3(...positionPair[0]);
            const vec_b = new Vector3(...positionPair[1]);
            const vec_head = new Vector3(...positionPair[1]);
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
            const mesh_head = new Mesh(geom_head, mat);
            mesh_head.position.set(vec_head.x, vec_head.y, vec_head.z);
            // rotate cylinder into correct orientation
            mesh_head.setRotationFromQuaternion(quaternion.clone());
            obj.add(mesh_head);
        });
        return obj;
    }
    //Note(chab) we use morphtargets for geometries like cube, convex, beziers
    // objects that are built by scaling and rotating a simple geometry should
    // be animated by interpolating those specific properties
    makeMaterial(color = DEFAULT_MATERIAL_COLOR, animated = false, opacity = 1.0) {
        const parameters = Object.assign(this.settings.material.parameters, {
            color: color,
            opacity: opacity,
            morphTargets: animated,
        });
        if (this.settings.renderer === Renderer.SVG) {
            return new MeshBasicMaterial(parameters);
        }
        switch (this.settings.material.type) {
            case Material.standard: {
                const mat = new MeshStandardMaterial(parameters);
                return mat;
            }
            default:
                throw new Error('Unknown material.');
        }
    }
    makeSphere(object_json, obj) {
        const { geom, mat } = this.getSphereBuffer(object_json.radius * this.settings.sphereScale, object_json.color, object_json.phiStart, object_json.phiEnd);
        object_json.positions.forEach((position) => {
            const mesh = new Mesh(geom, mat);
            mesh.position.set(...position);
            obj.add(mesh);
            return mesh;
        });
        return obj;
    }
    makeLabel(object_json, obj) {
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
    makeEllipsoids(object_json, obj) {
        const { geom, mat } = this.getSphereBuffer(this.settings.sphereScale, object_json.color, object_json.phiStart, object_json.phiEnd);
        const meshes = object_json.positions.map((position) => {
            const mesh = new Mesh(geom, mat);
            mesh.position.set(...position);
            mesh.scale.set(...object_json.scale);
            return mesh;
        });
        // TODO: test axes are correct!
        const vec_z = new Vector3(0, 0, 1);
        const quaternion = new Quaternion();
        if (object_json.rotate_to) {
            object_json.rotate_to.forEach((rotation, index) => {
                const rotation_vec = new Vector3(...rotation);
                quaternion.setFromUnitVectors(vec_z, rotation_vec.normalize());
                meshes[index].setRotationFromQuaternion(quaternion);
            });
        }
        meshes.forEach((mesh) => obj.add(mesh));
        return obj;
    }
    makeObject(object_json, obj) {
        switch (object_json.type) {
            case JSON3DObject.SPHERES: {
                return this.makeSphere(object_json, obj);
            }
            case JSON3DObject.BEZIER: {
                return this.makeBezierTube(object_json, obj);
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
    getSphereGeometry(radius, phiStart, phiEnd) {
        const geom = new SphereBufferGeometry(radius, this.settings.sphereSegments, this.settings.sphereSegments, phiStart || 0, phiEnd || Math.PI * 2);
        return geom;
    }
    getSphereBuffer(radius, color, phiStart, phiEnd) {
        const geom = this.getSphereGeometry(radius, phiStart, phiEnd);
        const mat = this.makeMaterial(color, false);
        return { geom, mat };
    }
    makeLights(light_json) {
        const lightGroup = new Object3D();
        lightGroup.name = 'lights';
        light_json.forEach((light) => {
            let lightObj;
            switch (light.type) {
                case Light.DirectionalLight:
                    lightObj = new DirectionalLight(...light.args);
                    break;
                case Light.AmbientLight:
                    lightObj = new AmbientLight(...light.args);
                    break;
                case Light.HemisphereLight:
                    lightObj = new HemisphereLight(...light.args);
                    break;
                default:
                    throw new Error('Unknown light.');
            }
            if (light.position) {
                lightObj.position.set(...light.position);
            }
            lightGroup.add(lightObj);
        });
        return lightGroup;
    }
    makeLightsHelper(lights) {
        const lightHelperGroup = new Object3D();
        return lights.reduce((acc, light) => {
            switch (light.constructor) {
                case DirectionalLight:
                    acc.add(new DirectionalLightHelper(light, 1));
                    break;
                case AmbientLight:
                    break;
                case HemisphereLight:
                    acc.add(new HemisphereLightHelper(light, 1));
                    break;
                default:
                    console.error('Unknown light type.');
                    break;
            }
            return acc;
        }, lightHelperGroup);
    }
    // object updates
    updateSphereCenter(obj, baseJsonObject, newPosition, index) {
        const mesh = obj.children[index];
        mesh.position.set(...newPosition);
    }
    updateSphereColor(obj, baseJsonObject, newColor) {
        // get uuid from json object
        obj.children.forEach((o) => {
            const material = o.material;
            material.color = new Color$1(newColor);
        });
    }
    updateConvexColor(obj, objjson, color) {
        obj.children.forEach((o) => {
            o.material.color = new Color$1(color);
        });
    }
    updateConvexEdges(obj, objjson, positions) {
        const points = positions.map((p) => new Vector3(...p));
        const geom = new ConvexBufferGeometry(points);
        const edges = new EdgesGeometry(geom);
        obj.children[0].geometry.dispose();
        obj.children[1].geometry.dispose();
        obj.children[0].geometry = geom;
        obj.children[1].geometry = edges;
    }
    updateSphereRadius(obj, baseJsonObject, newRadius) {
        const geometry = obj.children[0].geometry;
        const phiStart = geometry.parameters.phiStart;
        const phiEnd = geometry.parameters.phiLength;
        const newGeometry = this.getSphereGeometry(newRadius, phiStart, phiEnd);
        obj.children.forEach((o) => {
            o.geometry.dispose();
            o.geometry = newGeometry;
        });
    }
    // TODO(chab) merge the two below methods
    // arrow width
    updateHeadWidth(obj, baseJsonObject, headWidth) {
        const geom_head = this.getHeadGeometry(headWidth, baseJsonObject.headWidth);
        baseJsonObject.positionPairs.forEach((a, idx) => {
            const headIndex = idx * 2 + 1;
            const mesh_head = obj.children[headIndex];
            mesh_head.geometry.dispose();
            mesh_head.geometry = geom_head;
        });
    }
    // arrow length
    updateHeadLength(obj, baseJsonObject, headLength) {
        const geom_head = this.getHeadGeometry(baseJsonObject.headWidth, headLength);
        baseJsonObject.positionPairs.forEach((a, idx) => {
            const headIndex = idx * 2 + 1;
            const mesh_head = obj.children[headIndex];
            mesh_head.geometry.dispose();
            mesh_head.geometry = geom_head;
        });
    }
    updateArrowColor(obj, baseJsonObject, color) {
        obj.children.forEach((o) => {
            o.material.color = new Color$1(color);
        });
    }
    updateArrowRadius(obj, baseJsonObject, radius) {
        const geom_cyl = this.getCylinderGeometry(radius);
        baseJsonObject.positionPairs.forEach((a, idx) => {
            const headIndex = idx * 2;
            const mesh_head = obj.children[headIndex];
            mesh_head.geometry.dispose();
            mesh_head.geometry = geom_cyl;
        });
    }
    //TODO(chab) check if positions are different, update the whole mesh
    // OR let pass the index so we know what to update
    updateArrowpositionPair(baseJsonObject, newScale) {
        //but reuse material if possible
        baseJsonObject.positionPairs.forEach((a) => { });
    }
    updateLineSegments(obj, object_json, positions) {
        const verts = new Float32BufferAttribute(positions, 3);
        const geom = new BufferGeometry();
        geom.setAttribute('position', verts);
        const mesh = obj.children[0];
        mesh.geometry = geom;
    }
    updateLineStyle(obj, object_json, color, lineWidth, scale, dashSize, gapSize) {
        const mesh = obj.children[0];
        let mat;
        //FIXME(update material instead)
        if (object_json.dashSize ||
            object_json.scale ||
            object_json.gapSize ||
            dashSize ||
            scale ||
            gapSize) {
            mat = new LineDashedMaterial({
                color: color || object_json.color || DEFAULT_DASHED_LINE_COLOR,
                linewidth: lineWidth || object_json.line_width || 1,
                scale: scale || object_json.scale || 1,
                dashSize: dashSize || object_json.dashSize || 3,
                gapSize: gapSize || object_json.gapSize || 1,
            });
        }
        else {
            mat = new LineBasicMaterial({
                color: color || object_json.color || DEFAULT_LINE_COLOR,
                linewidth: lineWidth || object_json.line_width || 1,
            });
        }
        mesh.material = mat;
        if (object_json.dashSize ||
            object_json.scale ||
            object_json.gapSize ||
            dashSize ||
            scale ||
            gapSize) {
            mesh.computeLineDistances();
        }
    }
    // generic
    updateScale(baseJsonObject, newScale) { }
    // cylinder, see arrows
    updateCylinderPositionPair(obj, baseJsonObject, newPositionPair, index) {
        const mesh = obj.children[index];
        const { scale, position, quaternion } = this.getCylinderInfo(newPositionPair);
        mesh.position.set(...position);
        mesh.scale.y = scale;
        mesh.setRotationFromQuaternion(quaternion);
    }
    getCylinderInfo(positionPair) {
        const vec_a = new Vector3(...positionPair[0]);
        const vec_b = new Vector3(...positionPair[1]);
        const vec_rel = vec_b.sub(vec_a);
        const length = vec_rel.length();
        const vec_midpoint = vec_a.add(vec_rel.clone().multiplyScalar(0.5));
        const quaternion = new Quaternion();
        const vec_y = new Vector3(0, 1, 0); // initial axis of cylinder
        quaternion.setFromUnitVectors(vec_y, vec_rel.normalize());
        return {
            scale: length,
            position: [vec_midpoint.x, vec_midpoint.y, vec_midpoint.z],
            quaternion,
        };
    }
    //TODO(chab) can be refactored with the sphere
    updateCylinderRadius(obj, baseJsonObject, newRadius) {
        //CylinderBufferGeometry
        const newGeometry = this.getCylinderGeometry(newRadius);
        obj.children.forEach((o) => {
            o.geometry.dispose();
            o.geometry = newGeometry;
        });
    }
    updateCylinderColor(obj, baseJsonObject, newColor) {
        obj.children.forEach((o) => {
            const material = o.material;
            material.color = new Color$1(newColor);
        });
    }
}
function getSceneWithBackground(settings) {
    const scene = new Scene$1();
    //background
    if (!settings.transparentBackground) {
        scene.background = new Color$1(settings.background);
    }
    return scene;
}

var ScenePosition;
(function (ScenePosition) {
    ScenePosition["NW"] = "NW";
    ScenePosition["NE"] = "NE";
    ScenePosition["SE"] = "SE";
    ScenePosition["SW"] = "SW";
    ScenePosition["HIDDEN"] = "HIDDEN";
})(ScenePosition || (ScenePosition = {}));
const AXIS_RADIUS = 0.07;
const HEAD_AXIS_LENGTH = 0.24;
const HEAD_WIDTH = 0.14;
const MIN_SIZE = 50;
const DEFAULT_SIZE = 130;
class InsetHelper {
    constructor(detailedObject, axisJson, baseScene, origin, cameraToFollow, threebuilder, insetWidth = DEFAULT_SIZE, insetHeight = DEFAULT_SIZE, insetPadding = 0) {
        this.detailedObject = detailedObject;
        this.axisJson = axisJson;
        this.origin = origin;
        this.cameraToFollow = cameraToFollow;
        this.threebuilder = threebuilder;
        this.insetWidth = insetWidth;
        this.insetHeight = insetHeight;
        this.insetPadding = insetPadding;
        this.axisPadding = 0; // the space between the edge of the inset and the axis bounding box
        this.axis = this.detailedObject;
        this.insetCamera = new OrthographicCamera(-4, 4, 4, -4, -10, 10);
        this.frontRotation = this.cameraToFollow.rotation.clone();
        this.scene = getSceneWithBackground({ transparentBackground: true, background: '#ffffff' });
        const baseLights = baseScene.getObjectByName('lights');
        if (!baseLights) {
            console.warn('no lights in base scene');
        }
        else {
            this.scene.add(baseLights.clone(true));
        }
        if (this.detailedObject) {
            this.scene.add(this.detailedObject);
            this.setup();
            this.helper = new CameraHelper(this.insetCamera);
            this.helper.update();
        }
    }
    setup() {
        if (!this.detailedObject) {
            console.warn('setup should not be called if no detailedObject is there');
            return;
        }
        // put back the detailedObject in its normal scale for the calculation
        const box = new Box3().setFromObject(this.detailedObject);
        const maxDimension = Math.max(box.max.x - box.min.x, box.max.y - box.min.y, box.max.z - box.min.z);
        const [x, y, z] = this.origin;
        this.insetCamera.position.set(x, y, z);
        this.insetCamera.left = this.insetCamera.bottom = this.insetCamera.near = -maxDimension;
        this.insetCamera.right = this.insetCamera.top = this.insetCamera.far = maxDimension;
        this.insetCamera.rotation.set(this.frontRotation.x, this.frontRotation.y, this.frontRotation.z, this.frontRotation.order);
        this.insetCamera.zoom = 1;
        this.insetCamera.updateProjectionMatrix();
    }
    setAxis(axis, axisJson) {
        this.axis = axis;
        this.axisJson = axisJson;
    }
    makeObject(object_json) {
        const obj = new Object3D();
        return this.threebuilder.makeObject(object_json, obj);
    }
    updateViewportsize(size, padding) {
        if (!size || !padding) {
            console.warn('fallback to default settings when resizing');
            return;
        }
        this.insetPadding = padding;
        if (size < MIN_SIZE) {
            size = MIN_SIZE;
        }
        if (size != this.insetHeight) {
            this.insetWidth = this.insetHeight = size;
            this.setup();
        }
    }
    showObject(selection) {
        const object = new Object3D();
        object.add(...selection.map((a) => {
            const b = a.clone();
            b.matrixAutoUpdate = false;
            return b;
        }));
        this.updateSelectedObject(object, {});
    }
    showAxis() {
        if (this.detailedObject === this.axis) {
            return;
        }
        this.updateSelectedObject(this.axis, this.axisJson);
    }
    updateSelectedObject(object, objectJson) {
        this.scene.remove(this.detailedObject);
        this.detailedObject = object;
        this.scene.add(this.detailedObject);
        if (objectJson.origin) {
            this.origin = objectJson.origin;
        }
        else {
            const box = new Box3().setFromObject(this.detailedObject);
            let center = new Vector3();
            box.getCenter(center);
            center = object.localToWorld(center);
            this.origin = [center.x, center.y, center.z];
        }
        // things work a bit by luck.. when we copy the object, we loose the parent frame
        // that's why the camera seems misplaced in the inset helper.. it's in fact because
        // the object itself is not in the same position in the inset view..
        // things looks correct in the debug view when there is no parent transformation
        // we'll need to bring back the parent transformation when cloning the object
        this.setup();
    }
    render(renderer, [x, y]) {
        // NOTE(chab) this will not work with the SVG renderer, as it has no notion of
        // viewport, if we want the SVG render to work, we'll need to have a separated renderer
        if (renderer instanceof WebGLRenderer && this.detailedObject) {
            renderer.setScissorTest(true);
            // everything outside should be discarded
            renderer.setScissor(x, y, this.insetWidth, this.insetHeight);
            renderer.setViewport(x, y, this.insetWidth, this.insetHeight);
            this.insetCamera.rotation.copy(this.cameraToFollow.rotation);
            this.insetCamera.updateProjectionMatrix();
            renderer.render(this.scene, this.insetCamera);
            renderer.clearDepth(); // important! clear the depth buffer
            renderer.setScissorTest(false);
        }
    }
    getPadding() {
        return this.insetPadding;
    }
    getSize() {
        return this.insetWidth;
    }
    onDestroy() {
        disposeSceneHierarchy(this.scene);
        // this.scene.dispose();
        // Note ONLY USE THIS PATTERN IN DISPOSAL METHOD
        this.cameraToFollow = null;
        this.insetCamera = null;
        this.detailedObject = null;
    }
    // TODO(chab) let's do something simple like having a width of 5 px
    rescaleAxis() {
        // calculate scale
        const box = new Box3().setFromObject(this.detailedObject);
        let center = new Vector3((box.min.x + box.max.x) / 2, (box.min.y + box.max.y) / 2, (box.min.z + box.max.z) / 2);
        let extents = new Vector3((box.max.x - box.min.x) / 2, (box.max.y - box.min.y) / 2, (box.max.z - box.min.z) / 2);
        let a = center
            .clone()
            .add(new Vector3(-extents.x, -extents.y, -extents.z))
            .project(this.insetCamera);
        let b = center
            .clone()
            .add(new Vector3(extents.x, -extents.y, extents.z))
            .project(this.insetCamera);
        // we should perform the calculation for both width and height, and take the smallest one
        const size = new Vector3();
        box.getSize(size);
        size.project(this.insetCamera);
        let widthOnScreenBuffer = Math.max(size.x, size.y, size.z);
        const width = (widthOnScreenBuffer / 2) * this.insetWidth;
        // the axis is always centered, so the max extent of its box should match half of the screen
        // ( e.g consider a edge case of all axis point in the same direction, if the BB
        // take all the size, it will overflow)
        const scale = (this.insetWidth / 2 - this.axisPadding * 2) / width;
        // maybe we should do is to consider the origin in the axis, in the bounding box
        // and find the largest vector from center - bbextent, this will tell us how much
        // the axis need from the center to one point
        // manually rescale axis properties, so it looks not too thin
        const targetRadius = AXIS_RADIUS * (scale / 1.5);
        const targetHeadLength = HEAD_AXIS_LENGTH * (scale / 1.5);
        const targetWidth = HEAD_WIDTH * (scale / 1.5);
        // we assume an axis is made of three arrows and one sphere
        this.axisJson.contents = this.axisJson.contents.map((a) => {
            return Object.assign(Object.assign({}, a), { radius: targetRadius, headLength: targetHeadLength, headWidth: targetWidth });
        });
        this.detailedObject.remove(this.detailedObject.children[0], this.detailedObject.children[1], this.detailedObject.children[2]);
        this.detailedObject.add(this.makeObject(this.axisJson.contents[0]), this.makeObject(this.axisJson.contents[1]), this.makeObject(this.axisJson.contents[2]));
    }
}

const DEBUG_SIZE = 500;
/**
 *
 * In the current implementation, this is destroyed/re-created on the fly.
 * We could wait for the first instantiation, and then just remove the node
 * and stop rendering.
 *
 * This will allow us to have a simpler management of the object in the scenes
 *
 */
const background = new Color$1('#000000');
class DebugHelper {
    constructor(mountNode, scene, cameraToTrack, settings, builder, insetCameraHelper) {
        this.mountNode = mountNode;
        this.scene = scene;
        this.cameraToTrack = cameraToTrack;
        this.settings = settings;
        this.builder = builder;
        this.showAxis = true;
        this.showGrid = true;
        this.showLights = false;
        if (!mountNode) {
            console.error('No mount node passed for the debug view');
        }
        this.debugRenderer = new WebGLRenderer({
            antialias: true,
            alpha: true,
        });
        this.debugRenderer.gammaFactor = 2.2;
        this.debugRenderer.setSize(DEBUG_SIZE, DEBUG_SIZE);
        // FIXME
        this.mountNode.appendChild(this.debugRenderer.domElement);
        this.cameraHelper = new CameraHelper(cameraToTrack);
        this.scene.add(this.cameraHelper);
        this.axis = new AxesHelper(100);
        this.axis.material.linewidth = 2.5; // this does not work due to limitation
        this.grid = new GridHelper(20, 20); // size 10, division 10
        const lights = this.scene.getObjectByName('lights');
        if (!lights || lights.children.length === 0) {
            console.warn('No lights defined in the scene');
        }
        else {
            this.lights = this.builder.makeLightsHelper(lights.children);
        }
        this.showAxis && this.scene.add(this.axis);
        this.showGrid && this.scene.add(this.grid); // TODO( three grids on each word axis )
        this.showLights && this.scene.add(this.lights);
        this.debugCamera = new PerspectiveCamera(60, // fov
        1, // aspect
        0.1, // near
        300 // far
        );
        this.debugCamera.position.set(10, 20, -10);
        this.debugRenderer.setSize(DEBUG_SIZE, DEBUG_SIZE);
        this.debugRenderer.setViewport(0, 0, DEBUG_SIZE, DEBUG_SIZE);
        this.debugCamera.lookAt(0, 0, 0);
        const controls2 = new OrbitControls(this.debugCamera, this.debugRenderer.domElement);
        controls2.target.set(0, 5, 0);
        controls2.update();
        // we are assuming a static scene
        // only re-render when scene is rotated
        controls2.addEventListener('change', () => {
            this.render();
        });
        controls2.addEventListener('start', () => {
            controls2.update();
        });
        controls2.addEventListener('end', () => {
            controls2.update();
        });
        this.controls = controls2;
        this.insetHelper = new Object3D();
        insetCameraHelper && this.insetHelper.add(insetCameraHelper);
        this.scene.add(this.insetHelper);
    }
    render() {
        this.cameraHelper.update();
        this.insetHelper.children[0] && this.insetHelper.children[0].update();
        const oldBackgroundColor = this.scene.background;
        this.scene.background = background;
        this.setHelperObjectVisibility(true);
        this.debugRenderer.render(this.scene, this.debugCamera);
        this.setHelperObjectVisibility(false);
        this.scene.background = oldBackgroundColor;
    }
    setHelperObjectVisibility(isVisible) {
        this.cameraHelper.visible = this.axis.visible = this.grid.visible = this.lights.visible = this.insetHelper.visible = isVisible;
    }
    onDestroy() {
        disposeSceneHierarchy(this.scene);
        this.scene.remove(this.cameraHelper);
        this.axis && this.scene.remove(this.axis);
        this.grid && this.scene.remove(this.grid);
        this.scene.dispose();
        this.controls.dispose();
        this.debugRenderer.forceContextLoss();
        this.debugRenderer.dispose();
        this.debugRenderer.domElement.parentElement.removeChild(this.debugRenderer.domElement);
        this.debugRenderer.domElement = undefined;
        this.debugRenderer = null;
    }
}

class AnimationHelper {
    constructor(objectBuilder) {
        this.objectBuilder = objectBuilder;
        this.mixers = [];
        this.clock = new Clock();
        this.lineGeometriesToUpdate = [];
    }
    reset() {
        this.mixers.forEach((m) => m.stopAllAction());
        this.mixers = [];
        this.lineGeometriesToUpdate = [];
    }
    buildAnimationSupport(json, three) {
        const animations = json.animate;
        const kf = json.keyframes;
        const kfl = kf.length;
        // this supports animations based on the position
        if (json.type === JSON3DObject.SPHERES || json.type === JSON3DObject.CUBES) {
            if (Array.isArray(animations[0])) {
                animations.forEach((a, idx) => this.addAnimationForPosition(a, three.children[idx], kf, kfl));
            }
            else {
                this.addAnimationForPosition(animations, three, kf, kfl);
            }
        }
        else if (json.type === JSON3DObject.CYLINDERS) {
            animations.forEach((animation, aIdx) => {
                const idx = animation[2];
                const positionPair = json.positionPairs[idx];
                const start = positionPair[0];
                const end = positionPair[1];
                const targetPP = [
                    [start[0] + animation[0][0], start[1] + animation[0][1], start[2] + animation[0][2]],
                    [end[0] + animation[1][0], end[1] + animation[1][1], end[2] + animation[1][2]],
                ];
                const { scale: scaleStart, position: positionStart, quaternion: rotation } = three.children[idx];
                const st = [positionStart.x, positionStart.y, positionStart.z];
                const qt = [rotation.x, rotation.y, rotation.z, rotation.w];
                const { position, scale, quaternion: quaternionEnd } = this.objectBuilder.getCylinderInfo(targetPP);
                let valuesp = [...st, ...position];
                let valuesq = [
                    ...qt,
                    ...[quaternionEnd.x, quaternionEnd.y, quaternionEnd.z, quaternionEnd.w],
                ];
                const positionKF = new VectorKeyframeTrack('.position', [...kf], valuesp);
                const scaleKF = new NumberKeyframeTrack('.scale', [...kf], [scaleStart.x, scaleStart.y, scaleStart.z, scaleStart.x, scale, scaleStart.z]);
                const quaternion = new VectorKeyframeTrack('.quaternion', [...kf], valuesq);
                this.pushAnimations(`Cylinder-${idx}`, kfl, [positionKF, scaleKF, quaternion], three.children[idx]);
            });
        }
        else if (json.type === JSON3DObject.LINES) {
            // for line geometries, we are doing a small hack. We cannot use morphTargets to animate a line
            // geometry, so the trick is to use a field that will hold the interpolated value. We can
            // use those values to update the vertices of the geometry in the animate method
            const pt = [];
            json.positions.forEach((p, idx) => {
                pt.push(p[0] + animations[idx][0], p[1] + animations[idx][1], p[2] + animations[idx][2]);
            });
            const lines = three.children[0];
            const a = lines.geometry.attributes
                .position.array;
            lines.value = [...a];
            const keyFrame2 = new NumberKeyframeTrack('.value', kf, [...a, ...pt]);
            this.lineGeometriesToUpdate.push(lines);
            this.pushAnimations('Lines', kfl, [keyFrame2], lines);
        }
        else if (json.type === JSON3DObject.CONVEX) {
            // we need to animate two meshes, the polygon and the lines
            // we use the morphTarget approach, but for the lines, we need to do the same trick
            // as above
            const mesh = three.children[0];
            const lines = three.children[1];
            const geo = mesh.geometry;
            geo.morphAttributes.position = [];
            // calculate morph target
            const pt = json.positions.map((p, idx) => {
                return new Vector3(...[
                    p[0] + animations[idx][0][0],
                    p[1] + animations[idx][0][1],
                    p[2] + animations[idx][0][2],
                ]);
            });
            const geom = new ConvexBufferGeometry(pt);
            geo.morphAttributes.position[0] = geom.attributes.position;
            mesh.morphTargetInfluences = [0];
            const keyFrame = new NumberKeyframeTrack('.morphTargetInfluences', kf, [0.0, 1.0]);
            this.pushAnimations('Convex', kfl, [keyFrame], mesh);
            const edges = new EdgesGeometry(geom);
            const line = new LineSegments(edges, new LineBasicMaterial({ color: '#000000', linewidth: 1 }));
            /*(lines.geometry as THREE.BufferGeometry).setAttribute(
              'position',
              edges.getAttribute('position')
            );*/
            const a = lines.geometry.attributes
                .position.array;
            const p = line.geometry.attributes.position.array;
            lines.value = [...a];
            const keyFrame2 = new NumberKeyframeTrack('.value', kf, [...a, ...p]);
            this.lineGeometriesToUpdate.push(lines);
            this.pushAnimations('Convexlines', kfl, [keyFrame2], lines);
        }
        else if (json.type === JSON3DObject.BEZIER) {
            console.warn('Animation not supported', json.type);
        }
        else {
            console.warn('Animation not supported', json.type);
        }
    }
    addAnimationForPosition(animation, three, kf, kfl) {
        const values = this.calculateTargetPosition(three, animation);
        const positionKF = new VectorKeyframeTrack('.position', [...kf], values);
        this.pushAnimations('Action', kfl, [positionKF], three);
    }
    calculateTargetPosition({ position }, animation) {
        const p = [position.x, position.y, position.z];
        return [...p, ...[p[0] + animation[0], p[1] + animation[1], p[2] + animation[2]]];
    }
    updateMixers(timeOrDelta, absolute = false) {
        this.mixers &&
            this.mixers.forEach((m) => (absolute ? m.setTime(timeOrDelta) : m.update(timeOrDelta)));
    }
    updateLineGeometries() {
        this.lineGeometriesToUpdate.forEach((l) => {
            const geom = l.geometry;
            const values = l.value;
            geom.setAttribute('position', new BufferAttribute(new Float32Array(values), 3));
            geom.attributes.position.needsUpdate = true;
        });
    }
    updateTime(time) {
        this.updateMixers(time, true);
        this.updateLineGeometries();
    }
    animate() {
        this.updateMixers(this.clock.getDelta());
        this.updateLineGeometries();
    }
    pushAnimations(name, duration, tracks, rootObject) {
        const clip = new AnimationClip(name, duration, tracks);
        const mixer = new AnimationMixer(rootObject);
        this.mixers.push(mixer);
        const ca = mixer.clipAction(clip);
        ca.play();
    }
    useMorphTargetForAnimation(type) {
        return (type === JSON3DObject.CUBES || type === JSON3DObject.CONVEX || type === JSON3DObject.LINES);
    }
}

const POINTER_CLASS = 'show-pointer';
class Scene {
    constructor(sceneJson, domElement, settings, size, padding, clickCallback, dispatch, debugDOMElement, cameraState) {
        this.dispatch = dispatch;
        this.debugDOMElement = debugDOMElement;
        this.clickableObjects = [];
        this.tooltipObjects = [];
        this.objectDictionnary = {};
        this.tooltipHelper = new TooltipHelper();
        this.raycaster = new Raycaster();
        this.selectedJsonObjects = [];
        this.outlineScene = new Scene$1();
        this.threeUUIDTojsonObject = {};
        this.computeIdToThree = {};
        // handle multiSelection via shift key
        this.isMultiSelectionEnabled = false;
        this.registry = new ObjectRegistry();
        this.clock = new Clock();
        this.mouseMoveListener = (e) => {
            if (this.renderer instanceof WebGLRenderer || true) {
                // tooltips
                let p = this.getClickedReference(e.offsetX, e.offsetY, this.tooltipObjects);
                if (p && p.object) {
                    const { object, point } = p;
                    this.tooltipHelper.updateTooltip(point, object.jsonObject, object.sceneObject);
                    this.renderScene();
                }
                else {
                    this.tooltipHelper.hideTooltipIfNeeded() && this.renderScene();
                }
                // change mouse pointer for clickable objects
                p = this.getClickedReference(e.offsetX, e.offsetY, this.clickableObjects);
                if (p && p.object) {
                    this.renderer.domElement.classList.add(POINTER_CLASS);
                }
                else {
                    this.renderer.domElement.classList.remove(POINTER_CLASS);
                }
            }
            else {
                console.warn('No mousemove implementation for SVG');
            }
        };
        this.clickListener = (e) => {
            if (this.renderer instanceof WebGLRenderer || true) {
                const p = this.getClickedReference(e.offsetX, e.offsetY, this.clickableObjects);
                this.onClickImplementation(p, e);
            }
            else {
                console.warn('No implementation of click for SVG');
            }
        };
        this.mouseTrackballUpdate = () => {
            this.controls.update();
        };
        this.windowListener = () => this.resizeRendererToDisplaySize();
        this.settings = Object.assign(defaults, settings);
        this.objectBuilder = new ThreeBuilder(this.settings);
        this.cameraState = cameraState;
        this.cacheMountBBox(domElement);
        this.configureSceneRenderer(domElement);
        this.configureLabelRenderer(domElement);
        this.configureScene();
        this.configurePostProcessing();
        this.clickCallback = clickCallback;
        this.outlineScene.autoUpdate = false;
        this.animationHelper = new AnimationHelper(this.objectBuilder);
        window.addEventListener('resize', this.windowListener, false);
        this.inset = new InsetHelper(this.axis, this.axisJson, this.scene, sceneJson.origin, this.camera, this.objectBuilder, size, size, padding);
        if (this.debugDOMElement) {
            this.debugHelper = this.getHelper();
        }
        this.isMultiSelectionEnabled = this.settings.isMultiSelectionEnabled;
    }
    cacheMountBBox(mountNode) {
        this.cachedMountNodeSize = { width: mountNode.clientWidth, height: mountNode.clientHeight };
    }
    determineSceneRenderer() {
        switch (this.settings.renderer) {
            case Renderer.WEBGL: {
                const renderer = new WebGLRenderer({
                    antialias: this.settings.antialias,
                    alpha: this.settings.transparentBackground,
                });
                renderer.autoClear = false;
                renderer.setPixelRatio(window.devicePixelRatio);
                renderer.gammaFactor = 2.2;
                renderer.setClearColor(0xfffff, 0.0);
                return renderer;
            }
            case Renderer.SVG: {
                return new SVGRenderer();
            }
            default: {
                console.error('Invalid renderer passed', this.settings.renderer);
                return null;
            }
        }
    }
    configureSceneRenderer(mountNode) {
        const renderer = this.determineSceneRenderer();
        if (!renderer) {
            throw new Error('No renderer');
        }
        this.renderer = renderer;
        this.renderer.setSize(this.cachedMountNodeSize.width, this.cachedMountNodeSize.height);
        //TODO(chab) This should be simpler
        mountNode.appendChild(this.renderer.domElement);
    }
    configureLabelRenderer(mountNode) {
        const labelRenderer = new CSS2DRenderer();
        this.labelRenderer = labelRenderer;
        const width = mountNode.clientWidth;
        const height = mountNode.clientHeight;
        labelRenderer.setSize(width, height);
        labelRenderer.domElement.style.position = 'relative';
        labelRenderer.domElement.style.top = `-${height}px`;
        labelRenderer.domElement.style.pointerEvents = 'none';
        mountNode.appendChild(labelRenderer.domElement);
    }
    configureScene() {
        this.scene = getSceneWithBackground(this.settings);
        this.clickableObjects = [];
        this.objectDictionnary = {};
        // default camera
        this.camera = new OrthographicCamera(100, 100, 100, 100, 100);
        const lights = this.objectBuilder.makeLights(this.settings.lights);
        this.scene.add(lights);
        this.scene.add(this.tooltipHelper.tooltip);
        this.scene.add(this.camera);
        this.renderer.domElement.addEventListener('mousemove', this.mouseMoveListener);
        this.renderer.domElement.addEventListener('click', this.clickListener);
        // when the component is mounted, the camera can be updated in the same event loop
        // if the scene is configured
        // we defer the initialization of the control to the next event loop to avoid
        // some control events that would trigger unnecessary rendering
        setTimeout(() => this.configureControls(), 0);
    }
    configureControls() {
        switch (this.settings.controls) {
            case Control.ORBIT: {
                const controls = new OrbitControls(this.camera, this.renderer.domElement);
                controls.rotateSpeed = 2.0;
                controls.zoomSpeed = 1.2;
                controls.panSpeed = 0.8;
                controls.enabled = true;
                this.controls = controls;
                break;
            }
            default: {
                const controls = new TrackballControls(this.camera, this.renderer.domElement);
                controls.rotateSpeed = 2.0;
                controls.zoomSpeed = 1.2;
                controls.panSpeed = 0.8;
                controls.enabled = true;
                controls.staticMoving = true;
                this.controls = controls;
                break;
            }
        }
        if (this.settings.staticScene ||
            this.settings.animation === AnimationStyle.NONE ||
            this.settings.animation === AnimationStyle.SLIDER) {
            // only re-render when scene is rotated
            this.controls.addEventListener('change', () => {
                this.dispatch(this.camera.position, this.camera.quaternion, this.camera.zoom);
                this.renderScene();
            });
            this.controls.addEventListener('start', () => {
                this.controls.update();
                this.settings.controls === Control.TRACKBALL &&
                    document.addEventListener('mousemove', this.mouseTrackballUpdate, false);
            });
            this.controls.addEventListener('end', () => {
                this.controls.update();
                this.settings.controls === Control.TRACKBALL &&
                    document.removeEventListener('mousemove', this.mouseTrackballUpdate, false);
            });
        }
        else {
            // constantly re-render (for animation)
            this.start();
        }
    }
    updateCamera(position, rotation, zoom) {
        this.camera.position.copy(position);
        if (zoom) {
            this.camera.zoom = zoom;
        }
        if (rotation) {
            this.camera.quaternion.copy(rotation);
        }
        else {
            this.camera.lookAt(this.scene.position);
        }
        this.camera.updateProjectionMatrix(); // needed for the zoom
        this.renderScene();
    }
    onClickImplementation(p, e) {
        let needRedraw = false;
        //TODO(chab) make it more readale
        if (p && p.object) {
            const { object, point } = p;
            if (object === null || object === void 0 ? void 0 : object.sceneObject) {
                const sceneObject = object === null || object === void 0 ? void 0 : object.sceneObject;
                const jsonObject = object === null || object === void 0 ? void 0 : object.jsonObject;
                if (this.isMultiSelectionEnabled) {
                    // if the object is not in the registry, it just means it's the first time
                    // we select it
                    const objectIndex = this.outlineScene.children.indexOf(this.registry.getObjectFromRegistry(sceneObject.uuid));
                    const jsonObjectIndex = this.selectedJsonObjects.indexOf(jsonObject);
                    if ((objectIndex === -1 && jsonObjectIndex > -1) ||
                        (jsonObjectIndex === -1 && objectIndex > -1)) {
                        console.warn('During selection found a THREE object without a corresponding json object ( or vice-versa');
                        console.warn('THREE OBJECT', object, 'JSON', jsonObject);
                    }
                    if (jsonObjectIndex > -1) {
                        this.selectedJsonObjects.splice(jsonObjectIndex, 1);
                    }
                    else {
                        if (e.shiftKey) {
                            this.selectedJsonObjects.push(jsonObject);
                        }
                        else {
                            this.selectedJsonObjects = [jsonObject];
                        }
                    }
                    //TODO(chab) log warning if we have a json object without a three object, and vice-versa
                    if (objectIndex > -1) {
                        const object = this.outlineScene.children[objectIndex];
                        const sceneObject = this.registry.getObjectFromRegistry(object.uuid);
                        this.outlineScene.remove(sceneObject);
                    }
                    else {
                        if (!this.registry.registryHasObject(sceneObject)) {
                            this.addClonedObject(sceneObject);
                        }
                        const threeObjectForOutlineScene = this.registry.getObjectFromRegistry(sceneObject.uuid);
                        if (e.shiftKey) {
                            this.outlineScene.add(threeObjectForOutlineScene);
                        }
                        else {
                            if (this.outlineScene.children.length > 0) {
                                this.outlineScene.remove(...this.outlineScene.children);
                            }
                            this.outlineScene.add(threeObjectForOutlineScene);
                        }
                    }
                }
                else {
                    disposeSceneHierarchy(this.outlineScene);
                    if (!this.registry.registryHasObject(sceneObject)) {
                        this.addClonedObject(sceneObject);
                    }
                    const threeObjectForOutlineScene = this.registry.getObjectFromRegistry(sceneObject.uuid);
                    if (this.outlineScene.children.length > 0) {
                        this.outlineScene.remove(...this.outlineScene.children);
                    }
                    this.outlineScene.add(threeObjectForOutlineScene);
                    this.selectedJsonObjects = [jsonObject];
                }
                needRedraw = true;
            }
            this.clickCallback(this.selectedJsonObjects);
        }
        else {
            if (this.selectedJsonObjects.length > 0) {
                this.clickCallback([]);
            }
            this.selectedJsonObjects = [];
            if (this.outlineScene.children.length > 0) {
                disposeSceneHierarchy(this.outlineScene);
                this.outlineScene.remove(...this.outlineScene.children);
                needRedraw = true;
            }
        }
        if (this.settings.secondaryObjectView) {
            this.outlineScene.children.length > 0
                ? this.inset.showObject(this.outlineScene.children)
                : this.inset.showAxis();
        }
        needRedraw && this.renderScene();
    }
    addClonedObject(sceneObject) {
        const clone = sceneObject.clone();
        clone.matrixAutoUpdate = false;
        clone.uuid = sceneObject.uuid;
        this.registry.addToObjectRegisty(clone);
    }
    updateAnimationStyle(animationStyle) {
        this.settings.animation = animationStyle;
        switch (animationStyle) {
            case AnimationStyle.SLIDER:
            case AnimationStyle.NONE: {
                setTimeout(() => this.stop(), 0);
                break;
            }
            case AnimationStyle.PLAY: {
                setTimeout(() => this.start(), 0);
            }
        }
    }
    updateInsetSettings(inletSize, inletPadding, axisView) {
        this.inletPosition = axisView;
        if (this.axis) {
            this.inset.updateViewportsize(inletSize, inletPadding);
        }
        this.renderInlet();
    }
    resizeRendererToDisplaySize() {
        const canvas = this.renderer.domElement;
        this.cacheMountBBox(canvas.parentElement);
        const { width, height } = this.cachedMountNodeSize;
        this.labelRenderer.setSize(width, height);
        this.labelRenderer.domElement.style.top = `-${height}px`;
        if (this.renderer instanceof SVGRenderer) {
            this.renderer.setSize(width, height);
        }
        if (canvas.width !== width || canvas.height !== height) {
            this.renderScene();
        }
    }
    addToScene(sceneJson, bypassRendering = false) {
        // we need to clarify the  current semantics
        // currently, it will remove the old scene if the name is the same,
        // otherwise it will keep it
        // it will then zoom on the content of the added scene
        // if we found an object, we should remove all tootips and clicks related to it
        let outlinedObject = [];
        if (this.scene.getObjectByName(sceneJson.name)) {
            console.log('Regenerating scene');
            // see https://jsfiddle.net/L981td24/17/
            this.animationHelper.reset();
            this.clickableObjects = [];
            this.tooltipObjects = [];
            this.threeUUIDTojsonObject = {};
            this.computeIdToThree = {};
            this.registry.clear();
            this.removeObjectByName(sceneJson.name);
            if (this.outlineScene.children.length > 0) {
                outlinedObject = this.selectedJsonObjects.map((o) => o.id);
                console.log(outlinedObject);
                this.outlineScene.remove(...this.outlineScene.children);
            }
            this.selectedJsonObjects = [];
        }
        else {
            console.log('The scene is a new scene:', sceneJson.name);
        }
        const rootObject = new Object3D();
        rootObject.name = sceneJson.name;
        sceneJson.visible && (rootObject.visible = sceneJson.visible);
        const objectToAnimate = new Set();
        // recursively visit the scene, starting with the root object
        const traverse_scene = (o, parent, currentId) => {
            o.contents.forEach((childObject, idx) => {
                if (childObject.type) {
                    const object = this.makeObject(childObject);
                    parent.add(object);
                    this.threeUUIDTojsonObject[object.uuid] = childObject;
                    this.computeIdToThree[`${currentId}--${idx}`] = object;
                    childObject.id = `${currentId}--${idx}`;
                    if (childObject.animate) {
                        objectToAnimate.add(`${currentId}--${idx}`);
                    }
                }
                else {
                    const threeObject = new Object3D();
                    threeObject.name = childObject.name;
                    this.computeIdToThree[`${currentId}--${threeObject.name}`] = threeObject;
                    childObject.id = `${currentId}--${threeObject.name}`;
                    threeObject.visible = childObject.visible === undefined ? true : !!childObject.visible;
                    if (childObject.origin) {
                        const translation = new Matrix4();
                        // note(chab) have a typedefinition for the JSON
                        translation.makeTranslation(...childObject.origin);
                        threeObject.applyMatrix4(translation);
                    }
                    if (!this.settings.extractAxis || threeObject.name !== 'axes') {
                        parent.add(threeObject);
                    }
                    traverse_scene(childObject, threeObject, `${currentId}--${threeObject.name}`);
                    if (threeObject.name === 'axes') {
                        this.axis = threeObject.clone();
                        this.axisJson = Object.assign({}, childObject);
                    }
                }
            });
        };
        traverse_scene(sceneJson, rootObject, '');
        // can cause memory leak
        //console.log('rootObject', rootObject, rootObject);
        this.scene.add(rootObject);
        this.setupCamera(rootObject);
        // we try to update the outline from the preceding scene, but if the corresponding
        // object is not there, we'll remove the outline
        if (outlinedObject.length > 0) {
            this.outlineScene.remove(...this.outlineScene.children);
            outlinedObject.forEach((id) => {
                const three = this.computeIdToThree[id];
                if (three) {
                    this.addClonedObject(three);
                    this.outlineScene.add(this.registry.getObjectFromRegistry(three.uuid));
                    this.selectedJsonObjects.push(this.threeUUIDTojsonObject[three.uuid]);
                }
            });
            // update inlet
            this.outlineScene.children.length > 0 && this.inset.showObject(this.outlineScene.children);
        }
        // we can automatically output a screenshot to be the background of the parent div
        // this helps for automated testing, printing the web page, etc.
        if (this.settings.renderDivBackground) {
            this.renderer.domElement.parentElement.style.backgroundSize = '100%';
            this.renderer.domElement.parentElement.style.backgroundRepeat = 'no-repeat';
            this.renderer.domElement.parentElement.style.backgroundPosition = 'center';
            if (this.renderer.domElement instanceof HTMLCanvasElement) {
                // TS magic, domElements is automatically coerced to HTMLCanvasElement
                this.renderer.domElement.parentElement.style.backgroundImage = `url('${this.renderer.domElement.toDataURL('image/png')}')`;
            }
        }
        //FIXME(chab) try to move that before
        if (this.inset && !!this.axis && !!this.axisJson && this.outlineScene.children.length === 0) {
            this.inset.setAxis(this.axis, this.axisJson);
            this.inset.updateSelectedObject(this.axis, this.axisJson);
        }
        objectToAnimate.forEach((id) => {
            const three = this.computeIdToThree[id];
            const json = this.threeUUIDTojsonObject[three.uuid];
            this.animationHelper.buildAnimationSupport(json, three);
        });
        if (!bypassRendering) {
            this.renderScene();
        }
    }
    setupCamera(rootObject) {
        // auto-zoom to fit object
        // TODO: maybe better to move this elsewhere (what if using perspective?)
        const box = new Box3();
        box.setFromObject(rootObject);
        const center = new Vector3();
        box.getCenter(center);
        const size = new Vector3();
        box.getSize(size);
        const extent = box.max.sub(box.min);
        let length = extent.length() * 2;
        if (this.settings.zoomToFit2D) {
            length = extent.x > extent.y ? extent.x * 2 : extent.y * 2;
        }
        // we add a bit of padding, let's suppose we rotate, we want to avoid the
        // object to go out of the camera while still on the screen
        const Z_PADDING = 50;
        if (this.camera) {
            this.camera.left = (center.x - length) / this.settings.defaultZoom;
            this.camera.right = (center.x + length) / this.settings.defaultZoom;
            this.camera.top = (center.y + length) / this.settings.defaultZoom;
            this.camera.bottom = (center.y - length) / this.settings.defaultZoom;
            this.camera.near = center.z - length - Z_PADDING;
            this.camera.far = center.z + length + Z_PADDING;
        }
        else {
            this.camera = new OrthographicCamera(center.x - length, center.x + length, center.y + length, center.y - length, center.z - length - Z_PADDING, center.z + length + Z_PADDING);
        }
        // we put the camera behind the object, object should be in the middle of the view, closer to the far plane
        this.camera.position.z = center.z;
        this.camera.position.y = center.y;
        this.camera.position.x = center.x;
        const axis = this.settings.cameraAxis;
        this.camera.position[axis] =
            this.settings.cameraPosition === 'back'
                ? this.camera.position[axis] + length / 2
                : this.camera.position[axis] - length / 2;
        this.camera.lookAt(this.scene.position);
        this.camera.zoom = 4;
        this.camera.updateProjectionMatrix();
        this.camera.updateMatrix();
        if (this.controls) {
            this.controls.update();
        }
    }
    makeObject(object_json) {
        const obj = new Object3D();
        if (object_json.clickable) {
            this.clickableObjects.push(obj);
            this.objectDictionnary[obj.id] = object_json;
        }
        if (object_json.tooltip) {
            this.tooltipObjects.push(obj);
            this.objectDictionnary[obj.id] = object_json;
        }
        return this.objectBuilder.makeObject(object_json, obj);
    }
    start() {
        if (!this.frameId) {
            this.frameId = requestAnimationFrame(() => this.animate());
        }
        else {
            console.warn('Trying to start animation, but it seems an animation loop is already running');
        }
    }
    stop() {
        cancelAnimationFrame(this.frameId);
        this.frameId = undefined;
    }
    animate() {
        this.animationHelper.animate();
        this.controls.update();
        this.refreshOutline();
        this.renderScene();
        this.frameId = window.requestAnimationFrame(() => this.animate());
    }
    renderScene() {
        if (this.renderer instanceof WebGLRenderer) {
            this.renderer.clear();
            this.renderer.setSize(this.cachedMountNodeSize.width, this.cachedMountNodeSize.height);
            //TODO(chab) not sure to understand why we have to turn on/off scissor tests between renderings
            this.renderer.setScissorTest(true);
            this.renderer.setScissor(0, 0, this.cachedMountNodeSize.width, this.cachedMountNodeSize.height);
            this.renderer.setViewport(0, 0, this.cachedMountNodeSize.width, this.cachedMountNodeSize.height);
        }
        this.renderer.render(this.scene, this.camera);
        if (this.outline && this.outlineScene.children.length > 0) {
            this.outline.renderOutline(this.outlineScene, this.camera);
        }
        this.labelRenderer.render(this.scene, this.camera);
        if (this.renderer instanceof WebGLRenderer) {
            this.renderer.clearDepth();
        }
        // debug view
        if (this.debugHelper) {
            this.debugHelper.render();
        }
        //TODO(chab) make a dedicated rendering for SVG
        this.renderInlet();
    }
    renderInlet() {
        this.inset &&
            this.inletPosition !== ScenePosition.HIDDEN &&
            this.inset.render(this.renderer, this.getInletOrigin(this.inletPosition));
    }
    toggleVisibility(namesToVisibility) {
        if (!!namesToVisibility && Object.keys(namesToVisibility).length > 0) {
            Object.keys(namesToVisibility).forEach((objName) => {
                const obj = this.scene.getObjectByName(objName);
                if (obj) {
                    obj.visible = !!namesToVisibility[objName];
                }
            });
            // check all outlined objects, for each outlined object, their ancestors visibility can be false
            // if it's the case, we'll need to remove the outlined object
            // note that we consider that the selection is lost
            const idsToRemove = [];
            this.selectedJsonObjects = this.selectedJsonObjects.filter((o) => {
                let threeobject = this.computeIdToThree[o.id];
                let visible = true;
                if (!threeobject.visible) {
                    idsToRemove.push(threeobject.uuid);
                    return false;
                }
                else {
                    const baseObject = threeobject;
                    // walk the object hierarchy to check if parent are visible
                    while (threeobject.parent && visible) {
                        threeobject = threeobject.parent;
                        visible = threeobject.visible;
                    }
                    // if it's not visible, remove it
                    !visible && idsToRemove.push(baseObject.uuid);
                }
                return visible;
            });
            idsToRemove.forEach((id) => {
                const outlineObject = this.registry.getObjectFromRegistry(id);
                this.outlineScene.remove(outlineObject);
                // remove from inlet too
            });
            this.renderScene();
        }
    }
    // i know this is can be done by implementing a color buffer, with each color matching one
    // object
    getClickedReference(clientX, clientY, objectsToCheck) {
        //FIXME(chab) ideally we should recompute the objectsToCheck array for better performance
        if (!objectsToCheck || objectsToCheck.length === 0) {
            return;
        }
        const size = new Vector2(this.cachedMountNodeSize.width, this.cachedMountNodeSize.height);
        this.raycaster.setFromCamera(getThreeScreenCoordinate(size, clientX, clientY), this.camera);
        const intersects = this.raycaster.intersectObjects(objectsToCheck, true);
        if (intersects.length > 0) {
            // we catch the first object that the ray touches
            let point = intersects[0].point;
            const screenPoint = getScreenCoordinate(this.cachedMountNodeSize, point, this.camera);
            const finalPoint = moveAndUnprojectPoint(this.cachedMountNodeSize, screenPoint, this.camera, {
                x: 0,
                y: -30,
            });
            const info = {
                point: finalPoint,
                object: this.getParentObject(intersects[0].object),
            };
            return info;
        }
        return null;
    }
    getParentObject(object) {
        if (!object.parent || !object.parent.visible || !object.visible) {
            return null;
        }
        if (!this.objectDictionnary[object.id]) {
            return this.getParentObject(object.parent);
        }
        else {
            return { sceneObject: object, jsonObject: this.objectDictionnary[object.id] };
        }
    }
    enableDebug(debugEnabled, node) {
        if (!debugEnabled) {
            if (!this.debugHelper) ;
            else {
                this.debugHelper.onDestroy();
                this.debugHelper = null;
            }
        }
        else {
            if (this.debugHelper) ;
            else {
                this.debugDOMElement = node;
                this.debugHelper = this.getHelper();
                this.debugHelper.render();
            }
        }
    }
    removeListener() {
        window.removeEventListener('resize', this.windowListener, false);
        this.renderer.domElement.removeEventListener('mousemove', this.mouseMoveListener);
        this.renderer.domElement.removeEventListener('click', this.clickListener);
        document.removeEventListener('mousemove', this.mouseTrackballUpdate, false);
    }
    // call this when the parent component is destroyed
    onDestroy() {
        this.computeIdToThree = {};
        this.threeUUIDTojsonObject = {};
        this.removeListener();
        this.debugHelper && this.debugHelper.onDestroy();
        this.inset.onDestroy();
        this.controls.dispose();
        disposeSceneHierarchy(this.scene);
        this.scene.dispose();
        if (this.renderer instanceof WebGLRenderer) {
            this.renderer.forceContextLoss();
            this.renderer.dispose();
        }
        this.renderer.domElement.parentElement.removeChild(this.renderer.domElement);
        this.renderer.domElement = undefined;
        this.renderer = null;
        this.stop();
    }
    removeObjectByName(name) {
        // name is not necessarily unique, make this recursive ?
        const object = this.scene.getObjectByName(name);
        typeof object !== 'undefined' && this.scene.remove(object);
    }
    getHelper() {
        return new DebugHelper(this.debugDOMElement, this.scene, this.camera, this.settings, this.objectBuilder, this.inset.helper);
    }
    getInletOrigin(pos) {
        switch (pos) {
            case ScenePosition.SW: {
                return [this.inset.getPadding(), this.inset.getPadding()];
            }
            case ScenePosition.SE: {
                return [
                    this.cachedMountNodeSize.width - this.inset.getPadding() - this.inset.getSize(),
                    this.inset.getPadding(),
                ];
            }
            case ScenePosition.NW: {
                return [
                    0 + this.inset.getPadding(),
                    this.cachedMountNodeSize.height - this.inset.getPadding() - this.inset.getSize(),
                ];
            }
            case ScenePosition.NE: {
                return [
                    this.cachedMountNodeSize.width - this.inset.getPadding() - this.inset.getSize(),
                    this.cachedMountNodeSize.height - this.inset.getPadding() - this.inset.getSize(),
                ];
            }
            default:
                return [this.inset.getPadding(), this.inset.getPadding()];
        }
    }
    configurePostProcessing() {
        if (this.settings.renderer === Renderer.SVG) {
            console.warn('No post processing pass for SVG');
            return;
        }
        //TODO(chab) look at three.js to implement the texture
        const outline = new OutlineEffect(this.renderer, {
            defaultThickness: 0.01,
            defaultColor: [0, 0, 0],
            defaultAlpha: 1.0,
            defaultKeepAlive: true,
        });
        this.outline = outline;
    }
    findObjectByUUID(uuid) {
        const threeObject = this.scene.getObjectByProperty('uuid', uuid);
        const jsonObject = this.threeUUIDTojsonObject[uuid];
        return {
            threeObject,
            jsonObject,
        };
    }
    refreshOutline() {
        let outlinedObject = [];
        if (this.outlineScene.children.length > 0) {
            outlinedObject = this.selectedJsonObjects.map((o) => o.id);
            this.outlineScene.remove(...this.outlineScene.children);
        }
        if (outlinedObject.length > 0) {
            this.outlineScene.remove(...this.outlineScene.children);
            outlinedObject.forEach((id) => {
                const three = this.computeIdToThree[id];
                this.addClonedObject(three);
                this.outlineScene.add(this.registry.getObjectFromRegistry(three.uuid));
            });
        }
    }
    updateTime(time) {
        this.animationHelper.updateTime(time);
        this.refreshOutline();
        this.renderScene();
    }
}

/**
 *
 * A very simple and naive singleton event bus.
 *
 */
const eventBus = new Subject$1();
function subscribe(cb) {
    return eventBus.asObservable().subscribe((event) => cb(event));
}

var CameraReducerAction;
(function (CameraReducerAction) {
    CameraReducerAction["NEW_POSITION"] = "follow_camera";
    CameraReducerAction["STOP_FOLLOWING"] = "stop_following";
    CameraReducerAction["START_FOLLOWING"] = "start_following";
})(CameraReducerAction || (CameraReducerAction = {}));
const initialState = {
    following: true,
};
function cameraReducer(state, { type, payload }) {
    // we expect the new position/orientation, and the ID of the component
    // (to avoid resetting the position )
    switch (type) {
        case CameraReducerAction.NEW_POSITION:
            return {
                quaternion: payload.quaternion.clone(),
                position: payload.position.clone(),
                zoom: payload.zoom,
                setByComponentId: payload.componentId,
                following: state.following,
            };
        case CameraReducerAction.STOP_FOLLOWING:
            return Object.assign(Object.assign({}, state), { following: false });
        case CameraReducerAction.START_FOLLOWING:
            return Object.assign(Object.assign({}, state), { following: true });
        default:
            console.error('Unknown action, return current state. Action', type, payload);
    }
    return state;
}

const CameraContext = createContext(null);
/**
 *
 * Use CameraContextProvider to coordinate multiple 3D Scene
 *
 */
function CameraContextProvider(props) {
    // type of dispatch is React.Dispatch<Action<CameraActionType, CameraActionPayload>>
    const [state, dispatch] = useReducer(cameraReducer, initialState);
    const store = useMemo(() => ({ state, dispatch }), [state, dispatch]);
    return createElement(CameraContext.Provider, { value: store }, Object.assign({}, props.children));
}

const sliderStyle = {
    position: 'relative',
    margin: 'auto',
    width: '80%',
    touchAction: 'none',
};
const domain = [0, 100];
const defaultValues = [0];
class SimpleSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: defaultValues.slice(),
            update: defaultValues.slice(),
        };
        this.onUpdate = (update) => {
            this.props.onUpdate(update[0]);
            this.setState({ update });
        };
        this.onChange = (values) => {
            this.setState({ values });
        };
    }
    render() {
        const { state: { values, update }, } = this;
        return (React__default.createElement("div", { style: { height: 120, width: '100%' } },
            React__default.createElement(Slider, { mode: 1, step: 1, domain: domain, rootStyle: sliderStyle, onUpdate: this.onUpdate, onChange: this.onChange, values: values },
                React__default.createElement(Rail, null, ({ getRailProps }) => React__default.createElement(SliderRail, { getRailProps: getRailProps })),
                React__default.createElement(Handles, null, ({ handles, getHandleProps }) => (React__default.createElement("div", { className: "slider-handles" }, handles.map((handle) => (React__default.createElement(Handle, { key: handle.id, handle: handle, domain: domain, getHandleProps: getHandleProps })))))),
                React__default.createElement(Tracks, { right: false }, ({ tracks, getTrackProps }) => (React__default.createElement("div", { className: "slider-tracks" }, tracks.map(({ id, source, target }) => (React__default.createElement(Track, { key: id, source: source, target: target, getTrackProps: getTrackProps })))))),
                React__default.createElement(Ticks, { count: 15 /* generate approximately 15 ticks within the domain */ }, ({ ticks }) => (React__default.createElement("div", { className: "slider-ticks" }, ticks.map((tick) => (React__default.createElement(Tick, { key: tick.id, tick: tick, count: ticks.length })))))))));
    }
}
// *******************************************************
// RAIL
// *******************************************************
const railOuterStyle = {
    position: 'absolute',
    width: '100%',
    height: 42,
    transform: 'translate(0%, -50%)',
    borderRadius: 7,
    cursor: 'pointer',
};
const railInnerStyle = {
    position: 'absolute',
    width: '100%',
    height: 14,
    transform: 'translate(0%, -50%)',
    borderRadius: 7,
    pointerEvents: 'none',
    backgroundColor: 'rgb(155,155,155)',
};
function SliderRail({ getRailProps }) {
    return (React__default.createElement(Fragment, null,
        React__default.createElement("div", Object.assign({ style: railOuterStyle }, getRailProps())),
        React__default.createElement("div", { style: railInnerStyle })));
}
SliderRail.propTypes = {
    getRailProps: PropTypes.func.isRequired,
};
// *******************************************************
// HANDLE COMPONENT
// *******************************************************
function Handle({ domain: [min, max], handle: { id, value, percent }, disabled, getHandleProps, }) {
    return (React__default.createElement(Fragment, null,
        React__default.createElement("div", Object.assign({ style: {
                left: `${percent}%`,
                position: 'absolute',
                transform: 'translate(-50%, -50%)',
                WebkitTapHighlightColor: 'rgba(0,0,0,0)',
                zIndex: 5,
                width: 28,
                height: 42,
                cursor: 'pointer',
                // border: '1px solid white',
                backgroundColor: 'none',
            } }, getHandleProps(id))),
        React__default.createElement("div", { role: "slider", "aria-valuemin": min, "aria-valuemax": max, "aria-valuenow": value, style: {
                left: `${percent}%`,
                position: 'absolute',
                transform: 'translate(-50%, -50%)',
                zIndex: 2,
                width: 24,
                height: 24,
                borderRadius: '50%',
                boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.3)',
                backgroundColor: disabled ? '#666' : '#ffc400',
            } })));
}
Handle.propTypes = {
    domain: PropTypes.array.isRequired,
    handle: PropTypes.shape({
        id: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
        percent: PropTypes.number.isRequired,
    }).isRequired,
    getHandleProps: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
};
Handle.defaultProps = {
    disabled: false,
};
// *******************************************************
// KEYBOARD HANDLE COMPONENT
// Uses a button to allow keyboard events
// *******************************************************
function KeyboardHandle({ domain: [min, max], handle: { id, value, percent }, disabled, getHandleProps, }) {
    return (React__default.createElement("button", Object.assign({ role: "slider", "aria-valuemin": min, "aria-valuemax": max, "aria-valuenow": value, style: {
            left: `${percent}%`,
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
            width: 24,
            height: 24,
            borderRadius: '50%',
            boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.3)',
            backgroundColor: disabled ? '#666' : '#ffc400',
        } }, getHandleProps(id))));
}
KeyboardHandle.propTypes = {
    domain: PropTypes.array.isRequired,
    handle: PropTypes.shape({
        id: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
        percent: PropTypes.number.isRequired,
    }).isRequired,
    getHandleProps: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
};
KeyboardHandle.defaultProps = {
    disabled: false,
};
// *******************************************************
// TRACK COMPONENT
// *******************************************************
function Track({ source, target, getTrackProps, disabled }) {
    return (React__default.createElement("div", Object.assign({ style: {
            position: 'absolute',
            transform: 'translate(0%, -50%)',
            height: 14,
            zIndex: 1,
            backgroundColor: disabled ? '#999' : '#b28900',
            borderRadius: 7,
            cursor: 'pointer',
            left: `${source.percent}%`,
            width: `${target.percent - source.percent}%`,
        } }, getTrackProps())));
}
Track.propTypes = {
    source: PropTypes.shape({
        id: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
        percent: PropTypes.number.isRequired,
    }).isRequired,
    target: PropTypes.shape({
        id: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
        percent: PropTypes.number.isRequired,
    }).isRequired,
    getTrackProps: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
};
Track.defaultProps = {
    disabled: false,
};
// *******************************************************
// TICK COMPONENT
// *******************************************************
function Tick({ tick, count, format }) {
    return (React__default.createElement("div", null,
        React__default.createElement("div", { style: {
                position: 'absolute',
                marginTop: 14,
                width: 1,
                height: 5,
                backgroundColor: 'rgb(200,200,200)',
                left: `${tick.percent}%`,
            } }),
        React__default.createElement("div", { style: {
                position: 'absolute',
                marginTop: 22,
                fontSize: 10,
                textAlign: 'center',
                marginLeft: `${-(100 / count) / 2}%`,
                width: `${100 / count}%`,
                left: `${tick.percent}%`,
            } }, format(tick.value))));
}
Tick.propTypes = {
    tick: PropTypes.shape({
        id: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
        percent: PropTypes.number.isRequired,
    }).isRequired,
    count: PropTypes.number.isRequired,
    format: PropTypes.func.isRequired,
};
Tick.defaultProps = {
    format: (d) => d,
};

// hooks are run on every render, when the prop change, we return the non-update value,
// and update it
const usePrevious = (value) => {
    const ref = useRef();
    // Store current value in ref
    useEffect(() => {
        ref.current = value;
    }, [value]);
    // Return previous value (happens before update in useEffect above)
    return ref.current;
};
/**
 * A useEffect hook that debounces the value by a given delay
 * Values are only checked once per delay interval
 */
const useDebounce = (value, delay) => {
    // State and setters for debounced value
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        // Set debouncedValue to value (passed in) after the specified delay
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        // Return a cleanup function that will be called every time ...
        // ... useEffect is re-called. useEffect will only be re-called ...
        // ... if value changes (see the inputs array below).
        // This is how we prevent debouncedValue from changing if value is ...
        // ... changed within the delay period. Timeout gets cleared and restarted.
        // To put it in context, if the user is typing within our app's ...
        // ... search box, we don't want the debouncedValue to update until ...
        // ... they've stopped typing for more than 500ms.
        return () => {
            clearTimeout(handler);
        };
    }, 
    // Only re-call effect if value changes
    // You could also add the "delay" var to inputs array if you ...
    // ... need to be able to change that dynamically.
    [value]);
    return debouncedValue;
};
/**
 * A custom hook that builds on useLocation to parse
 * the url query string for you.
 */
const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

/**
 * CrystalToolkitScene is intended to draw simple 3D scenes using the popular
 * Three.js scene graph library. In particular, the JSON representing the 3D scene
 * is intended to be human-readable, and easily generated via Python. This is not
 * intended to be a replacement for a full scene graph library, but for rapid
 * prototyping by non-experts.
 */
const getSceneSize = (sceneSize) => (sceneSize ? sceneSize : DEFAULT_SCENE_SIZE);
let ID_GENERATOR = 0;
const CrystalToolkitScene = (_a) => {
    var { imageRequest = {}, setProps = () => null } = _a, otherProps = __rest(_a, ["imageRequest", "setProps"]);
    let props = Object.assign({ imageRequest, setProps }, otherProps);
    // mount nodes, those are passed in the template and are populated when
    // the component is mounted
    const mountNodeRef = useRef(null);
    const mountNodeDebugRef = useRef(null);
    const componentId = useRef((++ID_GENERATOR).toString());
    const previousAnimationSetting = usePrevious(props.animation);
    // we use a ref to keep a reference to the underlying scene
    const scene = useRef(null);
    /**
     * Handle saving image to png
     * If using the SVG Renderer, convert svg to canvas image first
     * Set imageData prop to data uri
     */
    const setPngData = (sceneComponent) => {
        if (sceneComponent.renderer instanceof WebGLRenderer) {
            const oldRatio = sceneComponent.renderer.getPixelRatio();
            sceneComponent.renderer.setPixelRatio(8);
            sceneComponent.renderScene();
            const imageData = sceneComponent.renderer.domElement.toDataURL('image/png');
            const imageDataTimestamp = Date.now();
            props.setProps({ imageData, imageDataTimestamp });
            // wait for next event loop before rendering
            setTimeout(() => {
                sceneComponent.renderer.setPixelRatio(oldRatio);
                sceneComponent.renderScene();
            });
        }
        else {
            sceneComponent.renderScene();
            toDataUrl(sceneComponent.renderer.domElement, 'image/png', {
                callback: function (imageData) {
                    const imageDataTimestamp = Date.now();
                    props.setProps({ imageData, imageDataTimestamp });
                },
            });
        }
    };
    /**
     * Handle saving image to collada file (.dae)
     * Set imageData prop to data uri
     */
    const setColladaData = (sceneComponent) => {
        // Note(chab) i think it's better to use callback, so we can manage failure
        const files = new ColladaExporter().parse(sceneComponent.scene, (r) => {
            console.log('result', r);
        }, {});
        const imageData = 'data:text/plain;base64,' + btoa(files.data);
        const imageDataTimestamp = Date.now();
        props.setProps({ imageData, imageDataTimestamp });
    };
    const requestImage = (filetype, sceneComponent) => {
        // force a render (in case buffer has been cleared)
        switch (filetype) {
            case ExportType.png:
                setPngData(sceneComponent);
                break;
            case ExportType.dae:
                setColladaData(sceneComponent);
                break;
            default:
                throw new Error('Unknown filetype.');
        }
    };
    // called after the component is mounted, so refs are correctly populated
    useEffect(() => {
        const _s = (scene.current = new Scene(props.data, mountNodeRef.current, props.settings, props.inletSize, props.inletPadding, (objects) => {
            if (props.onObjectClicked) {
                props.onObjectClicked(objects);
            }
        }, 
        /** Sets dispatch function on the scene object */
        (position, quaternion, zoom) => {
            cameraDispatch &&
                cameraDispatch({
                    type: CameraReducerAction.NEW_POSITION,
                    payload: {
                        componentId: componentId.current,
                        position,
                        quaternion,
                        zoom,
                    },
                });
        }, mountNodeDebugRef.current));
        const subscription = subscribe(({ filetype }) => requestImage(filetype, _s));
        return () => {
            // clean up code
            subscription.unsubscribe();
            _s.onDestroy();
        };
    }, []);
    // Note(chab) those hooks will be executed sequentially at mount time, and on change of the deps array elements
    useEffect(() => scene.current.enableDebug(props.debug, mountNodeDebugRef.current), [
        props.debug,
    ]);
    // An interesting classical react issue that we fixed : look at the stories, we do not pass anymore an empty object,
    // but a reference to an empty object, otherwise, it will be a different reference, and treated as a different object, thus
    // triggering the effect
    useEffect(() => {
        if (!props.data || !props.data.name || !props.data.contents) {
            console.warn('no data passed ( or missing name /content ), scene will not be updated', props.data);
            return;
        }
        //FIXME(chab) we have to much calls to renderScene
        !!props.data && scene.current.addToScene(props.data, true);
        scene.current.toggleVisibility(props.toggleVisibility);
    }, [props.data]);
    useEffect(() => scene.current.toggleVisibility(props.toggleVisibility), [
        props.toggleVisibility,
    ]);
    useEffect(() => scene.current.updateInsetSettings(props.inletSize, props.inletPadding, props.axisView), [props.inletSize, props.inletPadding, props.axisView]);
    useEffect(() => {
        scene.current.resizeRendererToDisplaySize();
    }, [props.sceneSize]);
    useEffect(() => {
        const { filetype } = props.imageRequest;
        if (filetype) {
            requestImage(filetype, scene.current);
        }
    }, [props.imageRequest]);
    /**
     * Manage camera state with context if component is wrapped in CameraContextProvider
     * otherwise use a reducer to manage camera state locally
     */
    const cameraContext = useContext(CameraContext);
    const [cameraReducerState, cameraReducerDispatch] = useReducer(cameraReducer, initialState);
    const cameraState = cameraContext ? cameraContext.state : cameraReducerState;
    const cameraDispatch = cameraContext ? cameraContext.dispatch : cameraReducerDispatch;
    if (cameraState) {
        useEffect(() => {
            props.setProps(Object.assign(Object.assign({}, props), { currentCameraState: cameraState }));
            if (cameraState &&
                cameraState.setByComponentId !== componentId.current &&
                cameraState.position &&
                cameraState.quaternion &&
                cameraState.zoom) {
                scene.current.updateCamera(cameraState.position, cameraState.quaternion, cameraState.zoom);
            }
        }, [cameraState.position]);
    }
    /**
     * When customCameraState prop changes,
     * update the camera to the new state
     * and save the new state into the cameraState
     */
    useEffect(() => {
        if (props.customCameraState) {
            const { position: p, quaternion: q, zoom } = props.customCameraState;
            /**
             * Explicitly convert to Quaternion/Vector3 objects so that you
             * can pass simple objects to customCameraState prop.
             * (i.e. no need to use THREE.js constructors)
             */
            const quaternion = new Quaternion(q === null || q === void 0 ? void 0 : q.x, q === null || q === void 0 ? void 0 : q.y, q === null || q === void 0 ? void 0 : q.z, q === null || q === void 0 ? void 0 : q.w);
            const position = new Vector3(p === null || p === void 0 ? void 0 : p.x, p === null || p === void 0 ? void 0 : p.y, p === null || p === void 0 ? void 0 : p.z);
            scene.current.updateCamera(position, quaternion, zoom);
            if (cameraDispatch) {
                cameraDispatch({
                    type: CameraReducerAction.NEW_POSITION,
                    payload: {
                        componentId: componentId.current,
                        position,
                        quaternion,
                        zoom,
                    },
                });
            }
        }
        console.log('new props');
    }, [props.customCameraState]);
    useEffect(() => {
        props.animation && scene.current.updateAnimationStyle(props.animation);
    }, [props.animation]);
    const size = getSceneSize(props.sceneSize);
    // NOTE(chab) we could let the user opt for a flex layout, instead of using relative/absolute
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement("div", { className: "three-wrapper", style: { position: 'relative', width: size, height: size } },
            React__default.createElement("div", { id: props.id, style: Object.assign(Object.assign({}, MOUNT_NODE_STYLE), { width: size, height: size }), className: MOUNT_NODE_CLASS, ref: mountNodeRef })),
        props.debug && (React__default.createElement("div", { style: DEBUG_STYLE, className: MOUNT_DEBUG_NODE_CLASS, ref: mountNodeDebugRef })),
        props.animation === AnimationStyle.SLIDER && (React__default.createElement(SimpleSlider, { onUpdate: (a) => {
                scene.current.updateTime(a / 100);
            } }))));
};

function JSONViewComponent(props) {
    const { src, name, theme, style, iconStyle, indentWidth, collapsed, collapseStringsAfterLength, groupArraysAfterLength, enableClipboard, displayObjectSize, displayDataTypes, defaultValue, sortKeys, validationMessage } = props;
    return (React__default.createElement(ReactJson, { src: src, name: name, theme: theme, style: style, iconStyle: iconStyle, indentWidth: indentWidth, collapsed: collapsed, collapseStringsAfterLength: collapseStringsAfterLength, groupArraysAfterLength: groupArraysAfterLength, enableClipboard: enableClipboard, displayObjectSize: displayObjectSize, displayDataTypes: displayDataTypes, defaultValue: defaultValue, sortKeys: sortKeys, validationMessage: validationMessage, onEdit: e => { }, onAdd: a => { }, onDelete: d => { } }));
}
JSONViewComponent.propTypes = {
    type: PropTypes.oneOf(['array', 'object']),
    // see documentation at https://github.com/mac-s-g/react-json-view
    src: PropTypes.object,
    name: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    theme: PropTypes.string,
    style: PropTypes.object,
    iconStyle: PropTypes.oneOf(['circle', 'triangle', 'square']),
    indentWidth: PropTypes.number,
    collapsed: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    collapseStringsAfterLength: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    groupArraysAfterLength: PropTypes.number,
    enableClipboard: PropTypes.bool,
    displayObjectSize: PropTypes.bool,
    displayDataTypes: PropTypes.bool,
    defaultValue: PropTypes.object,
    sortKeys: PropTypes.bool,
    validationMessage: PropTypes.string
};
// https://github.com/mac-s-g/react-json-view/blob/39f7b6b2e73a873b974f0801c260d90d76cccdae/index.d.ts
JSONViewComponent.defaultProps = {
    src: null,
    name: false,
    theme: 'rjv-default',
    style: {},
    iconStyle: 'circle',
    indentWidth: 8,
    collapsed: false,
    collapseStringsAfterLength: false,
    groupArraysAfterLength: 100,
    enableClipboard: true,
    displayObjectSize: false,
    displayDataTypes: false,
    defaultValue: null,
    sortKeys: false,
    validationMessage: 'Validation Error'
};

function ReactGraphComponent(props) {
    const network = useRef({ edges: null, nodes: null, fit: () => { } });
    //NOTE(chab) not 100% sure of the original intent :)
    // but this will fit the network AFTER the rendering
    useEffect(() => {
        if (props.graph && props.graph.nodes && props.graph.edges) {
            network.current.edges = props.graph.edges;
            network.current.nodes = props.graph.nodes;
            network.current.fit();
        }
    }, [props.graph.nodes, props.graph.sedges]);
    // the API here is weird.. either we just pass the graph, and the downstream component takes care of it
    // either we update imperatively the graph
    return (React__default.createElement(Graph, { graph: props.graph, options: props.options, getNetwork: network => (network.current = network) }));
}
ReactGraphComponent.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks
     */
    id: PropTypes.string,
    /**
     * A graph that will be displayed when this component is rendered
     */
    graph: PropTypes.object,
    /**
     * Display options for the graph
     */
    options: PropTypes.object,
    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change
     */
    setProps: PropTypes.func
};

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = createContext && createContext(DefaultContext);

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest$1 = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  return t;
};

function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}

function GenIcon(data) {
  return function (props) {
    return createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function (conf) {
    var computedSize = props.size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + ' ' : '') + props.className;

    var attr = props.attr,
        title = props.title,
        svgProps = __rest$1(props, ["attr", "title"]);

    return createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign({
        color: props.color || conf.color
      }, conf.style, props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && createElement("title", null, title), props.children);
  };

  return IconContext !== undefined ? createElement(IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function AiOutlineFund (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M926 164H94c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V196c0-17.7-14.3-32-32-32zm-40 632H134V236h752v560zm-658.9-82.3c3.1 3.1 8.2 3.1 11.3 0l172.5-172.5 114.4 114.5c3.1 3.1 8.2 3.1 11.3 0l297-297.2c3.1-3.1 3.1-8.2 0-11.3l-36.8-36.8a8.03 8.03 0 0 0-11.3 0L531 565 416.6 450.5a8.03 8.03 0 0 0-11.3 0l-214.9 215a8.03 8.03 0 0 0 0 11.3l36.7 36.9z"}}]})(props);
}function AiOutlineSetting (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 0 0 9.3-35.2l-.9-2.6a443.74 443.74 0 0 0-79.7-137.9l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 0 0-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.4a351.86 351.86 0 0 0-99 57.4l-81.9-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a446.02 446.02 0 0 0-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0 0 35.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0 0 25.8 25.7l2.7.5a449.4 449.4 0 0 0 159 0l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-85a350 350 0 0 0 99.7-57.6l81.3 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 0 1-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 0 1-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 0 1 512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 0 1 400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 0 1 624 502c0 29.9-11.7 58-32.8 79.2z"}}]})(props);
}

//SettingOutlined
const mainApps = [
    {
        id: 'explore',
        icon: 'icon-fontastic-search',
        name: 'Explore',
        subApps: [
            { id: 'mat-explore', name: 'Materials Explorer', icon: 'icon-fontastic-search' },
            { id: 'mol-explore', icon: 'icon-fontastic-phase-diagram', name: 'Molecule Explorer' },
            { id: 'porus-explore', icon: 'icon-fontastic-nanoporous', name: 'Nanoporous Explorer' },
            {
                id: 'battery-explore',
                icon: 'icon-fontastic-battery',
                name: 'Battery Explorer',
                svg: React__default.createElement(AiOutlineSetting, null)
            }
        ]
    },
    {
        id: 'analzye',
        name: 'Analyze',
        svg: React__default.createElement(AiOutlineFund, null),
        subApps: [
            { id: 'phase-diagram', icon: 'icon-fontastic-phase-diagram', name: 'Phase Diagram' },
            { id: 'pourbaix-diagram', icon: 'icon-fontastic-pourbaix-diagram', name: 'Pourbaix Diagram' },
            { id: 'reaction-calc', icon: 'icon-fontastic-reaction', name: 'Reaction Calculator' }
        ]
    },
    {
        id: 'char',
        icon: 'icon-fontastic-xas',
        name: 'Characterize',
        subApps: [{ name: 'XAS Matcher', id: 'xas', icon: 'icon-fontastic-xas' }]
    },
    {
        id: 'design',
        icon: 'icon-fontastic-toolkit',
        name: 'Design',
        subApps: [
            { id: 'crystal', icon: 'icon-fontastic-toolkit', name: 'Crystal toolkit' },
            {
                id: 'Structure Predictor',
                icon: 'icon-fontastic-struct-predictor',
                name: 'Structure Predictor'
            }
        ]
    },
    { id: 'apply', name: 'Apply', svg: React__default.createElement(AiOutlineSetting, null), subApps: [] }
];
function build_dico(dico, apps, parentId) {
    return apps.reduce((acc, app) => {
        acc[app.id] = app;
        parentId && (dico[app.id].parentId = parentId);
        app.subApps && build_dico(acc, app.subApps, app.id);
        return acc;
    }, dico);
}
const APP_DICO = build_dico({}, mainApps, null);
const AppItem = ({ name, idx, icon, svg, selectedAppId }) => {
    let subApp = null;
    const selectedParentAppId = !!selectedAppId.length ? APP_DICO[selectedAppId].parentId : '';
    if (!!selectedAppId.length && selectedParentAppId === idx) {
        icon = APP_DICO[selectedAppId].icon;
        svg = APP_DICO[selectedAppId].svg;
        subApp = APP_DICO[selectedAppId].name;
    }
    return (React__default.createElement("span", { key: name, "data-for": "sidebar-menu", "data-tip": idx, className: `sidebar-menu-item ${selectedParentAppId === idx ? 'selected' : ''}` },
        icon ? (React__default.createElement("span", { className: 'sidebar-item icon ' + icon })) : (React__default.createElement("span", { className: "sidebar-item" },
            " ",
            svg)),
        React__default.createElement("span", null,
            " ",
            name),
        subApp && React__default.createElement("span", { className: "sub-app" },
            " ",
            subApp,
            " ")));
};
const Sidebar = ({ width, currentApp, onAppSelected, layout, height }) => {
    const [currentAppId, setCurrentAppId] = useState('');
    const tooltip = useRef(null);
    const isFirst = useRef(false);
    const sidebar = useRef(null);
    useEffect(() => {
        setCurrentAppId(currentApp ? currentApp : '');
    }, [currentApp]);
    const setApp = id => {
        const app = APP_DICO[id];
        if (app) {
            setCurrentAppId(app.id);
            tooltip.current.state.show = false;
            isFirst.current = app.parentId === mainApps[0].id;
            ReactTooltip.hide();
            onAppSelected(app.id);
        }
        else {
            console.error('incorrect app id', id);
        }
    };
    return (React__default.createElement("div", { ref: sidebar, className: `sidebar ${layout === 'vertical' ? 'vertical' : 'horizontal'}`, style: layout === 'vertical' ? { width: width } : { height: height } },
        React__default.createElement(ReactTooltip, { id: "sidebar-menu", ref: tooltip, offset: layout === 'vertical' ? { left: 20, top: 17 } : { left: 0, top: 0 }, place: layout === 'vertical' ? 'right' : 'bottom', getContent: idx => {
                const app = APP_DICO[idx];
                if (idx === mainApps[0].id) {
                    tooltip.current.state.extraClass = 'top';
                }
                else {
                    if (tooltip.current)
                        tooltip.current.state.extraClass = '';
                }
                return (React__default.createElement(React__default.Fragment, null, app &&
                    app.subApps &&
                    app.subApps.map(app => (React__default.createElement("span", { onClick: () => setApp(app.id), key: app.name, "data-for": "sidebar-menu", "data-tip": "8", className: `sidebar-menu-item ${currentAppId === app.id ? 'selected' : ''}` },
                        app.icon ? (React__default.createElement("span", { className: 'sidebar-item icon ' + app.icon })) : (React__default.createElement("span", { className: "sidebar-item" },
                            " ",
                            app.svg)),
                        React__default.createElement("span", null,
                            " ",
                            app ? app.name : 'null'))))));
            }, overridePosition: ({ left, top }, currentEvent, currentTarget, node) => {
                const d = document.documentElement;
                if (d && node) {
                    left = Math.min(d.clientWidth - node.clientWidth, left);
                    top = Math.min(d.clientHeight - node.clientHeight, top);
                    left = Math.max(0, left);
                    top = Math.max(0, top);
                }
                return { top, left };
            }, effect: "solid", delayHide: 50, delayShow: 20, delayUpdate: 200, border: true, type: 'light' }),
        React__default.createElement("div", { className: "content" }, mainApps.map((app, idx) => (React__default.createElement(AppItem, { selectedAppId: currentAppId, key: app.name, name: app.name, idx: app.id, svg: app.svg, icon: app.icon }))))));
};

const Scrollspy = ({ menuGroups, menuClassName = 'menu', activeClassName = 'is-active', menuGroupLabelClassName = 'menu-label', menuItemContainerClassName = 'menu-list', menuItemClassName = '', offset = -20 }) => {
    const [spyItemsViewMap, setSpyItemsViewMap] = useState(initSpyItemsViewMap);
    function initSpyItemsViewMap() {
        let viewMap = {};
        menuGroups.forEach(group => {
            group.items.forEach(item => {
                var _a;
                viewMap[item.targetId] = false;
                (_a = item.items) === null || _a === void 0 ? void 0 : _a.forEach(subitem => {
                    viewMap[subitem.targetId] = false;
                });
            });
        });
        return viewMap;
    }
    function spy() {
        let firstItemFound = false;
        let newSpyItemsViewMap = {};
        Object.keys(spyItemsViewMap).forEach(key => {
            newSpyItemsViewMap[key] = firstItemFound ? false : isInView(key);
            if (newSpyItemsViewMap[key])
                firstItemFound = true;
        });
        setSpyItemsViewMap(newSpyItemsViewMap);
    }
    const isInView = (targetId) => {
        const element = document.getElementById(targetId);
        if (element) {
            const rect = element.getBoundingClientRect();
            return rect.bottom >= 0 - offset;
        }
        else {
            return false;
        }
    };
    const getMenuGroupLabel = (group) => {
        return group.label ? (React__default.createElement("p", { className: menuGroupLabelClassName || undefined }, group.label)) : null;
    };
    const getMenuItemLink = (item) => {
        return (React__default.createElement("a", { className: spyItemsViewMap[item.targetId] ? activeClassName : '', href: `#${item.targetId}` }, item.label));
    };
    useEffect(() => {
        spy();
        window.addEventListener('scroll', spy);
        return function cleanup() {
            window.removeEventListener('scroll', spy);
        };
    }, []);
    return (React__default.createElement("aside", { className: menuClassName }, menuGroups.map((group, k) => {
        return (React__default.createElement("div", { key: k },
            getMenuGroupLabel(group),
            React__default.createElement("ul", { className: menuItemContainerClassName || undefined }, group.items.map((item, i) => {
                return (React__default.createElement("li", { key: i, className: menuItemClassName || undefined },
                    getMenuItemLink(item),
                    item.items && (React__default.createElement("ul", { className: menuItemContainerClassName || undefined }, item.items.map((subitem, j) => {
                        return (React__default.createElement("li", { key: j, className: menuItemClassName || undefined }, getMenuItemLink(subitem)));
                    })))));
            }))));
    })));
};

var FilterId;
(function (FilterId) {
    FilterId["ELEMENTS"] = "elements";
    FilterId["VOLUME"] = "volume";
    FilterId["DENSITY"] = "density";
    FilterId["MP_ID"] = "task_ids";
    FilterId["FORMULA"] = "formula";
    FilterId["NELEMENTS"] = "nelements";
})(FilterId || (FilterId = {}));
var FilterType;
(function (FilterType) {
    FilterType["SLIDER"] = "SLIDER";
    FilterType["MATERIALS_INPUT"] = "MATERIALS_INPUT";
    FilterType["TEXT_INPUT"] = "TEXT_INPUT";
    FilterType["SELECT"] = "SELECT";
    FilterType["THREE_STATE_BOOLEAN_SELECT"] = "THREE_STATE_BOOLEAN_SELECT";
    FilterType["SELECT_SPACEGROUP_SYMBOL"] = "SELECT_SPACEGROUP_SYMBOL";
    FilterType["SELECT_SPACEGROUP_NUMBER"] = "SELECT_SPACEGROUP_NUMBER";
    FilterType["SELECT_CRYSTAL_SYSTEM"] = "SELECT_CRYSTAL_SYSTEM";
    FilterType["SELECT_POINTGROUP"] = "SELECT_POINTGROUP";
    FilterType["CHECKBOX_LIST"] = "CHECKBOX_LIST";
})(FilterType || (FilterType = {}));
var ColumnFormat;
(function (ColumnFormat) {
    ColumnFormat["FIXED_DECIMAL"] = "FIXED_DECIMAL";
    ColumnFormat["SIGNIFICANT_FIGURES"] = "SIGNIFICANT_FIGURES";
    ColumnFormat["FORMULA"] = "FORMULA";
    ColumnFormat["LINK"] = "LINK";
    ColumnFormat["BOOLEAN"] = "BOOLEAN";
    ColumnFormat["SPACEGROUP_SYMBOL"] = "SPACEGROUP_SYMBOL";
    ColumnFormat["POINTGROUP"] = "POINTGROUP";
})(ColumnFormat || (ColumnFormat = {}));

const spaceGroups = [
    {
        full_symbol: 'P1',
        crystal_system: 'triclinic',
        point_group: '1',
        int_number: 1,
        symbol: 'P1',
        symbol_unicode: 'P1',
        symbol_latex: 'P1',
        point_group_unicode: '1',
        point_group_latex: '1',
    },
    {
        full_symbol: 'P-1',
        crystal_system: 'triclinic',
        point_group: '-1',
        int_number: 2,
        symbol: 'P-1',
        symbol_unicode: 'P1\u0305',
        symbol_latex: 'P$\\overline{1}$',
        point_group_unicode: '1\u0305',
        point_group_latex: '$\\overline{1}$',
    },
    {
        full_symbol: 'P121',
        crystal_system: 'monoclinic',
        point_group: '2',
        int_number: 3,
        symbol: 'P121',
        symbol_unicode: 'P121',
        symbol_latex: 'P121',
        point_group_unicode: '2',
        point_group_latex: '2',
    },
    {
        full_symbol: 'P12_11',
        crystal_system: 'monoclinic',
        point_group: '2',
        int_number: 4,
        symbol: 'P12_11',
        symbol_unicode: 'P12_11\u0305',
        symbol_latex: 'P12$_{11}$',
        point_group_unicode: '2',
        point_group_latex: '2',
    },
    {
        full_symbol: 'C121',
        crystal_system: 'monoclinic',
        point_group: '2',
        int_number: 5,
        symbol: 'C121',
        symbol_unicode: 'C121',
        symbol_latex: 'C121',
        point_group_unicode: '2',
        point_group_latex: '2',
    },
    {
        full_symbol: 'P1m1',
        crystal_system: 'monoclinic',
        point_group: 'm',
        int_number: 6,
        symbol: 'P1m1',
        symbol_unicode: 'P1m1',
        symbol_latex: 'P1m1',
        point_group_unicode: 'm',
        point_group_latex: 'm',
    },
    {
        full_symbol: 'P1c1',
        crystal_system: 'monoclinic',
        point_group: 'm',
        int_number: 7,
        symbol: 'P1c1',
        symbol_unicode: 'P1c1',
        symbol_latex: 'P1c1',
        point_group_unicode: 'm',
        point_group_latex: 'm',
    },
    {
        full_symbol: 'C1m1',
        crystal_system: 'monoclinic',
        point_group: 'm',
        int_number: 8,
        symbol: 'C1m1',
        symbol_unicode: 'C1m1',
        symbol_latex: 'C1m1',
        point_group_unicode: 'm',
        point_group_latex: 'm',
    },
    {
        full_symbol: 'C1c1',
        crystal_system: 'monoclinic',
        point_group: 'm',
        int_number: 9,
        symbol: 'C1c1',
        symbol_unicode: 'C1c1',
        symbol_latex: 'C1c1',
        point_group_unicode: 'm',
        point_group_latex: 'm',
    },
    {
        full_symbol: 'P12/m1',
        crystal_system: 'monoclinic',
        point_group: '2/m',
        int_number: 10,
        symbol: 'P12/m1',
        symbol_unicode: 'P12/m1',
        symbol_latex: 'P12/m1',
        point_group_unicode: '2/m',
        point_group_latex: '2/m',
    },
    {
        full_symbol: 'P12_1/m1',
        crystal_system: 'monoclinic',
        point_group: '2/m',
        int_number: 11,
        symbol: 'P12_1/m1',
        symbol_unicode: 'P12\u2081/m1',
        symbol_latex: 'P12$_{1}$/m1',
        point_group_unicode: '2/m',
        point_group_latex: '2/m',
    },
    {
        full_symbol: 'C12/m1',
        crystal_system: 'monoclinic',
        point_group: '2/m',
        int_number: 12,
        symbol: 'C12/m1',
        symbol_unicode: 'C12/m1',
        symbol_latex: 'C12/m1',
        point_group_unicode: '2/m',
        point_group_latex: '2/m',
    },
    {
        full_symbol: 'P12/c1',
        crystal_system: 'monoclinic',
        point_group: '2/m',
        int_number: 13,
        symbol: 'P12/c1',
        symbol_unicode: 'P12/c1',
        symbol_latex: 'P12/c1',
        point_group_unicode: '2/m',
        point_group_latex: '2/m',
    },
    {
        full_symbol: 'P12_1/c1',
        crystal_system: 'monoclinic',
        point_group: '2/m',
        int_number: 14,
        symbol: 'P12_1/c1',
        symbol_unicode: 'P12\u2081/c1',
        symbol_latex: 'P12$_{1}$/c1',
        point_group_unicode: '2/m',
        point_group_latex: '2/m',
    },
    {
        full_symbol: 'C12/c1',
        crystal_system: 'monoclinic',
        point_group: '2/m',
        int_number: 15,
        symbol: 'C12/c1',
        symbol_unicode: 'C12/c1',
        symbol_latex: 'C12/c1',
        point_group_unicode: '2/m',
        point_group_latex: '2/m',
    },
    {
        full_symbol: 'P222',
        crystal_system: 'orthorhombic',
        point_group: '222',
        int_number: 16,
        symbol: 'P222',
        symbol_unicode: 'P222',
        symbol_latex: 'P222',
        point_group_unicode: '222',
        point_group_latex: '222',
    },
    {
        full_symbol: 'P222_1',
        crystal_system: 'orthorhombic',
        point_group: '222',
        int_number: 17,
        symbol: 'P222_1',
        symbol_unicode: 'P222\u2081',
        symbol_latex: 'P222$_{1}$',
        point_group_unicode: '222',
        point_group_latex: '222',
    },
    {
        full_symbol: 'P2_12_12',
        crystal_system: 'orthorhombic',
        point_group: '222',
        int_number: 18,
        symbol: 'P2_12_12',
        symbol_unicode: 'P2_12\u0305_12\u0305',
        symbol_latex: 'P2$_{12}$$_{12}$',
        point_group_unicode: '222',
        point_group_latex: '222',
    },
    {
        full_symbol: 'P2_12_12_1',
        crystal_system: 'orthorhombic',
        point_group: '222',
        int_number: 19,
        symbol: 'P2_12_121',
        symbol_unicode: 'P2_12\u0305_121\u0305',
        symbol_latex: 'P2$_{12}$$_{121}$',
        point_group_unicode: '222',
        point_group_latex: '222',
    },
    {
        full_symbol: 'C222_1',
        crystal_system: 'orthorhombic',
        point_group: '222',
        int_number: 20,
        symbol: 'C222_1',
        symbol_unicode: 'C222\u2081',
        symbol_latex: 'C222$_{1}$',
        point_group_unicode: '222',
        point_group_latex: '222',
    },
    {
        full_symbol: 'C222',
        crystal_system: 'orthorhombic',
        point_group: '222',
        int_number: 21,
        symbol: 'C222',
        symbol_unicode: 'C222',
        symbol_latex: 'C222',
        point_group_unicode: '222',
        point_group_latex: '222',
    },
    {
        full_symbol: 'F222',
        crystal_system: 'orthorhombic',
        point_group: '222',
        int_number: 22,
        symbol: 'F222',
        symbol_unicode: 'F222',
        symbol_latex: 'F222',
        point_group_unicode: '222',
        point_group_latex: '222',
    },
    {
        full_symbol: 'I222',
        crystal_system: 'orthorhombic',
        point_group: '222',
        int_number: 23,
        symbol: 'I222',
        symbol_unicode: 'I222',
        symbol_latex: 'I222',
        point_group_unicode: '222',
        point_group_latex: '222',
    },
    {
        full_symbol: 'I2_12_12_1',
        crystal_system: 'orthorhombic',
        point_group: '222',
        int_number: 24,
        symbol: 'I2_12_121',
        symbol_unicode: 'I2_12\u0305_121\u0305',
        symbol_latex: 'I2$_{12}$$_{121}$',
        point_group_unicode: '222',
        point_group_latex: '222',
    },
    {
        full_symbol: 'Pmm2',
        crystal_system: 'orthorhombic',
        point_group: 'mm2',
        int_number: 25,
        symbol: 'Pmm2',
        symbol_unicode: 'Pmm2',
        symbol_latex: 'Pmm2',
        point_group_unicode: 'mm2',
        point_group_latex: 'mm2',
    },
    {
        full_symbol: 'Pmc2_1',
        crystal_system: 'orthorhombic',
        point_group: 'mm2',
        int_number: 26,
        symbol: 'Pmc2_1',
        symbol_unicode: 'Pmc2\u2081',
        symbol_latex: 'Pmc2$_{1}$',
        point_group_unicode: 'mm2',
        point_group_latex: 'mm2',
    },
    {
        full_symbol: 'Pcc2',
        crystal_system: 'orthorhombic',
        point_group: 'mm2',
        int_number: 27,
        symbol: 'Pcc2',
        symbol_unicode: 'Pcc2',
        symbol_latex: 'Pcc2',
        point_group_unicode: 'mm2',
        point_group_latex: 'mm2',
    },
    {
        full_symbol: 'Pma2',
        crystal_system: 'orthorhombic',
        point_group: 'mm2',
        int_number: 28,
        symbol: 'Pma2',
        symbol_unicode: 'Pma2',
        symbol_latex: 'Pma2',
        point_group_unicode: 'mm2',
        point_group_latex: 'mm2',
    },
    {
        full_symbol: 'Pca2_1',
        crystal_system: 'orthorhombic',
        point_group: 'mm2',
        int_number: 29,
        symbol: 'Pca2_1',
        symbol_unicode: 'Pca2\u2081',
        symbol_latex: 'Pca2$_{1}$',
        point_group_unicode: 'mm2',
        point_group_latex: 'mm2',
    },
    {
        full_symbol: 'Pnc2',
        crystal_system: 'orthorhombic',
        point_group: 'mm2',
        int_number: 30,
        symbol: 'Pnc2',
        symbol_unicode: 'Pnc2',
        symbol_latex: 'Pnc2',
        point_group_unicode: 'mm2',
        point_group_latex: 'mm2',
    },
    {
        full_symbol: 'Pmn2_1',
        crystal_system: 'orthorhombic',
        point_group: 'mm2',
        int_number: 31,
        symbol: 'Pmn2_1',
        symbol_unicode: 'Pmn2\u2081',
        symbol_latex: 'Pmn2$_{1}$',
        point_group_unicode: 'mm2',
        point_group_latex: 'mm2',
    },
    {
        full_symbol: 'Pba2',
        crystal_system: 'orthorhombic',
        point_group: 'mm2',
        int_number: 32,
        symbol: 'Pba2',
        symbol_unicode: 'Pba2',
        symbol_latex: 'Pba2',
        point_group_unicode: 'mm2',
        point_group_latex: 'mm2',
    },
    {
        full_symbol: 'Pna2_1',
        crystal_system: 'orthorhombic',
        point_group: 'mm2',
        int_number: 33,
        symbol: 'Pna2_1',
        symbol_unicode: 'Pna2\u2081',
        symbol_latex: 'Pna2$_{1}$',
        point_group_unicode: 'mm2',
        point_group_latex: 'mm2',
    },
    {
        full_symbol: 'Pnn2',
        crystal_system: 'orthorhombic',
        point_group: 'mm2',
        int_number: 34,
        symbol: 'Pnn2',
        symbol_unicode: 'Pnn2',
        symbol_latex: 'Pnn2',
        point_group_unicode: 'mm2',
        point_group_latex: 'mm2',
    },
    {
        full_symbol: 'Cmm2',
        crystal_system: 'orthorhombic',
        point_group: 'mm2',
        int_number: 35,
        symbol: 'Cmm2',
        symbol_unicode: 'Cmm2',
        symbol_latex: 'Cmm2',
        point_group_unicode: 'mm2',
        point_group_latex: 'mm2',
    },
    {
        full_symbol: 'Cmc2_1',
        crystal_system: 'orthorhombic',
        point_group: 'mm2',
        int_number: 36,
        symbol: 'Cmc2_1',
        symbol_unicode: 'Cmc2\u2081',
        symbol_latex: 'Cmc2$_{1}$',
        point_group_unicode: 'mm2',
        point_group_latex: 'mm2',
    },
    {
        full_symbol: 'Ccc2',
        crystal_system: 'orthorhombic',
        point_group: 'mm2',
        int_number: 37,
        symbol: 'Ccc2',
        symbol_unicode: 'Ccc2',
        symbol_latex: 'Ccc2',
        point_group_unicode: 'mm2',
        point_group_latex: 'mm2',
    },
    {
        full_symbol: 'Amm2',
        crystal_system: 'orthorhombic',
        point_group: 'mm2',
        int_number: 38,
        symbol: 'Amm2',
        symbol_unicode: 'Amm2',
        symbol_latex: 'Amm2',
        point_group_unicode: 'mm2',
        point_group_latex: 'mm2',
    },
    {
        full_symbol: 'Aem2',
        crystal_system: 'orthorhombic',
        point_group: 'mm2',
        int_number: 39,
        symbol: 'Aem2',
        symbol_unicode: 'Aem2',
        symbol_latex: 'Aem2',
        point_group_unicode: 'mm2',
        point_group_latex: 'mm2',
    },
    {
        full_symbol: 'Ama2',
        crystal_system: 'orthorhombic',
        point_group: 'mm2',
        int_number: 40,
        symbol: 'Ama2',
        symbol_unicode: 'Ama2',
        symbol_latex: 'Ama2',
        point_group_unicode: 'mm2',
        point_group_latex: 'mm2',
    },
    {
        full_symbol: 'Aea2',
        crystal_system: 'orthorhombic',
        point_group: 'mm2',
        int_number: 41,
        symbol: 'Aea2',
        symbol_unicode: 'Aea2',
        symbol_latex: 'Aea2',
        point_group_unicode: 'mm2',
        point_group_latex: 'mm2',
    },
    {
        full_symbol: 'Fmm2',
        crystal_system: 'orthorhombic',
        point_group: 'mm2',
        int_number: 42,
        symbol: 'Fmm2',
        symbol_unicode: 'Fmm2',
        symbol_latex: 'Fmm2',
        point_group_unicode: 'mm2',
        point_group_latex: 'mm2',
    },
    {
        full_symbol: 'Fdd2',
        crystal_system: 'orthorhombic',
        point_group: 'mm2',
        int_number: 43,
        symbol: 'Fdd2',
        symbol_unicode: 'Fdd2',
        symbol_latex: 'Fdd2',
        point_group_unicode: 'mm2',
        point_group_latex: 'mm2',
    },
    {
        full_symbol: 'Imm2',
        crystal_system: 'orthorhombic',
        point_group: 'mm2',
        int_number: 44,
        symbol: 'Imm2',
        symbol_unicode: 'Imm2',
        symbol_latex: 'Imm2',
        point_group_unicode: 'mm2',
        point_group_latex: 'mm2',
    },
    {
        full_symbol: 'Iba2',
        crystal_system: 'orthorhombic',
        point_group: 'mm2',
        int_number: 45,
        symbol: 'Iba2',
        symbol_unicode: 'Iba2',
        symbol_latex: 'Iba2',
        point_group_unicode: 'mm2',
        point_group_latex: 'mm2',
    },
    {
        full_symbol: 'Ima2',
        crystal_system: 'orthorhombic',
        point_group: 'mm2',
        int_number: 46,
        symbol: 'Ima2',
        symbol_unicode: 'Ima2',
        symbol_latex: 'Ima2',
        point_group_unicode: 'mm2',
        point_group_latex: 'mm2',
    },
    {
        full_symbol: 'P2/m2/m2/m',
        crystal_system: 'orthorhombic',
        point_group: 'mmm',
        int_number: 47,
        symbol: 'Pmmm',
        symbol_unicode: 'Pmmm',
        symbol_latex: 'Pmmm',
        point_group_unicode: 'mmm',
        point_group_latex: 'mmm',
    },
    {
        full_symbol: 'P2/n2/n2/n',
        crystal_system: 'orthorhombic',
        point_group: 'mmm',
        int_number: 48,
        symbol: 'Pnnn1',
        symbol_unicode: 'Pnnn1',
        symbol_latex: 'Pnnn1',
        point_group_unicode: 'mmm',
        point_group_latex: 'mmm',
    },
    {
        full_symbol: 'P2/c2/c2/m',
        crystal_system: 'orthorhombic',
        point_group: 'mmm',
        int_number: 49,
        symbol: 'Pccm',
        symbol_unicode: 'Pccm',
        symbol_latex: 'Pccm',
        point_group_unicode: 'mmm',
        point_group_latex: 'mmm',
    },
    {
        full_symbol: 'P2/b2/a2/n',
        crystal_system: 'orthorhombic',
        point_group: 'mmm',
        int_number: 50,
        symbol: 'Pban1',
        symbol_unicode: 'Pban1',
        symbol_latex: 'Pban1',
        point_group_unicode: 'mmm',
        point_group_latex: 'mmm',
    },
    {
        full_symbol: 'P2_1/m2/m2/a',
        crystal_system: 'orthorhombic',
        point_group: 'mmm',
        int_number: 51,
        symbol: 'Pmma',
        symbol_unicode: 'Pmma',
        symbol_latex: 'Pmma',
        point_group_unicode: 'mmm',
        point_group_latex: 'mmm',
    },
    {
        full_symbol: 'P2/n2_1/n2/a',
        crystal_system: 'orthorhombic',
        point_group: 'mmm',
        int_number: 52,
        symbol: 'Pnna',
        symbol_unicode: 'Pnna',
        symbol_latex: 'Pnna',
        point_group_unicode: 'mmm',
        point_group_latex: 'mmm',
    },
    {
        full_symbol: 'P2/m2/n2_1/a',
        crystal_system: 'orthorhombic',
        point_group: 'mmm',
        int_number: 53,
        symbol: 'Pmna',
        symbol_unicode: 'Pmna',
        symbol_latex: 'Pmna',
        point_group_unicode: 'mmm',
        point_group_latex: 'mmm',
    },
    {
        full_symbol: 'P2_1/c2/c2/a',
        crystal_system: 'orthorhombic',
        point_group: 'mmm',
        int_number: 54,
        symbol: 'Pcca',
        symbol_unicode: 'Pcca',
        symbol_latex: 'Pcca',
        point_group_unicode: 'mmm',
        point_group_latex: 'mmm',
    },
    {
        full_symbol: 'P2_1/b2_1/a2/m',
        crystal_system: 'orthorhombic',
        point_group: 'mmm',
        int_number: 55,
        symbol: 'Pbam',
        symbol_unicode: 'Pbam',
        symbol_latex: 'Pbam',
        point_group_unicode: 'mmm',
        point_group_latex: 'mmm',
    },
    {
        full_symbol: 'P2_1/c2_1/c2/n',
        crystal_system: 'orthorhombic',
        point_group: 'mmm',
        int_number: 56,
        symbol: 'Pccn',
        symbol_unicode: 'Pccn',
        symbol_latex: 'Pccn',
        point_group_unicode: 'mmm',
        point_group_latex: 'mmm',
    },
    {
        full_symbol: 'P2/b2_1/c2_1/m',
        crystal_system: 'orthorhombic',
        point_group: 'mmm',
        int_number: 57,
        symbol: 'Pbcm',
        symbol_unicode: 'Pbcm',
        symbol_latex: 'Pbcm',
        point_group_unicode: 'mmm',
        point_group_latex: 'mmm',
    },
    {
        full_symbol: 'P2_1/n2_1/n2/m',
        crystal_system: 'orthorhombic',
        point_group: 'mmm',
        int_number: 58,
        symbol: 'Pnnm',
        symbol_unicode: 'Pnnm',
        symbol_latex: 'Pnnm',
        point_group_unicode: 'mmm',
        point_group_latex: 'mmm',
    },
    {
        full_symbol: 'P2_1/m2_1/m2/n',
        crystal_system: 'orthorhombic',
        point_group: 'mmm',
        int_number: 59,
        symbol: 'Pmmn1',
        symbol_unicode: 'Pmmn1',
        symbol_latex: 'Pmmn1',
        point_group_unicode: 'mmm',
        point_group_latex: 'mmm',
    },
    {
        full_symbol: 'P2_1/b2/c2_1/n',
        crystal_system: 'orthorhombic',
        point_group: 'mmm',
        int_number: 60,
        symbol: 'Pbcn',
        symbol_unicode: 'Pbcn',
        symbol_latex: 'Pbcn',
        point_group_unicode: 'mmm',
        point_group_latex: 'mmm',
    },
    {
        full_symbol: 'P2_1/b2_1/c2_1/a',
        crystal_system: 'orthorhombic',
        point_group: 'mmm',
        int_number: 61,
        symbol: 'Pbca',
        symbol_unicode: 'Pbca',
        symbol_latex: 'Pbca',
        point_group_unicode: 'mmm',
        point_group_latex: 'mmm',
    },
    {
        full_symbol: 'P2_1/n2_1/m2_1/a',
        crystal_system: 'orthorhombic',
        point_group: 'mmm',
        int_number: 62,
        symbol: 'Pnma',
        symbol_unicode: 'Pnma',
        symbol_latex: 'Pnma',
        point_group_unicode: 'mmm',
        point_group_latex: 'mmm',
    },
    {
        full_symbol: 'C2/m2/c2_1/m',
        crystal_system: 'orthorhombic',
        point_group: 'mmm',
        int_number: 63,
        symbol: 'Cmcm',
        symbol_unicode: 'Cmcm',
        symbol_latex: 'Cmcm',
        point_group_unicode: 'mmm',
        point_group_latex: 'mmm',
    },
    {
        full_symbol: 'C2/m2/c2_1/e',
        crystal_system: 'orthorhombic',
        point_group: 'mmm',
        int_number: 64,
        symbol: 'Cmce',
        symbol_unicode: 'Cmce',
        symbol_latex: 'Cmce',
        point_group_unicode: 'mmm',
        point_group_latex: 'mmm',
    },
    {
        full_symbol: 'C2/m2/m2/m',
        crystal_system: 'orthorhombic',
        point_group: 'mmm',
        int_number: 65,
        symbol: 'Cmmm',
        symbol_unicode: 'Cmmm',
        symbol_latex: 'Cmmm',
        point_group_unicode: 'mmm',
        point_group_latex: 'mmm',
    },
    {
        full_symbol: 'C2/c2/c2/m',
        crystal_system: 'orthorhombic',
        point_group: 'mmm',
        int_number: 66,
        symbol: 'Cccm',
        symbol_unicode: 'Cccm',
        symbol_latex: 'Cccm',
        point_group_unicode: 'mmm',
        point_group_latex: 'mmm',
    },
    {
        full_symbol: 'C2/m2/m2/e',
        crystal_system: 'orthorhombic',
        point_group: 'mmm',
        int_number: 67,
        symbol: 'Cmme',
        symbol_unicode: 'Cmme',
        symbol_latex: 'Cmme',
        point_group_unicode: 'mmm',
        point_group_latex: 'mmm',
    },
    {
        full_symbol: 'C2/c2/c2/e',
        crystal_system: 'orthorhombic',
        point_group: 'mmm',
        int_number: 68,
        symbol: 'Ccce1',
        symbol_unicode: 'Ccce1',
        symbol_latex: 'Ccce1',
        point_group_unicode: 'mmm',
        point_group_latex: 'mmm',
    },
    {
        full_symbol: 'F2/m2/m2/m',
        crystal_system: 'orthorhombic',
        point_group: 'mmm',
        int_number: 69,
        symbol: 'Fmmm',
        symbol_unicode: 'Fmmm',
        symbol_latex: 'Fmmm',
        point_group_unicode: 'mmm',
        point_group_latex: 'mmm',
    },
    {
        full_symbol: 'F2/d2/d2/d',
        crystal_system: 'orthorhombic',
        point_group: 'mmm',
        int_number: 70,
        symbol: 'Fddd1',
        symbol_unicode: 'Fddd1',
        symbol_latex: 'Fddd1',
        point_group_unicode: 'mmm',
        point_group_latex: 'mmm',
    },
    {
        full_symbol: 'I2/m2/m2/m',
        crystal_system: 'orthorhombic',
        point_group: 'mmm',
        int_number: 71,
        symbol: 'Immm',
        symbol_unicode: 'Immm',
        symbol_latex: 'Immm',
        point_group_unicode: 'mmm',
        point_group_latex: 'mmm',
    },
    {
        full_symbol: 'I2/b2/a2/m',
        crystal_system: 'orthorhombic',
        point_group: 'mmm',
        int_number: 72,
        symbol: 'Ibam',
        symbol_unicode: 'Ibam',
        symbol_latex: 'Ibam',
        point_group_unicode: 'mmm',
        point_group_latex: 'mmm',
    },
    {
        full_symbol: 'I2_1/b2_1/c2_1/a',
        crystal_system: 'orthorhombic',
        point_group: 'mmm',
        int_number: 73,
        symbol: 'Ibca',
        symbol_unicode: 'Ibca',
        symbol_latex: 'Ibca',
        point_group_unicode: 'mmm',
        point_group_latex: 'mmm',
    },
    {
        full_symbol: 'I2_1/m2_1/m2_1/a',
        crystal_system: 'orthorhombic',
        point_group: 'mmm',
        int_number: 74,
        symbol: 'Imma',
        symbol_unicode: 'Imma',
        symbol_latex: 'Imma',
        point_group_unicode: 'mmm',
        point_group_latex: 'mmm',
    },
    {
        full_symbol: 'P4',
        crystal_system: 'tetragonal',
        point_group: '4',
        int_number: 75,
        symbol: 'P4',
        symbol_unicode: 'P4',
        symbol_latex: 'P4',
        point_group_unicode: '4',
        point_group_latex: '4',
    },
    {
        full_symbol: 'P4_1',
        crystal_system: 'tetragonal',
        point_group: '4',
        int_number: 76,
        symbol: 'P4_1',
        symbol_unicode: 'P4\u2081',
        symbol_latex: 'P4$_{1}$',
        point_group_unicode: '4',
        point_group_latex: '4',
    },
    {
        full_symbol: 'P4_2',
        crystal_system: 'tetragonal',
        point_group: '4',
        int_number: 77,
        symbol: 'P4_2',
        symbol_unicode: 'P4\u2082',
        symbol_latex: 'P4$_{2}$',
        point_group_unicode: '4',
        point_group_latex: '4',
    },
    {
        full_symbol: 'P4_3',
        crystal_system: 'tetragonal',
        point_group: '4',
        int_number: 78,
        symbol: 'P4_3',
        symbol_unicode: 'P4\u2083',
        symbol_latex: 'P4$_{3}$',
        point_group_unicode: '4',
        point_group_latex: '4',
    },
    {
        full_symbol: 'I4',
        crystal_system: 'tetragonal',
        point_group: '4',
        int_number: 79,
        symbol: 'I4',
        symbol_unicode: 'I4',
        symbol_latex: 'I4',
        point_group_unicode: '4',
        point_group_latex: '4',
    },
    {
        full_symbol: 'I4_1',
        crystal_system: 'tetragonal',
        point_group: '4',
        int_number: 80,
        symbol: 'I4_1',
        symbol_unicode: 'I4\u2081',
        symbol_latex: 'I4$_{1}$',
        point_group_unicode: '4',
        point_group_latex: '4',
    },
    {
        full_symbol: 'P-4',
        crystal_system: 'tetragonal',
        point_group: '-4',
        int_number: 81,
        symbol: 'P-4',
        symbol_unicode: 'P4\u0305',
        symbol_latex: 'P$\\overline{4}$',
        point_group_unicode: '4\u0305',
        point_group_latex: '$\\overline{4}$',
    },
    {
        full_symbol: 'I-4',
        crystal_system: 'tetragonal',
        point_group: '-4',
        int_number: 82,
        symbol: 'I-4',
        symbol_unicode: 'I4\u0305',
        symbol_latex: 'I$\\overline{4}$',
        point_group_unicode: '4\u0305',
        point_group_latex: '$\\overline{4}$',
    },
    {
        full_symbol: 'P4/m',
        crystal_system: 'tetragonal',
        point_group: '4/m',
        int_number: 83,
        symbol: 'P4/m',
        symbol_unicode: 'P4/m',
        symbol_latex: 'P4/m',
        point_group_unicode: '4/m',
        point_group_latex: '4/m',
    },
    {
        full_symbol: 'P4_2/m',
        crystal_system: 'tetragonal',
        point_group: '4/m',
        int_number: 84,
        symbol: 'P4_2/m',
        symbol_unicode: 'P4\u2082/m',
        symbol_latex: 'P4$_{2}$/m',
        point_group_unicode: '4/m',
        point_group_latex: '4/m',
    },
    {
        full_symbol: 'P4/n',
        crystal_system: 'tetragonal',
        point_group: '4/m',
        int_number: 85,
        symbol: 'P4/n1',
        symbol_unicode: 'P4/n1',
        symbol_latex: 'P4/n1',
        point_group_unicode: '4/m',
        point_group_latex: '4/m',
    },
    {
        full_symbol: 'P4_2/n',
        crystal_system: 'tetragonal',
        point_group: '4/m',
        int_number: 86,
        symbol: 'P4_2/n',
        symbol_unicode: 'P4\u2082/n',
        symbol_latex: 'P4$_{2}$/n',
        point_group_unicode: '4/m',
        point_group_latex: '4/m',
    },
    {
        full_symbol: 'I4/m',
        crystal_system: 'tetragonal',
        point_group: '4/m',
        int_number: 87,
        symbol: 'I4/m',
        symbol_unicode: 'I4/m',
        symbol_latex: 'I4/m',
        point_group_unicode: '4/m',
        point_group_latex: '4/m',
    },
    {
        full_symbol: 'I4_1/a',
        crystal_system: 'tetragonal',
        point_group: '4/m',
        int_number: 88,
        symbol: 'I4_1/a',
        symbol_unicode: 'I4\u2081/a',
        symbol_latex: 'I4$_{1}$/a',
        point_group_unicode: '4/m',
        point_group_latex: '4/m',
    },
    {
        full_symbol: 'P422',
        crystal_system: 'tetragonal',
        point_group: '422',
        int_number: 89,
        symbol: 'P422',
        symbol_unicode: 'P422',
        symbol_latex: 'P422',
        point_group_unicode: '422',
        point_group_latex: '422',
    },
    {
        full_symbol: 'P42_12',
        crystal_system: 'tetragonal',
        point_group: '422',
        int_number: 90,
        symbol: 'P42_12',
        symbol_unicode: 'P42_12\u0305',
        symbol_latex: 'P42$_{12}$',
        point_group_unicode: '422',
        point_group_latex: '422',
    },
    {
        full_symbol: 'P4_122',
        crystal_system: 'tetragonal',
        point_group: '422',
        int_number: 91,
        symbol: 'P4_122',
        symbol_unicode: 'P4_122\u0305',
        symbol_latex: 'P4$_{122}$',
        point_group_unicode: '422',
        point_group_latex: '422',
    },
    {
        full_symbol: 'P4_12_12',
        crystal_system: 'tetragonal',
        point_group: '422',
        int_number: 92,
        symbol: 'P4_12_12',
        symbol_unicode: 'P4_12\u0305_12\u0305',
        symbol_latex: 'P4$_{12}$$_{12}$',
        point_group_unicode: '422',
        point_group_latex: '422',
    },
    {
        full_symbol: 'P4_222',
        crystal_system: 'tetragonal',
        point_group: '422',
        int_number: 93,
        symbol: 'P4_222',
        symbol_unicode: 'P4_222\u0305',
        symbol_latex: 'P4$_{222}$',
        point_group_unicode: '422',
        point_group_latex: '422',
    },
    {
        full_symbol: 'P4_22_12',
        crystal_system: 'tetragonal',
        point_group: '422',
        int_number: 94,
        symbol: 'P4_22_12',
        symbol_unicode: 'P4_22\u0305_12\u0305',
        symbol_latex: 'P4$_{22}$$_{12}$',
        point_group_unicode: '422',
        point_group_latex: '422',
    },
    {
        full_symbol: 'P4_322',
        crystal_system: 'tetragonal',
        point_group: '422',
        int_number: 95,
        symbol: 'P4_322',
        symbol_unicode: 'P4_322\u0305',
        symbol_latex: 'P4$_{322}$',
        point_group_unicode: '422',
        point_group_latex: '422',
    },
    {
        full_symbol: 'P4_32_12',
        crystal_system: 'tetragonal',
        point_group: '422',
        int_number: 96,
        symbol: 'P4_32_12',
        symbol_unicode: 'P4_32\u0305_12\u0305',
        symbol_latex: 'P4$_{32}$$_{12}$',
        point_group_unicode: '422',
        point_group_latex: '422',
    },
    {
        full_symbol: 'I422',
        crystal_system: 'tetragonal',
        point_group: '422',
        int_number: 97,
        symbol: 'I422',
        symbol_unicode: 'I422',
        symbol_latex: 'I422',
        point_group_unicode: '422',
        point_group_latex: '422',
    },
    {
        full_symbol: 'I4_122',
        crystal_system: 'tetragonal',
        point_group: '422',
        int_number: 98,
        symbol: 'I4_122',
        symbol_unicode: 'I4_122\u0305',
        symbol_latex: 'I4$_{122}$',
        point_group_unicode: '422',
        point_group_latex: '422',
    },
    {
        full_symbol: 'P4mm',
        crystal_system: 'tetragonal',
        point_group: '4mm',
        int_number: 99,
        symbol: 'P4mm',
        symbol_unicode: 'P4mm',
        symbol_latex: 'P4mm',
        point_group_unicode: '4mm',
        point_group_latex: '4mm',
    },
    {
        full_symbol: 'P4bm',
        crystal_system: 'tetragonal',
        point_group: '4mm',
        int_number: 100,
        symbol: 'P4bm',
        symbol_unicode: 'P4bm',
        symbol_latex: 'P4bm',
        point_group_unicode: '4mm',
        point_group_latex: '4mm',
    },
    {
        full_symbol: 'P4_2cm',
        crystal_system: 'tetragonal',
        point_group: '4mm',
        int_number: 101,
        symbol: 'P4_2cm',
        symbol_unicode: 'P4\u2082cm',
        symbol_latex: 'P4$_{2}$cm',
        point_group_unicode: '4mm',
        point_group_latex: '4mm',
    },
    {
        full_symbol: 'P4_2nm',
        crystal_system: 'tetragonal',
        point_group: '4mm',
        int_number: 102,
        symbol: 'P4_2nm',
        symbol_unicode: 'P4\u2082nm',
        symbol_latex: 'P4$_{2}$nm',
        point_group_unicode: '4mm',
        point_group_latex: '4mm',
    },
    {
        full_symbol: 'P4cc',
        crystal_system: 'tetragonal',
        point_group: '4mm',
        int_number: 103,
        symbol: 'P4cc',
        symbol_unicode: 'P4cc',
        symbol_latex: 'P4cc',
        point_group_unicode: '4mm',
        point_group_latex: '4mm',
    },
    {
        full_symbol: 'P4nc',
        crystal_system: 'tetragonal',
        point_group: '4mm',
        int_number: 104,
        symbol: 'P4nc',
        symbol_unicode: 'P4nc',
        symbol_latex: 'P4nc',
        point_group_unicode: '4mm',
        point_group_latex: '4mm',
    },
    {
        full_symbol: 'P4_2mc',
        crystal_system: 'tetragonal',
        point_group: '4mm',
        int_number: 105,
        symbol: 'P4_2mc',
        symbol_unicode: 'P4\u2082mc',
        symbol_latex: 'P4$_{2}$mc',
        point_group_unicode: '4mm',
        point_group_latex: '4mm',
    },
    {
        full_symbol: 'P4_2bc',
        crystal_system: 'tetragonal',
        point_group: '4mm',
        int_number: 106,
        symbol: 'P4_2bc',
        symbol_unicode: 'P4\u2082bc',
        symbol_latex: 'P4$_{2}$bc',
        point_group_unicode: '4mm',
        point_group_latex: '4mm',
    },
    {
        full_symbol: 'I4mm',
        crystal_system: 'tetragonal',
        point_group: '4mm',
        int_number: 107,
        symbol: 'I4mm',
        symbol_unicode: 'I4mm',
        symbol_latex: 'I4mm',
        point_group_unicode: '4mm',
        point_group_latex: '4mm',
    },
    {
        full_symbol: 'I4cm',
        crystal_system: 'tetragonal',
        point_group: '4mm',
        int_number: 108,
        symbol: 'I4cm',
        symbol_unicode: 'I4cm',
        symbol_latex: 'I4cm',
        point_group_unicode: '4mm',
        point_group_latex: '4mm',
    },
    {
        full_symbol: 'I4_1md',
        crystal_system: 'tetragonal',
        point_group: '4mm',
        int_number: 109,
        symbol: 'I4_1md',
        symbol_unicode: 'I4\u2081md',
        symbol_latex: 'I4$_{1}$md',
        point_group_unicode: '4mm',
        point_group_latex: '4mm',
    },
    {
        full_symbol: 'I4_1cd',
        crystal_system: 'tetragonal',
        point_group: '4mm',
        int_number: 110,
        symbol: 'I4_1cd',
        symbol_unicode: 'I4\u2081cd',
        symbol_latex: 'I4$_{1}$cd',
        point_group_unicode: '4mm',
        point_group_latex: '4mm',
    },
    {
        full_symbol: 'P-42m',
        crystal_system: 'tetragonal',
        point_group: '-42m',
        int_number: 111,
        symbol: 'P-42m',
        symbol_unicode: 'P4\u03052m',
        symbol_latex: 'P$\\overline{4}$2m',
        point_group_unicode: '4\u03052m',
        point_group_latex: '$\\overline{4}$2m',
    },
    {
        full_symbol: 'P-42c',
        crystal_system: 'tetragonal',
        point_group: '-42m',
        int_number: 112,
        symbol: 'P-42c',
        symbol_unicode: 'P4\u03052c',
        symbol_latex: 'P$\\overline{4}$2c',
        point_group_unicode: '4\u03052m',
        point_group_latex: '$\\overline{4}$2m',
    },
    {
        full_symbol: 'P-42_1m',
        crystal_system: 'tetragonal',
        point_group: '-42m',
        int_number: 113,
        symbol: 'P-42_1m',
        symbol_unicode: 'P4\u03052\u2081m',
        symbol_latex: 'P$\\overline{4}$2$_{1}$m',
        point_group_unicode: '4\u03052m',
        point_group_latex: '$\\overline{4}$2m',
    },
    {
        full_symbol: 'P-42_1c',
        crystal_system: 'tetragonal',
        point_group: '-42m',
        int_number: 114,
        symbol: 'P-42_1c',
        symbol_unicode: 'P4\u03052\u2081c',
        symbol_latex: 'P$\\overline{4}$2$_{1}$c',
        point_group_unicode: '4\u03052m',
        point_group_latex: '$\\overline{4}$2m',
    },
    {
        full_symbol: 'P-4m2',
        crystal_system: 'tetragonal',
        point_group: '-4m2',
        int_number: 115,
        symbol: 'P-4m2',
        symbol_unicode: 'P4\u0305m2',
        symbol_latex: 'P$\\overline{4}$m2',
        point_group_unicode: '4\u0305m2',
        point_group_latex: '$\\overline{4}$m2',
    },
    {
        full_symbol: 'P-4c2',
        crystal_system: 'tetragonal',
        point_group: '-4m2',
        int_number: 116,
        symbol: 'P-4c2',
        symbol_unicode: 'P4\u0305c2',
        symbol_latex: 'P$\\overline{4}$c2',
        point_group_unicode: '4\u0305m2',
        point_group_latex: '$\\overline{4}$m2',
    },
    {
        full_symbol: 'P-4b2',
        crystal_system: 'tetragonal',
        point_group: '-4m2',
        int_number: 117,
        symbol: 'P-4b2',
        symbol_unicode: 'P4\u0305b2',
        symbol_latex: 'P$\\overline{4}$b2',
        point_group_unicode: '4\u0305m2',
        point_group_latex: '$\\overline{4}$m2',
    },
    {
        full_symbol: 'P-4n2',
        crystal_system: 'tetragonal',
        point_group: '-4m2',
        int_number: 118,
        symbol: 'P-4n2',
        symbol_unicode: 'P4\u0305n2',
        symbol_latex: 'P$\\overline{4}$n2',
        point_group_unicode: '4\u0305m2',
        point_group_latex: '$\\overline{4}$m2',
    },
    {
        full_symbol: 'I-4m2',
        crystal_system: 'tetragonal',
        point_group: '-4m2',
        int_number: 119,
        symbol: 'I-4m2',
        symbol_unicode: 'I4\u0305m2',
        symbol_latex: 'I$\\overline{4}$m2',
        point_group_unicode: '4\u0305m2',
        point_group_latex: '$\\overline{4}$m2',
    },
    {
        full_symbol: 'I-4c2',
        crystal_system: 'tetragonal',
        point_group: '-4m2',
        int_number: 120,
        symbol: 'I-4c2',
        symbol_unicode: 'I4\u0305c2',
        symbol_latex: 'I$\\overline{4}$c2',
        point_group_unicode: '4\u0305m2',
        point_group_latex: '$\\overline{4}$m2',
    },
    {
        full_symbol: 'I-42m',
        crystal_system: 'tetragonal',
        point_group: '-42m',
        int_number: 121,
        symbol: 'I-42m',
        symbol_unicode: 'I4\u03052m',
        symbol_latex: 'I$\\overline{4}$2m',
        point_group_unicode: '4\u03052m',
        point_group_latex: '$\\overline{4}$2m',
    },
    {
        full_symbol: 'I-42d',
        crystal_system: 'tetragonal',
        point_group: '-42m',
        int_number: 122,
        symbol: 'I-42d',
        symbol_unicode: 'I4\u03052d',
        symbol_latex: 'I$\\overline{4}$2d',
        point_group_unicode: '4\u03052m',
        point_group_latex: '$\\overline{4}$2m',
    },
    {
        full_symbol: 'P4/m2/m2/m',
        crystal_system: 'tetragonal',
        point_group: '4/mmm',
        int_number: 123,
        symbol: 'P4/mmm',
        symbol_unicode: 'P4/mmm',
        symbol_latex: 'P4/mmm',
        point_group_unicode: '4/mmm',
        point_group_latex: '4/mmm',
    },
    {
        full_symbol: 'P4/m2/c2/c',
        crystal_system: 'tetragonal',
        point_group: '4/mmm',
        int_number: 124,
        symbol: 'P4/mcc',
        symbol_unicode: 'P4/mcc',
        symbol_latex: 'P4/mcc',
        point_group_unicode: '4/mmm',
        point_group_latex: '4/mmm',
    },
    {
        full_symbol: 'P4/n2/b2/m',
        crystal_system: 'tetragonal',
        point_group: '4/mmm',
        int_number: 125,
        symbol: 'P4/nbm1',
        symbol_unicode: 'P4/nbm1',
        symbol_latex: 'P4/nbm1',
        point_group_unicode: '4/mmm',
        point_group_latex: '4/mmm',
    },
    {
        full_symbol: 'P4/n2/n2/c',
        crystal_system: 'tetragonal',
        point_group: '4/mmm',
        int_number: 126,
        symbol: 'P4/nnc1',
        symbol_unicode: 'P4/nnc1',
        symbol_latex: 'P4/nnc1',
        point_group_unicode: '4/mmm',
        point_group_latex: '4/mmm',
    },
    {
        full_symbol: 'P4/m2_1/b2/m',
        crystal_system: 'tetragonal',
        point_group: '4/mmm',
        int_number: 127,
        symbol: 'P4/mbm',
        symbol_unicode: 'P4/mbm',
        symbol_latex: 'P4/mbm',
        point_group_unicode: '4/mmm',
        point_group_latex: '4/mmm',
    },
    {
        full_symbol: 'P4/m2_1/n2/c',
        crystal_system: 'tetragonal',
        point_group: '4/mmm',
        int_number: 128,
        symbol: 'P4/mnc',
        symbol_unicode: 'P4/mnc',
        symbol_latex: 'P4/mnc',
        point_group_unicode: '4/mmm',
        point_group_latex: '4/mmm',
    },
    {
        full_symbol: 'P4/n2_1/m2/m',
        crystal_system: 'tetragonal',
        point_group: '4/mmm',
        int_number: 129,
        symbol: 'P4/nmm1',
        symbol_unicode: 'P4/nmm1',
        symbol_latex: 'P4/nmm1',
        point_group_unicode: '4/mmm',
        point_group_latex: '4/mmm',
    },
    {
        full_symbol: 'P4/n2_1/c2/c',
        crystal_system: 'tetragonal',
        point_group: '4/mmm',
        int_number: 130,
        symbol: 'P4/ncc1',
        symbol_unicode: 'P4/ncc1',
        symbol_latex: 'P4/ncc1',
        point_group_unicode: '4/mmm',
        point_group_latex: '4/mmm',
    },
    {
        full_symbol: 'P4_2/m2/m2/c',
        crystal_system: 'tetragonal',
        point_group: '4/mmm',
        int_number: 131,
        symbol: 'P4_2/mmc',
        symbol_unicode: 'P4\u2082/mmc',
        symbol_latex: 'P4$_{2}$/mmc',
        point_group_unicode: '4/mmm',
        point_group_latex: '4/mmm',
    },
    {
        full_symbol: 'P4_2/m2/c2/m',
        crystal_system: 'tetragonal',
        point_group: '4/mmm',
        int_number: 132,
        symbol: 'P4_2/mcm',
        symbol_unicode: 'P4\u2082/mcm',
        symbol_latex: 'P4$_{2}$/mcm',
        point_group_unicode: '4/mmm',
        point_group_latex: '4/mmm',
    },
    {
        full_symbol: 'P4_2/n2/b2/c',
        crystal_system: 'tetragonal',
        point_group: '4/mmm',
        int_number: 133,
        symbol: 'P4_2/nbc',
        symbol_unicode: 'P4\u2082/nbc',
        symbol_latex: 'P4$_{2}$/nbc',
        point_group_unicode: '4/mmm',
        point_group_latex: '4/mmm',
    },
    {
        full_symbol: 'P4_2/n2/n2/m',
        crystal_system: 'tetragonal',
        point_group: '4/mmm',
        int_number: 134,
        symbol: 'P4_2/nnm',
        symbol_unicode: 'P4\u2082/nnm',
        symbol_latex: 'P4$_{2}$/nnm',
        point_group_unicode: '4/mmm',
        point_group_latex: '4/mmm',
    },
    {
        full_symbol: 'P4_2/m2_1/b2/c',
        crystal_system: 'tetragonal',
        point_group: '4/mmm',
        int_number: 135,
        symbol: 'P4_2/mbc',
        symbol_unicode: 'P4\u2082/mbc',
        symbol_latex: 'P4$_{2}$/mbc',
        point_group_unicode: '4/mmm',
        point_group_latex: '4/mmm',
    },
    {
        full_symbol: 'P4_2/m2_1/n2/m',
        crystal_system: 'tetragonal',
        point_group: '4/mmm',
        int_number: 136,
        symbol: 'P4_2/mnm',
        symbol_unicode: 'P4\u2082/mnm',
        symbol_latex: 'P4$_{2}$/mnm',
        point_group_unicode: '4/mmm',
        point_group_latex: '4/mmm',
    },
    {
        full_symbol: 'P4_2/n2_1/m2/c',
        crystal_system: 'tetragonal',
        point_group: '4/mmm',
        int_number: 137,
        symbol: 'P4_2/nmc',
        symbol_unicode: 'P4\u2082/nmc',
        symbol_latex: 'P4$_{2}$/nmc',
        point_group_unicode: '4/mmm',
        point_group_latex: '4/mmm',
    },
    {
        full_symbol: 'P4_2/n2_1/c2/m',
        crystal_system: 'tetragonal',
        point_group: '4/mmm',
        int_number: 138,
        symbol: 'P4_2/ncm',
        symbol_unicode: 'P4\u2082/ncm',
        symbol_latex: 'P4$_{2}$/ncm',
        point_group_unicode: '4/mmm',
        point_group_latex: '4/mmm',
    },
    {
        full_symbol: 'I4/m2/m2/m',
        crystal_system: 'tetragonal',
        point_group: '4/mmm',
        int_number: 139,
        symbol: 'I4/mmm',
        symbol_unicode: 'I4/mmm',
        symbol_latex: 'I4/mmm',
        point_group_unicode: '4/mmm',
        point_group_latex: '4/mmm',
    },
    {
        full_symbol: 'I4/m2/c2/m',
        crystal_system: 'tetragonal',
        point_group: '4/mmm',
        int_number: 140,
        symbol: 'I4/mcm',
        symbol_unicode: 'I4/mcm',
        symbol_latex: 'I4/mcm',
        point_group_unicode: '4/mmm',
        point_group_latex: '4/mmm',
    },
    {
        full_symbol: 'I4_1/a2/m2/d',
        crystal_system: 'tetragonal',
        point_group: '4/mmm',
        int_number: 141,
        symbol: 'I4_1/amd',
        symbol_unicode: 'I4\u2081/amd',
        symbol_latex: 'I4$_{1}$/amd',
        point_group_unicode: '4/mmm',
        point_group_latex: '4/mmm',
    },
    {
        full_symbol: 'I4_1/a2/c2/d',
        crystal_system: 'tetragonal',
        point_group: '4/mmm',
        int_number: 142,
        symbol: 'I4_1/acd',
        symbol_unicode: 'I4\u2081/acd',
        symbol_latex: 'I4$_{1}$/acd',
        point_group_unicode: '4/mmm',
        point_group_latex: '4/mmm',
    },
    {
        full_symbol: 'P3',
        crystal_system: 'trigonal',
        point_group: '3',
        int_number: 143,
        symbol: 'P3',
        symbol_unicode: 'P3',
        symbol_latex: 'P3',
        point_group_unicode: '3',
        point_group_latex: '3',
    },
    {
        full_symbol: 'P3_1',
        crystal_system: 'trigonal',
        point_group: '3',
        int_number: 144,
        symbol: 'P3_1',
        symbol_unicode: 'P3\u2081',
        symbol_latex: 'P3$_{1}$',
        point_group_unicode: '3',
        point_group_latex: '3',
    },
    {
        full_symbol: 'P3_2',
        crystal_system: 'trigonal',
        point_group: '3',
        int_number: 145,
        symbol: 'P3_2',
        symbol_unicode: 'P3\u2082',
        symbol_latex: 'P3$_{2}$',
        point_group_unicode: '3',
        point_group_latex: '3',
    },
    {
        full_symbol: 'R3',
        crystal_system: 'trigonal',
        point_group: '3',
        int_number: 146,
        symbol: 'R3H',
        symbol_unicode: 'R3H',
        symbol_latex: 'R3H',
        point_group_unicode: '3',
        point_group_latex: '3',
    },
    {
        full_symbol: 'P-3',
        crystal_system: 'trigonal',
        point_group: '-3',
        int_number: 147,
        symbol: 'P-3',
        symbol_unicode: 'P3\u0305',
        symbol_latex: 'P$\\overline{3}$',
        point_group_unicode: '3\u0305',
        point_group_latex: '$\\overline{3}$',
    },
    {
        full_symbol: 'R-3',
        crystal_system: 'trigonal',
        point_group: '-3',
        int_number: 148,
        symbol: 'R-3H',
        symbol_unicode: 'R3\u0305H',
        symbol_latex: 'R$\\overline{3}$H',
        point_group_unicode: '3\u0305',
        point_group_latex: '$\\overline{3}$',
    },
    {
        full_symbol: 'P312',
        crystal_system: 'trigonal',
        point_group: '312',
        int_number: 149,
        symbol: 'P312',
        symbol_unicode: 'P312',
        symbol_latex: 'P312',
        point_group_unicode: '312',
        point_group_latex: '312',
    },
    {
        full_symbol: 'P321',
        crystal_system: 'trigonal',
        point_group: '321',
        int_number: 150,
        symbol: 'P321',
        symbol_unicode: 'P321',
        symbol_latex: 'P321',
        point_group_unicode: '321',
        point_group_latex: '321',
    },
    {
        full_symbol: 'P3_112',
        crystal_system: 'trigonal',
        point_group: '312',
        int_number: 151,
        symbol: 'P3_112',
        symbol_unicode: 'P3_112\u0305',
        symbol_latex: 'P3$_{112}$',
        point_group_unicode: '312',
        point_group_latex: '312',
    },
    {
        full_symbol: 'P3_121',
        crystal_system: 'trigonal',
        point_group: '321',
        int_number: 152,
        symbol: 'P3_121',
        symbol_unicode: 'P3_121\u0305',
        symbol_latex: 'P3$_{121}$',
        point_group_unicode: '321',
        point_group_latex: '321',
    },
    {
        full_symbol: 'P3_212',
        crystal_system: 'trigonal',
        point_group: '312',
        int_number: 153,
        symbol: 'P3_212',
        symbol_unicode: 'P3_212\u0305',
        symbol_latex: 'P3$_{212}$',
        point_group_unicode: '312',
        point_group_latex: '312',
    },
    {
        full_symbol: 'P3_221',
        crystal_system: 'trigonal',
        point_group: '321',
        int_number: 154,
        symbol: 'P3_221',
        symbol_unicode: 'P3_221\u0305',
        symbol_latex: 'P3$_{221}$',
        point_group_unicode: '321',
        point_group_latex: '321',
    },
    {
        full_symbol: 'R32',
        crystal_system: 'trigonal',
        point_group: '32',
        int_number: 155,
        symbol: 'R32H',
        symbol_unicode: 'R32H',
        symbol_latex: 'R32H',
        point_group_unicode: '32',
        point_group_latex: '32',
    },
    {
        full_symbol: 'P3m1',
        crystal_system: 'trigonal',
        point_group: '3m1',
        int_number: 156,
        symbol: 'P3m1',
        symbol_unicode: 'P3m1',
        symbol_latex: 'P3m1',
        point_group_unicode: '3m1',
        point_group_latex: '3m1',
    },
    {
        full_symbol: 'P31m',
        crystal_system: 'trigonal',
        point_group: '31m',
        int_number: 157,
        symbol: 'P31m',
        symbol_unicode: 'P31m',
        symbol_latex: 'P31m',
        point_group_unicode: '31m',
        point_group_latex: '31m',
    },
    {
        full_symbol: 'P3c1',
        crystal_system: 'trigonal',
        point_group: '3m1',
        int_number: 158,
        symbol: 'P3c1',
        symbol_unicode: 'P3c1',
        symbol_latex: 'P3c1',
        point_group_unicode: '3m1',
        point_group_latex: '3m1',
    },
    {
        full_symbol: 'P31c',
        crystal_system: 'trigonal',
        point_group: '31m',
        int_number: 159,
        symbol: 'P31c',
        symbol_unicode: 'P31c',
        symbol_latex: 'P31c',
        point_group_unicode: '31m',
        point_group_latex: '31m',
    },
    {
        full_symbol: 'R3m',
        crystal_system: 'trigonal',
        point_group: '3m',
        int_number: 160,
        symbol: 'R3mH',
        symbol_unicode: 'R3mH',
        symbol_latex: 'R3mH',
        point_group_unicode: '3m',
        point_group_latex: '3m',
    },
    {
        full_symbol: 'R3c',
        crystal_system: 'trigonal',
        point_group: '3m',
        int_number: 161,
        symbol: 'R3cH',
        symbol_unicode: 'R3cH',
        symbol_latex: 'R3cH',
        point_group_unicode: '3m',
        point_group_latex: '3m',
    },
    {
        full_symbol: 'P-312/m',
        crystal_system: 'trigonal',
        point_group: '-31m',
        int_number: 162,
        symbol: 'P-31m',
        symbol_unicode: 'P3\u03051m',
        symbol_latex: 'P$\\overline{3}$1m',
        point_group_unicode: '3\u03051m',
        point_group_latex: '$\\overline{3}$1m',
    },
    {
        full_symbol: 'P-312/c',
        crystal_system: 'trigonal',
        point_group: '-31m',
        int_number: 163,
        symbol: 'P-31c',
        symbol_unicode: 'P3\u03051c',
        symbol_latex: 'P$\\overline{3}$1c',
        point_group_unicode: '3\u03051m',
        point_group_latex: '$\\overline{3}$1m',
    },
    {
        full_symbol: 'P-32/m1',
        crystal_system: 'trigonal',
        point_group: '-3m1',
        int_number: 164,
        symbol: 'P-3m1',
        symbol_unicode: 'P3\u0305m1',
        symbol_latex: 'P$\\overline{3}$m1',
        point_group_unicode: '3\u0305m1',
        point_group_latex: '$\\overline{3}$m1',
    },
    {
        full_symbol: 'P-32/c1',
        crystal_system: 'trigonal',
        point_group: '-3m1',
        int_number: 165,
        symbol: 'P-3c1',
        symbol_unicode: 'P3\u0305c1',
        symbol_latex: 'P$\\overline{3}$c1',
        point_group_unicode: '3\u0305m1',
        point_group_latex: '$\\overline{3}$m1',
    },
    {
        full_symbol: 'R-32/m',
        crystal_system: 'trigonal',
        point_group: '-3m',
        int_number: 166,
        symbol: 'R-3mH',
        symbol_unicode: 'R3\u0305mH',
        symbol_latex: 'R$\\overline{3}$mH',
        point_group_unicode: '3\u0305m',
        point_group_latex: '$\\overline{3}$m',
    },
    {
        full_symbol: 'R-32/c',
        crystal_system: 'trigonal',
        point_group: '-3m',
        int_number: 167,
        symbol: 'R-3cH',
        symbol_unicode: 'R3\u0305cH',
        symbol_latex: 'R$\\overline{3}$cH',
        point_group_unicode: '3\u0305m',
        point_group_latex: '$\\overline{3}$m',
    },
    {
        full_symbol: 'P6',
        crystal_system: 'hexagonal',
        point_group: '6',
        int_number: 168,
        symbol: 'P6',
        symbol_unicode: 'P6',
        symbol_latex: 'P6',
        point_group_unicode: '6',
        point_group_latex: '6',
    },
    {
        full_symbol: 'P6_1',
        crystal_system: 'hexagonal',
        point_group: '6',
        int_number: 169,
        symbol: 'P6_1',
        symbol_unicode: 'P6\u2081',
        symbol_latex: 'P6$_{1}$',
        point_group_unicode: '6',
        point_group_latex: '6',
    },
    {
        full_symbol: 'P6_5',
        crystal_system: 'hexagonal',
        point_group: '6',
        int_number: 170,
        symbol: 'P6_5',
        symbol_unicode: 'P6\u2085',
        symbol_latex: 'P6$_{5}$',
        point_group_unicode: '6',
        point_group_latex: '6',
    },
    {
        full_symbol: 'P6_2',
        crystal_system: 'hexagonal',
        point_group: '6',
        int_number: 171,
        symbol: 'P6_2',
        symbol_unicode: 'P6\u2082',
        symbol_latex: 'P6$_{2}$',
        point_group_unicode: '6',
        point_group_latex: '6',
    },
    {
        full_symbol: 'P6_4',
        crystal_system: 'hexagonal',
        point_group: '6',
        int_number: 172,
        symbol: 'P6_4',
        symbol_unicode: 'P6\u2084',
        symbol_latex: 'P6$_{4}$',
        point_group_unicode: '6',
        point_group_latex: '6',
    },
    {
        full_symbol: 'P6_3',
        crystal_system: 'hexagonal',
        point_group: '6',
        int_number: 173,
        symbol: 'P6_3',
        symbol_unicode: 'P6\u2083',
        symbol_latex: 'P6$_{3}$',
        point_group_unicode: '6',
        point_group_latex: '6',
    },
    {
        full_symbol: 'P-6',
        crystal_system: 'hexagonal',
        point_group: '-6',
        int_number: 174,
        symbol: 'P-6',
        symbol_unicode: 'P6\u0305',
        symbol_latex: 'P$\\overline{6}$',
        point_group_unicode: '6\u0305',
        point_group_latex: '$\\overline{6}$',
    },
    {
        full_symbol: 'P6/m',
        crystal_system: 'hexagonal',
        point_group: '6/m',
        int_number: 175,
        symbol: 'P6/m',
        symbol_unicode: 'P6/m',
        symbol_latex: 'P6/m',
        point_group_unicode: '6/m',
        point_group_latex: '6/m',
    },
    {
        full_symbol: 'P6_3/m',
        crystal_system: 'hexagonal',
        point_group: '6/m',
        int_number: 176,
        symbol: 'P6_3/m',
        symbol_unicode: 'P6\u2083/m',
        symbol_latex: 'P6$_{3}$/m',
        point_group_unicode: '6/m',
        point_group_latex: '6/m',
    },
    {
        full_symbol: 'P622',
        crystal_system: 'hexagonal',
        point_group: '622',
        int_number: 177,
        symbol: 'P622',
        symbol_unicode: 'P622',
        symbol_latex: 'P622',
        point_group_unicode: '622',
        point_group_latex: '622',
    },
    {
        full_symbol: 'P6_122',
        crystal_system: 'hexagonal',
        point_group: '622',
        int_number: 178,
        symbol: 'P6_122',
        symbol_unicode: 'P6_122\u0305',
        symbol_latex: 'P6$_{122}$',
        point_group_unicode: '622',
        point_group_latex: '622',
    },
    {
        full_symbol: 'P6_522',
        crystal_system: 'hexagonal',
        point_group: '622',
        int_number: 179,
        symbol: 'P6_522',
        symbol_unicode: 'P6_522\u0305',
        symbol_latex: 'P6$_{522}$',
        point_group_unicode: '622',
        point_group_latex: '622',
    },
    {
        full_symbol: 'P6_222',
        crystal_system: 'hexagonal',
        point_group: '622',
        int_number: 180,
        symbol: 'P6_222',
        symbol_unicode: 'P6_222\u0305',
        symbol_latex: 'P6$_{222}$',
        point_group_unicode: '622',
        point_group_latex: '622',
    },
    {
        full_symbol: 'P6_422',
        crystal_system: 'hexagonal',
        point_group: '622',
        int_number: 181,
        symbol: 'P6_422',
        symbol_unicode: 'P6_422\u0305',
        symbol_latex: 'P6$_{422}$',
        point_group_unicode: '622',
        point_group_latex: '622',
    },
    {
        full_symbol: 'P6_322',
        crystal_system: 'hexagonal',
        point_group: '622',
        int_number: 182,
        symbol: 'P6_322',
        symbol_unicode: 'P6_322\u0305',
        symbol_latex: 'P6$_{322}$',
        point_group_unicode: '622',
        point_group_latex: '622',
    },
    {
        full_symbol: 'P6mm',
        crystal_system: 'hexagonal',
        point_group: '6mm',
        int_number: 183,
        symbol: 'P6mm',
        symbol_unicode: 'P6mm',
        symbol_latex: 'P6mm',
        point_group_unicode: '6mm',
        point_group_latex: '6mm',
    },
    {
        full_symbol: 'P6cc',
        crystal_system: 'hexagonal',
        point_group: '6mm',
        int_number: 184,
        symbol: 'P6cc',
        symbol_unicode: 'P6cc',
        symbol_latex: 'P6cc',
        point_group_unicode: '6mm',
        point_group_latex: '6mm',
    },
    {
        full_symbol: 'P6_3cm',
        crystal_system: 'hexagonal',
        point_group: '6mm',
        int_number: 185,
        symbol: 'P6_3cm',
        symbol_unicode: 'P6\u2083cm',
        symbol_latex: 'P6$_{3}$cm',
        point_group_unicode: '6mm',
        point_group_latex: '6mm',
    },
    {
        full_symbol: 'P6_3mc',
        crystal_system: 'hexagonal',
        point_group: '6mm',
        int_number: 186,
        symbol: 'P6_3mc',
        symbol_unicode: 'P6\u2083mc',
        symbol_latex: 'P6$_{3}$mc',
        point_group_unicode: '6mm',
        point_group_latex: '6mm',
    },
    {
        full_symbol: 'P-6m2',
        crystal_system: 'hexagonal',
        point_group: '-6m2',
        int_number: 187,
        symbol: 'P-6m2',
        symbol_unicode: 'P6\u0305m2',
        symbol_latex: 'P$\\overline{6}$m2',
        point_group_unicode: '6\u0305m2',
        point_group_latex: '$\\overline{6}$m2',
    },
    {
        full_symbol: 'P-6c2',
        crystal_system: 'hexagonal',
        point_group: '-6m2',
        int_number: 188,
        symbol: 'P-6c2',
        symbol_unicode: 'P6\u0305c2',
        symbol_latex: 'P$\\overline{6}$c2',
        point_group_unicode: '6\u0305m2',
        point_group_latex: '$\\overline{6}$m2',
    },
    {
        full_symbol: 'P-62m',
        crystal_system: 'hexagonal',
        point_group: '-62m',
        int_number: 189,
        symbol: 'P-62m',
        symbol_unicode: 'P6\u03052m',
        symbol_latex: 'P$\\overline{6}$2m',
        point_group_unicode: '6\u03052m',
        point_group_latex: '$\\overline{6}$2m',
    },
    {
        full_symbol: 'P-62c',
        crystal_system: 'hexagonal',
        point_group: '-62m',
        int_number: 190,
        symbol: 'P-62c',
        symbol_unicode: 'P6\u03052c',
        symbol_latex: 'P$\\overline{6}$2c',
        point_group_unicode: '6\u03052m',
        point_group_latex: '$\\overline{6}$2m',
    },
    {
        full_symbol: 'P6/m2/m2/m',
        crystal_system: 'hexagonal',
        point_group: '6/mmm',
        int_number: 191,
        symbol: 'P6/mmm',
        symbol_unicode: 'P6/mmm',
        symbol_latex: 'P6/mmm',
        point_group_unicode: '6/mmm',
        point_group_latex: '6/mmm',
    },
    {
        full_symbol: 'P6/m2/c2/c',
        crystal_system: 'hexagonal',
        point_group: '6/mmm',
        int_number: 192,
        symbol: 'P6/mcc',
        symbol_unicode: 'P6/mcc',
        symbol_latex: 'P6/mcc',
        point_group_unicode: '6/mmm',
        point_group_latex: '6/mmm',
    },
    {
        full_symbol: 'P6_3/m2/c2/m',
        crystal_system: 'hexagonal',
        point_group: '6/mmm',
        int_number: 193,
        symbol: 'P6_3/mcm',
        symbol_unicode: 'P6\u2083/mcm',
        symbol_latex: 'P6$_{3}$/mcm',
        point_group_unicode: '6/mmm',
        point_group_latex: '6/mmm',
    },
    {
        full_symbol: 'P6_3/m2/m2/c',
        crystal_system: 'hexagonal',
        point_group: '6/mmm',
        int_number: 194,
        symbol: 'P6_3/mmc',
        symbol_unicode: 'P6\u2083/mmc',
        symbol_latex: 'P6$_{3}$/mmc',
        point_group_unicode: '6/mmm',
        point_group_latex: '6/mmm',
    },
    {
        full_symbol: 'P23',
        crystal_system: 'cubic',
        point_group: '23',
        int_number: 195,
        symbol: 'P23',
        symbol_unicode: 'P23',
        symbol_latex: 'P23',
        point_group_unicode: '23',
        point_group_latex: '23',
    },
    {
        full_symbol: 'F23',
        crystal_system: 'cubic',
        point_group: '23',
        int_number: 196,
        symbol: 'F23',
        symbol_unicode: 'F23',
        symbol_latex: 'F23',
        point_group_unicode: '23',
        point_group_latex: '23',
    },
    {
        full_symbol: 'I23',
        crystal_system: 'cubic',
        point_group: '23',
        int_number: 197,
        symbol: 'I23',
        symbol_unicode: 'I23',
        symbol_latex: 'I23',
        point_group_unicode: '23',
        point_group_latex: '23',
    },
    {
        full_symbol: 'P2_13',
        crystal_system: 'cubic',
        point_group: '23',
        int_number: 198,
        symbol: 'P2_13',
        symbol_unicode: 'P2_13\u0305',
        symbol_latex: 'P2$_{13}$',
        point_group_unicode: '23',
        point_group_latex: '23',
    },
    {
        full_symbol: 'I2_13',
        crystal_system: 'cubic',
        point_group: '23',
        int_number: 199,
        symbol: 'I2_13',
        symbol_unicode: 'I2_13\u0305',
        symbol_latex: 'I2$_{13}$',
        point_group_unicode: '23',
        point_group_latex: '23',
    },
    {
        full_symbol: 'P2/m-3',
        crystal_system: 'cubic',
        point_group: 'm-3',
        int_number: 200,
        symbol: 'Pm-3',
        symbol_unicode: 'Pm3\u0305',
        symbol_latex: 'Pm$\\overline{3}$',
        point_group_unicode: 'm3\u0305',
        point_group_latex: 'm$\\overline{3}$',
    },
    {
        full_symbol: 'P2/n-3',
        crystal_system: 'cubic',
        point_group: 'm-3',
        int_number: 201,
        symbol: 'Pn-31',
        symbol_unicode: 'Pn3\u03051',
        symbol_latex: 'Pn$\\overline{3}$1',
        point_group_unicode: 'm3\u0305',
        point_group_latex: 'm$\\overline{3}$',
    },
    {
        full_symbol: 'F2/m-3',
        crystal_system: 'cubic',
        point_group: 'm-3',
        int_number: 202,
        symbol: 'Fm-3',
        symbol_unicode: 'Fm3\u0305',
        symbol_latex: 'Fm$\\overline{3}$',
        point_group_unicode: 'm3\u0305',
        point_group_latex: 'm$\\overline{3}$',
    },
    {
        full_symbol: 'F2/d-3',
        crystal_system: 'cubic',
        point_group: 'm-3',
        int_number: 203,
        symbol: 'Fd-31',
        symbol_unicode: 'Fd3\u03051',
        symbol_latex: 'Fd$\\overline{3}$1',
        point_group_unicode: 'm3\u0305',
        point_group_latex: 'm$\\overline{3}$',
    },
    {
        full_symbol: 'I2/m-3',
        crystal_system: 'cubic',
        point_group: 'm-3',
        int_number: 204,
        symbol: 'Im-3',
        symbol_unicode: 'Im3\u0305',
        symbol_latex: 'Im$\\overline{3}$',
        point_group_unicode: 'm3\u0305',
        point_group_latex: 'm$\\overline{3}$',
    },
    {
        full_symbol: 'P2_1/a-3',
        crystal_system: 'cubic',
        point_group: 'm-3',
        int_number: 205,
        symbol: 'Pa-3',
        symbol_unicode: 'Pa3\u0305',
        symbol_latex: 'Pa$\\overline{3}$',
        point_group_unicode: 'm3\u0305',
        point_group_latex: 'm$\\overline{3}$',
    },
    {
        full_symbol: 'I2_1/a-3',
        crystal_system: 'cubic',
        point_group: 'm-3',
        int_number: 206,
        symbol: 'Ia-3',
        symbol_unicode: 'Ia3\u0305',
        symbol_latex: 'Ia$\\overline{3}$',
        point_group_unicode: 'm3\u0305',
        point_group_latex: 'm$\\overline{3}$',
    },
    {
        full_symbol: 'P432',
        crystal_system: 'cubic',
        point_group: '432',
        int_number: 207,
        symbol: 'P432',
        symbol_unicode: 'P432',
        symbol_latex: 'P432',
        point_group_unicode: '432',
        point_group_latex: '432',
    },
    {
        full_symbol: 'P4_232',
        crystal_system: 'cubic',
        point_group: '432',
        int_number: 208,
        symbol: 'P4_232',
        symbol_unicode: 'P4_232\u0305',
        symbol_latex: 'P4$_{232}$',
        point_group_unicode: '432',
        point_group_latex: '432',
    },
    {
        full_symbol: 'F432',
        crystal_system: 'cubic',
        point_group: '432',
        int_number: 209,
        symbol: 'F432',
        symbol_unicode: 'F432',
        symbol_latex: 'F432',
        point_group_unicode: '432',
        point_group_latex: '432',
    },
    {
        full_symbol: 'F4_132',
        crystal_system: 'cubic',
        point_group: '432',
        int_number: 210,
        symbol: 'F4_132',
        symbol_unicode: 'F4_132\u0305',
        symbol_latex: 'F4$_{132}$',
        point_group_unicode: '432',
        point_group_latex: '432',
    },
    {
        full_symbol: 'I432',
        crystal_system: 'cubic',
        point_group: '432',
        int_number: 211,
        symbol: 'I432',
        symbol_unicode: 'I432',
        symbol_latex: 'I432',
        point_group_unicode: '432',
        point_group_latex: '432',
    },
    {
        full_symbol: 'P4_332',
        crystal_system: 'cubic',
        point_group: '432',
        int_number: 212,
        symbol: 'P4_332',
        symbol_unicode: 'P4_332\u0305',
        symbol_latex: 'P4$_{332}$',
        point_group_unicode: '432',
        point_group_latex: '432',
    },
    {
        full_symbol: 'P4_132',
        crystal_system: 'cubic',
        point_group: '432',
        int_number: 213,
        symbol: 'P4_132',
        symbol_unicode: 'P4_132\u0305',
        symbol_latex: 'P4$_{132}$',
        point_group_unicode: '432',
        point_group_latex: '432',
    },
    {
        full_symbol: 'I4_132',
        crystal_system: 'cubic',
        point_group: '432',
        int_number: 214,
        symbol: 'I4_132',
        symbol_unicode: 'I4_132\u0305',
        symbol_latex: 'I4$_{132}$',
        point_group_unicode: '432',
        point_group_latex: '432',
    },
    {
        full_symbol: 'P-43m',
        crystal_system: 'cubic',
        point_group: '-43m',
        int_number: 215,
        symbol: 'P-43m',
        symbol_unicode: 'P4\u03053m',
        symbol_latex: 'P$\\overline{4}$3m',
        point_group_unicode: '4\u03053m',
        point_group_latex: '$\\overline{4}$3m',
    },
    {
        full_symbol: 'F-43m',
        crystal_system: 'cubic',
        point_group: '-43m',
        int_number: 216,
        symbol: 'F-43m',
        symbol_unicode: 'F4\u03053m',
        symbol_latex: 'F$\\overline{4}$3m',
        point_group_unicode: '4\u03053m',
        point_group_latex: '$\\overline{4}$3m',
    },
    {
        full_symbol: 'I-43m',
        crystal_system: 'cubic',
        point_group: '-43m',
        int_number: 217,
        symbol: 'I-43m',
        symbol_unicode: 'I4\u03053m',
        symbol_latex: 'I$\\overline{4}$3m',
        point_group_unicode: '4\u03053m',
        point_group_latex: '$\\overline{4}$3m',
    },
    {
        full_symbol: 'P-43n',
        crystal_system: 'cubic',
        point_group: '-43m',
        int_number: 218,
        symbol: 'P-43n',
        symbol_unicode: 'P4\u03053n',
        symbol_latex: 'P$\\overline{4}$3n',
        point_group_unicode: '4\u03053m',
        point_group_latex: '$\\overline{4}$3m',
    },
    {
        full_symbol: 'F-43c',
        crystal_system: 'cubic',
        point_group: '-43m',
        int_number: 219,
        symbol: 'F-43c',
        symbol_unicode: 'F4\u03053c',
        symbol_latex: 'F$\\overline{4}$3c',
        point_group_unicode: '4\u03053m',
        point_group_latex: '$\\overline{4}$3m',
    },
    {
        full_symbol: 'I-43d',
        crystal_system: 'cubic',
        point_group: '-43m',
        int_number: 220,
        symbol: 'I-43d',
        symbol_unicode: 'I4\u03053d',
        symbol_latex: 'I$\\overline{4}$3d',
        point_group_unicode: '4\u03053m',
        point_group_latex: '$\\overline{4}$3m',
    },
    {
        full_symbol: 'P4/m-32/m',
        crystal_system: 'cubic',
        point_group: 'm-3m',
        int_number: 221,
        symbol: 'Pm-3m',
        symbol_unicode: 'Pm3\u0305m',
        symbol_latex: 'Pm$\\overline{3}$m',
        point_group_unicode: 'm3\u0305m',
        point_group_latex: 'm$\\overline{3}$m',
    },
    {
        full_symbol: 'P4/n-32/n',
        crystal_system: 'cubic',
        point_group: 'm-3m',
        int_number: 222,
        symbol: 'Pn-3n1',
        symbol_unicode: 'Pn3\u0305n1',
        symbol_latex: 'Pn$\\overline{3}$n1',
        point_group_unicode: 'm3\u0305m',
        point_group_latex: 'm$\\overline{3}$m',
    },
    {
        full_symbol: 'P4_2/m-32/n',
        crystal_system: 'cubic',
        point_group: 'm-3m',
        int_number: 223,
        symbol: 'Pm-3n',
        symbol_unicode: 'Pm3\u0305n',
        symbol_latex: 'Pm$\\overline{3}$n',
        point_group_unicode: 'm3\u0305m',
        point_group_latex: 'm$\\overline{3}$m',
    },
    {
        full_symbol: 'P4_2/n-32/m',
        crystal_system: 'cubic',
        point_group: 'm-3m',
        int_number: 224,
        symbol: 'Pn-3m1',
        symbol_unicode: 'Pn3\u0305m1',
        symbol_latex: 'Pn$\\overline{3}$m1',
        point_group_unicode: 'm3\u0305m',
        point_group_latex: 'm$\\overline{3}$m',
    },
    {
        full_symbol: 'F4/m-32/m',
        crystal_system: 'cubic',
        point_group: 'm-3m',
        int_number: 225,
        symbol: 'Fm-3m',
        symbol_unicode: 'Fm3\u0305m',
        symbol_latex: 'Fm$\\overline{3}$m',
        point_group_unicode: 'm3\u0305m',
        point_group_latex: 'm$\\overline{3}$m',
    },
    {
        full_symbol: 'F4/m-32/c',
        crystal_system: 'cubic',
        point_group: 'm-3m',
        int_number: 226,
        symbol: 'Fm-3c',
        symbol_unicode: 'Fm3\u0305c',
        symbol_latex: 'Fm$\\overline{3}$c',
        point_group_unicode: 'm3\u0305m',
        point_group_latex: 'm$\\overline{3}$m',
    },
    {
        full_symbol: 'F4_1/d-32/m',
        crystal_system: 'cubic',
        point_group: 'm-3m',
        int_number: 227,
        symbol: 'Fd-3m1',
        symbol_unicode: 'Fd3\u0305m1',
        symbol_latex: 'Fd$\\overline{3}$m1',
        point_group_unicode: 'm3\u0305m',
        point_group_latex: 'm$\\overline{3}$m',
    },
    {
        full_symbol: 'F4_1/d-32/c',
        crystal_system: 'cubic',
        point_group: 'm-3m',
        int_number: 228,
        symbol: 'Fd-3c1',
        symbol_unicode: 'Fd3\u0305c1',
        symbol_latex: 'Fd$\\overline{3}$c1',
        point_group_unicode: 'm3\u0305m',
        point_group_latex: 'm$\\overline{3}$m',
    },
    {
        full_symbol: 'I4/m-32/m',
        crystal_system: 'cubic',
        point_group: 'm-3m',
        int_number: 229,
        symbol: 'Im-3m',
        symbol_unicode: 'Im3\u0305m',
        symbol_latex: 'Im$\\overline{3}$m',
        point_group_unicode: 'm3\u0305m',
        point_group_latex: 'm$\\overline{3}$m',
    },
    {
        full_symbol: 'I4_1/a-32/d',
        crystal_system: 'cubic',
        point_group: 'm-3m',
        int_number: 230,
        symbol: 'Ia-3d',
        symbol_unicode: 'Ia3\u0305d',
        symbol_latex: 'Ia$\\overline{3}$d',
        point_group_unicode: 'm3\u0305m',
        point_group_latex: 'm$\\overline{3}$m',
    },
];

const pointGroups = [
    'C1',
    'Cs',
    'Ci',
    'C*v',
    'D*h',
    'C2',
    'C3',
    'C2h',
    'C3h',
    'C2v',
    'C3v',
    'C4v',
    'C5v',
    'D2',
    'D3',
    'D2h',
    'D3h',
    'D4h',
    'D5h',
    'D6h',
    'D7h',
    'D8h',
    'D2d',
    'D3d',
    'D4d',
    'D5d',
    'S4',
    'Td',
    'Th',
    'Oh',
    'Ih',
];

/**
 * Determine if a string is delimited by commas, hyphens, or spaces
 * Return the delimiter as a regular expression object
 * If multiple delimiters are present, the delimiter with the lowest index is used
 */
const getDelimiter = (input) => {
    const comma = input.match(/,/);
    const hyphen = input.match(/-/);
    const space = input.match(/\s/);
    if (comma &&
        comma.index &&
        (!hyphen || (hyphen.index && hyphen.index > comma.index)) &&
        (!space || (space.index && space.index > comma.index))) {
        return new RegExp(',');
    }
    else if (hyphen &&
        hyphen.index &&
        (!comma || (comma.index && comma.index > hyphen.index)) &&
        (!space || (space.index && space.index > hyphen.index))) {
        return new RegExp('-');
    }
    else if (space &&
        space.index &&
        (!comma || (comma.index && comma.index > space.index)) &&
        (!hyphen || (hyphen.index && space.index > space.index))) {
        return new RegExp(/\s/);
    }
    else {
        return null;
    }
};
function formulaStringToArrays(str) {
    var formulaSplitWithNumbers = str.match(/[A-Z][a-z][0-9]|[A-Z][0-9]|[A-Z][a-z]|[A-Z]/g);
    var formulaSplitElementsOnly = formulaSplitWithNumbers
        ? formulaSplitWithNumbers.map((d) => d.replace(/[0-9]/, ''))
        : [];
    return { formulaSplitWithNumbers, formulaSplitElementsOnly };
}
function getTruthyKeys(obj) {
    return obj ? Object.keys(obj).filter((key) => obj[key]) : [];
}
function arrayToDelimitedString(arr, delimiter = ',') {
    delimiter = delimiter.toString();
    if (delimiter.indexOf('s') > -1) {
        delimiter = ' ';
    }
    else if (delimiter.indexOf('/') === 0) {
        delimiter = delimiter.replace(/\//g, '');
    }
    return arr.toString().replace(/,/gi, delimiter);
}
const countDecimals = (value) => {
    let text = value.toString();
    // verify if number 0.000005 is represented as "5e-6"
    if (text.indexOf('e-') > -1) {
        let [base, trail] = text.split('e-');
        let deg = parseInt(trail, 10);
        return deg;
    }
    // count decimals for number in representation like "0.123456"
    if (Math.floor(value) !== value) {
        return value.toString().split('.')[1].length || 0;
    }
    return 0;
};
/**
 * Parses an array of valid elements from a string of elements separated by a delimiter
 * Returns an array of valid element symbols (e.g. ['Na', 'Cl'])
 */
const parseElements = (str, delimiter, context = null) => {
    let cleanedInput = '';
    const delimiterString = delimiter.toString();
    if (delimiterString === new RegExp(/,/).toString()) {
        cleanedInput = str.replace(/and|\s|-|[0-9]/gi, '');
    }
    else if (delimiterString === new RegExp(/-/).toString()) {
        cleanedInput = str.replace(/and|\s|,|[0-9]/gi, '');
    }
    else if (delimiterString === new RegExp(/\s/).toString()) {
        cleanedInput = str.replace(/and|,|-|[0-9]/gi, '');
    }
    const unparsedElements = cleanedInput.split(delimiter);
    const parsedElements = [];
    unparsedElements.forEach((el) => {
        if (TABLE_DICO_V2[el]) {
            parsedElements.push(el);
        }
    });
    return parsedElements;
};
const spaceGroupNumberOptions = () => {
    return spaceGroups.map((g) => {
        return {
            value: g['int_number'],
            label: g['int_number'],
        };
    });
};
const spaceGroupSymbolOptions = () => {
    return spaceGroups.map((g) => {
        return {
            value: g['symbol'],
            label: g['symbol_unicode'],
        };
    });
};
const crystalSystemOptions = () => {
    var spaceGroupsByCrystalSystem = nest()
        .key((d) => d.crystal_system)
        .entries(spaceGroups);
    return spaceGroupsByCrystalSystem.map((d) => {
        return {
            value: d.key,
            label: d.key,
        };
    });
};
const pointGroupOptions = () => {
    return pointGroups.map((val) => {
        return {
            value: val,
            label: val,
        };
    });
};
const pluralize = (noun) => {
    let plural = noun + 's';
    const specialNouns = {
        battery: 'batteries',
    };
    if (specialNouns[noun])
        plural = specialNouns[noun];
    return plural;
};
/**
 * Validate whether a string is a simplified molecular-input line-entry system (SMILES)
 */
const parseSmiles = (str) => {
    const result = str.trim().match(/^([^J][0-9BCOHNSOPrIFla@+\-\[\]\(\)\\\/%=#$]{6,})$/gi);
    const smiles = Array.isArray(result) ? result[0] : null;
    return smiles;
};
/**
 * Perform a naive validation of a string as a formula
 * Returns the string if it has more than one capital letter, a number, or wildcard character ("*")
 * Returns null if the string is not a "parsable" formula
 */
const parseFormula = (str) => {
    const capitalLettersMatch = str.match(/[A-Z]/g);
    const capitalLetters = capitalLettersMatch ? capitalLettersMatch.length : 0;
    const formula = capitalLetters > 1 || str.match(/[0-9]/gi) || str.match(/\*/gi) ? str : null;
    return formula;
};
const formatPointGroup = (pointGroup) => {
    if (pointGroup && typeof pointGroup === 'string') {
        const firstCharacter = pointGroup.substring(0, 1);
        const subCharacters = pointGroup.substring(1);
        const unicodeSubCharacters = subCharacters.replace('*', '\u221E');
        return (React__default.createElement("span", null,
            React__default.createElement("span", null, firstCharacter),
            React__default.createElement("sub", null, unicodeSubCharacters)));
    }
    else {
        return React__default.createElement("span", null);
    }
};
const formatFormula = (formula) => {
    if (formula && typeof formula === 'string') {
        const splitFormula = formula.split(/([0-9]+)/g);
        const formulaItem = (str) => {
            if (parseInt(str)) {
                return React__default.createElement("sub", null, str);
            }
            else {
                return React__default.createElement("span", null, str);
            }
        };
        return (React__default.createElement("span", null, splitFormula.map((s, i) => (React__default.createElement("span", { key: i }, formulaItem(s))))));
    }
    else {
        return React__default.createElement("span", null);
    }
};
/**
 * Get number of pages based on total results and page limit
 * If no results, return 1 to prevent errors with query
 */
const getPageCount = (totalResults, resultsPerPage) => {
    if (totalResults === 0) {
        return 1;
    }
    else {
        return Math.ceil(totalResults / resultsPerPage);
    }
};

const Link = (props) => {
    return (React__default.createElement("a", { className: props.className, href: props.href, target: props.target, onClick: (e) => {
            if (props.onClick)
                props.onClick();
            linkOnClick(e, props.href);
        } }, props.children));
};

// import * as d3 from 'd3';
/**
 * Two contexts are invoked inside the SearchUI component
 * SearchUIContext exposes the search state to all of its consumers
 * SearchUIContextActions exposes the methods (i.e. actions) for modifying the search state
 */
const SearchUIContext = React__default.createContext(undefined);
const SearchUIContextActions = React__default.createContext(undefined);
const defaultState = {
    baseURL: '',
    columns: [],
    filterGroups: [],
    filterValues: {},
    activeFilters: [],
    results: [],
    totalResults: 0,
    resultsPerPage: 15,
    page: 1,
    loading: false,
    sortField: undefined,
    sortAscending: true,
    topLevelSearchField: 'elements',
    error: false,
};
const getRowValueFromSelectorString = (selector, row) => {
    const selectors = selector.split('.');
    return selectors.length === 1 ? row[selectors[0]] : row[selectors[0]][selectors[1]];
};
const emptyCellPlaceholder = '-';
/**
 * Initialize columns with their proper format function
 * The "format" prop should initially be one of the ColumnFormat strings
 * which maps to one of the format (or cell) functions defined here.
 * FIXED_DECIMAL and SIGNIFICANT_FIGURES both expect another column property "formatArg"
 * that will specify how many decimals or figures to apply to the format.
 */
const initColumns = (columns) => {
    return columns.map((c) => {
        c.sortable = c.sortable !== undefined ? c.sortable : true;
        c.nameString = c.name.toString();
        c.name = (React__default.createElement("div", { className: classNames({
                'column-header-right': c.right,
                'column-header-center': c.center,
                'column-header-left': !c.right && !c.center,
            }) },
            React__default.createElement("div", null, c.name),
            c.units && React__default.createElement("div", { className: "column-units" },
                "(",
                c.units,
                ")")));
        switch (c.format) {
            case ColumnFormat.FIXED_DECIMAL:
                const decimalPlaces = c.formatArg ? c.formatArg : 2;
                c.format = (row) => {
                    const rowValue = getRowValueFromSelectorString(c.selector, row);
                    const value = c.conversionFactor ? rowValue * c.conversionFactor : rowValue;
                    const min = Math.pow(10, -decimalPlaces);
                    if (c.abbreviateNearZero) {
                        if (value === 0 || value >= min) {
                            return value.toFixed(decimalPlaces);
                        }
                        else if (value < min) {
                            return '< ' + min.toString();
                        }
                        else {
                            return '';
                        }
                    }
                    else {
                        return isNaN(value) ? emptyCellPlaceholder : value.toFixed(decimalPlaces);
                    }
                };
                c.right = true;
                return c;
            case ColumnFormat.SIGNIFICANT_FIGURES:
                const sigFigs = c.formatArg ? c.formatArg : 5;
                c.format = (row) => {
                    const rowValue = getRowValueFromSelectorString(c.selector, row);
                    const value = c.conversionFactor ? rowValue * c.conversionFactor : rowValue;
                    return isNaN(value) ? emptyCellPlaceholder : value.toPrecision(sigFigs);
                };
                c.right = true;
                return c;
            case ColumnFormat.FORMULA:
                c.cell = (row) => {
                    const rowValue = getRowValueFromSelectorString(c.selector, row);
                    return formatFormula(rowValue);
                };
                return c;
            case ColumnFormat.LINK:
                c.cell = (row) => {
                    const rowValue = getRowValueFromSelectorString(c.selector, row) + '/';
                    const path = c.formatArg ? c.formatArg + rowValue : rowValue;
                    return React__default.createElement(Link, { href: path }, row[c.selector]);
                };
                return c;
            case ColumnFormat.BOOLEAN:
                const hasCustomLabels = c.formatArg && Array.isArray(c.formatArg);
                const truthyLabel = hasCustomLabels ? c.formatArg[0] : 'true';
                const falsyLabel = hasCustomLabels ? c.formatArg[1] : 'false';
                c.format = (row) => {
                    const rowValue = getRowValueFromSelectorString(c.selector, row);
                    return rowValue ? truthyLabel : falsyLabel;
                };
                return c;
            case ColumnFormat.SPACEGROUP_SYMBOL:
                c.format = (row) => {
                    const rowValue = getRowValueFromSelectorString(c.selector, row);
                    const spaceGroup = spaceGroups.find((d) => d['symbol'] === rowValue);
                    const formattedSymbol = spaceGroup ? spaceGroup['symbol_unicode'] : rowValue;
                    return formattedSymbol;
                };
                return c;
            case ColumnFormat.POINTGROUP:
                c.cell = (row) => {
                    const rowValue = getRowValueFromSelectorString(c.selector, row);
                    return formatPointGroup(rowValue);
                };
                return c;
            default:
                c.format = (row) => {
                    const rowValue = getRowValueFromSelectorString(c.selector, row);
                    const isNumber = !isNaN(rowValue);
                    const value = c.conversionFactor && isNumber ? rowValue * c.conversionFactor : rowValue;
                    return value && value !== '' ? value : emptyCellPlaceholder;
                };
                return c;
        }
    });
};
const initFilterGroups = (filterGroups, query) => {
    const initializedValues = {};
    const initializedGroups = filterGroups.map((g) => {
        g.filters = g.filters.map((f) => {
            let queryParamValue = query.get(f.id);
            switch (f.type) {
                case FilterType.SLIDER:
                    const queryParamMinString = query.get(f.id + '_min');
                    const queryParamMaxString = query.get(f.id + '_max');
                    const queryParamMin = queryParamMinString ? parseFloat(queryParamMinString) : null;
                    const queryParamMax = queryParamMaxString ? parseFloat(queryParamMaxString) : null;
                    queryParamValue = queryParamMin && queryParamMax ? [queryParamMin, queryParamMax] : null;
                    initializedValues[f.id] = queryParamValue ? queryParamValue : f.props.domain;
                    return f;
                case FilterType.MATERIALS_INPUT:
                    initializedValues[f.id] = queryParamValue ? queryParamValue : '';
                    if (!f.hasOwnProperty('props'))
                        f.props = { parsedValue: [] };
                    if (f.hasOwnProperty('props') && !f.props.hasOwnProperty('parsedValue')) {
                        f.props.parsedValue = [];
                    }
                    return f;
                case FilterType.SELECT_SPACEGROUP_SYMBOL:
                    initializedValues[f.id] = queryParamValue ? queryParamValue : undefined;
                    f.props = { options: spaceGroupSymbolOptions() };
                    return f;
                case FilterType.SELECT_SPACEGROUP_NUMBER:
                    initializedValues[f.id] = queryParamValue ? queryParamValue : undefined;
                    f.props = { options: spaceGroupNumberOptions() };
                    return f;
                case FilterType.SELECT_CRYSTAL_SYSTEM:
                    initializedValues[f.id] = queryParamValue ? queryParamValue : undefined;
                    f.props = { options: crystalSystemOptions() };
                    return f;
                case FilterType.SELECT_POINTGROUP:
                    initializedValues[f.id] = queryParamValue ? queryParamValue : undefined;
                    f.props = {
                        options: pointGroupOptions(),
                        formatOptionLabel: ({ value, label, customAbbreviation }) => {
                            return formatPointGroup(label);
                        },
                    };
                    return f;
                case FilterType.THREE_STATE_BOOLEAN_SELECT:
                    if (queryParamValue === 'true') {
                        initializedValues[f.id] = true;
                    }
                    else if (queryParamValue === 'false') {
                        initializedValues[f.id] = false;
                    }
                    else {
                        initializedValues[f.id] = undefined;
                    }
                    return f;
                default:
                    initializedValues[f.id] = queryParamValue ? queryParamValue : undefined;
                    return f;
            }
        });
        return g;
    });
    return { initializedGroups, initializedValues };
};
const getResetFiltersAndValues = (state) => {
    const filterValues = state.filterValues;
    let activeFilters = state.activeFilters;
    activeFilters.forEach((a) => {
        filterValues[a.id] = a.defaultValue;
    });
    activeFilters = [];
    return {
        filterValues,
        activeFilters,
    };
};
/**
 * Component that wraps all of its children in providers for SearchUIContext and SearchUIContextActions
 * Accepts the same props as SearchUI and uses them to build the context state
 */
const SearchUIContextProvider = (props) => {
    const { children } = props, propsWithoutChildren = __rest(props, ["children"]);
    const query = useQuery();
    const history = useHistory();
    const isDesktop = useMediaQuery({ minWidth: 1024 });
    /**
     * Method for initializing and updating the search state's active filters.
     * Returns a full state object
     * Optionally accepts a filterValues argument which represents a new hash map
     * of values for building the activeFilters list.
     * The activeFilters list is recomputed whenever a filter is modified in the UI.
     */
    const getState = (currentState, filterValues = Object.assign({}, currentState.filterValues)) => {
        const activeFilters = [];
        currentState.filterGroups.forEach((g) => {
            g.filters.forEach((f) => {
                switch (f.type) {
                    case FilterType.SLIDER:
                        if (filterValues[f.id][0] !== f.props.domain[0] ||
                            filterValues[f.id][1] !== f.props.domain[1]) {
                            activeFilters.push({
                                id: f.id,
                                displayName: f.name ? f.name : f.id,
                                value: filterValues[f.id],
                                defaultValue: f.props.domain,
                                conversionFactor: f.conversionFactor,
                                searchParams: [
                                    {
                                        field: f.id + '_min',
                                        value: filterValues[f.id][0],
                                    },
                                    {
                                        field: f.id + '_max',
                                        value: filterValues[f.id][1],
                                    },
                                ],
                            });
                        }
                        break;
                    case FilterType.MATERIALS_INPUT:
                        if (filterValues[f.id] !== '') {
                            /**
                             * If the input controls the elements or exclude_elements param,
                             * parse the input's value into an array of valid elements.
                             * Otherwise, use the raw input value for the param.
                             */
                            let parsedValue = filterValues[f.id];
                            let filterDisplayName = f.props.field;
                            if (f.id === 'elements' || f.id === 'exclude_elements') {
                                /**
                                 * If the input is a chemical system, merge elements to a dash-delimited string (e.g. Fe-Co-Si)
                                 * This will tell the API to return materials with this exact chemical system
                                 */
                                if (f.props.isChemSys) {
                                    parsedValue = arrayToDelimitedString(parsedValue, new RegExp('-'));
                                    filterDisplayName = 'includes only elements';
                                }
                                else {
                                    const parsedDelimiter = getDelimiter(parsedValue);
                                    /** If no delimiter present, default to comma */
                                    const delimiter = parsedDelimiter ? parsedDelimiter : new RegExp(',');
                                    parsedValue = parseElements(filterValues[f.id], delimiter);
                                    filterDisplayName =
                                        f.id === 'exclude_elements' ? 'excludes elements' : 'includes elements';
                                }
                                f.props.enabledElements = parsedValue;
                            }
                            activeFilters.push({
                                id: f.id,
                                displayName: filterDisplayName,
                                value: parsedValue,
                                defaultValue: '',
                                searchParams: [
                                    {
                                        field: f.props.field,
                                        value: parsedValue,
                                    },
                                ],
                            });
                            /**
                             * Expand the Material filter group by default if one of the
                             * main filters are active (desktop only)
                             */
                            if (isDesktop && (f.id === 'elements' || f.id === 'formula' || f.id === 'task_ids')) {
                                g.expanded = true;
                            }
                        }
                        break;
                    case FilterType.SELECT_SPACEGROUP_SYMBOL:
                        if (filterValues[f.id] !== undefined &&
                            filterValues[f.id] !== null &&
                            filterValues[f.id] !== '') {
                            const spaceGroup = spaceGroups.find((d) => d['symbol'] === filterValues[f.id]);
                            const formattedSymbol = spaceGroup
                                ? spaceGroup['symbol_unicode']
                                : filterValues[f.id];
                            activeFilters.push({
                                id: f.id,
                                displayName: f.name ? f.name : f.id,
                                value: formattedSymbol,
                                defaultValue: undefined,
                                searchParams: [
                                    {
                                        field: f.id,
                                        value: filterValues[f.id],
                                    },
                                ],
                            });
                        }
                        break;
                    default:
                        if (filterValues[f.id] !== undefined &&
                            filterValues[f.id] !== null &&
                            filterValues[f.id] !== '') {
                            activeFilters.push({
                                id: f.id,
                                displayName: f.name ? f.name : f.id,
                                value: filterValues[f.id],
                                defaultValue: undefined,
                                searchParams: [
                                    {
                                        field: f.id,
                                        value: filterValues[f.id],
                                    },
                                ],
                            });
                            /**
                             * Expand the Material filter group by default if one of the
                             * main filters are active
                             */
                            if (f.id === 'elements' || f.id === 'formula' || f.id === 'task_ids') {
                                g.expanded = true;
                            }
                        }
                }
            });
        });
        return Object.assign(Object.assign({}, currentState), { filterValues, activeFilters });
    };
    const [state, setState] = useState(() => {
        /**
         * Initial state is a combination of the defaultState values above
         * and all the values provided in props (except props.children)
         */
        const initialState = Object.assign(Object.assign({}, defaultState), propsWithoutChildren);
        initialState.columns = initColumns(props.columns);
        const { initializedGroups, initializedValues } = initFilterGroups(props.filterGroups, query);
        const urlLimit = query.get('limit');
        const urlSkip = query.get('skip');
        const urlSortField = query.get('field');
        const urlAscending = query.get('ascending');
        if (urlLimit)
            initialState.resultsPerPage = parseInt(urlLimit);
        if (urlSkip)
            initialState.page = parseInt(urlSkip) / initialState.resultsPerPage + 1;
        if (urlSortField)
            initialState.sortField = urlSortField;
        if (urlAscending)
            initialState.sortAscending = urlAscending === 'true' ? true : false;
        initialState.filterGroups = initializedGroups;
        initialState.filterValues = initializedValues;
        return getState(initialState);
    });
    const prevActiveFilters = usePrevious(state.activeFilters);
    const actions = {
        setPage: (value) => {
            setState((currentState) => (Object.assign(Object.assign({}, currentState), { page: value })));
        },
        setResultsPerPage: (value) => {
            setState((currentState) => (Object.assign(Object.assign({}, currentState), { resultsPerPage: value })));
        },
        setSort: (field, ascending) => {
            setState((currentState) => (Object.assign(Object.assign({}, currentState), { sortField: field, sortAscending: ascending, page: 1 })));
        },
        setFilterValue: (value, id) => {
            setState((currentState) => getState(Object.assign(Object.assign({}, currentState), { page: 1 }), Object.assign(Object.assign({}, currentState.filterValues), { [id]: value })));
        },
        setFilterWithOverrides: (value, id, overrideFields) => {
            setState((currentState) => {
                let newFilterValues = { [id]: value };
                overrideFields.forEach((field) => {
                    const activeFilter = currentState.activeFilters.find((a) => a.id === field);
                    if (activeFilter)
                        newFilterValues[field] = activeFilter.defaultValue;
                });
                let newFilterGroups = currentState.filterGroups.slice();
                if (isDesktop) {
                    newFilterGroups[0].expanded = true;
                }
                return getState(Object.assign(Object.assign({}, currentState), { filterGroups: newFilterGroups, page: 1 }), Object.assign(Object.assign({}, currentState.filterValues), newFilterValues));
            });
        },
        resetAllFiltersExcept: (value, id) => {
            setState((currentState) => {
                const { activeFilters, filterValues } = getResetFiltersAndValues(currentState);
                return getState(Object.assign(Object.assign({}, currentState), { activeFilters }), Object.assign(Object.assign({}, filterValues), { [id]: value }));
            });
        },
        setFilterProps: (props, filterId, groupId) => {
            setState((currentState) => {
                const filterGroups = currentState.filterGroups;
                const group = filterGroups.find((g) => g.name === groupId);
                const filter = group === null || group === void 0 ? void 0 : group.filters.find((f) => f.id === filterId);
                if (filter)
                    filter.props = Object.assign(Object.assign({}, filter.props), props);
                const stateWithNewFilterProps = Object.assign(Object.assign({}, currentState), { filterGroups: filterGroups });
                // const newState =
                //   filter && filter.props.hasOwnProperty('parsedValue')
                //     ? getState(stateWithNewFilterProps)
                //     : stateWithNewFilterProps;
                const newFilterValues = props.hasOwnProperty('initialValues')
                    ? Object.assign(Object.assign({}, currentState.filterValues), { [filterId]: props.initialValues }) : undefined;
                return getState(Object.assign({}, stateWithNewFilterProps), newFilterValues);
            });
        },
        getData: () => {
            setState((currentState) => {
                /**
                 * Only show the loading icon if this is a filter change
                 * not on simple page change
                 */
                const showLoading = currentState.activeFilters !== prevActiveFilters ? true : false;
                let isLoading = showLoading;
                let minLoadTime = 1000;
                let minLoadTimeReached = !showLoading;
                let params = {};
                let query = new URLSearchParams();
                params.fields = currentState.columns.map((d) => d.selector);
                params.limit = currentState.resultsPerPage;
                params.skip = (currentState.page - 1) * currentState.resultsPerPage;
                query.set('limit', params.limit);
                query.set('skip', params.skip);
                if (currentState.sortField) {
                    params.field = currentState.sortField;
                    params.ascending = currentState.sortAscending;
                    query.set('field', params.field);
                    query.set('ascending', params.ascending);
                }
                currentState.activeFilters.forEach((a) => {
                    var _a;
                    (_a = a.searchParams) === null || _a === void 0 ? void 0 : _a.forEach((s) => {
                        let field = s.field;
                        let value = a.conversionFactor ? s.value * a.conversionFactor : s.value;
                        /**
                         * Elements values that are strings should be interpreted as formula fields
                         * This lets the elements field handle chemical system searches (e.g. Fe-Co-Si)
                         */
                        if (field === 'elements' && typeof value === 'string') {
                            field = 'formula';
                        }
                        params[field] = value;
                        query.set(field, s.value);
                    });
                });
                console.log(params);
                axios
                    .get(props.baseURL, {
                    params: params,
                    paramsSerializer: (p) => {
                        return qs.stringify(p, { arrayFormat: 'comma' });
                    },
                    headers: props.apiKey ? { 'X-Api-Key': props.apiKey } : null,
                })
                    .then((result) => {
                    history.push({ search: query.toString() });
                    isLoading = false;
                    const loadingValue = minLoadTimeReached ? false : true;
                    setState((currentState) => {
                        const totalResults = result.data.meta.total;
                        const pageCount = getPageCount(totalResults, currentState.resultsPerPage);
                        const page = currentState.page > pageCount ? pageCount : currentState.page;
                        return Object.assign(Object.assign({}, currentState), { results: result.data.data, totalResults: totalResults, page: page, loading: loadingValue, error: false });
                    });
                })
                    .catch((error) => {
                    console.log(error);
                    isLoading = false;
                    const loadingValue = minLoadTimeReached ? false : true;
                    setState((currentState) => {
                        return Object.assign(Object.assign({}, currentState), { results: [], totalResults: 0, loading: loadingValue, error: true });
                    });
                });
                if (showLoading) {
                    setTimeout(() => {
                        if (!isLoading) {
                            setState((currentState) => {
                                return Object.assign(Object.assign({}, currentState), { loading: false });
                            });
                        }
                        else {
                            minLoadTimeReached = true;
                        }
                    }, minLoadTime);
                }
                return Object.assign(Object.assign({}, currentState), { loading: showLoading });
            });
        },
        resetFilters: () => {
            setState((currentState) => {
                const { activeFilters, filterValues } = getResetFiltersAndValues(currentState);
                return Object.assign(Object.assign({}, currentState), { page: 1, filterValues,
                    activeFilters });
            });
        },
    };
    useDeepCompareEffect(() => {
        actions.getData();
    }, [state.activeFilters, state.resultsPerPage, state.page, state.sortField, state.sortAscending]);
    return (React__default.createElement(SearchUIContext.Provider, { value: state },
        React__default.createElement(SearchUIContextActions.Provider, { value: actions }, children)));
};
/**
 * Custom hook for consuming the SearchUIContext
 * Must only be used by child components of SearchUIContextProvider
 * The context returns one property called "state"
 */
const useSearchUIContext = () => {
    const context = React__default.useContext(SearchUIContext);
    if (context === undefined) {
        throw new Error('useMaterialsSearch must be used within a MaterialsSearchProvider');
    }
    return context;
};
/**
 * Custom hook for consuming the SearchUIContextActions
 * Must only be used by child components of SearchUIContextProvider
 * The context returns one property called "actions"
 */
const useSearchUIContextActions = () => {
    const context = React__default.useContext(SearchUIContextActions);
    if (context === undefined) {
        throw new Error('useMaterialsSearch must be used within a MaterialsSearchProvider');
    }
    return context;
};

// THIS FILE IS AUTO GENERATED
function FaAngleDown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 320 512"},"child":[{"tag":"path","attr":{"d":"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"}}]})(props);
}function FaArrowLeft (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 448 512"},"child":[{"tag":"path","attr":{"d":"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"}}]})(props);
}function FaArrowRight (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 448 512"},"child":[{"tag":"path","attr":{"d":"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"}}]})(props);
}function FaAsterisk (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M478.21 334.093L336 256l142.21-78.093c11.795-6.477 15.961-21.384 9.232-33.037l-19.48-33.741c-6.728-11.653-21.72-15.499-33.227-8.523L296 186.718l3.475-162.204C299.763 11.061 288.937 0 275.48 0h-38.96c-13.456 0-24.283 11.061-23.994 24.514L216 186.718 77.265 102.607c-11.506-6.976-26.499-3.13-33.227 8.523l-19.48 33.741c-6.728 11.653-2.562 26.56 9.233 33.037L176 256 33.79 334.093c-11.795 6.477-15.961 21.384-9.232 33.037l19.48 33.741c6.728 11.653 21.721 15.499 33.227 8.523L216 325.282l-3.475 162.204C212.237 500.939 223.064 512 236.52 512h38.961c13.456 0 24.283-11.061 23.995-24.514L296 325.282l138.735 84.111c11.506 6.976 26.499 3.13 33.227-8.523l19.48-33.741c6.728-11.653 2.563-26.559-9.232-33.036z"}}]})(props);
}function FaCaretDown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 320 512"},"child":[{"tag":"path","attr":{"d":"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"}}]})(props);
}function FaCaretRight (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 192 512"},"child":[{"tag":"path","attr":{"d":"M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"}}]})(props);
}function FaExclamationTriangle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 576 512"},"child":[{"tag":"path","attr":{"d":"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"}}]})(props);
}function FaLink (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}}]})(props);
}function FaQuestionCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"}}]})(props);
}function FaTimes (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 352 512"},"child":[{"tag":"path","attr":{"d":"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(props);
}function FaRegTimesCircle (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"}}]})(props);
}

const { Input, Field, Control: Control$1 } = Form;
const MaterialsInputBox = (props) => {
    const { enabledElements, lastAction, actions: ptActions } = useElements();
    const [delimiter, setDelimiter] = useState(() => props.isChemSys ? new RegExp('-') : new RegExp(','));
    const [ptActionsToDispatch, setPtActionsToDispatch] = useState([]);
    const inputRef = useRef(null);
    const valueChangedByPT = useRef(false);
    const dropdownItems = [
        { label: 'By elements', value: MaterialsInputField.ELEMENTS },
        { label: 'By formula', value: MaterialsInputField.FORMULA },
        { label: 'By mp-id', value: MaterialsInputField.MP_ID },
    ];
    /**
     * Handle updating the context with the new raw input value
     * All side effects to this change are handled in an effect hook
     */
    const handleRawValueChange = (e) => {
        props.setValue(e.target.value);
    };
    const handleFocus = () => {
        if (props.onFocus)
            props.onFocus();
    };
    const handleBlur = (event) => {
        if (props.onBlur)
            props.onBlur(event);
    };
    /**
     * This effect triggers immediately after the props.value changes.
     *
     * The effect is skipped if the value change came from a direct interaction
     * with the periodic table. This prevents unexpected field changes.
     *
     * If onFieldChange prop is included, dynamically determine if the input
     * is an mp-id, list of elements, or formula.
     *
     * Detects elements to add/remove from the periodic table and collects them in ptActionsToDispatch.
     * Only adds/removes elements when input value and pt are not in sync (prevents infinite hooks)
     */
    useEffect(() => {
        if (!valueChangedByPT.current) {
            const enabledElementsList = getTruthyKeys(enabledElements);
            const newValue = props.value;
            const shouldCheckField = props.onFieldChange && newValue;
            let newMaterialsInputField = props.field;
            let newDelimiter = delimiter;
            let newPtActionsToDispatch = [];
            /**
             * Field name switches to MP_ID if the input starts with 'mp' or 'mvc'.
             * Field name switches to ELEMENTS if the input contains one of the accepted delimiters (comma, hyphen, or space).
             * Field name switches to FORMULA if the input doesn't contain a delimiter
             * and does contain multiple capital letters or a number.
             */
            if (shouldCheckField &&
                (newValue.indexOf('mp') === 0 ||
                    newValue.indexOf('mvc') === 0 ||
                    newValue.indexOf('mol') === 0)) {
                newMaterialsInputField = MaterialsInputField.MP_ID;
            }
            else if (shouldCheckField && newValue.match(/,|-|\s/gi) && !newValue.match(/\*/gi)) {
                newMaterialsInputField = MaterialsInputField.ELEMENTS;
            }
            else if (shouldCheckField && props.allowSmiles && parseSmiles(newValue)) {
                newMaterialsInputField = MaterialsInputField.SMILES;
            }
            else if (shouldCheckField && parseFormula(newValue)) {
                newMaterialsInputField = MaterialsInputField.FORMULA;
            }
            else if (shouldCheckField) {
                newMaterialsInputField = MaterialsInputField.ELEMENTS;
            }
            switch (newMaterialsInputField) {
                case MaterialsInputField.MP_ID:
                    newPtActionsToDispatch.push({
                        action: ptActions.clear,
                    });
                    break;
                case MaterialsInputField.SMILES:
                    newPtActionsToDispatch.push({
                        action: ptActions.clear,
                    });
                    break;
                case MaterialsInputField.EXCLUDE_ELEMENTS:
                case MaterialsInputField.ELEMENTS:
                    /** Parse the input for a delimiter */
                    const parsedDelimiter = getDelimiter(newValue);
                    /** If no delimiter present, don't change the delimiter value */
                    newDelimiter = parsedDelimiter ? parsedDelimiter : newDelimiter;
                    const parsedElements = parseElements(newValue, newDelimiter);
                    parsedElements.forEach((el) => {
                        if (!enabledElements[el]) {
                            newPtActionsToDispatch.push({
                                action: ptActions.addEnabledElement,
                                payload: el,
                            });
                        }
                    });
                    enabledElementsList.forEach((el) => {
                        if (parsedElements.indexOf(el) === -1) {
                            newPtActionsToDispatch.push({
                                action: ptActions.removeEnabledElement,
                                payload: el,
                            });
                        }
                    });
                    break;
                case MaterialsInputField.FORMULA:
                    var { formulaSplitWithNumbers, formulaSplitElementsOnly } = formulaStringToArrays(newValue);
                    formulaSplitElementsOnly.forEach((el) => {
                        if (TABLE_DICO_V2[el]) {
                            if (!enabledElements[el]) {
                                newPtActionsToDispatch.push({
                                    action: ptActions.addEnabledElement,
                                    payload: el,
                                });
                            }
                        }
                    });
                    enabledElementsList.forEach((el) => {
                        if (formulaSplitElementsOnly.indexOf(el) === -1) {
                            newPtActionsToDispatch.push({
                                action: ptActions.removeEnabledElement,
                                payload: el,
                            });
                        }
                    });
                    break;
                default:
                    throw 'invalid field in materials input';
            }
            setPtActionsToDispatch(newPtActionsToDispatch);
            setDelimiter(newDelimiter);
            if (props.onFieldChange)
                props.onFieldChange(newMaterialsInputField);
        }
        valueChangedByPT.current = false;
    }, [props.value]);
    /**
     * This effect executes the periodic table context actions collected by the value effect (above)
     * These are executed in a separate effect (rather than inside the value effect)
     * to prevent issues with execution order when MaterialsInputs are
     * initialized with values (e.g. search param value from the URL).
     */
    useEffect(() => {
        ptActionsToDispatch.forEach((d) => d.action(d.payload));
    }, [ptActionsToDispatch]);
    /**
     * This effect handles direct interactions with the periodic table.
     * This hook is triggered any time enabledElements changes.
     *
     * To prevent an infinite update loop, the function is skipped if
     * enabledElements was changed from an external action, not a direct element click
     * (as determined by the presence of lastAction.type).
     */
    useEffect(() => {
        if (lastAction && lastAction.hasOwnProperty('type')) {
            const enabledElementsList = getTruthyKeys(enabledElements);
            let newValue = '';
            switch (props.field) {
                case MaterialsInputField.ELEMENTS:
                    newValue = arrayToDelimitedString(enabledElementsList, delimiter);
                    break;
                case MaterialsInputField.FORMULA:
                    if (lastAction.type === 'select') {
                        newValue = props.value + enabledElementsList[enabledElementsList.length - 1];
                    }
                    else {
                        var { formulaSplitWithNumbers, formulaSplitElementsOnly } = formulaStringToArrays(props.value);
                        const removedIndex = formulaSplitElementsOnly === null || formulaSplitElementsOnly === void 0 ? void 0 : formulaSplitElementsOnly.findIndex((d, i) => {
                            return enabledElementsList.indexOf(d) === -1;
                        });
                        if (removedIndex !== undefined)
                            formulaSplitWithNumbers === null || formulaSplitWithNumbers === void 0 ? void 0 : formulaSplitWithNumbers.splice(removedIndex, 1);
                        if (formulaSplitWithNumbers)
                            newValue = formulaSplitWithNumbers.toString().replace(/,/gi, '');
                    }
                    break;
                default:
                    newValue = arrayToDelimitedString(enabledElementsList, delimiter);
                    if (props.onFieldChange)
                        props.onFieldChange(MaterialsInputField.ELEMENTS);
            }
            props.setValue(newValue);
            valueChangedByPT.current = true;
        }
    }, [enabledElements]);
    /**
     * This effect lifts the ref placed in the input element
     * up to the parent MaterialsInput component
     * This allows MaterialsInput to handle focusing the input when the periodic table is clicked
     */
    useEffect(() => {
        if (props.liftInputRef)
            props.liftInputRef(inputRef);
    }, []);
    const inputControl = (React__default.createElement(Control$1, { className: "is-expanded" },
        React__default.createElement("input", { "data-testid": "materials-input-search-input", className: "input", type: "search", value: props.value, onChange: handleRawValueChange, onFocus: handleFocus, onBlur: handleBlur, placeholder: props.placeholder, ref: inputRef, onKeyDown: props.onKeyDown })));
    return (React__default.createElement(React__default.Fragment, null,
        props.showFieldDropdown && (React__default.createElement(Control$1, null,
            React__default.createElement(Dropdown, { value: props.field, onChange: (item) => {
                    if (props.onFieldChange)
                        props.onFieldChange(item);
                }, color: "primary" }, dropdownItems.map((item, k) => {
                return (React__default.createElement(Dropdown.Item, { key: k, value: item.value }, item.label));
            })))),
        inputControl));
};

const PeriodicTableFormulaButtons = (props) => {
    const values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '(', ')'];
    return (React__default.createElement("div", { className: "pt-formula-buttons" },
        React__default.createElement("div", { className: "pt-formula-buttons-spacer" }),
        React__default.createElement("button", { type: "button", className: "pt-formula-buttons-wildcard mat-element has-tooltip-bottom", onClick: () => props.onClick('*'), "data-tooltip": "Wildcard element" },
            React__default.createElement("span", { className: "mat-symbol" },
                React__default.createElement(FaAsterisk, null))),
        values.map((v, i) => (React__default.createElement("button", { key: i, type: "button", className: "mat-element", onClick: () => props.onClick(v) },
            React__default.createElement("span", { className: "mat-symbol" }, v))))));
};

const PeriodicTableModeSwitcher = (props) => {
    // const [mode, setMode] = useState(props.mode);
    // useEffect(() => {
    //   setMode(props.mode);
    // }, [props.mode]);
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement("div", { className: "first-span" },
            React__default.createElement("div", { className: "toggle-buttons" },
                React__default.createElement("button", { className: classNames('button', { 'is-active': props.mode !== 'formula' }), onClick: () => props.onSwitch('elements') }, "Elements"),
                React__default.createElement("button", { className: classNames('button', { 'is-active': props.mode === 'formula' }), onClick: () => props.onSwitch('formula') }, "Formula"))),
        React__default.createElement("div", { className: "second-span" }, props.mode === 'formula' && (React__default.createElement(PeriodicTableFormulaButtons, { onClick: props.onFormulaButtonClick })))));
};

const PeriodicTablePluginWrapper = (props) => {
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement("div", { className: "first-span" }, props.upper && props.children),
        React__default.createElement("div", { className: "second-span" }, !props.upper && props.children)));
};

const { Input: Input$1, Field: Field$1, Control: Control$2 } = Form;
/**
 * An input field component for searching by mp-id, elements, or formula.
 * Renders a text input and a periodic table within a PeriodicContext to support
 * two-way binding between the input and periodic table.
 * i.e. when elements are typed into the field, they are selected in the table,
 * and when elements are selected in the table, they are appended to the field's input.
 */
/**
 * Search types supported by this field
 * Displayed to users in the dropdown
 */
var MaterialsInputField;
(function (MaterialsInputField) {
    MaterialsInputField["ELEMENTS"] = "elements";
    MaterialsInputField["EXCLUDE_ELEMENTS"] = "exclude_elements";
    MaterialsInputField["FORMULA"] = "formula";
    MaterialsInputField["MP_ID"] = "task_ids";
    MaterialsInputField["SMILES"] = "smiles";
})(MaterialsInputField || (MaterialsInputField = {}));
let requestCount = 0;
const MaterialsInput = (props) => {
    const [inputValue, setInputValue] = useState(props.value);
    const [field, setField] = useState(props.field);
    const debouncedInputValue = props.debounce ? useDebounce(inputValue, props.debounce) : inputValue;
    const [inputRef, setInputRef] = useState();
    const [isChemSys, setIsChemSys] = useState(() => props.isChemSys ? props.isChemSys : false);
    // const prevChemSys = usePrevious(isChemSys);
    const periodicTableClicked = useRef(false);
    const [showPeriodicTable, setShowPeriodicTable] = useState(() => props.periodicTableMode === 'toggle' && !props.hidePeriodicTable ? true : false);
    const [showAutocomplete, setShowAutocomplete] = useState(true);
    const [formulaSuggestions, setFormulaSuggestions] = useState([]);
    const shouldShowAutocomplete = () => {
        if (formulaSuggestions.length > 0) {
            return setShowAutocomplete(true);
        }
        else {
            return setShowAutocomplete(false);
        }
    };
    const getOnFocusProp = () => {
        shouldShowAutocomplete();
        if (props.periodicTableMode === 'onFocus') {
            return setShowPeriodicTable(true);
        }
        else {
            return;
        }
    };
    const hideAutoCompleteAndPeriodicTable = () => {
        setShowAutocomplete(false);
        if (props.periodicTableMode === 'onFocus') {
            return setShowPeriodicTable(false);
        }
    };
    /**
     * When blurring out of the input,
     * make sure the user is not clicking on a periodic table element button.
     * If so, keep the input in focus.
     * Otherwise, close the autocomplete menu and hide the periodic table (if using show onFocus mode)
     */
    const getOnBlurProp = (e) => {
        const relatedTarget = e.relatedTarget;
        const target = e.target;
        if (!periodicTableClicked.current) {
            hideAutoCompleteAndPeriodicTable();
        }
        else {
            /** Chrome can make use of relatedTarget to avoid using a timeout */
            if (relatedTarget && relatedTarget.className.indexOf('mat-element') > -1) {
                target.focus();
            }
            else {
                setTimeout(() => {
                    target.focus();
                });
            }
        }
        periodicTableClicked.current = false;
    };
    /**
     * If the user is tabbing out of the input,
     * force autocomplete and periodic table to close.
     * This allows users to tab past MaterialInputs that
     * only show periodic tables on focus.
     * Tha above blur function doesn't work because the relatedTarget on tab would be a mat-element.
     */
    const getOnKeyDownProp = (e) => {
        if (e.keyCode === 9) {
            hideAutoCompleteAndPeriodicTable();
        }
    };
    const handleSubmit = (e) => {
        if (props.onSubmit) {
            e.preventDefault();
            e.stopPropagation();
            setShowPeriodicTable(false);
            props.onSubmit(e);
        }
    };
    const handleChemSysCheck = () => {
        let newIsChemSys = isChemSys;
        if (inputValue.match(/-/gi)) {
            newIsChemSys = true;
        }
        else if (inputValue.match(/,|\s/gi)) {
            newIsChemSys = false;
        }
        if (props.onPropsChange)
            props.onPropsChange({ isChemSys: newIsChemSys });
        setIsChemSys(newIsChemSys);
    };
    let materialsInputField = null;
    let toggleControl = null;
    let tooltipControl = null;
    let periodicTablePlugin = undefined;
    let chemSysCheckbox = null;
    const hasChemSysCheckbox = props.field === 'elements' && !props.onSubmit;
    const materialsInputControl = (React__default.createElement(MaterialsInputBox, { value: inputValue, field: field, isChemSys: props.isChemSys, allowSmiles: props.allowSmiles, setValue: setInputValue, onFieldChange: setField, onFocus: getOnFocusProp, onBlur: getOnBlurProp, onKeyDown: getOnKeyDownProp, liftInputRef: (ref) => setInputRef(ref), showFieldDropdown: props.showFieldDropdown, placeholder: props.placeholder }));
    const autocompleteMenu = (React__default.createElement("div", { "data-testid": "materials-input-autocomplete-menu", className: classNames('dropdown-menu', 'autocomplete-right', {
            'is-hidden': !showAutocomplete,
        }), "aria-hidden": true },
        React__default.createElement("div", { "data-testid": "materials-input-autocomplete-menu-items", className: "dropdown-content" },
            React__default.createElement("p", { className: "autocomplete-label" }, "Suggested formulas"),
            formulaSuggestions.map((d, i) => (React__default.createElement("a", { key: i, className: "dropdown-item", onMouseDown: () => props.onChange(d.formula_pretty) }, formatFormula(d.formula_pretty)))))));
    if (props.periodicTableMode === 'toggle') {
        toggleControl = (React__default.createElement(Control$2, null,
            React__default.createElement("button", { "data-testid": "materials-input-toggle-button", type: "button", className: "button has-oversized-icon is-size-2", onClick: () => setShowPeriodicTable(!showPeriodicTable) },
                React__default.createElement("i", { className: classNames('icon-fontastic-periodic-table-squares', {
                        'is-active': showPeriodicTable,
                    }) }))));
    }
    if (props.tooltip) {
        tooltipControl = (React__default.createElement(Control$2, null,
            React__default.createElement("button", { "data-testid": "materials-input-tooltip-button", type: "button", className: "button has-tooltip-multiline has-tooltip-bottom has-text-grey-light", "data-tooltip": props.tooltip },
                React__default.createElement(FaQuestionCircle, null))));
    }
    if (props.onSubmit) {
        materialsInputField = (React__default.createElement("form", { "data-testid": "materials-input-form", onSubmit: handleSubmit },
            React__default.createElement(Field$1, { className: "has-addons" },
                toggleControl,
                materialsInputControl,
                tooltipControl,
                React__default.createElement(Control$2, null,
                    React__default.createElement(Button, { color: "primary", type: "submit" }, "Search")))));
    }
    else {
        materialsInputField = (React__default.createElement(Field$1, { className: "has-addons" },
            toggleControl,
            materialsInputControl,
            tooltipControl));
    }
    if (hasChemSysCheckbox) {
        chemSysCheckbox = (React__default.createElement("label", { className: "checkbox is-block" },
            React__default.createElement("input", { type: "checkbox", role: "checkbox", checked: isChemSys, "aria-checked": isChemSys, onChange: (e) => {
                    let newValue = '';
                    if (e.target.checked) {
                        newValue = props.value.replace(/,\sand|,\s|,|\s/gi, '-');
                    }
                    else {
                        newValue = props.value.replace(/-/gi, ',');
                    }
                    setIsChemSys(e.target.checked);
                    if (props.onPropsChange)
                        props.onPropsChange({ isChemSys: e.target.checked });
                    props.onChange(newValue);
                } }),
            React__default.createElement("span", null, "Contains no other elements")));
    }
    /**
     * Include periodic table mode switcher if component
     * allows dynamic field switching.
     *
     * Include only formula buttons if component handles the formula field.
     *
     * Include no plugin if component only handles elements field.
     */
    if (props.onFieldChange) {
        periodicTablePlugin = (React__default.createElement(PeriodicTableModeSwitcher, { mode: field, onSwitch: setField, onFormulaButtonClick: (v) => setInputValue(inputValue + v) }));
    }
    else if (props.field === 'formula') {
        periodicTablePlugin = (React__default.createElement(PeriodicTablePluginWrapper, null,
            React__default.createElement(PeriodicTableFormulaButtons, { onClick: (v) => setInputValue(inputValue + v) }),
            ";"));
    }
    /**
     * This effect triggers when the input value changes
     * It handles modifying the chemsys flag (checked when input is dash-delimited or one element)
     * It also handles fetching formula suggestions if the necessary props are supplied
     */
    useEffect(() => {
        handleChemSysCheck();
        if (props.autocompleteFormulaUrl && field === 'formula' && inputValue.length) {
            requestCount++;
            const requestIndex = requestCount;
            axios
                .get(props.autocompleteFormulaUrl, {
                params: { text: inputValue },
                headers: props.autocompleteApiKey ? { 'X-Api-Key': props.autocompleteApiKey } : null,
            })
                .then((result) => {
                console.log(result);
                if (requestIndex === requestCount) {
                    setFormulaSuggestions(result.data.data);
                }
            })
                .catch((error) => {
                console.log(error);
                if (requestIndex === requestCount) {
                    setFormulaSuggestions([]);
                }
            });
        }
        else {
            setFormulaSuggestions([]);
        }
    }, [inputValue, field]);
    /**
     * This effect ensures that the visibility
     * of the autocomplete menu responds to changes
     * in the number of suggestions (if no suggestions, hide the menu)
     */
    useEffect(() => {
        if (formulaSuggestions.length > 0 && document.activeElement === (inputRef === null || inputRef === void 0 ? void 0 : inputRef.current)) {
            setShowAutocomplete(true);
        }
        else {
            setShowAutocomplete(false);
        }
    }, [formulaSuggestions]);
    /**
     * This effect is triggered when the value prop is changed from outside this component
     * Here inputValue is set, triggering debouncedInputValue to get set after the debounce timer
     */
    useEffect(() => {
        setInputValue(props.value);
    }, [props.value]);
    useEffect(() => {
        setField(props.field);
    }, [props.field]);
    useEffect(() => {
        if (props.onFieldChange)
            props.onFieldChange(field);
    }, [field]);
    /**
     * This effect is triggered after the debouncedInputValue is set
     * The debouncedInputValue is set with inputValue after the specified debounce time
     * If no debounce prop is supplied, there is no debounce and debouncedInputValue is exactly the same as inputValue
     * Triggers the onChange event prop for the value prop
     */
    useEffect(() => {
        props.onChange(debouncedInputValue);
    }, [debouncedInputValue]);
    return (React__default.createElement("div", { className: "materials-input" },
        React__default.createElement(PeriodicContext, null,
            materialsInputField,
            chemSysCheckbox,
            autocompleteMenu,
            React__default.createElement("div", { "data-testid": "materials-input-periodic-table", className: classNames('table-transition-wrapper-small', 'can-hide-by-height', {
                    'is-hidden-by-height': !showPeriodicTable,
                    'mt-3': showPeriodicTable,
                }), "aria-hidden": !showPeriodicTable, onMouseDown: (event) => {
                    periodicTableClicked.current = true;
                    // if (inputRef && inputRef.current) {
                    //   const target = inputRef.current;
                    //   setTimeout(() => {
                    //     target.focus();
                    //   }, 500);
                    // }
                } },
                React__default.createElement(SelectableTable, { disabled: !showPeriodicTable, maxElementSelectable: 20, forceTableLayout: TableLayout.MINI, hiddenElements: [], plugin: periodicTablePlugin, onStateChange: (enabledElements) => {
                        Object.keys(enabledElements).filter((el) => enabledElements[el]);
                    } })))));
};
MaterialsInput.defaultProps = {
    value: '',
    field: MaterialsInputField.ELEMENTS,
    onChange: (value) => null,
};

const niceInitialValues = (vals, domain, niceDomain) => {
    const upperBoundIsValid = vals[1] <= niceDomain[1] && vals[1] >= vals[0] && vals[1] >= niceDomain[0];
    const lowerBoundIsValid = vals[0] >= niceDomain[0] && vals[0] <= vals[1] && vals[0] <= niceDomain[1];
    if (vals[0] === domain[0] && vals[1] === domain[1]) {
        return [niceDomain[0], niceDomain[1]];
    }
    else if (upperBoundIsValid && !lowerBoundIsValid) {
        return [niceDomain[0], vals[1]];
    }
    else if (lowerBoundIsValid && !upperBoundIsValid) {
        return [vals[0], niceDomain[1]];
    }
    else if (lowerBoundIsValid && upperBoundIsValid) {
        return vals;
    }
    else {
        return [niceDomain[0], niceDomain[1]];
    }
};
const DualRangeSlider = ({ domain = [0, 100], step = 1, initialValues = domain.slice(), debounce, onChange = () => undefined, onPropsChange = () => undefined, }) => {
    const decimals = countDecimals(step);
    const tickCount = 5;
    const scale = scaleLinear().domain(domain).nice(tickCount);
    const niceDomain = scale.domain();
    const ticks = scale.ticks(5);
    const [values, setValues] = useState(niceInitialValues(initialValues, domain, niceDomain));
    const [lowerBound, setLowerBound] = useState(values[0]);
    const [upperBound, setUpperBound] = useState(values[1]);
    const [lowerBoundToDebounce, setLowerBoundToDebounce] = useState(lowerBound);
    const [upperBoundToDebounce, setUpperBoundToDebounce] = useState(upperBound);
    const debouncedLowerBound = debounce
        ? useDebounce(lowerBoundToDebounce, debounce)
        : lowerBoundToDebounce;
    const debouncedUpperBound = debounce
        ? useDebounce(upperBoundToDebounce, debounce)
        : upperBoundToDebounce;
    const handleSliderFinalChange = (vals) => {
        if (onChange) {
            onChange(vals.map((val) => {
                return parseFloat(val.toFixed(decimals));
            }));
        }
    };
    const handleSliderChange = (vals) => {
        setValues(vals);
        setLowerBound(vals[0]);
        setUpperBound(vals[1]);
    };
    /**
     * Set the lowerBound input value and its debounce value
     * Setting the debounce value will trigger handleSliderFinalChange
     * after the specified delay.
     * The bound values are set using the raw input strings to allow
     * users to type in negative numbers.
     */
    const handleLowerInputChange = (e) => {
        setLowerBound(e.target.value);
        setLowerBoundToDebounce(e.target.value);
    };
    /**
     * Same as above but for upperBound
     */
    const handleUpperInputChange = (e) => {
        setUpperBound(e.target.value);
        setUpperBoundToDebounce(e.target.value);
    };
    /**
     * Triggered by debouncedLowerBound effect
     * Ensures that the value in the input is valid and within
     * the set limits.
     * Handles updating values and triggering a final slider change event.
     */
    const validateDebouncedLowerBound = () => {
        const lowerBoundFloat = parseFloat(debouncedLowerBound);
        const upperBoundFloat = parseFloat(upperBound);
        let newValues = [lowerBoundFloat, upperBoundFloat];
        if (lowerBoundFloat > upperBoundFloat) {
            setUpperBound(lowerBoundFloat);
            newValues = [lowerBoundFloat, lowerBoundFloat];
        }
        else if (lowerBoundFloat < niceDomain[0]) {
            setLowerBound(niceDomain[0]);
            newValues = [niceDomain[0], upperBoundFloat];
        }
        else if (lowerBoundFloat > niceDomain[1]) {
            setLowerBound(niceDomain[1]);
            newValues = [niceDomain[1], niceDomain[1]];
        }
        if (newValues[0] !== values[0] || newValues[1] !== values[1]) {
            setValues(newValues);
            handleSliderFinalChange(newValues);
        }
    };
    /**
     * Same as above but for debouncedUpperBound
     */
    const validateDebouncedUpperBound = () => {
        const lowerBoundFloat = parseFloat(lowerBound);
        const upperBoundFloat = parseFloat(debouncedUpperBound);
        let newValues = [lowerBoundFloat, upperBoundFloat];
        if (upperBoundFloat < lowerBoundFloat) {
            setLowerBound(upperBoundFloat);
            newValues = [upperBoundFloat, upperBoundFloat];
        }
        else if (upperBoundFloat > niceDomain[1]) {
            setUpperBound(niceDomain[1]);
            newValues = [lowerBoundFloat, niceDomain[1]];
        }
        else if (upperBoundFloat < niceDomain[0]) {
            setUpperBound(niceDomain[0]);
            newValues = [niceDomain[0], niceDomain[0]];
        }
        if (newValues[0] !== values[0] || newValues[1] !== values[1]) {
            setValues(newValues);
            handleSliderFinalChange(newValues);
        }
    };
    /**
     * Domain props are made "nice" (rounded bounds for nice ticks)
     * This effect lifts the prop changes up to the parent
     */
    useEffect(() => {
        onPropsChange({ domain: niceDomain, initialValues: values });
    }, []);
    /**
     * If the initialValues prop is changed from outside this component
     * trigger a slider change
     */
    useEffect(() => {
        handleSliderChange(niceInitialValues(initialValues, domain, niceDomain));
    }, [initialValues]);
    /**
     * These two effects are triggered when debouncedLowerBound and debouncedUpperBound
     * are changed (respectively).
     * This happens X milliseconds after lowerBoundToDebounce/upperBoundToDebounce is set.
     * Using a separate variable for debouncing makes it so that only text input changes
     * to the bounds will trigger the debounce effect, not regular slider changes.
     * This prevents double firing the final onChange event on slider changes.
     */
    useEffect(() => {
        validateDebouncedLowerBound();
    }, [debouncedLowerBound]);
    useEffect(() => {
        validateDebouncedUpperBound();
    }, [debouncedUpperBound]);
    return (React__default.createElement("div", { className: "slider-container", "data-testid": "dual-range-slider" },
        React__default.createElement("div", { className: "level is-mobile mb-1" },
            React__default.createElement("div", { className: "level-left" },
                React__default.createElement("input", { "data-testid": "lower-bound-input", className: "input is-small", type: "number", value: lowerBound, min: niceDomain[0], max: niceDomain[1], step: step, onChange: handleLowerInputChange })),
            React__default.createElement("div", { className: "level-right" },
                React__default.createElement("input", { "data-testid": "upper-bound-input", className: "input is-small", type: "number", value: upperBound, min: niceDomain[0], max: niceDomain[1], step: step, onChange: handleUpperInputChange }))),
        React__default.createElement("div", { className: "slider" },
            React__default.createElement(Range, { values: values, step: step, min: niceDomain[0], max: niceDomain[1], onChange: handleSliderChange, onFinalChange: handleSliderFinalChange, renderTrack: ({ props, children }) => (React__default.createElement("div", { onMouseDown: props.onMouseDown, onTouchStart: props.onTouchStart, className: "slider-track", style: Object.assign({}, props.style) },
                    React__default.createElement("div", { ref: props.ref, className: "slider-track-inner", style: {
                            background: getTrackBackground({
                                values: values,
                                colors: ['#ccc', '#3273dc', '#ccc'],
                                min: niceDomain[0],
                                max: niceDomain[1],
                            }),
                        } }, children))), renderThumb: ({ props, isDragged }) => (React__default.createElement("div", Object.assign({}, props, { "data-testid": "slider-button", className: classNames('button', 'is-slider', { 'is-dragged': isDragged }) }),
                    React__default.createElement("div", { className: "inner-slider-button" }))), renderMark: ({ props, index }) => {
                    /**
                     * Only render the number of ticks specificed in the ticks var (currently 5).
                     * Otherwise, react-range will try to render a tick at each step
                     * which is way too many.
                     */
                    const tickValue = niceDomain[0] + index * step;
                    if (ticks.indexOf(tickValue) > -1) {
                        return (React__default.createElement("div", { key: 'tick-' + index },
                            React__default.createElement("div", Object.assign({}, props, { className: "slider-tick-mark", style: Object.assign(Object.assign({}, props.style), { backgroundColor: '#ccc' }) })),
                            React__default.createElement("span", { "data-testid": "tick-value", className: "slider-tick-value", style: Object.assign({}, props.style) },
                                tickValue,
                                tickValue === ticks[ticks.length - 1] && '+')));
                    }
                    else {
                        return null;
                    }
                } }))));
};

const Select = (props) => {
    const [open, setOpen] = useState(false);
    /**
     * Set selected option based on value or defaultValue prop.
     * Value or defaultValue can be passed in as a full option object (as required by react-select)
     * or as a simple value.
     */
    let selected = props.options.find((option) => {
        if (props.value) {
            return option.value === props.value || option === props.value;
        }
        else if (props.defaultValue) {
            return option.defaultValue === props.defaultValue || option === props.defaultValue;
        }
        else {
            return;
        }
    });
    /** react-select values can't be undefined so use null instead */
    selected = selected ? selected : null;
    return (React__default.createElement("div", { "data-testid": "select", className: classNames('react-select-outer-container', { 'is-open': open }) },
        React__default.createElement(ReactSelect, Object.assign({}, props, props.arbitraryProps, { className: "react-select-container", classNamePrefix: "react-select", value: selected, onChange: (selectedOption) => {
                if (props.onChange) {
                    props.onChange(selectedOption);
                }
                if (props.setProps) {
                    const value = selectedOption && selectedOption.value ? selectedOption.value : null;
                    props.setProps({ value });
                }
            }, onMenuOpen: () => setOpen(true), onMenuClose: () => setOpen(false) }))));
};

const initOptions = (options) => {
    return options.map(d => {
        if (!d.hasOwnProperty('checked'))
            d.checked = false;
        return d;
    });
};
const getCheckedValues = (ops) => {
    const checkedValues = [];
    ops.forEach((d) => {
        if (d.checked) {
            checkedValues.push(d.value);
        }
    });
    if (checkedValues.length === ops.length) {
        return null;
    }
    else {
        return checkedValues;
    }
};
const CheckboxList = props => {
    const [options, setOptions] = useState(initOptions(props.options));
    const [values, setValues] = useState(getCheckedValues(props.options));
    const handleChange = (index) => {
        let newOptions = [...options];
        newOptions[index].checked = !newOptions[index].checked;
        const newValues = getCheckedValues(newOptions);
        if (props.onChange)
            props.onChange(newValues);
        setOptions(newOptions);
        setValues(newValues);
    };
    return (React__default.createElement("div", { className: "checkbox-list" }, options.map((d, i) => (React__default.createElement("label", { key: i, className: "checkbox" },
        React__default.createElement("input", { type: "checkbox", value: d.value, checked: d.checked, onChange: (e) => handleChange(i) }),
        d.label)))));
};

const ThreeStateBooleanSelect = ({ options, value, onChange }) => {
    const threeOptions = [{ label: 'Any', value: undefined }, options[0], options[1]];
    const selected = threeOptions.find(option => option.value === value);
    return (React__default.createElement(Select, { options: threeOptions, value: selected, menuPosition: "fixed", onChange: onChange }));
};

const TextInput = props => {
    const [inputValue, setInputValue] = useState(props.value);
    const debouncedInputValue = props.debounce ? useDebounce(inputValue, props.debounce) : inputValue;
    const handleChange = e => {
        setInputValue(e.target.value);
    };
    /**
     * This effect is triggered after the debouncedInputValue is set
     * The debouncedInputValue is set with inputValue after the specified debounce time
     * If no debounce prop is supplied, there is no debounce and debouncedInputValue is exactly the same as inputValue
     * Triggers the onChange event prop for the value prop
     */
    useEffect(() => {
        props.onChange(debouncedInputValue);
    }, [debouncedInputValue]);
    /**
     * This effect is triggered when the value prop is changed directly from outside this component
     * Here inputValue is set, triggering debouncedInputValue to get set after the debounce timer
     */
    useEffect(() => {
        setInputValue(props.value);
    }, [props.value]);
    return (React__default.createElement("input", { type: "text", className: "input", value: inputValue || '', onChange: handleChange }));
};

const getActiveFilterById = (id, activeFilters) => {
    return activeFilters.find((af) => af.id === id);
};
const getActiveFilterCount = (group, activeFilters) => {
    let count = 0;
    const activeIds = activeFilters.map((f) => f.id);
    group.filters.forEach((f) => {
        if (activeIds.indexOf(f.id) > -1) {
            f.active = true;
            count++;
        }
        else {
            f.active = false;
        }
    });
    return count;
};
const getGroupsByName = (groups, activeFilters) => {
    let groupsByName = {};
    groups.forEach((g) => {
        groupsByName[g.name] = {
            expanded: g.expanded === true ? true : false,
            activeFilterCount: getActiveFilterCount(g, activeFilters),
            filters: g.filters,
        };
    });
    return groupsByName;
};
const SearchUIFilters = (props) => {
    const state = useSearchUIContext();
    const actions = useSearchUIContextActions();
    const groupRefs = useRef(new Array(state.filterGroups.length));
    const [groupsByName, setGroupsByName] = useState(getGroupsByName(state.filterGroups, state.activeFilters));
    /**
     * Render filter component based on the filter's "type" property
     * Accepts the full filter object as an argument to render components
     * The groupId argument is used for components that need to
     * dynamically change their "props" property with actions.setFilterProps().
     */
    const renderFilter = (f, groupId) => {
        switch (f.type) {
            case FilterType.TEXT_INPUT:
                return (React__default.createElement(TextInput, Object.assign({ debounce: 1000, type: "text", value: state.filterValues[f.id], onChange: (v) => actions.setFilterValue(v, f.id) }, f.props)));
            case FilterType.MATERIALS_INPUT:
                return (React__default.createElement(MaterialsInput, Object.assign({ debounce: 1000, value: state.filterValues[f.id], onChange: (v) => actions.setFilterValue(v, f.id), periodicTableMode: "onFocus", onPropsChange: (propsObject) => actions.setFilterProps(propsObject, f.id, groupId), autocompleteFormulaUrl: state.autocompleteFormulaUrl, autocompleteApiKey: state.apiKey }, f.props)));
            case FilterType.SLIDER:
                return (React__default.createElement(DualRangeSlider, Object.assign({}, f.props, { initialValues: state.filterValues[f.id], onChange: (v) => actions.setFilterValue(v, f.id), onPropsChange: (propsObject) => actions.setFilterProps(propsObject, f.id, groupId) })));
            case FilterType.SELECT_SPACEGROUP_SYMBOL:
            case FilterType.SELECT_SPACEGROUP_NUMBER:
            case FilterType.SELECT_CRYSTAL_SYSTEM:
            case FilterType.SELECT_POINTGROUP:
            case FilterType.SELECT:
                return (React__default.createElement(Select, Object.assign({}, f.props, { menuPosition: "fixed", isClearable: true, value: state.filterValues[f.id], onChange: (selectedOption) => {
                        const value = selectedOption && selectedOption.value ? selectedOption.value : null;
                        actions.setFilterValue(value, f.id);
                    }, arbitraryProps: { id: 'test' } })));
            case FilterType.THREE_STATE_BOOLEAN_SELECT:
                return (React__default.createElement(ThreeStateBooleanSelect, Object.assign({}, f.props, { value: state.filterValues[f.id], onChange: (item) => actions.setFilterValue(item.value, f.id) })));
            case FilterType.CHECKBOX_LIST:
                return React__default.createElement(CheckboxList, Object.assign({}, f.props, { onChange: (v) => actions.setFilterValue(v, f.id) }));
        }
        return null;
    };
    const renderActiveFilterCount = (count) => {
        if (count > 0) {
            return React__default.createElement("span", { className: "badge ml-2" },
                count,
                " active");
        }
        else {
            return null;
        }
    };
    const resetFilter = (id) => {
        const activeFilter = getActiveFilterById(id, state.activeFilters);
        if (activeFilter) {
            actions.setFilterValue(activeFilter.defaultValue, id);
        }
    };
    const toggleGroup = (groupName) => {
        let newGroupsByName = Object.assign({}, groupsByName);
        for (const name in newGroupsByName) {
            newGroupsByName[name].expanded = groupName === name ? !newGroupsByName[name].expanded : false;
        }
        setGroupsByName(newGroupsByName);
    };
    const getUnitsComponent = (units) => {
        if (units) {
            return React__default.createElement("span", { className: "has-text-weight-normal is-size-7" },
                " (",
                units,
                ")");
        }
        else {
            return null;
        }
    };
    useEffect(() => {
        let newGroupsByName = Object.assign({}, groupsByName);
        for (const name in newGroupsByName) {
            const g = newGroupsByName[name];
            g.activeFilterCount = getActiveFilterCount(g, state.activeFilters);
        }
        setGroupsByName(newGroupsByName);
    }, [state.activeFilters]);
    /**
     * This effect will set a new groupsByName if filterGroups is changed
     * from outside of this component (e.g. when a quick search is submitted)
     */
    useEffect(() => {
        const newGroupsByName = getGroupsByName(state.filterGroups, state.activeFilters);
        setGroupsByName(newGroupsByName);
    }, [state.filterGroups]);
    return (React__default.createElement("div", { className: props.className },
        React__default.createElement("div", { className: "panel" },
            React__default.createElement("div", { className: "panel-heading" },
                React__default.createElement("div", { className: "level is-mobile" },
                    React__default.createElement("span", null, "Filters"),
                    React__default.createElement("button", { "data-testid": "search-ui-reset-button", className: "button", onClick: (e) => actions.resetFilters() }, "Reset"))),
            React__default.createElement("div", { "data-testid": "panel-block-container", className: "panel-block-container" }, state.filterGroups.map((g, i) => (React__default.createElement("div", { className: classNames('panel-block', { 'is-active': groupsByName[g.name].expanded }), key: i },
                React__default.createElement("div", { className: "control" },
                    React__default.createElement("h3", { className: "panel-block-title" },
                        React__default.createElement("button", { className: classNames('button', 'is-fullwidth'), 
                            /**
                             * Using keydown event for accessibility
                             * Avoiding click event due to performance issues and collisions with mousedown
                             */
                            onKeyDown: (e) => {
                                if (e.key === 'Enter')
                                    toggleGroup(g.name);
                            }, 
                            /**
                             * Using mousedown event to prevent event order issues
                             * Periodic tables close on blur which fires before click events,
                             * causing click event to be skipped because button position changes when table is hidden
                             */
                            onMouseDown: (e) => toggleGroup(g.name), "aria-expanded": groupsByName[g.name].expanded, "aria-controls": 'filter-group-' + i, id: 'filter-group-button-' + i, type: "button" },
                            React__default.createElement("span", { className: classNames('is-size-5', {
                                    'has-opacity-70': !groupsByName[g.name].expanded,
                                }) },
                                g.name,
                                renderActiveFilterCount(groupsByName[g.name].activeFilterCount)),
                            React__default.createElement("div", { className: "is-pulled-right" }, !groupsByName[g.name].expanded ? (React__default.createElement(FaCaretRight, { className: "is-vertical-align-middle" })) : (React__default.createElement(FaCaretDown, { className: "is-vertical-align-middle" }))))),
                    React__default.createElement("div", { id: 'filter-group-region-' + i, role: "region", "aria-labelledby": 'filter-group-button-' + i, ref: (el) => (groupRefs.current[i] = el), className: classNames('panel-block-children', {
                            'is-hidden': !groupsByName[g.name].expanded,
                        }) },
                        React__default.createElement("div", { "aria-hidden": !groupsByName[g.name].expanded }, g.filters.map((f, j) => (React__default.createElement("div", { className: "mb-3", key: j },
                            React__default.createElement("div", null,
                                React__default.createElement("p", { className: "has-text-weight-bold mb-2" },
                                    !f.active && (React__default.createElement("span", null,
                                        f.name,
                                        getUnitsComponent(f.units))),
                                    f.active && (React__default.createElement("a", { onClick: () => resetFilter(f.id) },
                                        f.name,
                                        getUnitsComponent(f.units),
                                        React__default.createElement(FaRegTimesCircle, { className: "ml-2 is-vertical-align-middle" })))),
                                renderFilter(f, g.name)))))))))))))));
};
// onClick={(v, id) => actions.setFilterValue(v, id)}

const formatValue = (filter) => {
    if (Array.isArray(filter.value) && filter.value.length === 2 && !isNaN(filter.value[0])) {
        return filter.value[0] + ' to ' + filter.value[1];
    }
    else if (filter.id === 'pointgroup') {
        return formatPointGroup(filter.value);
    }
    else {
        return filter.value.toString();
    }
};
const ActiveFilterButtons = props => {
    return (React__default.createElement("div", { "data-testid": "active-filter-buttons", className: props.filters.length > 0 ? 'columns is-multiline column m-0 p-0' : '' }, props.filters.map((f, i) => (React__default.createElement("div", { className: "column is-narrow p-0 mr-2 mb-2", key: i },
        React__default.createElement(Button, { className: "is-rounded is-small", onClick: () => props.onClick(f.defaultValue, f.id) },
            React__default.createElement(FaTimes, null),
            React__default.createElement("span", { className: "ml-1" },
                f.displayName,
                ": ",
                formatValue(f))))))));
};

const Paginator = ({ rowsPerPage, rowCount, onChangePage, onChangeRowsPerPage, currentPage }) => {
    const [pageCount, setPageCount] = useState(getPageCount(rowCount, rowsPerPage));
    const getPaginationItem = (pageNumber) => {
        const isCurrent = currentPage === pageNumber;
        return (React__default.createElement("li", { key: pageNumber },
            React__default.createElement("a", { className: classNames('pagination-link', { 'is-current': isCurrent }), "aria-label": isCurrent ? `Go to page ${pageNumber}` : `Page ${pageNumber}`, onClick: () => onChangePage(pageNumber) }, format$1(',')(pageNumber))));
    };
    const pageIsUnderFour = React__default.createElement("ul", { className: "pagination-list" },
        getPaginationItem(1),
        getPaginationItem(2),
        getPaginationItem(3),
        getPaginationItem(4),
        React__default.createElement("li", null,
            React__default.createElement("span", { className: "pagination-ellipsis" }, "\u2026")),
        getPaginationItem(pageCount));
    const pageIsFourOrMore = React__default.createElement("ul", { className: "pagination-list" },
        getPaginationItem(1),
        React__default.createElement("li", null,
            React__default.createElement("span", { className: "pagination-ellipsis" }, "\u2026")),
        getPaginationItem(currentPage - 1),
        getPaginationItem(currentPage),
        getPaginationItem(currentPage + 1),
        React__default.createElement("li", null,
            React__default.createElement("span", { className: "pagination-ellipsis" }, "\u2026")),
        getPaginationItem(pageCount));
    const pageIsWithinFourOfLast = React__default.createElement("ul", { className: "pagination-list" },
        getPaginationItem(1),
        React__default.createElement("li", null,
            React__default.createElement("span", { className: "pagination-ellipsis" }, "\u2026")),
        getPaginationItem(pageCount - 3),
        getPaginationItem(pageCount - 2),
        getPaginationItem(pageCount - 1),
        getPaginationItem(pageCount));
    let paginationItems = pageIsFourOrMore;
    if (pageCount < 6) {
        let listItems = [];
        for (let index = 0; index < pageCount; index++) {
            listItems.push(getPaginationItem(index + 1));
        }
        paginationItems = React__default.createElement("ul", { className: "pagination-list" }, listItems);
    }
    else if (currentPage < 4) {
        paginationItems = pageIsUnderFour;
    }
    else if (currentPage > pageCount - 3) {
        paginationItems = pageIsWithinFourOfLast;
    }
    /**
     * This effect handles changes to rowsPerPage prop
     * that occur outside this component
     */
    useEffect(() => {
        setPageCount(getPageCount(rowCount, rowsPerPage));
    }, [rowsPerPage]);
    return (React__default.createElement("nav", { "data-testid": "paginator", className: "pagination is-small is-centered pt-3", role: "navigation", "aria-label": "pagination" },
        React__default.createElement("a", { className: classNames('pagination-previous', { 'is-hidden-by-opacity': currentPage === 1 }), "aria-hidden": currentPage === 1, onClick: () => onChangePage(currentPage - 1) },
            React__default.createElement(FaArrowLeft, null),
            React__default.createElement("span", { className: "ml-1 is-hidden-touch" }, "Previous")),
        React__default.createElement("a", { className: classNames('pagination-next', { 'is-hidden-by-opacity': currentPage === pageCount }), "aria-hidden": currentPage === pageCount, onClick: () => onChangePage(currentPage + 1) },
            React__default.createElement("span", { className: "mr-1 is-hidden-touch" }, "Next"),
            React__default.createElement(FaArrowRight, null)),
        paginationItems));
};

const componentHtmlId = v4();
const getLowerResultBound = (totalResults, resultsPerPage, page) => {
    if (totalResults === 0) {
        return 0;
    }
    else if (totalResults < resultsPerPage) {
        return 1;
    }
    else {
        return (page - 1) * resultsPerPage + 1;
    }
};
const getUpperResultBound = (totalResults, resultsPerPage, lowerResultBound) => {
    if (totalResults < resultsPerPage) {
        return totalResults;
    }
    else {
        return lowerResultBound - 1 + resultsPerPage;
    }
};
const SearchUIDataTable = (props) => {
    const state = useSearchUIContext();
    const actions = useSearchUIContextActions();
    const [titleHover, setTitleHover] = useState(false);
    const [columns, setColumns] = useState(state.columns);
    const tableRef = useRef(null);
    const [allCollumnsSelected, setAllCollumnsSelected] = useState(() => {
        const anyNotSelected = columns.find((col) => col.omit);
        return !anyNotSelected;
    });
    const lowerResultBound = getLowerResultBound(state.totalResults, state.resultsPerPage, state.page);
    const upperResultBound = getUpperResultBound(state.totalResults, state.resultsPerPage, lowerResultBound);
    const handlePageChange = (page) => {
        /** Scroll table back to top when page changes */
        if (tableRef.current) {
            tableRef.current.children[0].scrollTop = 0;
        }
        actions.setPage(page);
    };
    const handlePerRowsChange = (perPage) => {
        actions.setResultsPerPage(perPage);
    };
    const handleSort = (column, sortDirection) => {
        const sortAscending = sortDirection === 'asc' ? true : false;
        actions.setSort(column.selector, sortAscending);
    };
    const toggleColumn = (columnIndex) => {
        const newColumns = [...columns];
        const changedColumn = newColumns[columnIndex];
        if (changedColumn)
            changedColumn.omit = !changedColumn.omit;
        const anyNotSelected = newColumns.find((col) => col.omit);
        setAllCollumnsSelected(!anyNotSelected);
        setColumns(newColumns);
    };
    const toggleAllColumns = () => {
        const newAllColumnsSelected = !allCollumnsSelected;
        const newColumns = columns.map((col) => {
            col.omit = !newAllColumnsSelected;
            return col;
        });
        setAllCollumnsSelected(newAllColumnsSelected);
        setColumns(newColumns);
    };
    const TableHeaderTitle = () => {
        if (state.activeFilters.length === 0 && state.totalResults > 0 && !state.loading) {
            return (React__default.createElement("div", { "data-testid": "data-table-title" },
                React__default.createElement("a", { href: '#' + componentHtmlId, className: "title is-5", onMouseOver: () => setTitleHover(true), onMouseLeave: () => setTitleHover(false), onClick: () => setTitleHover(false) },
                    React__default.createElement("span", { className: "has-text-weight-normal" }, "All "),
                    React__default.createElement("span", { className: "has-text-weight-bold" },
                        React__default.createElement(NumberFormat, { value: state.totalResults, displayType: 'text', thousandSeparator: true }),
                        ' ',
                        pluralize(state.resultLabel)),
                    titleHover && React__default.createElement(FaLink, { className: "is-size-7 ml-1" }))));
        }
        else if (state.activeFilters.length > 1 ||
            (state.activeFilters.length === 1 && !state.loading)) {
            return (React__default.createElement("div", { "data-testid": "data-table-title" },
                React__default.createElement("a", { className: "title is-5", href: '#' + componentHtmlId, onMouseOver: () => setTitleHover(true), onMouseLeave: () => setTitleHover(false), onClick: () => setTitleHover(false) },
                    React__default.createElement("span", { className: "has-text-weight-bold" }, format$1(',')(state.totalResults)),
                    state.totalResults === 1 && (React__default.createElement("span", null,
                        React__default.createElement("span", { className: "has-text-weight-bold" },
                            " ",
                            state.resultLabel),
                        React__default.createElement("span", { className: "has-text-weight-normal" }, " matches"))),
                    state.totalResults !== 1 && (React__default.createElement("span", null,
                        React__default.createElement("span", { className: "has-text-weight-bold" },
                            " ",
                            pluralize(state.resultLabel)),
                        React__default.createElement("span", { className: "has-text-weight-normal" }, " match"))),
                    React__default.createElement("span", { className: "has-text-weight-normal" }, " your search"),
                    titleHover && React__default.createElement(FaLink, { className: "is-size-7 ml-1" }))));
        }
        else {
            return (React__default.createElement("p", { "data-testid": "data-table-title", className: "title is-5 has-text-weight-normal" },
                "Loading ",
                pluralize(state.resultLabel),
                "..."));
        }
    };
    const customStyles = {
        rows: {
            style: {
                minHeight: '3em',
            },
        },
    };
    const columnsMenu = (React__default.createElement(Wrapper, { "data-testid": "columns-menu", className: "dropdown is-right is-active has-text-left", closeOnSelection: false },
        React__default.createElement("div", { className: "dropdown-trigger" },
            React__default.createElement(Button$1, { className: "button" },
                React__default.createElement("span", null, "Columns"),
                React__default.createElement("span", { className: "icon" },
                    React__default.createElement(FaAngleDown, null)))),
        React__default.createElement(Menu, { className: "dropdown-menu" },
            React__default.createElement("ul", { className: "dropdown-content" },
                React__default.createElement(MenuItem, null,
                    React__default.createElement("li", { className: "dropdown-item" },
                        React__default.createElement("label", { className: "checkbox is-block" },
                            React__default.createElement("input", { type: "checkbox", role: "checkbox", checked: allCollumnsSelected, "aria-checked": allCollumnsSelected, 
                                /**
                                 * Use key-up event to allow toggling with the space bar
                                 * Must use key-up instead of key-down to prevent double-firing in Firefox
                                 */
                                onKeyUp: (e) => {
                                    e.preventDefault();
                                    if (e.keyCode === 32)
                                        toggleAllColumns();
                                }, onChange: (e) => toggleAllColumns() }),
                            React__default.createElement("span", null,
                                React__default.createElement("strong", null, "Select all"))))),
                columns.map((col, i) => (React__default.createElement(MenuItem, { key: i },
                    React__default.createElement("li", { className: "dropdown-item" },
                        React__default.createElement("label", { className: "checkbox is-block" },
                            React__default.createElement("input", { type: "checkbox", role: "checkbox", checked: !col.omit, "aria-checked": !col.omit, 
                                /**
                                 * Use key-up event to allow toggling with the space bar
                                 * Must use key-up instead of key-down to prevent double-firing in Firefox
                                 */
                                onKeyUp: (e) => {
                                    e.preventDefault();
                                    if (e.keyCode === 32)
                                        toggleColumn(i);
                                }, onChange: (e) => toggleColumn(i) }),
                            React__default.createElement("span", null, col.nameString))))))))));
    const resultsPerPageOptions = [10, 15, 30, 50, 75];
    const resultsPerPageMenu = (React__default.createElement(Wrapper, { "data-testid": "results-per-page-menu", className: "dropdown is-right is-active has-text-left mr-1", onSelection: handlePerRowsChange },
        React__default.createElement("div", { className: "dropdown-trigger" },
            React__default.createElement(Button$1, { className: "button" },
                React__default.createElement("span", null,
                    "Results per page: ",
                    state.resultsPerPage),
                React__default.createElement("span", { className: "icon" },
                    React__default.createElement(FaAngleDown, null)))),
        React__default.createElement(Menu, { className: "dropdown-menu" },
            React__default.createElement("ul", { className: "dropdown-content" }, resultsPerPageOptions.map((d, i) => (React__default.createElement(MenuItem, { key: i, value: d },
                React__default.createElement("li", { className: classNames('dropdown-item', { 'is-active': d === state.resultsPerPage }) }, d))))))));
    const CustomPaginator = () => (React__default.createElement(Paginator, { rowCount: state.totalResults, rowsPerPage: state.resultsPerPage, currentPage: state.page, onChangePage: handlePageChange, onChangeRowsPerPage: handlePerRowsChange }));
    const NoDataMessage = () => {
        if (state.error) {
            return (React__default.createElement("div", { className: "react-data-table-message" },
                React__default.createElement("p", null,
                    React__default.createElement(FaExclamationTriangle, null),
                    " There was an error with your search."),
                React__default.createElement("p", null, "You may have entered an invalid search value. Otherwise, the API may be temporarily unavailable.")));
        }
        else {
            return (React__default.createElement("div", { className: "react-data-table-message" },
                React__default.createElement("p", null, "No records match your search criteria")));
        }
    };
    return (React__default.createElement("div", { id: componentHtmlId, className: "search-ui-data-table" },
        React__default.createElement("div", { className: "columns mb-1" },
            React__default.createElement("div", { className: "column pb-2" },
                React__default.createElement("div", { className: "table-header" },
                    React__default.createElement("div", null,
                        React__default.createElement(TableHeaderTitle, null),
                        React__default.createElement("p", { className: "subtitle is-7" },
                            "Showing ",
                            format$1(',')(lowerResultBound),
                            "-",
                            format$1(',')(upperResultBound))),
                    React__default.createElement("div", { className: "progress-container" }, state.loading && (React__default.createElement("progress", { className: "progress is-small is-primary", max: "100" }))),
                    React__default.createElement("div", null,
                        resultsPerPageMenu,
                        columnsMenu)))),
        React__default.createElement("div", { className: "columns mb-0" },
            React__default.createElement("div", { className: "column pb-0" },
                React__default.createElement(ActiveFilterButtons, { filters: state.activeFilters, onClick: (v, id) => actions.setFilterValue(v, id) }))),
        React__default.createElement("div", { className: "columns react-data-table-outer-container" },
            React__default.createElement("div", { "data-testid": "react-data-table-container", className: "column react-data-table-container", ref: tableRef },
                React__default.createElement(DataTable, { className: "react-data-table", noHeader: true, theme: "material", columns: columns, data: state.results, highlightOnHover: true, pagination: true, paginationServer: true, paginationComponent: CustomPaginator, sortServer: true, sortIcon: React__default.createElement(FaCaretDown, null), defaultSortField: state.sortField, defaultSortAsc: state.sortAscending, onSort: handleSort, customStyles: customStyles, noDataComponent: React__default.createElement(NoDataMessage, null) })))));
};

/**
 * A specific version of the MaterialsInput component used within the SearchUI component
 * for performing top level searches by mp-id, formula, or elements.
 * The input value is parsed into its appropriate search field upon submission.
 */
const SearchUISearchBar = () => {
    const actions = useSearchUIContextActions();
    const state = useSearchUIContext();
    const [searchValue, setSearchValue] = useState('');
    const [searchParsedValue, setSearchParsedValue] = useState('');
    const [searchField, setSearchField] = useState(state.topLevelSearchField);
    const allowSmiles = state.resultLabel === 'molecule';
    const shouldHidePeriodicTable = () => {
        if (state.activeFilters && state.activeFilters.length > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    const getFieldsToOverride = (selectedField) => {
        let fields = [];
        Object.values(MaterialsInputField).forEach((field) => {
            if (field !== selectedField)
                fields.push(field);
        });
        return fields;
    };
    const handleSubmit = (e) => {
        actions.setFilterWithOverrides(searchValue, searchField, getFieldsToOverride(searchField));
    };
    /**
     * This effect clears the search value if its corresponding filter value changes.
     * This ensures the search value is not contradicted by the filter value.
     */
    useEffect(() => {
        if (state.filterValues[searchField] !== searchValue) {
            setSearchValue('');
        }
    }, [state.filterValues]);
    return (React__default.createElement(MaterialsInput, { value: searchValue, field: searchField, onChange: (v) => setSearchValue(v), onFieldChange: (field) => setSearchField(field), onSubmit: handleSubmit, periodicTableMode: "toggle", hidePeriodicTable: shouldHidePeriodicTable(), autocompleteFormulaUrl: state.autocompleteFormulaUrl, autocompleteApiKey: state.apiKey, allowSmiles: allowSmiles, tooltip: state.searchBarTooltip, placeholder: state.searchBarPlaceholder }));
};

const SearchUI = props => {
    return (React__default.createElement("div", { className: "search-ui" },
        React__default.createElement(BrowserRouter, null,
            React__default.createElement(SearchUIContextProvider, Object.assign({}, props),
                React__default.createElement("div", { className: "columns" },
                    React__default.createElement("div", { className: "column is-narrow" },
                        React__default.createElement("div", { className: "columns mb-1" },
                            React__default.createElement("div", { className: "column pb-2" },
                                React__default.createElement(SearchUISearchBar, null))),
                        React__default.createElement("div", { className: "columns" },
                            React__default.createElement("div", { className: "column" },
                                React__default.createElement(SearchUIFilters, null)))),
                    React__default.createElement("div", { className: "column results-container" },
                        React__default.createElement(SearchUIDataTable, null)))))));
};
SearchUI.defaultProps = {
    resultLabel: 'results'
};

const GlobalSearchBar = (props) => {
    const [searchValue, setSearchValue] = useState('');
    const [searchField, setSearchField] = useState('elements');
    const handleSubmit = (e) => {
        let query = new URLSearchParams();
        query.set(searchField, searchValue);
        const href = props.redirectRoute + '?' + query.toString();
        linkOnClick(e, href);
    };
    return (React__default.createElement(MaterialsInput, { value: searchValue, field: searchField, onChange: (v) => setSearchValue(v), onFieldChange: (field) => setSearchField(field), onSubmit: handleSubmit, periodicTableMode: "toggle", hidePeriodicTable: props.hidePeriodicTable, autocompleteFormulaUrl: props.autocompleteFormulaUrl, autocompleteApiKey: props.apiKey, tooltip: props.tooltip, placeholder: props.placeholder }));
};

const NavbarDropdown = (props) => {
    const [isActive, setIsActive] = useState(false);
    return (React__default.createElement("div", { className: classNames('navbar-item has-dropdown', props.className, {
            'is-active': isActive,
        }), onMouseOver: () => setIsActive(true), onMouseLeave: () => setIsActive(false) },
        React__default.createElement("a", { className: classNames('navbar-link', {
                'is-arrowless': props.isArrowless,
            }) }, props.children),
        React__default.createElement("div", { className: classNames('navbar-dropdown', {
                'is-right': props.isRight,
            }) }, props.items.map((item, i) => {
            if (item.isDivider) {
                /** Use an <hr> for dividers */
                return React__default.createElement("hr", { className: "navbar-divider", key: i });
            }
            else if (item.isMenuLabel) {
                /** Use a <span> and the menu-label class for menu labels */
                return (React__default.createElement("span", { className: "navbar-item menu-label", key: i }, item.text));
            }
            else if (item.href && item.href.indexOf('://') > -1) {
                /** Use a regular <a> tag for full external links */
                return (React__default.createElement("a", { key: i, href: item.href, target: item.openInNewTab ? '_blank' : '_self', className: classNames('navbar-item', item.className), onClick: () => setIsActive(false) }, item.text));
            }
            else {
                /** Use a <Link> component for internal links */
                return (React__default.createElement(Link, { key: i, href: item.href, className: classNames('navbar-item', item.className), onClick: () => setIsActive(false) }, item.text));
            }
        }))));
};
NavbarDropdown.defaultProps = {
    items: [],
};

const Download = (_a) => {
    var { mimeType = 'text/plain', isBase64 = false } = _a, otherProps = __rest(_a, ["mimeType", "isBase64"]);
    const props = Object.assign({ mimeType, isBase64 }, otherProps);
    useEffect(() => {
        if (props.data) {
            const mimeType = props.data.mimeType ? props.data.mimeType : props.mimeType;
            const isDataURL = props.data.isDataURL ? props.data.isDataURL : props.isDataURL;
            const isBase64 = props.data.isBase64 ? props.data.isBase64 : props.isBase64;
            let content = props.data.content;
            if (isDataURL)
                content = toByteArray(props.data.content.split(',')[1]);
            if (isBase64 && !isDataURL)
                content = toByteArray(props.data.content);
            // Construct the blob.
            const blob = new Blob([content], { type: mimeType });
            const filename = props.data.filename;
            // Save file function, from https://stackoverflow.com/questions/19327749/javascript-blob-filename-without-link
            if (window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveOrOpenBlob(blob, filename);
            }
            else {
                const a = document.createElement('a');
                document.body.appendChild(a);
                const url = window.URL.createObjectURL(blob);
                a.href = url;
                a.download = filename;
                a.click();
                setTimeout(() => {
                    window.URL.revokeObjectURL(url);
                    document.body.removeChild(a);
                }, 0);
            }
        }
    }, [props.data]);
    return null;
};

export { CameraContextProvider, CrystalToolkitScene, Download, GlobalSearchBar, JSONViewComponent, NavbarDropdown, PeriodicContext, ReactGraphComponent, Scene, Scrollspy, SearchUI, Select, SelectableTable, Sidebar, StandalonePeriodicComponent, TableFilter };
