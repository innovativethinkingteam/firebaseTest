(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('rxjs/operators'), require('@angular/core'), require('@angular/fire'), require('firebase/storage'), require('firebase/app'), require('@firebase/storage')) :
    typeof define === 'function' && define.amd ? define('@angular/fire/storage', ['exports', 'rxjs', 'rxjs/operators', '@angular/core', '@angular/fire', 'firebase/storage', 'firebase/app', '@firebase/storage'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.angular = global.angular || {}, global.angular.fire = global.angular.fire || {}, global.angular.fire.storage = {}), global.rxjs, global.rxjs.operators, global.ng.core, global.angular.fire, null, global.firebase, global['firebase-storage']));
}(this, (function (exports, rxjs, operators, i0, i1, storage$1, firebase, storage) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var firebase__default = /*#__PURE__*/_interopDefaultLegacy(firebase);

    /**
     * @fileoverview added by tsickle
     * Generated from: observable/fromTask.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} task
     * @return {?}
     */
    function fromTask(task) {
        return new rxjs.Observable(( /**
         * @param {?} subscriber
         * @return {?}
         */function (/**
         * @param {?} subscriber
         * @return {?}
         */ subscriber) {
            /** @type {?} */
            var progress = ( /**
             * @param {?} snap
             * @return {?}
             */function (snap) { return subscriber.next(snap); });
            /** @type {?} */
            var error = ( /**
             * @param {?} e
             * @return {?}
             */function (/**
             * @param {?} e
             * @return {?}
             */ e) { return subscriber.error(e); });
            /** @type {?} */
            var complete = ( /**
             * @return {?}
             */function () { return subscriber.complete(); });
            task.on('state_changed', progress, error, ( /**
             * @return {?}
             */function () {
                progress(task.snapshot);
                complete();
            }));
            return ( /**
             * @return {?}
             */function () { return task.cancel(); });
        }));
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: task.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function AngularFireUploadTask() { }
    if (false) {
        /** @type {?} */
        AngularFireUploadTask.prototype.task;
        /**
         * @return {?}
         */
        AngularFireUploadTask.prototype.snapshotChanges = function () { };
        /**
         * @return {?}
         */
        AngularFireUploadTask.prototype.percentageChanges = function () { };
        /**
         * @return {?}
         */
        AngularFireUploadTask.prototype.pause = function () { };
        /**
         * @return {?}
         */
        AngularFireUploadTask.prototype.cancel = function () { };
        /**
         * @return {?}
         */
        AngularFireUploadTask.prototype.resume = function () { };
        /**
         * @param {?=} onFulfilled
         * @param {?=} onRejected
         * @return {?}
         */
        AngularFireUploadTask.prototype.then = function (onFulfilled, onRejected) { };
        /**
         * @param {?} onRejected
         * @return {?}
         */
        AngularFireUploadTask.prototype.catch = function (onRejected) { };
    }
    /**
     * Create an AngularFireUploadTask from a regular UploadTask from the Storage SDK.
     * This method creates an observable of the upload and returns on object that provides
     * multiple methods for controlling and monitoring the file upload.
     * @param {?} task
     * @return {?}
     */
    function createUploadTask(task) {
        /** @type {?} */
        var inner$ = fromTask(task);
        return {
            task: task,
            then: task.then.bind(task),
            catch: task.catch.bind(task),
            pause: task.pause.bind(task),
            cancel: task.cancel.bind(task),
            resume: task.resume.bind(task),
            snapshotChanges: ( /**
             * @return {?}
             */function () { return inner$; }),
            percentageChanges: ( /**
             * @return {?}
             */function () { return inner$.pipe(operators.map(( /**
             * @param {?} s
             * @return {?}
             */function (/**
             * @param {?} s
             * @return {?}
             */ s) { return s.bytesTransferred / s.totalBytes * 100; }))); })
        };
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: ref.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function AngularFireStorageReference() { }
    if (false) {
        /**
         * @return {?}
         */
        AngularFireStorageReference.prototype.getDownloadURL = function () { };
        /**
         * @return {?}
         */
        AngularFireStorageReference.prototype.getMetadata = function () { };
        /**
         * @return {?}
         */
        AngularFireStorageReference.prototype.delete = function () { };
        /**
         * @param {?} path
         * @return {?}
         */
        AngularFireStorageReference.prototype.child = function (path) { };
        /**
         * @param {?} meta
         * @return {?}
         */
        AngularFireStorageReference.prototype.updateMetadata = function (meta) { };
        /**
         * @param {?} data
         * @param {?=} metadata
         * @return {?}
         */
        AngularFireStorageReference.prototype.put = function (data, metadata) { };
        /**
         * @param {?} data
         * @param {?=} format
         * @param {?=} metadata
         * @return {?}
         */
        AngularFireStorageReference.prototype.putString = function (data, format, metadata) { };
        /**
         * @return {?}
         */
        AngularFireStorageReference.prototype.listAll = function () { };
    }
    /**
     * Create an AngularFire wrapped Storage Reference. This object
     * creates observable methods from promise based methods.
     * @param {?} ref
     * @param {?} schedulers
     * @param {?} keepUnstableUntilFirst
     * @return {?}
     */
    function createStorageRef(ref, schedulers, keepUnstableUntilFirst) {
        return {
            getDownloadURL: ( /**
             * @return {?}
             */function () { return rxjs.of(undefined).pipe(operators.observeOn(schedulers.outsideAngular), operators.switchMap(( /**
             * @return {?}
             */function () { return ref.getDownloadURL(); })), keepUnstableUntilFirst); }),
            getMetadata: ( /**
             * @return {?}
             */function () { return rxjs.of(undefined).pipe(operators.observeOn(schedulers.outsideAngular), operators.switchMap(( /**
             * @return {?}
             */function () { return ref.getMetadata(); })), keepUnstableUntilFirst); }),
            delete: ( /**
             * @return {?}
             */function () { return rxjs.from(ref.delete()); }),
            child: ( /**
             * @param {?} path
             * @return {?}
             */function (path) { return createStorageRef(ref.child(path), schedulers, keepUnstableUntilFirst); }),
            updateMetadata: ( /**
             * @param {?} meta
             * @return {?}
             */function (meta) { return rxjs.from(ref.updateMetadata(meta)); }),
            put: ( /**
             * @param {?} data
             * @param {?=} metadata
             * @return {?}
             */function (data, metadata) {
                /** @type {?} */
                var task = ref.put(data, metadata);
                return createUploadTask(task);
            }),
            putString: ( /**
             * @param {?} data
             * @param {?=} format
             * @param {?=} metadata
             * @return {?}
             */function (data, format, metadata) {
                /** @type {?} */
                var task = ref.putString(data, format, metadata);
                return createUploadTask(task);
            }),
            listAll: ( /**
             * @return {?}
             */function () { return rxjs.from(ref.listAll()); })
        };
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: storage.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var BUCKET = new i0.InjectionToken('angularfire2.storageBucket');
    /**
     * AngularFireStorage Service
     *
     * This service is the main entry point for this feature module. It provides
     * an API for uploading and downloading binary files from Cloud Storage for
     * Firebase.
     */
    var AngularFireStorage = /** @class */ (function () {
        /**
         * @param {?} options
         * @param {?} nameOrConfig
         * @param {?} storageBucket
         * @param {?} platformId
         * @param {?} zone
         */
        function AngularFireStorage(options, nameOrConfig, storageBucket, 
        // tslint:disable-next-line:ban-types
        platformId, zone) {
            this.schedulers = new i1.ɵAngularFireSchedulers(zone);
            this.keepUnstableUntilFirst = i1.ɵkeepUnstableUntilFirstFactory(this.schedulers);
            this.storage = zone.runOutsideAngular(( /**
             * @return {?}
             */function () {
                /** @type {?} */
                var app = i1.ɵfirebaseAppFactory(options, zone, nameOrConfig);
                if (storage.registerStorage) {
                    storage.registerStorage(( /** @type {?} */(firebase__default['default'])));
                }
                return app.storage(storageBucket || undefined);
            }));
        }
        /**
         * @param {?} path
         * @return {?}
         */
        AngularFireStorage.prototype.ref = function (path) {
            return createStorageRef(this.storage.ref(path), this.schedulers, this.keepUnstableUntilFirst);
        };
        /**
         * @param {?} path
         * @param {?} data
         * @param {?=} metadata
         * @return {?}
         */
        AngularFireStorage.prototype.upload = function (path, data, metadata) {
            /** @type {?} */
            var storageRef = this.storage.ref(path);
            /** @type {?} */
            var ref = createStorageRef(storageRef, this.schedulers, this.keepUnstableUntilFirst);
            return ref.put(data, metadata);
        };
        return AngularFireStorage;
    }());
    AngularFireStorage.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'any'
                },] }
    ];
    /** @nocollapse */
    AngularFireStorage.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Inject, args: [i1.FIREBASE_OPTIONS,] }] },
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [i1.FIREBASE_APP_NAME,] }] },
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [BUCKET,] }] },
        { type: Object, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
        { type: i0.NgZone }
    ]; };
    /** @nocollapse */ AngularFireStorage.ɵprov = i0.ɵɵdefineInjectable({ factory: function AngularFireStorage_Factory() { return new AngularFireStorage(i0.ɵɵinject(i1.FIREBASE_OPTIONS), i0.ɵɵinject(i1.FIREBASE_APP_NAME, 8), i0.ɵɵinject(BUCKET, 8), i0.ɵɵinject(i0.PLATFORM_ID), i0.ɵɵinject(i0.NgZone)); }, token: AngularFireStorage, providedIn: "any" });
    if (false) {
        /** @type {?} */
        AngularFireStorage.prototype.storage;
        /** @type {?} */
        AngularFireStorage.prototype.keepUnstableUntilFirst;
        /** @type {?} */
        AngularFireStorage.prototype.schedulers;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: storage.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AngularFireStorageModule = /** @class */ (function () {
        function AngularFireStorageModule() {
        }
        return AngularFireStorageModule;
    }());
    AngularFireStorageModule.decorators = [
        { type: i0.NgModule, args: [{
                    providers: [AngularFireStorage]
                },] }
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: public_api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: angular-fire-storage.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.AngularFireStorage = AngularFireStorage;
    exports.AngularFireStorageModule = AngularFireStorageModule;
    exports.BUCKET = BUCKET;
    exports.createStorageRef = createStorageRef;
    exports.createUploadTask = createUploadTask;
    exports.fromTask = fromTask;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-fire-storage.umd.js.map
