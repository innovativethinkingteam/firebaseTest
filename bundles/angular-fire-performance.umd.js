(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@angular/fire'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@angular/fire/performance', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', '@angular/fire', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.angular = global.angular || {}, global.angular.fire = global.angular.fire || {}, global.angular.fire.performance = {}), global.ng.core, global.rxjs, global.rxjs.operators, global.angular.fire, global.ng.common));
}(this, (function (exports, i0, rxjs, operators, i1, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: base.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var proxyPolyfillCompat = {
        trace: null,
        instrumentationEnabled: null,
        dataCollectionEnabled: null,
    };

    /**
     * @fileoverview added by tsickle
     * Generated from: performance.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // SEMVER @ v6, drop and move core ng metrics to a service
    /** @type {?} */
    var AUTOMATICALLY_TRACE_CORE_NG_METRICS = new i0.InjectionToken('angularfire2.performance.auto_trace');
    /** @type {?} */
    var INSTRUMENTATION_ENABLED = new i0.InjectionToken('angularfire2.performance.instrumentationEnabled');
    /** @type {?} */
    var DATA_COLLECTION_ENABLED = new i0.InjectionToken('angularfire2.performance.dataCollectionEnabled');
    // WARNING: interface has both a type and a value, skipping emit
    var AngularFirePerformance = /** @class */ (function () {
        /**
         * @param {?} app
         * @param {?} instrumentationEnabled
         * @param {?} dataCollectionEnabled
         * @param {?} zone
         * @param {?} platformId
         */
        function AngularFirePerformance(app, instrumentationEnabled, dataCollectionEnabled, zone, 
        // tslint:disable-next-line:ban-types
        platformId) {
            this.zone = zone;
            this.performance = rxjs.of(undefined).pipe(operators.switchMap(( /**
             * @return {?}
             */function () { return common.isPlatformBrowser(platformId) ? zone.runOutsideAngular(( /**
             * @return {?}
             */function () { return import('firebase/performance'); })) : rxjs.EMPTY; })), operators.map(( /**
             * @return {?}
             */function () { return zone.runOutsideAngular(( /**
             * @return {?}
             */function () { return app.performance(); })); })), operators.tap(( /**
             * @param {?} performance
             * @return {?}
             */function (/**
             * @param {?} performance
             * @return {?}
             */ performance) {
                if (instrumentationEnabled === false) {
                    performance.instrumentationEnabled = false;
                }
                if (dataCollectionEnabled === false) {
                    performance.dataCollectionEnabled = false;
                }
            })), operators.shareReplay({ bufferSize: 1, refCount: false }));
            return i1.ɵlazySDKProxy(this, this.performance, zone);
        }
        return AngularFirePerformance;
    }());
    AngularFirePerformance.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'any'
                },] }
    ];
    /** @nocollapse */
    AngularFirePerformance.ctorParameters = function () { return [
        { type: i1.FirebaseApp },
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [INSTRUMENTATION_ENABLED,] }] },
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [DATA_COLLECTION_ENABLED,] }] },
        { type: i0.NgZone },
        { type: Object, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] }
    ]; };
    /** @nocollapse */ AngularFirePerformance.ɵprov = i0.ɵɵdefineInjectable({ factory: function AngularFirePerformance_Factory() { return new AngularFirePerformance(i0.ɵɵinject(i1.FirebaseApp), i0.ɵɵinject(INSTRUMENTATION_ENABLED, 8), i0.ɵɵinject(DATA_COLLECTION_ENABLED, 8), i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i0.PLATFORM_ID)); }, token: AngularFirePerformance, providedIn: "any" });
    if (false) {
        /**
         * @type {?}
         * @private
         */
        AngularFirePerformance.prototype.performance;
        /**
         * @type {?}
         * @private
         */
        AngularFirePerformance.prototype.zone;
    }
    /** @type {?} */
    var trace$ = ( /**
     * @param {?} traceId
     * @return {?}
     */function (traceId) {
        if (typeof window !== 'undefined' && window.performance) {
            /** @type {?} */
            var entries = window.performance.getEntriesByName(traceId, 'measure') || [];
            /** @type {?} */
            var startMarkName_1 = "_" + traceId + "Start[" + entries.length + "]";
            /** @type {?} */
            var endMarkName_1 = "_" + traceId + "End[" + entries.length + "]";
            return new rxjs.Observable(( /**
             * @param {?} emitter
             * @return {?}
             */function (/**
             * @param {?} emitter
             * @return {?}
             */ emitter) {
                window.performance.mark(startMarkName_1);
                emitter.next();
                return {
                    unsubscribe: ( /**
                     * @return {?}
                     */function () {
                        window.performance.mark(endMarkName_1);
                        window.performance.measure(traceId, startMarkName_1, endMarkName_1);
                    })
                };
            }));
        }
        else {
            return rxjs.EMPTY;
        }
    });
    var ɵ0 = trace$;
    /** @type {?} */
    var traceUntil = ( /**
     * @template T
     * @param {?} name
     * @param {?} test
     * @param {?=} options
     * @return {?}
     */function (name, test, options) { return ( /**
     * @param {?} source$
     * @return {?}
     */function (source$) { return new rxjs.Observable(( /**
     * @param {?} subscriber
     * @return {?}
     */function (/**
     * @param {?} subscriber
     * @return {?}
     */ subscriber) {
        /** @type {?} */
        var traceSubscription = trace$(name).subscribe();
        return source$.pipe(operators.tap(( /**
         * @param {?} a
         * @return {?}
         */function (/**
         * @param {?} a
         * @return {?}
         */ a) { return test(a) && traceSubscription.unsubscribe(); }), ( /**
         * @return {?}
         */function () {
        }), ( /**
         * @return {?}
         */function () { return options && options.orComplete && traceSubscription.unsubscribe(); }))).subscribe(subscriber);
    })); }); });
    /** @type {?} */
    var traceWhile = ( /**
     * @template T
     * @param {?} name
     * @param {?} test
     * @param {?=} options
     * @return {?}
     */function (name, test, options) { return ( /**
     * @param {?} source$
     * @return {?}
     */function (source$) { return new rxjs.Observable(( /**
     * @param {?} subscriber
     * @return {?}
     */function (/**
     * @param {?} subscriber
     * @return {?}
     */ subscriber) {
        /** @type {?} */
        var traceSubscription;
        return source$.pipe(operators.tap(( /**
         * @param {?} a
         * @return {?}
         */function (/**
         * @param {?} a
         * @return {?}
         */ a) {
            if (test(a)) {
                traceSubscription = traceSubscription || trace$(name).subscribe();
            }
            else {
                if (traceSubscription) {
                    traceSubscription.unsubscribe();
                }
                traceSubscription = undefined;
            }
        }), ( /**
         * @return {?}
         */function () {
        }), ( /**
         * @return {?}
         */function () { return options && options.orComplete && traceSubscription && traceSubscription.unsubscribe(); }))).subscribe(subscriber);
    })); }); });
    /** @type {?} */
    var traceUntilComplete = ( /**
     * @template T
     * @param {?} name
     * @return {?}
     */function (name) { return ( /**
     * @param {?} source$
     * @return {?}
     */function (source$) { return new rxjs.Observable(( /**
     * @param {?} subscriber
     * @return {?}
     */function (/**
     * @param {?} subscriber
     * @return {?}
     */ subscriber) {
        /** @type {?} */
        var traceSubscription = trace$(name).subscribe();
        return source$.pipe(operators.tap(( /**
         * @return {?}
         */function () {
        }), ( /**
         * @return {?}
         */function () {
        }), ( /**
         * @return {?}
         */function () { return traceSubscription.unsubscribe(); }))).subscribe(subscriber);
    })); }); });
    /** @type {?} */
    var traceUntilFirst = ( /**
     * @template T
     * @param {?} name
     * @return {?}
     */function (name) { return ( /**
     * @param {?} source$
     * @return {?}
     */function (source$) { return new rxjs.Observable(( /**
     * @param {?} subscriber
     * @return {?}
     */function (/**
     * @param {?} subscriber
     * @return {?}
     */ subscriber) {
        /** @type {?} */
        var traceSubscription = trace$(name).subscribe();
        return source$.pipe(operators.tap(( /**
         * @return {?}
         */function () { return traceSubscription.unsubscribe(); }), ( /**
         * @return {?}
         */function () {
        }), ( /**
         * @return {?}
         */function () {
        }))).subscribe(subscriber);
    })); }); });
    /** @type {?} */
    var trace = ( /**
     * @template T
     * @param {?} name
     * @return {?}
     */function (name) { return ( /**
     * @param {?} source$
     * @return {?}
     */function (source$) { return new rxjs.Observable(( /**
     * @param {?} subscriber
     * @return {?}
     */function (/**
     * @param {?} subscriber
     * @return {?}
     */ subscriber) {
        /** @type {?} */
        var traceSubscription = trace$(name).subscribe();
        return source$.pipe(operators.tap(( /**
         * @return {?}
         */function () { return traceSubscription.unsubscribe(); }), ( /**
         * @return {?}
         */function () {
        }), ( /**
         * @return {?}
         */function () { return traceSubscription.unsubscribe(); }))).subscribe(subscriber);
    })); }); });
    i1.ɵapplyMixins(AngularFirePerformance, [proxyPolyfillCompat]);

    /**
     * @fileoverview added by tsickle
     * Generated from: performance.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var IS_STABLE_START_MARK = '_isStableStart';
    /** @type {?} */
    var IS_STABLE_END_MARK = '_isStableEnd';
    /**
     * @return {?}
     */
    function markStarts() {
        if (typeof (window) !== 'undefined' && window.performance) {
            window.performance.mark(IS_STABLE_START_MARK);
            return true;
        }
        else {
            return false;
        }
    }
    /** @type {?} */
    var started = markStarts();
    var PerformanceMonitoringService = /** @class */ (function () {
        /**
         * @param {?} appRef
         */
        function PerformanceMonitoringService(appRef) {
            if (started) {
                this.disposable = appRef.isStable.pipe(operators.first(( /**
                 * @param {?} it
                 * @return {?}
                 */function (/**
                 * @param {?} it
                 * @return {?}
                 */ it) { return it; })), operators.tap(( /**
                 * @return {?}
                 */function () {
                    window.performance.mark(IS_STABLE_END_MARK);
                    window.performance.measure('isStable', IS_STABLE_START_MARK, IS_STABLE_END_MARK);
                }))).subscribe();
            }
        }
        /**
         * @return {?}
         */
        PerformanceMonitoringService.prototype.ngOnDestroy = function () {
            if (this.disposable) {
                this.disposable.unsubscribe();
            }
        };
        return PerformanceMonitoringService;
    }());
    PerformanceMonitoringService.decorators = [
        { type: i0.Injectable }
    ];
    /** @nocollapse */
    PerformanceMonitoringService.ctorParameters = function () { return [
        { type: i0.ApplicationRef }
    ]; };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        PerformanceMonitoringService.prototype.disposable;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: performance.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AngularFirePerformanceModule = /** @class */ (function () {
        /**
         * @param {?} perf
         * @param {?} _
         */
        function AngularFirePerformanceModule(perf, _) {
            // call anything here to get perf loading
            // tslint:disable-next-line:no-unused-expression
            perf.dataCollectionEnabled.then(( /**
             * @return {?}
             */function () { }));
        }
        return AngularFirePerformanceModule;
    }());
    AngularFirePerformanceModule.decorators = [
        { type: i0.NgModule, args: [{
                    providers: [AngularFirePerformance]
                },] }
    ];
    /** @nocollapse */
    AngularFirePerformanceModule.ctorParameters = function () { return [
        { type: AngularFirePerformance },
        { type: PerformanceMonitoringService, decorators: [{ type: i0.Optional }] }
    ]; };

    /**
     * @fileoverview added by tsickle
     * Generated from: public_api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: angular-fire-performance.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.AUTOMATICALLY_TRACE_CORE_NG_METRICS = AUTOMATICALLY_TRACE_CORE_NG_METRICS;
    exports.AngularFirePerformance = AngularFirePerformance;
    exports.AngularFirePerformanceModule = AngularFirePerformanceModule;
    exports.DATA_COLLECTION_ENABLED = DATA_COLLECTION_ENABLED;
    exports.INSTRUMENTATION_ENABLED = INSTRUMENTATION_ENABLED;
    exports.PerformanceMonitoringService = PerformanceMonitoringService;
    exports.trace = trace;
    exports.traceUntil = traceUntil;
    exports.traceUntilComplete = traceUntilComplete;
    exports.traceUntilFirst = traceUntilFirst;
    exports.traceWhile = traceWhile;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-fire-performance.umd.js.map
