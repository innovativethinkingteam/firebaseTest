import { Injectable, Inject, Optional, NgZone, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { of, Observable, pipe } from 'rxjs';
import { map, take, observeOn, switchMap, shareReplay } from 'rxjs/operators';
import { ɵAngularFireSchedulers, ɵkeepUnstableUntilFirstFactory, ɵfirebaseAppFactory, FIREBASE_OPTIONS, FIREBASE_APP_NAME } from '@angular/fire';

/**
 * @fileoverview added by tsickle
 * Generated from: auth-guard.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/router';
const ɵ0 = /**
 * @param {?} user
 * @return {?}
 */
user => !!user;
/** @type {?} */
const loggedIn = map((ɵ0));
class AngularFireAuthGuard {
    /**
     * @param {?} options
     * @param {?} nameOrConfig
     * @param {?} zone
     * @param {?} router
     */
    constructor(options, nameOrConfig, zone, router) {
        this.router = router;
        this.canActivate = (/**
         * @param {?} next
         * @param {?} state
         * @return {?}
         */
        (next, state) => {
            /** @type {?} */
            const authPipeFactory = (/** @type {?} */ (next.data.authGuardPipe)) || ((/**
             * @return {?}
             */
            () => loggedIn));
            return this.authState.pipe(take(1), authPipeFactory(next, state), map((/**
             * @param {?} can
             * @return {?}
             */
            can => typeof can === 'boolean' ? can : this.router.createUrlTree((/** @type {?} */ (can))))));
        });
        /** @type {?} */
        const schedulers = new ɵAngularFireSchedulers(zone);
        /** @type {?} */
        const keepUnstableUntilFirst = ɵkeepUnstableUntilFirstFactory(schedulers);
        /** @type {?} */
        const auth = of(undefined).pipe(observeOn(new ɵAngularFireSchedulers(zone).outsideAngular), switchMap((/**
         * @return {?}
         */
        () => zone.runOutsideAngular((/**
         * @return {?}
         */
        () => import('firebase/auth'))))), map((/**
         * @return {?}
         */
        () => ɵfirebaseAppFactory(options, zone, nameOrConfig))), map((/**
         * @param {?} app
         * @return {?}
         */
        app => zone.runOutsideAngular((/**
         * @return {?}
         */
        () => app.auth())))), shareReplay({ bufferSize: 1, refCount: false }));
        this.authState = auth.pipe(switchMap((/**
         * @param {?} auth
         * @return {?}
         */
        auth => new Observable(auth.onAuthStateChanged.bind(auth)))), keepUnstableUntilFirst);
    }
}
AngularFireAuthGuard.ɵfac = function AngularFireAuthGuard_Factory(t) { return new (t || AngularFireAuthGuard)(ɵngcc0.ɵɵinject(FIREBASE_OPTIONS), ɵngcc0.ɵɵinject(FIREBASE_APP_NAME, 8), ɵngcc0.ɵɵinject(ɵngcc0.NgZone), ɵngcc0.ɵɵinject(ɵngcc1.Router)); };
/** @nocollapse */
AngularFireAuthGuard.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [FIREBASE_OPTIONS,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [FIREBASE_APP_NAME,] }] },
    { type: NgZone },
    { type: Router }
];
/** @nocollapse */ AngularFireAuthGuard.ɵprov = ɵɵdefineInjectable({ factory: function AngularFireAuthGuard_Factory() { return new AngularFireAuthGuard(ɵɵinject(FIREBASE_OPTIONS), ɵɵinject(FIREBASE_APP_NAME, 8), ɵɵinject(NgZone), ɵɵinject(Router)); }, token: AngularFireAuthGuard, providedIn: "any" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AngularFireAuthGuard, [{
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
            }] }, { type: ɵngcc0.NgZone }, { type: ɵngcc1.Router }]; }, null); })();
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
const canActivate = (/**
 * @param {?} pipe
 * @return {?}
 */
(pipe) => ({
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: pipe }
}));
const ɵ1 = /**
 * @param {?} user
 * @return {?}
 */
user => !!user && !user.isAnonymous;
/** @type {?} */
const isNotAnonymous = map((ɵ1));
const ɵ2 = /**
 * @param {?} user
 * @return {?}
 */
(user) => user ? user.getIdTokenResult() : of(null);
/** @type {?} */
const idTokenResult = switchMap((ɵ2));
const ɵ3 = /**
 * @param {?} user
 * @return {?}
 */
user => !!user && user.emailVerified;
/** @type {?} */
const emailVerified = map((ɵ3));
const ɵ4 = /**
 * @param {?} idTokenResult
 * @return {?}
 */
idTokenResult => idTokenResult ? idTokenResult.claims : [];
/** @type {?} */
const customClaims = pipe(idTokenResult, map((ɵ4)));
/** @type {?} */
const hasCustomClaim = (/**
 * @param {?} claim
 * @return {?}
 */
(claim) => pipe(customClaims, map((/**
 * @param {?} claims
 * @return {?}
 */
claims => claims.hasOwnProperty(claim)))));
/** @type {?} */
const redirectUnauthorizedTo = (/**
 * @param {?} redirect
 * @return {?}
 */
(redirect) => pipe(loggedIn, map((/**
 * @param {?} loggedIn
 * @return {?}
 */
loggedIn => loggedIn || redirect))));
/** @type {?} */
const redirectLoggedInTo = (/**
 * @param {?} redirect
 * @return {?}
 */
(redirect) => pipe(loggedIn, map((/**
 * @param {?} loggedIn
 * @return {?}
 */
loggedIn => loggedIn && redirect || true))));

/**
 * @fileoverview added by tsickle
 * Generated from: auth-guard.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularFireAuthGuardModule {
}
AngularFireAuthGuardModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: AngularFireAuthGuardModule });
AngularFireAuthGuardModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function AngularFireAuthGuardModule_Factory(t) { return new (t || AngularFireAuthGuardModule)(); }, providers: [AngularFireAuthGuard] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AngularFireAuthGuardModule, [{
        type: NgModule,
        args: [{
                providers: [AngularFireAuthGuard]
            }]
    }], null, null); })();

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

export { AngularFireAuthGuard, AngularFireAuthGuardModule, canActivate, customClaims, emailVerified, hasCustomClaim, idTokenResult, isNotAnonymous, loggedIn, redirectLoggedInTo, redirectUnauthorizedTo };

//# sourceMappingURL=angular-fire-auth-guard.js.map