(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('rxjs'), require('rxjs/operators'), require('@angular/fire')) :
    typeof define === 'function' && define.amd ? define('@angular/fire/auth-guard', ['exports', '@angular/core', '@angular/router', 'rxjs', 'rxjs/operators', '@angular/fire'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.angular = global.angular || {}, global.angular.fire = global.angular.fire || {}, global.angular.fire['auth-guard'] = {}), global.ng.core, global.ng.router, global.rxjs, global.rxjs.operators, global.angular.fire));
}(this, (function (exports, i0, i2, rxjs, operators, i1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: auth-guard.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0 = /**
     * @param {?} user
     * @return {?}
     */ function (/**
     * @param {?} user
     * @return {?}
     */ user) { return !!user; };
    /** @type {?} */
    var loggedIn = operators.map((ɵ0));
    var AngularFireAuthGuard = /** @class */ (function () {
        /**
         * @param {?} options
         * @param {?} nameOrConfig
         * @param {?} zone
         * @param {?} router
         */
        function AngularFireAuthGuard(options, nameOrConfig, zone, router) {
            var _this = this;
            this.router = router;
            this.canActivate = ( /**
             * @param {?} next
             * @param {?} state
             * @return {?}
             */function (next, state) {
                /** @type {?} */
                var authPipeFactory = ( /** @type {?} */(next.data.authGuardPipe)) || (( /**
                 * @return {?}
                 */function () { return loggedIn; }));
                return _this.authState.pipe(operators.take(1), authPipeFactory(next, state), operators.map(( /**
                 * @param {?} can
                 * @return {?}
                 */function (/**
                 * @param {?} can
                 * @return {?}
                 */ can) { return typeof can === 'boolean' ? can : _this.router.createUrlTree(( /** @type {?} */(can))); })));
            });
            /** @type {?} */
            var schedulers = new i1.ɵAngularFireSchedulers(zone);
            /** @type {?} */
            var keepUnstableUntilFirst = i1.ɵkeepUnstableUntilFirstFactory(schedulers);
            /** @type {?} */
            var auth = rxjs.of(undefined).pipe(operators.observeOn(new i1.ɵAngularFireSchedulers(zone).outsideAngular), operators.switchMap(( /**
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
            this.authState = auth.pipe(operators.switchMap(( /**
             * @param {?} auth
             * @return {?}
             */function (/**
             * @param {?} auth
             * @return {?}
             */ auth) { return new rxjs.Observable(auth.onAuthStateChanged.bind(auth)); })), keepUnstableUntilFirst);
        }
        return AngularFireAuthGuard;
    }());
    AngularFireAuthGuard.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'any'
                },] }
    ];
    /** @nocollapse */
    AngularFireAuthGuard.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Inject, args: [i1.FIREBASE_OPTIONS,] }] },
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [i1.FIREBASE_APP_NAME,] }] },
        { type: i0.NgZone },
        { type: i2.Router }
    ]; };
    /** @nocollapse */ AngularFireAuthGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function AngularFireAuthGuard_Factory() { return new AngularFireAuthGuard(i0.ɵɵinject(i1.FIREBASE_OPTIONS), i0.ɵɵinject(i1.FIREBASE_APP_NAME, 8), i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i2.Router)); }, token: AngularFireAuthGuard, providedIn: "any" });
    if (false) {
        /** @type {?} */
        AngularFireAuthGuard.prototype.authState;
        /** @type {?} */
        AngularFireAuthGuard.prototype.canActivate;
        /**
         * @type {?}
         * @private
         */
        AngularFireAuthGuard.prototype.router;
    }
    /** @type {?} */
    var canActivate = ( /**
     * @param {?} pipe
     * @return {?}
     */function (pipe) { return ({
        canActivate: [AngularFireAuthGuard], data: { authGuardPipe: pipe }
    }); });
    var ɵ1 = /**
     * @param {?} user
     * @return {?}
     */ function (/**
     * @param {?} user
     * @return {?}
     */ user) { return !!user && !user.isAnonymous; };
    /** @type {?} */
    var isNotAnonymous = operators.map((ɵ1));
    var ɵ2 = /**
     * @param {?} user
     * @return {?}
     */ function (user) { return user ? user.getIdTokenResult() : rxjs.of(null); };
    /** @type {?} */
    var idTokenResult = operators.switchMap((ɵ2));
    var ɵ3 = /**
     * @param {?} user
     * @return {?}
     */ function (/**
     * @param {?} user
     * @return {?}
     */ user) { return !!user && user.emailVerified; };
    /** @type {?} */
    var emailVerified = operators.map((ɵ3));
    var ɵ4 = /**
     * @param {?} idTokenResult
     * @return {?}
     */ function (/**
     * @param {?} idTokenResult
     * @return {?}
     */ idTokenResult) { return idTokenResult ? idTokenResult.claims : []; };
    /** @type {?} */
    var customClaims = rxjs.pipe(idTokenResult, operators.map((ɵ4)));
    /** @type {?} */
    var hasCustomClaim = ( /**
     * @param {?} claim
     * @return {?}
     */function (claim) { return rxjs.pipe(customClaims, operators.map(( /**
     * @param {?} claims
     * @return {?}
     */function (/**
     * @param {?} claims
     * @return {?}
     */ claims) { return claims.hasOwnProperty(claim); }))); });
    /** @type {?} */
    var redirectUnauthorizedTo = ( /**
     * @param {?} redirect
     * @return {?}
     */function (redirect) { return rxjs.pipe(loggedIn, operators.map(( /**
     * @param {?} loggedIn
     * @return {?}
     */function (/**
     * @param {?} loggedIn
     * @return {?}
     */ loggedIn) { return loggedIn || redirect; }))); });
    /** @type {?} */
    var redirectLoggedInTo = ( /**
     * @param {?} redirect
     * @return {?}
     */function (redirect) { return rxjs.pipe(loggedIn, operators.map(( /**
     * @param {?} loggedIn
     * @return {?}
     */function (/**
     * @param {?} loggedIn
     * @return {?}
     */ loggedIn) { return loggedIn && redirect || true; }))); });

    /**
     * @fileoverview added by tsickle
     * Generated from: auth-guard.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AngularFireAuthGuardModule = /** @class */ (function () {
        function AngularFireAuthGuardModule() {
        }
        return AngularFireAuthGuardModule;
    }());
    AngularFireAuthGuardModule.decorators = [
        { type: i0.NgModule, args: [{
                    providers: [AngularFireAuthGuard]
                },] }
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: public_api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: angular-fire-auth-guard.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.AngularFireAuthGuard = AngularFireAuthGuard;
    exports.AngularFireAuthGuardModule = AngularFireAuthGuardModule;
    exports.canActivate = canActivate;
    exports.customClaims = customClaims;
    exports.emailVerified = emailVerified;
    exports.hasCustomClaim = hasCustomClaim;
    exports.idTokenResult = idTokenResult;
    exports.isNotAnonymous = isNotAnonymous;
    exports.loggedIn = loggedIn;
    exports.redirectLoggedInTo = redirectLoggedInTo;
    exports.redirectUnauthorizedTo = redirectUnauthorizedTo;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-fire-auth-guard.umd.js.map
