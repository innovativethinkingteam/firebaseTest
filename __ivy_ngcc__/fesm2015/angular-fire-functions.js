import { InjectionToken, Injectable, Inject, Optional, NgZone, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { of, from } from 'rxjs';
import { observeOn, switchMap, map, tap, shareReplay } from 'rxjs/operators';
import { ɵAngularFireSchedulers, ɵfirebaseAppFactory, ɵlazySDKProxy, FIREBASE_OPTIONS, FIREBASE_APP_NAME, ɵapplyMixins } from '@angular/fire';

/**
 * @fileoverview added by tsickle
 * Generated from: base.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
import * as ɵngcc0 from '@angular/core';
const proxyPolyfillCompat = {
    useEmulator: null,
    useFunctionsEmulator: null,
    httpsCallable: null,
};

/**
 * @fileoverview added by tsickle
 * Generated from: functions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ORIGIN = new InjectionToken('angularfire2.functions.origin');
/** @type {?} */
const REGION = new InjectionToken('angularfire2.functions.region');
// WARNING: interface has both a type and a value, skipping emit
class AngularFireFunctions {
    /**
     * @param {?} options
     * @param {?} nameOrConfig
     * @param {?} zone
     * @param {?} region
     * @param {?} origin
     */
    constructor(options, nameOrConfig, zone, region, origin) {
        /** @type {?} */
        const schedulers = new ɵAngularFireSchedulers(zone);
        /** @type {?} */
        const functions = of(undefined).pipe(observeOn(schedulers.outsideAngular), switchMap((/**
         * @return {?}
         */
        () => import('firebase/functions'))), map((/**
         * @return {?}
         */
        () => ɵfirebaseAppFactory(options, zone, nameOrConfig))), map((/**
         * @param {?} app
         * @return {?}
         */
        app => app.functions(region || undefined))), tap((/**
         * @param {?} functions
         * @return {?}
         */
        functions => {
            if (origin) {
                functions.useFunctionsEmulator(origin);
            }
        })), shareReplay({ bufferSize: 1, refCount: false }));
        this.httpsCallable = (/**
         * @template T, R
         * @param {?} name
         * @return {?}
         */
        (name) => (/**
         * @param {?} data
         * @return {?}
         */
        (data) => from(functions).pipe(observeOn(schedulers.insideAngular), switchMap((/**
         * @param {?} functions
         * @return {?}
         */
        functions => functions.httpsCallable(name)(data))), map((/**
         * @param {?} r
         * @return {?}
         */
        r => (/** @type {?} */ (r.data)))))));
        return ɵlazySDKProxy(this, functions, zone);
    }
}
AngularFireFunctions.ɵfac = function AngularFireFunctions_Factory(t) { return new (t || AngularFireFunctions)(ɵngcc0.ɵɵinject(FIREBASE_OPTIONS), ɵngcc0.ɵɵinject(FIREBASE_APP_NAME, 8), ɵngcc0.ɵɵinject(ɵngcc0.NgZone), ɵngcc0.ɵɵinject(REGION, 8), ɵngcc0.ɵɵinject(ORIGIN, 8)); };
/** @nocollapse */
AngularFireFunctions.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [FIREBASE_OPTIONS,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [FIREBASE_APP_NAME,] }] },
    { type: NgZone },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [REGION,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ORIGIN,] }] }
];
/** @nocollapse */ AngularFireFunctions.ɵprov = ɵɵdefineInjectable({ factory: function AngularFireFunctions_Factory() { return new AngularFireFunctions(ɵɵinject(FIREBASE_OPTIONS), ɵɵinject(FIREBASE_APP_NAME, 8), ɵɵinject(NgZone), ɵɵinject(REGION, 8), ɵɵinject(ORIGIN, 8)); }, token: AngularFireFunctions, providedIn: "any" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AngularFireFunctions, [{
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
            }] }, { type: ɵngcc0.NgZone }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [REGION]
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [ORIGIN]
            }] }]; }, null); })();
if (false) {
    /** @type {?} */
    AngularFireFunctions.prototype.httpsCallable;
}
ɵapplyMixins(AngularFireFunctions, [proxyPolyfillCompat]);

/**
 * @fileoverview added by tsickle
 * Generated from: functions.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularFireFunctionsModule {
}
AngularFireFunctionsModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: AngularFireFunctionsModule });
AngularFireFunctionsModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function AngularFireFunctionsModule_Factory(t) { return new (t || AngularFireFunctionsModule)(); }, providers: [AngularFireFunctions] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AngularFireFunctionsModule, [{
        type: NgModule,
        args: [{
                providers: [AngularFireFunctions]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: angular-fire-functions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AngularFireFunctions, AngularFireFunctionsModule, ORIGIN, REGION };

//# sourceMappingURL=angular-fire-functions.js.map