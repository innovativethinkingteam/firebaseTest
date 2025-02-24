import { Observable, of, from } from 'rxjs';
import { map, observeOn, switchMap } from 'rxjs/operators';
import { InjectionToken, Injectable, Inject, Optional, PLATFORM_ID, NgZone, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { ɵAngularFireSchedulers, ɵkeepUnstableUntilFirstFactory, ɵfirebaseAppFactory, FIREBASE_OPTIONS, FIREBASE_APP_NAME } from '@angular/fire';
import 'firebase/storage';
import firebase from 'firebase/app';
import { registerStorage } from '@firebase/storage';

/**
 * @fileoverview added by tsickle
 * Generated from: observable/fromTask.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} task
 * @return {?}
 */
import * as ɵngcc0 from '@angular/core';
function fromTask(task) {
    return new Observable((/**
     * @param {?} subscriber
     * @return {?}
     */
    subscriber => {
        /** @type {?} */
        const progress = (/**
         * @param {?} snap
         * @return {?}
         */
        (snap) => subscriber.next(snap));
        /** @type {?} */
        const error = (/**
         * @param {?} e
         * @return {?}
         */
        e => subscriber.error(e));
        /** @type {?} */
        const complete = (/**
         * @return {?}
         */
        () => subscriber.complete());
        task.on('state_changed', progress, error, (/**
         * @return {?}
         */
        () => {
            progress(task.snapshot);
            complete();
        }));
        return (/**
         * @return {?}
         */
        () => task.cancel());
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
    const inner$ = fromTask(task);
    return {
        task,
        then: task.then.bind(task),
        catch: task.catch.bind(task),
        pause: task.pause.bind(task),
        cancel: task.cancel.bind(task),
        resume: task.resume.bind(task),
        snapshotChanges: (/**
         * @return {?}
         */
        () => inner$),
        percentageChanges: (/**
         * @return {?}
         */
        () => inner$.pipe(map((/**
         * @param {?} s
         * @return {?}
         */
        s => s.bytesTransferred / s.totalBytes * 100))))
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
        getDownloadURL: (/**
         * @return {?}
         */
        () => of(undefined).pipe(observeOn(schedulers.outsideAngular), switchMap((/**
         * @return {?}
         */
        () => ref.getDownloadURL())), keepUnstableUntilFirst)),
        getMetadata: (/**
         * @return {?}
         */
        () => of(undefined).pipe(observeOn(schedulers.outsideAngular), switchMap((/**
         * @return {?}
         */
        () => ref.getMetadata())), keepUnstableUntilFirst)),
        delete: (/**
         * @return {?}
         */
        () => from(ref.delete())),
        child: (/**
         * @param {?} path
         * @return {?}
         */
        (path) => createStorageRef(ref.child(path), schedulers, keepUnstableUntilFirst)),
        updateMetadata: (/**
         * @param {?} meta
         * @return {?}
         */
        (meta) => from(ref.updateMetadata(meta))),
        put: (/**
         * @param {?} data
         * @param {?=} metadata
         * @return {?}
         */
        (data, metadata) => {
            /** @type {?} */
            const task = ref.put(data, metadata);
            return createUploadTask(task);
        }),
        putString: (/**
         * @param {?} data
         * @param {?=} format
         * @param {?=} metadata
         * @return {?}
         */
        (data, format, metadata) => {
            /** @type {?} */
            const task = ref.putString(data, format, metadata);
            return createUploadTask(task);
        }),
        listAll: (/**
         * @return {?}
         */
        () => from(ref.listAll()))
    };
}

/**
 * @fileoverview added by tsickle
 * Generated from: storage.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const BUCKET = new InjectionToken('angularfire2.storageBucket');
/**
 * AngularFireStorage Service
 *
 * This service is the main entry point for this feature module. It provides
 * an API for uploading and downloading binary files from Cloud Storage for
 * Firebase.
 */
class AngularFireStorage {
    /**
     * @param {?} options
     * @param {?} nameOrConfig
     * @param {?} storageBucket
     * @param {?} platformId
     * @param {?} zone
     */
    constructor(options, nameOrConfig, storageBucket, 
    // tslint:disable-next-line:ban-types
    platformId, zone) {
        this.schedulers = new ɵAngularFireSchedulers(zone);
        this.keepUnstableUntilFirst = ɵkeepUnstableUntilFirstFactory(this.schedulers);
        this.storage = zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const app = ɵfirebaseAppFactory(options, zone, nameOrConfig);
            if (registerStorage) {
                registerStorage((/** @type {?} */ (firebase)));
            }
            return app.storage(storageBucket || undefined);
        }));
    }
    /**
     * @param {?} path
     * @return {?}
     */
    ref(path) {
        return createStorageRef(this.storage.ref(path), this.schedulers, this.keepUnstableUntilFirst);
    }
    /**
     * @param {?} path
     * @param {?} data
     * @param {?=} metadata
     * @return {?}
     */
    upload(path, data, metadata) {
        /** @type {?} */
        const storageRef = this.storage.ref(path);
        /** @type {?} */
        const ref = createStorageRef(storageRef, this.schedulers, this.keepUnstableUntilFirst);
        return ref.put(data, metadata);
    }
}
AngularFireStorage.ɵfac = function AngularFireStorage_Factory(t) { return new (t || AngularFireStorage)(ɵngcc0.ɵɵinject(FIREBASE_OPTIONS), ɵngcc0.ɵɵinject(FIREBASE_APP_NAME, 8), ɵngcc0.ɵɵinject(BUCKET, 8), ɵngcc0.ɵɵinject(PLATFORM_ID), ɵngcc0.ɵɵinject(ɵngcc0.NgZone)); };
/** @nocollapse */
AngularFireStorage.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [FIREBASE_OPTIONS,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [FIREBASE_APP_NAME,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [BUCKET,] }] },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: NgZone }
];
/** @nocollapse */ AngularFireStorage.ɵprov = ɵɵdefineInjectable({ factory: function AngularFireStorage_Factory() { return new AngularFireStorage(ɵɵinject(FIREBASE_OPTIONS), ɵɵinject(FIREBASE_APP_NAME, 8), ɵɵinject(BUCKET, 8), ɵɵinject(PLATFORM_ID), ɵɵinject(NgZone)); }, token: AngularFireStorage, providedIn: "any" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AngularFireStorage, [{
        type: Injectable,
        args: [{
                providedIn: 'any'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [FIREBASE_OPTIONS]
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [FIREBASE_APP_NAME]
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [BUCKET]
            }] }, { type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: ɵngcc0.NgZone }]; }, null); })();
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
class AngularFireStorageModule {
}
AngularFireStorageModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: AngularFireStorageModule });
AngularFireStorageModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function AngularFireStorageModule_Factory(t) { return new (t || AngularFireStorageModule)(); }, providers: [AngularFireStorage] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AngularFireStorageModule, [{
        type: NgModule,
        args: [{
                providers: [AngularFireStorage]
            }]
    }], null, null); })();

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

export { AngularFireStorage, AngularFireStorageModule, BUCKET, createStorageRef, createUploadTask, fromTask };

//# sourceMappingURL=angular-fire-storage.js.map