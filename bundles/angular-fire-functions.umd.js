(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@angular/fire')) :
    typeof define === 'function' && define.amd ? define('@angular/fire/functions', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', '@angular/fire'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.angular = global.angular || {}, global.angular.fire = global.angular.fire || {}, global.angular.fire.functions = {}), global.ng.core, global.rxjs, global.rxjs.operators, global.angular.fire));
}(this, (function (exports, i0, rxjs, operators, i1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: base.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var proxyPolyfillCompat = {
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
    var ORIGIN = new i0.InjectionToken('angularfire2.functions.origin');
    /** @type {?} */
    var REGION = new i0.InjectionToken('angularfire2.functions.region');
    // WARNING: interface has both a type and a value, skipping emit
    var AngularFireFunctions = /** @class */ (function () {
        /**
         * @param {?} options
         * @param {?} nameOrConfig
         * @param {?} zone
         * @param {?} region
         * @param {?} origin
         */
        function AngularFireFunctions(options, nameOrConfig, zone, region, origin) {
            /** @type {?} */
            var schedulers = new i1.ɵAngularFireSchedulers(zone);
            /** @type {?} */
            var functions = rxjs.of(undefined).pipe(operators.observeOn(schedulers.outsideAngular), operators.switchMap(( /**
             * @return {?}
             */function () { return import('firebase/functions'); })), operators.map(( /**
             * @return {?}
             */function () { return i1.ɵfirebaseAppFactory(options, zone, nameOrConfig); })), operators.map(( /**
             * @param {?} app
             * @return {?}
             */function (/**
             * @param {?} app
             * @return {?}
             */ app) { return app.functions(region || undefined); })), operators.tap(( /**
             * @param {?} functions
             * @return {?}
             */function (/**
             * @param {?} functions
             * @return {?}
             */ functions) {
                if (origin) {
                    functions.useFunctionsEmulator(origin);
                }
            })), operators.shareReplay({ bufferSize: 1, refCount: false }));
            this.httpsCallable = ( /**
             * @template T, R
             * @param {?} name
             * @return {?}
             */function (name) { return ( /**
             * @param {?} data
             * @return {?}
             */function (data) { return rxjs.from(functions).pipe(operators.observeOn(schedulers.insideAngular), operators.switchMap(( /**
             * @param {?} functions
             * @return {?}
             */function (/**
             * @param {?} functions
             * @return {?}
             */ functions) { return functions.httpsCallable(name)(data); })), operators.map(( /**
             * @param {?} r
             * @return {?}
             */function (/**
             * @param {?} r
             * @return {?}
             */ r) { return ( /** @type {?} */(r.data)); }))); }); });
            return i1.ɵlazySDKProxy(this, functions, zone);
        }
        return AngularFireFunctions;
    }());
    AngularFireFunctions.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'any'
                },] }
    ];
    /** @nocollapse */
    AngularFireFunctions.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Inject, args: [i1.FIREBASE_OPTIONS,] }] },
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [i1.FIREBASE_APP_NAME,] }] },
        { type: i0.NgZone },
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [REGION,] }] },
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [ORIGIN,] }] }
    ]; };
    /** @nocollapse */ AngularFireFunctions.ɵprov = i0.ɵɵdefineInjectable({ factory: function AngularFireFunctions_Factory() { return new AngularFireFunctions(i0.ɵɵinject(i1.FIREBASE_OPTIONS), i0.ɵɵinject(i1.FIREBASE_APP_NAME, 8), i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(REGION, 8), i0.ɵɵinject(ORIGIN, 8)); }, token: AngularFireFunctions, providedIn: "any" });
    if (false) {
        /** @type {?} */
        AngularFireFunctions.prototype.httpsCallable;
    }
    i1.ɵapplyMixins(AngularFireFunctions, [proxyPolyfillCompat]);

    /**
     * @fileoverview added by tsickle
     * Generated from: functions.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AngularFireFunctionsModule = /** @class */ (function () {
        function AngularFireFunctionsModule() {
        }
        return AngularFireFunctionsModule;
    }());
    AngularFireFunctionsModule.decorators = [
        { type: i0.NgModule, args: [{
                    providers: [AngularFireFunctions]
                },] }
    ];

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

    exports.AngularFireFunctions = AngularFireFunctions;
    exports.AngularFireFunctionsModule = AngularFireFunctionsModule;
    exports.ORIGIN = ORIGIN;
    exports.REGION = REGION;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-fire-functions.umd.js.map
