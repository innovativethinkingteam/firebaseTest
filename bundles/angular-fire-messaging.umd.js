(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('firebase/app'), require('rxjs'), require('rxjs/operators'), require('@angular/fire'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@angular/fire/messaging', ['exports', '@angular/core', 'firebase/app', 'rxjs', 'rxjs/operators', '@angular/fire', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.angular = global.angular || {}, global.angular.fire = global.angular.fire || {}, global.angular.fire.messaging = {}), global.ng.core, global.firebase, global.rxjs, global.rxjs.operators, global.angular.fire, global.ng.common));
}(this, (function (exports, i0, firebase, rxjs, operators, i1, common) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var firebase__default = /*#__PURE__*/_interopDefaultLegacy(firebase);

    /**
     * @fileoverview added by tsickle
     * Generated from: base.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var proxyPolyfillCompat = {
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
    var AngularFireMessaging = /** @class */ (function () {
        /**
         * @param {?} options
         * @param {?} nameOrConfig
         * @param {?} platformId
         * @param {?} zone
         */
        function AngularFireMessaging(options, nameOrConfig, 
        // tslint:disable-next-line:ban-types
        platformId, zone) {
            var _this = this;
            /** @type {?} */
            var schedulers = new i1.ɵAngularFireSchedulers(zone);
            /** @type {?} */
            var messaging = rxjs.of(undefined).pipe(operators.subscribeOn(schedulers.outsideAngular), operators.observeOn(schedulers.insideAngular), operators.switchMap(( /**
             * @return {?}
             */function () { return common.isPlatformServer(platformId) ? rxjs.EMPTY : import('firebase/messaging'); })), operators.map(( /**
             * @return {?}
             */function () { return i1.ɵfirebaseAppFactory(options, zone, nameOrConfig); })), operators.map(( /**
             * @param {?} app
             * @return {?}
             */function (/**
             * @param {?} app
             * @return {?}
             */ app) { return app.messaging(); })), operators.shareReplay({ bufferSize: 1, refCount: false }));
            this.requestPermission = messaging.pipe(operators.subscribeOn(schedulers.outsideAngular), operators.observeOn(schedulers.insideAngular), 
            // tslint:disable-next-line
            operators.switchMap(( /**
             * @param {?} messaging
             * @return {?}
             */function (/**
             * @param {?} messaging
             * @return {?}
             */ messaging) { return firebase__default['default'].messaging.isSupported() ? messaging.requestPermission() : rxjs.throwError('Not supported.'); })));
            this.getToken = messaging.pipe(operators.subscribeOn(schedulers.outsideAngular), operators.observeOn(schedulers.insideAngular), operators.switchMap(( /**
             * @param {?} messaging
             * @return {?}
             */function (/**
             * @param {?} messaging
             * @return {?}
             */ messaging) { return firebase__default['default'].messaging.isSupported() && Notification.permission === 'granted' ? messaging.getToken() : rxjs.EMPTY; })), operators.defaultIfEmpty(null));
            /** @type {?} */
            var tokenChanges = messaging.pipe(operators.subscribeOn(schedulers.outsideAngular), operators.observeOn(schedulers.insideAngular), operators.switchMap(( /**
             * @param {?} messaging
             * @return {?}
             */function (/**
             * @param {?} messaging
             * @return {?}
             */ messaging) { return firebase__default['default'].messaging.isSupported() ? new rxjs.Observable(( /**
             * @param {?} emitter
             * @return {?}
             */function (/**
             * @param {?} emitter
             * @return {?}
             */ emitter) { return messaging.onTokenRefresh(emitter.next, emitter.error, emitter.complete); })) : rxjs.EMPTY; })), operators.switchMapTo(this.getToken));
            this.tokenChanges = messaging.pipe(operators.subscribeOn(schedulers.outsideAngular), operators.observeOn(schedulers.insideAngular), operators.switchMap(( /**
             * @param {?} messaging
             * @return {?}
             */function (/**
             * @param {?} messaging
             * @return {?}
             */ messaging) { return firebase__default['default'].messaging.isSupported() ? rxjs.concat(_this.getToken, tokenChanges) : rxjs.EMPTY; })));
            this.messages = messaging.pipe(operators.subscribeOn(schedulers.outsideAngular), operators.observeOn(schedulers.insideAngular), operators.switchMap(( /**
             * @param {?} messaging
             * @return {?}
             */function (/**
             * @param {?} messaging
             * @return {?}
             */ messaging) { return firebase__default['default'].messaging.isSupported() ? new rxjs.Observable(( /**
             * @param {?} emitter
             * @return {?}
             */function (/**
             * @param {?} emitter
             * @return {?}
             */ emitter) { return messaging.onMessage(( /**
             * @param {?} next
             * @return {?}
             */function (/**
             * @param {?} next
             * @return {?}
             */ next) { return emitter.next(next); }), ( /**
             * @param {?} err
             * @return {?}
             */function (/**
             * @param {?} err
             * @return {?}
             */ err) { return emitter.error(err); }), ( /**
             * @return {?}
             */function () { return emitter.complete(); })); })) : rxjs.EMPTY; })));
            this.requestToken = rxjs.of(undefined).pipe(operators.switchMap(( /**
             * @return {?}
             */function () { return _this.requestPermission; })), operators.catchError(( /**
             * @return {?}
             */function () { return rxjs.of(null); })), operators.mergeMap(( /**
             * @return {?}
             */function () { return _this.tokenChanges; })));
            this.deleteToken = ( /**
             * @param {?} token
             * @return {?}
             */function (token) { return messaging.pipe(operators.subscribeOn(schedulers.outsideAngular), operators.observeOn(schedulers.insideAngular), operators.switchMap(( /**
             * @param {?} messaging
             * @return {?}
             */function (/**
             * @param {?} messaging
             * @return {?}
             */ messaging) { return messaging.deleteToken(token); })), operators.defaultIfEmpty(false)); });
            return i1.ɵlazySDKProxy(this, messaging, zone);
        }
        return AngularFireMessaging;
    }());
    AngularFireMessaging.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'any'
                },] }
    ];
    /** @nocollapse */
    AngularFireMessaging.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Inject, args: [i1.FIREBASE_OPTIONS,] }] },
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [i1.FIREBASE_APP_NAME,] }] },
        { type: Object, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
        { type: i0.NgZone }
    ]; };
    /** @nocollapse */ AngularFireMessaging.ɵprov = i0.ɵɵdefineInjectable({ factory: function AngularFireMessaging_Factory() { return new AngularFireMessaging(i0.ɵɵinject(i1.FIREBASE_OPTIONS), i0.ɵɵinject(i1.FIREBASE_APP_NAME, 8), i0.ɵɵinject(i0.PLATFORM_ID), i0.ɵɵinject(i0.NgZone)); }, token: AngularFireMessaging, providedIn: "any" });
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
    i1.ɵapplyMixins(AngularFireMessaging, [proxyPolyfillCompat]);

    /**
     * @fileoverview added by tsickle
     * Generated from: messaging.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AngularFireMessagingModule = /** @class */ (function () {
        function AngularFireMessagingModule() {
        }
        return AngularFireMessagingModule;
    }());
    AngularFireMessagingModule.decorators = [
        { type: i0.NgModule, args: [{
                    providers: [AngularFireMessaging]
                },] }
    ];

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

    exports.AngularFireMessaging = AngularFireMessaging;
    exports.AngularFireMessagingModule = AngularFireMessagingModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-fire-messaging.umd.js.map
