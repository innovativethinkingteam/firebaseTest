import { Injectable, Inject, Optional, PLATFORM_ID, NgZone, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import firebase from 'firebase/app';
import { of, EMPTY, throwError, Observable, concat } from 'rxjs';
import { subscribeOn, observeOn, switchMap, map, shareReplay, defaultIfEmpty, switchMapTo, catchError, mergeMap } from 'rxjs/operators';
import { ɵAngularFireSchedulers, ɵfirebaseAppFactory, ɵlazySDKProxy, FIREBASE_OPTIONS, FIREBASE_APP_NAME, ɵapplyMixins } from '@angular/fire';
import { isPlatformServer } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: base.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
import * as ɵngcc0 from '@angular/core';
const proxyPolyfillCompat = {
    deleteToken: null,
    getToken: null,
    onMessage: null,
    onBackgroundMessage: null,
    onTokenRefresh: null,
    requestPermission: null,
    setBackgroundMessageHandler: null,
    useServiceWorker: null,
    usePublicVapidKey: null,
};

/**
 * @fileoverview added by tsickle
 * Generated from: messaging.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// WARNING: interface has both a type and a value, skipping emit
class AngularFireMessaging {
    /**
     * @param {?} options
     * @param {?} nameOrConfig
     * @param {?} platformId
     * @param {?} zone
     */
    constructor(options, nameOrConfig, 
    // tslint:disable-next-line:ban-types
    platformId, zone) {
        /** @type {?} */
        const schedulers = new ɵAngularFireSchedulers(zone);
        /** @type {?} */
        const messaging = of(undefined).pipe(subscribeOn(schedulers.outsideAngular), observeOn(schedulers.insideAngular), switchMap((/**
         * @return {?}
         */
        () => isPlatformServer(platformId) ? EMPTY : import('firebase/messaging'))), map((/**
         * @return {?}
         */
        () => ɵfirebaseAppFactory(options, zone, nameOrConfig))), map((/**
         * @param {?} app
         * @return {?}
         */
        app => app.messaging())), shareReplay({ bufferSize: 1, refCount: false }));
        this.requestPermission = messaging.pipe(subscribeOn(schedulers.outsideAngular), observeOn(schedulers.insideAngular), 
        // tslint:disable-next-line
        switchMap((/**
         * @param {?} messaging
         * @return {?}
         */
        messaging => firebase.messaging.isSupported() ? messaging.requestPermission() : throwError('Not supported.'))));
        this.getToken = messaging.pipe(subscribeOn(schedulers.outsideAngular), observeOn(schedulers.insideAngular), switchMap((/**
         * @param {?} messaging
         * @return {?}
         */
        messaging => firebase.messaging.isSupported() && Notification.permission === 'granted' ? messaging.getToken() : EMPTY)), defaultIfEmpty(null));
        /** @type {?} */
        const tokenChanges = messaging.pipe(subscribeOn(schedulers.outsideAngular), observeOn(schedulers.insideAngular), switchMap((/**
         * @param {?} messaging
         * @return {?}
         */
        messaging => firebase.messaging.isSupported() ? new Observable((/**
         * @param {?} emitter
         * @return {?}
         */
        emitter => messaging.onTokenRefresh(emitter.next, emitter.error, emitter.complete))) : EMPTY)), switchMapTo(this.getToken));
        this.tokenChanges = messaging.pipe(subscribeOn(schedulers.outsideAngular), observeOn(schedulers.insideAngular), switchMap((/**
         * @param {?} messaging
         * @return {?}
         */
        messaging => firebase.messaging.isSupported() ? concat(this.getToken, tokenChanges) : EMPTY)));
        this.messages = messaging.pipe(subscribeOn(schedulers.outsideAngular), observeOn(schedulers.insideAngular), switchMap((/**
         * @param {?} messaging
         * @return {?}
         */
        messaging => firebase.messaging.isSupported() ? new Observable((/**
         * @param {?} emitter
         * @return {?}
         */
        emitter => messaging.onMessage((/**
         * @param {?} next
         * @return {?}
         */
        next => emitter.next(next)), (/**
         * @param {?} err
         * @return {?}
         */
        err => emitter.error(err)), (/**
         * @return {?}
         */
        () => emitter.complete())))) : EMPTY)));
        this.requestToken = of(undefined).pipe(switchMap((/**
         * @return {?}
         */
        () => this.requestPermission)), catchError((/**
         * @return {?}
         */
        () => of(null))), mergeMap((/**
         * @return {?}
         */
        () => this.tokenChanges)));
        this.deleteToken = (/**
         * @param {?} token
         * @return {?}
         */
        (token) => messaging.pipe(subscribeOn(schedulers.outsideAngular), observeOn(schedulers.insideAngular), switchMap((/**
         * @param {?} messaging
         * @return {?}
         */
        messaging => messaging.deleteToken(token))), defaultIfEmpty(false)));
        return ɵlazySDKProxy(this, messaging, zone);
    }
}
AngularFireMessaging.ɵfac = function AngularFireMessaging_Factory(t) { return new (t || AngularFireMessaging)(ɵngcc0.ɵɵinject(FIREBASE_OPTIONS), ɵngcc0.ɵɵinject(FIREBASE_APP_NAME, 8), ɵngcc0.ɵɵinject(PLATFORM_ID), ɵngcc0.ɵɵinject(ɵngcc0.NgZone)); };
/** @nocollapse */
AngularFireMessaging.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [FIREBASE_OPTIONS,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [FIREBASE_APP_NAME,] }] },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: NgZone }
];
/** @nocollapse */ AngularFireMessaging.ɵprov = ɵɵdefineInjectable({ factory: function AngularFireMessaging_Factory() { return new AngularFireMessaging(ɵɵinject(FIREBASE_OPTIONS), ɵɵinject(FIREBASE_APP_NAME, 8), ɵɵinject(PLATFORM_ID), ɵɵinject(NgZone)); }, token: AngularFireMessaging, providedIn: "any" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AngularFireMessaging, [{
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
            }] }, { type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: ɵngcc0.NgZone }]; }, null); })();
if (false) {
    /** @type {?} */
    AngularFireMessaging.prototype.requestPermission;
    /** @type {?} */
    AngularFireMessaging.prototype.getToken;
    /** @type {?} */
    AngularFireMessaging.prototype.tokenChanges;
    /** @type {?} */
    AngularFireMessaging.prototype.messages;
    /** @type {?} */
    AngularFireMessaging.prototype.requestToken;
    /** @type {?} */
    AngularFireMessaging.prototype.deleteToken;
}
ɵapplyMixins(AngularFireMessaging, [proxyPolyfillCompat]);

/**
 * @fileoverview added by tsickle
 * Generated from: messaging.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularFireMessagingModule {
}
AngularFireMessagingModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: AngularFireMessagingModule });
AngularFireMessagingModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function AngularFireMessagingModule_Factory(t) { return new (t || AngularFireMessagingModule)(); }, providers: [AngularFireMessaging] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AngularFireMessagingModule, [{
        type: NgModule,
        args: [{
                providers: [AngularFireMessaging]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: angular-fire-messaging.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AngularFireMessaging, AngularFireMessagingModule };

//# sourceMappingURL=angular-fire-messaging.js.map