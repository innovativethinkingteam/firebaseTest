import { InjectionToken, Injectable, Inject, Optional, NgZone, PLATFORM_ID, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { pipe, of, EMPTY, concat, Observable } from 'rxjs';
import { map, distinctUntilChanged, filter, withLatestFrom, scan, observeOn, switchMap, tap, startWith, shareReplay, groupBy, mergeMap, debounceTime } from 'rxjs/operators';
import { ɵAngularFireSchedulers, ɵfirebaseAppFactory, ɵkeepUnstableUntilFirstFactory, ɵlazySDKProxy, FIREBASE_OPTIONS, FIREBASE_APP_NAME, ɵapplyMixins } from '@angular/fire';
import { isPlatformBrowser } from '@angular/common';
import firebase from 'firebase/app';

/**
 * @fileoverview added by tsickle
 * Generated from: base.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
import * as ɵngcc0 from '@angular/core';
const proxyPolyfillCompat = {
    settings: null,
    defaultConfig: null,
    fetchTimeMillis: null,
    lastFetchStatus: null,
    activate: null,
    ensureInitialized: null,
    fetch: null,
    fetchAndActivate: null,
    getAll: null,
    getBoolean: null,
    getNumber: null,
    getString: null,
    getValue: null,
    setLogLevel: null,
};

/**
 * @fileoverview added by tsickle
 * Generated from: remote-config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ConfigTemplate() { }
/** @type {?} */
const SETTINGS = new InjectionToken('angularfire2.remoteConfig.settings');
/** @type {?} */
const DEFAULTS = new InjectionToken('angularfire2.remoteConfig.defaultConfig');
// WARNING: interface has both a type and a value, skipping emit
/** @type {?} */
const AS_TO_FN = { strings: 'asString', numbers: 'asNumber', booleans: 'asBoolean' };
/** @type {?} */
const STATIC_VALUES = { numbers: 0, booleans: false, strings: undefined };
// TODO look into the types here, I don't like the anys
/** @type {?} */
const proxyAll = (/**
 * @param {?} observable
 * @param {?} as
 * @return {?}
 */
(observable, as) => (/** @type {?} */ (new Proxy(observable.pipe(mapToObject((/** @type {?} */ (as)))), {
    get: (/**
     * @param {?} self
     * @param {?} name
     * @return {?}
     */
    (self, name) => self[name] || observable.pipe(map((/**
     * @param {?} all
     * @return {?}
     */
    all => all.find((/**
     * @param {?} p
     * @return {?}
     */
    p => p.key === name)))), map((/**
     * @param {?} param
     * @return {?}
     */
    param => param ? param[AS_TO_FN[as]]() : STATIC_VALUES[as])), distinctUntilChanged()))
}))));
const ɵ0 = proxyAll;
// TODO export as implements Partial<...> so minor doesn't break us
class Value {
    // tslint:disable-next-line:variable-name
    /**
     * @param {?} _source
     * @param {?} _value
     */
    constructor(_source, _value) {
        this._source = _source;
        this._value = _value;
    }
    /**
     * @return {?}
     */
    asBoolean() {
        return ['1', 'true', 't', 'y', 'yes', 'on'].indexOf(this._value.toLowerCase()) > -1;
    }
    /**
     * @return {?}
     */
    asString() {
        return this._value;
    }
    /**
     * @return {?}
     */
    asNumber() {
        return Number(this._value) || 0;
    }
    /**
     * @return {?}
     */
    getSource() {
        return this._source;
    }
}
if (false) {
    /** @type {?} */
    Value.prototype._source;
    /** @type {?} */
    Value.prototype._value;
}
// SEMVER use ConstructorParameters when we can support Typescript 3.6
class Parameter extends Value {
    /**
     * @param {?} key
     * @param {?} fetchTimeMillis
     * @param {?} source
     * @param {?} value
     */
    constructor(key, fetchTimeMillis, source, value) {
        super(source, value);
        this.key = key;
        this.fetchTimeMillis = fetchTimeMillis;
    }
}
if (false) {
    /** @type {?} */
    Parameter.prototype.key;
    /** @type {?} */
    Parameter.prototype.fetchTimeMillis;
}
// If it's a Parameter array, test any, else test the individual Parameter
/** @type {?} */
const filterTest = (/**
 * @param {?} fn
 * @return {?}
 */
(fn) => filter((/**
 * @param {?} it
 * @return {?}
 */
it => Array.isArray(it) ? it.some(fn) : fn(it))));
const ɵ1 = filterTest;
// Allow the user to bypass the default values and wait till they get something from the server, even if it's a cached copy;
// if used in conjuntion with first() it will only fetch RC values from the server if they aren't cached locally
/** @type {?} */
const filterRemote = (/**
 * @return {?}
 */
() => filterTest((/**
 * @param {?} p
 * @return {?}
 */
p => p.getSource() === 'remote')));
// filterFresh allows the developer to effectively set up a maximum cache time
/** @type {?} */
const filterFresh = (/**
 * @param {?} howRecentInMillis
 * @return {?}
 */
(howRecentInMillis) => filterTest((/**
 * @param {?} p
 * @return {?}
 */
p => p.fetchTimeMillis + howRecentInMillis >= new Date().getTime())));
// I ditched loading the defaults into RC and a simple map for scan since we already have our own defaults implementation.
// The idea here being that if they have a default that never loads from the server, they will be able to tell via fetchTimeMillis
// on the Parameter. Also if it doesn't come from the server it won't emit again in .changes, due to the distinctUntilChanged,
// which we can simplify to === rather than deep comparison
/** @type {?} */
const scanToParametersArray = (/**
 * @param {?} remoteConfig
 * @return {?}
 */
(remoteConfig) => pipe(withLatestFrom(remoteConfig), scan((/**
 * @param {?} existing
 * @param {?} __1
 * @return {?}
 */
(existing, [all, rc]) => {
    // SEMVER use "new Set" to unique once we're only targeting es6
    // at the scale we expect remote config to be at, we probably won't see a performance hit from this unoptimized uniqueness
    // implementation.
    // const allKeys = [...new Set([...existing.map(p => p.key), ...Object.keys(all)])];
    /** @type {?} */
    const allKeys = [...existing.map((/**
         * @param {?} p
         * @return {?}
         */
        p => p.key)), ...Object.keys(all)].filter((/**
     * @param {?} v
     * @param {?} i
     * @param {?} a
     * @return {?}
     */
    (v, i, a) => a.indexOf(v) === i));
    return allKeys.map((/**
     * @param {?} key
     * @return {?}
     */
    key => {
        /** @type {?} */
        const updatedValue = all[key];
        return updatedValue ? new Parameter(key, rc ? rc.fetchTimeMillis : -1, updatedValue.getSource(), updatedValue.asString())
            : existing.find((/**
             * @param {?} p
             * @return {?}
             */
            p => p.key === key));
    }));
}), (/** @type {?} */ ([])))));
const ɵ2 = scanToParametersArray;
class AngularFireRemoteConfig {
    /**
     * @param {?} options
     * @param {?} nameOrConfig
     * @param {?} settings
     * @param {?} defaultConfig
     * @param {?} zone
     * @param {?} platformId
     */
    constructor(options, nameOrConfig, settings, defaultConfig, zone, 
    // tslint:disable-next-line:ban-types
    platformId) {
        this.zone = zone;
        /** @type {?} */
        const schedulers = new ɵAngularFireSchedulers(zone);
        /** @type {?} */
        const remoteConfig$ = of(undefined).pipe(observeOn(schedulers.outsideAngular), switchMap((/**
         * @return {?}
         */
        () => isPlatformBrowser(platformId) ? import('firebase/remote-config') : EMPTY)), switchMap((/**
         * @return {?}
         */
        () => import('@firebase/remote-config'))), tap((/**
         * @param {?} rc
         * @return {?}
         */
        rc => rc.registerRemoteConfig && rc.registerRemoteConfig((/** @type {?} */ (firebase))))), map((/**
         * @return {?}
         */
        () => ɵfirebaseAppFactory(options, zone, nameOrConfig))), map((/**
         * @param {?} app
         * @return {?}
         */
        app => app.remoteConfig())), tap((/**
         * @param {?} rc
         * @return {?}
         */
        rc => {
            if (settings) {
                rc.settings = settings;
            }
            if (defaultConfig) {
                rc.defaultConfig = defaultConfig;
            }
        })), 
        // tslint:disable-next-line
        startWith(undefined), shareReplay({ bufferSize: 1, refCount: false }));
        /** @type {?} */
        const loadedRemoteConfig$ = remoteConfig$.pipe(filter((/**
         * @param {?} rc
         * @return {?}
         */
        rc => !!rc)));
        /** @type {?} */
        const default$ = of(Object.keys(defaultConfig || {}).reduce((/**
         * @param {?} c
         * @param {?} k
         * @return {?}
         */
        (c, k) => (Object.assign(Object.assign({}, c), { [k]: new Value('default', defaultConfig[k].toString()) }))), {}));
        // we should filter out the defaults we provided to RC, since we have our own implementation
        // that gives us a -1 for fetchTimeMillis (so filterFresh can filter them out)
        /** @type {?} */
        const filterOutDefaults = map((/**
         * @param {?} all
         * @return {?}
         */
        all => Object.keys(all)
            .filter((/**
         * @param {?} key
         * @return {?}
         */
        key => all[key].getSource() !== 'default'))
            .reduce((/**
         * @param {?} acc
         * @param {?} key
         * @return {?}
         */
        (acc, key) => (Object.assign(Object.assign({}, acc), { [key]: all[key] }))), {})));
        /** @type {?} */
        const existing$ = loadedRemoteConfig$.pipe(switchMap((/**
         * @param {?} rc
         * @return {?}
         */
        rc => rc.activate()
            .then((/**
         * @return {?}
         */
        () => rc.ensureInitialized()))
            .then((/**
         * @return {?}
         */
        () => rc.getAll())))), filterOutDefaults);
        /** @type {?} */
        const fresh$ = loadedRemoteConfig$.pipe(switchMap((/**
         * @param {?} rc
         * @return {?}
         */
        rc => zone.runOutsideAngular((/**
         * @return {?}
         */
        () => rc.fetchAndActivate()
            .then((/**
         * @return {?}
         */
        () => rc.ensureInitialized()))
            .then((/**
         * @return {?}
         */
        () => rc.getAll())))))), filterOutDefaults);
        this.parameters = concat(default$, existing$, fresh$).pipe(scanToParametersArray(remoteConfig$), ɵkeepUnstableUntilFirstFactory(schedulers), shareReplay({ bufferSize: 1, refCount: true }));
        this.changes = this.parameters.pipe(switchMap((/**
         * @param {?} params
         * @return {?}
         */
        params => of(...params))), groupBy((/**
         * @param {?} param
         * @return {?}
         */
        param => param.key)), mergeMap((/**
         * @param {?} group
         * @return {?}
         */
        group => group.pipe(distinctUntilChanged()))));
        this.strings = proxyAll(this.parameters, 'strings');
        this.booleans = proxyAll(this.parameters, 'booleans');
        this.numbers = proxyAll(this.parameters, 'numbers');
        return ɵlazySDKProxy(this, loadedRemoteConfig$, zone);
    }
}
AngularFireRemoteConfig.ɵfac = function AngularFireRemoteConfig_Factory(t) { return new (t || AngularFireRemoteConfig)(ɵngcc0.ɵɵinject(FIREBASE_OPTIONS), ɵngcc0.ɵɵinject(FIREBASE_APP_NAME, 8), ɵngcc0.ɵɵinject(SETTINGS, 8), ɵngcc0.ɵɵinject(DEFAULTS, 8), ɵngcc0.ɵɵinject(ɵngcc0.NgZone), ɵngcc0.ɵɵinject(PLATFORM_ID)); };
/** @nocollapse */
AngularFireRemoteConfig.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [FIREBASE_OPTIONS,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [FIREBASE_APP_NAME,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [SETTINGS,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DEFAULTS,] }] },
    { type: NgZone },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
/** @nocollapse */ AngularFireRemoteConfig.ɵprov = ɵɵdefineInjectable({ factory: function AngularFireRemoteConfig_Factory() { return new AngularFireRemoteConfig(ɵɵinject(FIREBASE_OPTIONS), ɵɵinject(FIREBASE_APP_NAME, 8), ɵɵinject(SETTINGS, 8), ɵɵinject(DEFAULTS, 8), ɵɵinject(NgZone), ɵɵinject(PLATFORM_ID)); }, token: AngularFireRemoteConfig, providedIn: "any" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AngularFireRemoteConfig, [{
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
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [SETTINGS]
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DEFAULTS]
            }] }, { type: ɵngcc0.NgZone }, { type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, null); })();
if (false) {
    /** @type {?} */
    AngularFireRemoteConfig.prototype.changes;
    /** @type {?} */
    AngularFireRemoteConfig.prototype.parameters;
    /** @type {?} */
    AngularFireRemoteConfig.prototype.numbers;
    /** @type {?} */
    AngularFireRemoteConfig.prototype.booleans;
    /** @type {?} */
    AngularFireRemoteConfig.prototype.strings;
    /**
     * @type {?}
     * @private
     */
    AngularFireRemoteConfig.prototype.zone;
}
/** @type {?} */
const budget = (/**
 * @template T
 * @param {?} interval
 * @return {?}
 */
(interval) => (/**
 * @param {?} source
 * @return {?}
 */
(source) => new Observable((/**
 * @param {?} observer
 * @return {?}
 */
observer => {
    /** @type {?} */
    let timedOut = false;
    // TODO use scheduler task rather than settimeout
    /** @type {?} */
    const timeout = setTimeout((/**
     * @return {?}
     */
    () => {
        observer.complete();
        timedOut = true;
    }), interval);
    return source.subscribe({
        /**
         * @param {?} val
         * @return {?}
         */
        next(val) {
            if (!timedOut) {
                observer.next(val);
            }
        },
        /**
         * @param {?} err
         * @return {?}
         */
        error(err) {
            if (!timedOut) {
                clearTimeout(timeout);
                observer.error(err);
            }
        },
        /**
         * @return {?}
         */
        complete() {
            if (!timedOut) {
                clearTimeout(timeout);
                observer.complete();
            }
        }
    });
}))));
/** @type {?} */
const typedMethod = (/**
 * @param {?} it
 * @return {?}
 */
(it) => {
    switch (typeof it) {
        case 'string':
            return 'asString';
        case 'boolean':
            return 'asBoolean';
        case 'number':
            return 'asNumber';
        default:
            return 'asString';
    }
});
const ɵ3 = typedMethod;
/**
 * @template T
 * @param {?=} to
 * @return {?}
 */
function scanToObject(to = 'strings') {
    return pipe(
    // TODO cleanup
    scan((/**
     * @param {?} c
     * @param {?} p
     * @return {?}
     */
    (c, p) => (Object.assign(Object.assign({}, c), { [p.key]: typeof to === 'object' ?
            p[typedMethod(to[p.key])]() :
            p[AS_TO_FN[to]]() }))), typeof to === 'object' ?
        (/** @type {?} */ (to)) :
        (/** @type {?} */ ({}))), debounceTime(1), budget(10), distinctUntilChanged((/**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    (a, b) => JSON.stringify(a) === JSON.stringify(b))));
}
/**
 * @template T
 * @param {?=} to
 * @return {?}
 */
function mapToObject(to = 'strings') {
    return pipe(
    // TODO this is getting a little long, cleanup
    map((/**
     * @param {?} params
     * @return {?}
     */
    (params) => params.reduce((/**
     * @param {?} c
     * @param {?} p
     * @return {?}
     */
    (c, p) => (Object.assign(Object.assign({}, c), { [p.key]: typeof to === 'object' ?
            p[typedMethod(to[p.key])]() :
            p[AS_TO_FN[to]]() }))), typeof to === 'object' ?
        (/** @type {?} */ (to)) :
        (/** @type {?} */ ({}))))), distinctUntilChanged((/**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    (a, b) => JSON.stringify(a) === JSON.stringify(b))));
}
ɵapplyMixins(AngularFireRemoteConfig, [proxyPolyfillCompat]);

/**
 * @fileoverview added by tsickle
 * Generated from: remote-config.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularFireRemoteConfigModule {
}
AngularFireRemoteConfigModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: AngularFireRemoteConfigModule });
AngularFireRemoteConfigModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function AngularFireRemoteConfigModule_Factory(t) { return new (t || AngularFireRemoteConfigModule)(); }, providers: [AngularFireRemoteConfig] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AngularFireRemoteConfigModule, [{
        type: NgModule,
        args: [{
                providers: [AngularFireRemoteConfig]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: angular-fire-remote-config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AngularFireRemoteConfig, AngularFireRemoteConfigModule, DEFAULTS, Parameter, SETTINGS, Value, budget, filterFresh, filterRemote, mapToObject, scanToObject };

//# sourceMappingURL=angular-fire-remote-config.js.map