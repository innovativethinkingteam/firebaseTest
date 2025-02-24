(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@angular/fire'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@angular/fire/auth', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', '@angular/fire', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.angular = global.angular || {}, global.angular.fire = global.angular.fire || {}, global.angular.fire.auth = {}), global.ng.core, global.rxjs, global.rxjs.operators, global.angular.fire, global.ng.common));
}(this, (function (exports, i0, rxjs, operators, i1, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: base.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var proxyPolyfillCompat = {
        app: null,
        applyActionCode: null,
        checkActionCode: null,
        confirmPasswordReset: null,
        createUserWithEmailAndPassword: null,
        currentUser: null,
        fetchSignInMethodsForEmail: null,
        isSignInWithEmailLink: null,
        getRedirectResult: null,
        languageCode: null,
        settings: null,
        onAuthStateChanged: null,
        onIdTokenChanged: null,
        sendSignInLinkToEmail: null,
        sendPasswordResetEmail: null,
        setPersistence: null,
        signInAndRetrieveDataWithCredential: null,
        signInAnonymously: null,
        signInWithCredential: null,
        signInWithCustomToken: null,
        signInWithEmailAndPassword: null,
        signInWithPhoneNumber: null,
        signInWithEmailLink: null,
        signInWithPopup: null,
        signInWithRedirect: null,
        signOut: null,
        tenantId: null,
        updateCurrentUser: null,
        useDeviceLanguage: null,
        useEmulator: null,
        verifyPasswordResetCode: null,
    };

    /**
     * @fileoverview added by tsickle
     * Generated from: auth.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // WARNING: interface has both a type and a value, skipping emit
    var AngularFireAuth = /** @class */ (function () {
        /**
         * @param {?} options
         * @param {?} nameOrConfig
         * @param {?} platformId
         * @param {?} zone
         */
        function AngularFireAuth(options, nameOrConfig, 
        // tslint:disable-next-line:ban-types
        platformId, zone) {
            /** @type {?} */
            var schedulers = new i1.ɵAngularFireSchedulers(zone);
            /** @type {?} */
            var keepUnstableUntilFirst = i1.ɵkeepUnstableUntilFirstFactory(schedulers);
            /** @type {?} */
            var auth = rxjs.of(undefined).pipe(operators.observeOn(schedulers.outsideAngular), operators.switchMap(( /**
             * @return {?}
             */function () { return zone.runOutsideAngular(( /**
             * @return {?}
             */function () { return import('firebase/auth'); })); })), operators.map(( /**
             * @return {?}
             */function () { return i1.ɵfirebaseAppFactory(options, zone, nameOrConfig); })), operators.map(( /**
             * @param {?} app
             * @return {?}
             */function (/**
             * @param {?} app
             * @return {?}
             */ app) { return zone.runOutsideAngular(( /**
             * @return {?}
             */function () { return app.auth(); })); })), operators.shareReplay({ bufferSize: 1, refCount: false }));
            if (common.isPlatformServer(platformId)) {
                this.authState = this.user = this.idToken = this.idTokenResult = rxjs.of(null);
            }
            else {
                // HACK, as we're exporting auth.Auth, rather than auth, developers importing firebase.auth
                //       (e.g, `import { auth } from 'firebase/app'`) are getting an undefined auth object unexpectedly
                //       as we're completely lazy. Let's eagerly load the Auth SDK here.
                //       There could potentially be race conditions still... but this greatly decreases the odds while
                //       we reevaluate the API.
                /** @type {?} */
                var _ = auth.pipe(operators.first()).subscribe();
                this.authState = auth.pipe(operators.switchMap(( /**
                 * @param {?} auth
                 * @return {?}
                 */function (/**
                 * @param {?} auth
                 * @return {?}
                 */ auth) { return auth.getRedirectResult().then(( /**
                 * @return {?}
                 */function () { return auth; }), ( /**
                 * @return {?}
                 */function () { return auth; })); })), operators.switchMap(( /**
                 * @param {?} auth
                 * @return {?}
                 */function (/**
                 * @param {?} auth
                 * @return {?}
                 */ auth) { return zone.runOutsideAngular(( /**
                 * @return {?}
                 */function () { return new rxjs.Observable(auth.onAuthStateChanged.bind(auth)); })); })), keepUnstableUntilFirst);
                this.user = auth.pipe(operators.switchMap(( /**
                 * @param {?} auth
                 * @return {?}
                 */function (/**
                 * @param {?} auth
                 * @return {?}
                 */ auth) { return auth.getRedirectResult().then(( /**
                 * @return {?}
                 */function () { return auth; }), ( /**
                 * @return {?}
                 */function () { return auth; })); })), operators.switchMap(( /**
                 * @param {?} auth
                 * @return {?}
                 */function (/**
                 * @param {?} auth
                 * @return {?}
                 */ auth) { return zone.runOutsideAngular(( /**
                 * @return {?}
                 */function () { return new rxjs.Observable(auth.onIdTokenChanged.bind(auth)); })); })), keepUnstableUntilFirst);
                this.idToken = this.user.pipe(operators.switchMap(( /**
                 * @param {?} user
                 * @return {?}
                 */function (/**
                 * @param {?} user
                 * @return {?}
                 */ user) { return user ? rxjs.from(user.getIdToken()) : rxjs.of(null); })));
                this.idTokenResult = this.user.pipe(operators.switchMap(( /**
                 * @param {?} user
                 * @return {?}
                 */function (/**
                 * @param {?} user
                 * @return {?}
                 */ user) { return user ? rxjs.from(user.getIdTokenResult()) : rxjs.of(null); })));
            }
            return i1.ɵlazySDKProxy(this, auth, zone);
        }
        return AngularFireAuth;
    }());
    AngularFireAuth.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'any'
                },] }
    ];
    /** @nocollapse */
    AngularFireAuth.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Inject, args: [i1.FIREBASE_OPTIONS,] }] },
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [i1.FIREBASE_APP_NAME,] }] },
        { type: Object, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
        { type: i0.NgZone }
    ]; };
    /** @nocollapse */ AngularFireAuth.ɵprov = i0.ɵɵdefineInjectable({ factory: function AngularFireAuth_Factory() { return new AngularFireAuth(i0.ɵɵinject(i1.FIREBASE_OPTIONS), i0.ɵɵinject(i1.FIREBASE_APP_NAME, 8), i0.ɵɵinject(i0.PLATFORM_ID), i0.ɵɵinject(i0.NgZone)); }, token: AngularFireAuth, providedIn: "any" });
    if (false) {
        /**
         * Observable of authentication state; as of Firebase 4.0 this is only triggered via sign-in/out
         * @type {?}
         */
        AngularFireAuth.prototype.authState;
        /**
         * Observable of the currently signed-in user's JWT token used to identify the user to a Firebase service (or null).
         * @type {?}
         */
        AngularFireAuth.prototype.idToken;
        /**
         * Observable of the currently signed-in user (or null).
         * @type {?}
         */
        AngularFireAuth.prototype.user;
        /**
         * Observable of the currently signed-in user's IdTokenResult object which contains the ID token JWT string and other
         * helper properties for getting different data associated with the token as well as all the decoded payload claims
         * (or null).
         * @type {?}
         */
        AngularFireAuth.prototype.idTokenResult;
    }
    i1.ɵapplyMixins(AngularFireAuth, [proxyPolyfillCompat]);

    /**
     * @fileoverview added by tsickle
     * Generated from: auth.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AngularFireAuthModule = /** @class */ (function () {
        function AngularFireAuthModule() {
        }
        return AngularFireAuthModule;
    }());
    AngularFireAuthModule.decorators = [
        { type: i0.NgModule, args: [{
                    providers: [AngularFireAuth]
                },] }
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: public_api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: angular-fire-auth.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.AngularFireAuth = AngularFireAuth;
    exports.AngularFireAuthModule = AngularFireAuthModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-fire-auth.umd.js.map
