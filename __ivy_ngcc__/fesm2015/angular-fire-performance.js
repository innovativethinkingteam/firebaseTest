import { InjectionToken, Injectable, Optional, Inject, NgZone, PLATFORM_ID, ɵɵdefineInjectable, ɵɵinject, ApplicationRef, NgModule } from '@angular/core';
import { of, EMPTY, Observable } from 'rxjs';
import { switchMap, map, tap, shareReplay, first } from 'rxjs/operators';
import { ɵlazySDKProxy, FirebaseApp, ɵapplyMixins } from '@angular/fire';
import { isPlatformBrowser } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: base.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/fire';
const proxyPolyfillCompat = {
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
const AUTOMATICALLY_TRACE_CORE_NG_METRICS = new InjectionToken('angularfire2.performance.auto_trace');
/** @type {?} */
const INSTRUMENTATION_ENABLED = new InjectionToken('angularfire2.performance.instrumentationEnabled');
/** @type {?} */
const DATA_COLLECTION_ENABLED = new InjectionToken('angularfire2.performance.dataCollectionEnabled');
// WARNING: interface has both a type and a value, skipping emit
class AngularFirePerformance {
    /**
     * @param {?} app
     * @param {?} instrumentationEnabled
     * @param {?} dataCollectionEnabled
     * @param {?} zone
     * @param {?} platformId
     */
    constructor(app, instrumentationEnabled, dataCollectionEnabled, zone, 
    // tslint:disable-next-line:ban-types
    platformId) {
        this.zone = zone;
        this.performance = of(undefined).pipe(switchMap((/**
         * @return {?}
         */
        () => isPlatformBrowser(platformId) ? zone.runOutsideAngular((/**
         * @return {?}
         */
        () => import('firebase/performance'))) : EMPTY)), map((/**
         * @return {?}
         */
        () => zone.runOutsideAngular((/**
         * @return {?}
         */
        () => app.performance())))), tap((/**
         * @param {?} performance
         * @return {?}
         */
        performance => {
            if (instrumentationEnabled === false) {
                performance.instrumentationEnabled = false;
            }
            if (dataCollectionEnabled === false) {
                performance.dataCollectionEnabled = false;
            }
        })), shareReplay({ bufferSize: 1, refCount: false }));
        return ɵlazySDKProxy(this, this.performance, zone);
    }
}
AngularFirePerformance.ɵfac = function AngularFirePerformance_Factory(t) { return new (t || AngularFirePerformance)(ɵngcc0.ɵɵinject(ɵngcc1.FirebaseApp), ɵngcc0.ɵɵinject(INSTRUMENTATION_ENABLED, 8), ɵngcc0.ɵɵinject(DATA_COLLECTION_ENABLED, 8), ɵngcc0.ɵɵinject(ɵngcc0.NgZone), ɵngcc0.ɵɵinject(PLATFORM_ID)); };
/** @nocollapse */
AngularFirePerformance.ctorParameters = () => [
    { type: FirebaseApp },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [INSTRUMENTATION_ENABLED,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DATA_COLLECTION_ENABLED,] }] },
    { type: NgZone },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
/** @nocollapse */ AngularFirePerformance.ɵprov = ɵɵdefineInjectable({ factory: function AngularFirePerformance_Factory() { return new AngularFirePerformance(ɵɵinject(FirebaseApp), ɵɵinject(INSTRUMENTATION_ENABLED, 8), ɵɵinject(DATA_COLLECTION_ENABLED, 8), ɵɵinject(NgZone), ɵɵinject(PLATFORM_ID)); }, token: AngularFirePerformance, providedIn: "any" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AngularFirePerformance, [{
        type: Injectable,
        args: [{
                providedIn: 'any'
            }]
    }], function () { return [{ type: ɵngcc1.FirebaseApp }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [INSTRUMENTATION_ENABLED]
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DATA_COLLECTION_ENABLED]
            }] }, { type: ɵngcc0.NgZone }, { type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, null); })();
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
const trace$ = (/**
 * @param {?} traceId
 * @return {?}
 */
(traceId) => {
    if (typeof window !== 'undefined' && window.performance) {
        /** @type {?} */
        const entries = window.performance.getEntriesByName(traceId, 'measure') || [];
        /** @type {?} */
        const startMarkName = `_${traceId}Start[${entries.length}]`;
        /** @type {?} */
        const endMarkName = `_${traceId}End[${entries.length}]`;
        return new Observable((/**
         * @param {?} emitter
         * @return {?}
         */
        emitter => {
            window.performance.mark(startMarkName);
            emitter.next();
            return {
                unsubscribe: (/**
                 * @return {?}
                 */
                () => {
                    window.performance.mark(endMarkName);
                    window.performance.measure(traceId, startMarkName, endMarkName);
                })
            };
        }));
    }
    else {
        return EMPTY;
    }
});
const ɵ0 = trace$;
/** @type {?} */
const traceUntil = (/**
 * @template T
 * @param {?} name
 * @param {?} test
 * @param {?=} options
 * @return {?}
 */
(name, test, options) => (/**
 * @param {?} source$
 * @return {?}
 */
(source$) => new Observable((/**
 * @param {?} subscriber
 * @return {?}
 */
subscriber => {
    /** @type {?} */
    const traceSubscription = trace$(name).subscribe();
    return source$.pipe(tap((/**
     * @param {?} a
     * @return {?}
     */
    a => test(a) && traceSubscription.unsubscribe()), (/**
     * @return {?}
     */
    () => {
    }), (/**
     * @return {?}
     */
    () => options && options.orComplete && traceSubscription.unsubscribe()))).subscribe(subscriber);
}))));
/** @type {?} */
const traceWhile = (/**
 * @template T
 * @param {?} name
 * @param {?} test
 * @param {?=} options
 * @return {?}
 */
(name, test, options) => (/**
 * @param {?} source$
 * @return {?}
 */
(source$) => new Observable((/**
 * @param {?} subscriber
 * @return {?}
 */
subscriber => {
    /** @type {?} */
    let traceSubscription;
    return source$.pipe(tap((/**
     * @param {?} a
     * @return {?}
     */
    a => {
        if (test(a)) {
            traceSubscription = traceSubscription || trace$(name).subscribe();
        }
        else {
            if (traceSubscription) {
                traceSubscription.unsubscribe();
            }
            traceSubscription = undefined;
        }
    }), (/**
     * @return {?}
     */
    () => {
    }), (/**
     * @return {?}
     */
    () => options && options.orComplete && traceSubscription && traceSubscription.unsubscribe()))).subscribe(subscriber);
}))));
/** @type {?} */
const traceUntilComplete = (/**
 * @template T
 * @param {?} name
 * @return {?}
 */
(name) => (/**
 * @param {?} source$
 * @return {?}
 */
(source$) => new Observable((/**
 * @param {?} subscriber
 * @return {?}
 */
subscriber => {
    /** @type {?} */
    const traceSubscription = trace$(name).subscribe();
    return source$.pipe(tap((/**
     * @return {?}
     */
    () => {
    }), (/**
     * @return {?}
     */
    () => {
    }), (/**
     * @return {?}
     */
    () => traceSubscription.unsubscribe()))).subscribe(subscriber);
}))));
/** @type {?} */
const traceUntilFirst = (/**
 * @template T
 * @param {?} name
 * @return {?}
 */
(name) => (/**
 * @param {?} source$
 * @return {?}
 */
(source$) => new Observable((/**
 * @param {?} subscriber
 * @return {?}
 */
subscriber => {
    /** @type {?} */
    const traceSubscription = trace$(name).subscribe();
    return source$.pipe(tap((/**
     * @return {?}
     */
    () => traceSubscription.unsubscribe()), (/**
     * @return {?}
     */
    () => {
    }), (/**
     * @return {?}
     */
    () => {
    }))).subscribe(subscriber);
}))));
/** @type {?} */
const trace = (/**
 * @template T
 * @param {?} name
 * @return {?}
 */
(name) => (/**
 * @param {?} source$
 * @return {?}
 */
(source$) => new Observable((/**
 * @param {?} subscriber
 * @return {?}
 */
subscriber => {
    /** @type {?} */
    const traceSubscription = trace$(name).subscribe();
    return source$.pipe(tap((/**
     * @return {?}
     */
    () => traceSubscription.unsubscribe()), (/**
     * @return {?}
     */
    () => {
    }), (/**
     * @return {?}
     */
    () => traceSubscription.unsubscribe()))).subscribe(subscriber);
}))));
ɵapplyMixins(AngularFirePerformance, [proxyPolyfillCompat]);

/**
 * @fileoverview added by tsickle
 * Generated from: performance.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const IS_STABLE_START_MARK = '_isStableStart';
/** @type {?} */
const IS_STABLE_END_MARK = '_isStableEnd';
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
const started = markStarts();
class PerformanceMonitoringService {
    /**
     * @param {?} appRef
     */
    constructor(appRef) {
        if (started) {
            this.disposable = appRef.isStable.pipe(first((/**
             * @param {?} it
             * @return {?}
             */
            it => it)), tap((/**
             * @return {?}
             */
            () => {
                window.performance.mark(IS_STABLE_END_MARK);
                window.performance.measure('isStable', IS_STABLE_START_MARK, IS_STABLE_END_MARK);
            }))).subscribe();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.disposable) {
            this.disposable.unsubscribe();
        }
    }
}
PerformanceMonitoringService.ɵfac = function PerformanceMonitoringService_Factory(t) { return new (t || PerformanceMonitoringService)(ɵngcc0.ɵɵinject(ɵngcc0.ApplicationRef)); };
PerformanceMonitoringService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: PerformanceMonitoringService, factory: PerformanceMonitoringService.ɵfac });
/** @nocollapse */
PerformanceMonitoringService.ctorParameters = () => [
    { type: ApplicationRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(PerformanceMonitoringService, [{
        type: Injectable
    }], function () { return [{ type: ɵngcc0.ApplicationRef }]; }, null); })();
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
class AngularFirePerformanceModule {
    /**
     * @param {?} perf
     * @param {?} _
     */
    constructor(perf, _) {
        // call anything here to get perf loading
        // tslint:disable-next-line:no-unused-expression
        perf.dataCollectionEnabled.then((/**
         * @return {?}
         */
        () => { }));
    }
}
AngularFirePerformanceModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: AngularFirePerformanceModule });
AngularFirePerformanceModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function AngularFirePerformanceModule_Factory(t) { return new (t || AngularFirePerformanceModule)(ɵngcc0.ɵɵinject(AngularFirePerformance), ɵngcc0.ɵɵinject(PerformanceMonitoringService, 8)); }, providers: [AngularFirePerformance] });
/** @nocollapse */
AngularFirePerformanceModule.ctorParameters = () => [
    { type: AngularFirePerformance },
    { type: PerformanceMonitoringService, decorators: [{ type: Optional }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AngularFirePerformanceModule, [{
        type: NgModule,
        args: [{
                providers: [AngularFirePerformance]
            }]
    }], function () { return [{ type: AngularFirePerformance }, { type: PerformanceMonitoringService, decorators: [{
                type: Optional
            }] }]; }, null); })();

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

export { AUTOMATICALLY_TRACE_CORE_NG_METRICS, AngularFirePerformance, AngularFirePerformanceModule, DATA_COLLECTION_ENABLED, INSTRUMENTATION_ENABLED, PerformanceMonitoringService, trace, traceUntil, traceUntilComplete, traceUntilFirst, traceWhile };

//# sourceMappingURL=angular-fire-performance.js.map