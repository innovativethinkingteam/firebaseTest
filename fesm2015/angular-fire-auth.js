import { Injectable, Inject, Optional, PLATFORM_ID, NgZone, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { of, Observable, from } from 'rxjs';
import { observeOn, switchMap, map, shareReplay, first } from 'rxjs/operators';
import { ɵAngularFireSchedulers, ɵkeepUnstableUntilFirstFactory, ɵfirebaseAppFactory, ɵlazySDKProxy, FIREBASE_OPTIONS, FIREBASE_APP_NAME, ɵapplyMixins } from '@angular/fire';
import { isPlatformServer } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: base.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const proxyPolyfillCompat = {
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
class AngularFireAuth {
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
        const keepUnstableUntilFirst = ɵkeepUnstableUntilFirstFactory(schedulers);
        /** @type {?} */
        const auth = of(undefined).pipe(observeOn(schedulers.outsideAngular), switchMap((/**
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
        if (isPlatformServer(platformId)) {
            this.authState = this.user = this.idToken = this.idTokenResult = of(null);
        }
        else {
            // HACK, as we're exporting auth.Auth, rather than auth, developers importing firebase.auth
            //       (e.g, `import { auth } from 'firebase/app'`) are getting an undefined auth object unexpectedly
            //       as we're completely lazy. Let's eagerly load the Auth SDK here.
            //       There could potentially be race conditions still... but this greatly decreases the odds while
            //       we reevaluate the API.
            /** @type {?} */
            const _ = auth.pipe(first()).subscribe();
            this.authState = auth.pipe(switchMap((/**
             * @param {?} auth
             * @return {?}
             */
            auth => auth.getRedirectResult().then((/**
             * @return {?}
             */
            () => auth), (/**
             * @return {?}
             */
            () => auth)))), switchMap((/**
             * @param {?} auth
             * @return {?}
             */
            auth => zone.runOutsideAngular((/**
             * @return {?}
             */
            () => new Observable(auth.onAuthStateChanged.bind(auth)))))), keepUnstableUntilFirst);
            this.user = auth.pipe(switchMap((/**
             * @param {?} auth
             * @return {?}
             */
            auth => auth.getRedirectResult().then((/**
             * @return {?}
             */
            () => auth), (/**
             * @return {?}
             */
            () => auth)))), switchMap((/**
             * @param {?} auth
             * @return {?}
             */
            auth => zone.runOutsideAngular((/**
             * @return {?}
             */
            () => new Observable(auth.onIdTokenChanged.bind(auth)))))), keepUnstableUntilFirst);
            this.idToken = this.user.pipe(switchMap((/**
             * @param {?} user
             * @return {?}
             */
            user => user ? from(user.getIdToken()) : of(null))));
            this.idTokenResult = this.user.pipe(switchMap((/**
             * @param {?} user
             * @return {?}
             */
            user => user ? from(user.getIdTokenResult()) : of(null))));
        }
        return ɵlazySDKProxy(this, auth, zone);
    }
}
AngularFireAuth.decorators = [
    { type: Injectable, args: [{
                providedIn: 'any'
            },] }
];
/** @nocollapse */
AngularFireAuth.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [FIREBASE_OPTIONS,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [FIREBASE_APP_NAME,] }] },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: NgZone }
];
/** @nocollapse */ AngularFireAuth.ɵprov = ɵɵdefineInjectable({ factory: function AngularFireAuth_Factory() { return new AngularFireAuth(ɵɵinject(FIREBASE_OPTIONS), ɵɵinject(FIREBASE_APP_NAME, 8), ɵɵinject(PLATFORM_ID), ɵɵinject(NgZone)); }, token: AngularFireAuth, providedIn: "any" });
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
ɵapplyMixins(AngularFireAuth, [proxyPolyfillCompat]);

/**
 * @fileoverview added by tsickle
 * Generated from: auth.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularFireAuthModule {
}
AngularFireAuthModule.decorators = [
    { type: NgModule, args: [{
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

export { AngularFireAuth, AngularFireAuthModule };
//# sourceMappingURL=angular-fire-auth.js.map
