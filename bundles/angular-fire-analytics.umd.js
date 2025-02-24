(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/common'), require('rxjs/operators'), require('@angular/fire'), require('@angular/router'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('@angular/fire/analytics', ['exports', '@angular/core', 'rxjs', '@angular/common', 'rxjs/operators', '@angular/fire', '@angular/router', '@angular/platform-browser'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.angular = global.angular || {}, global.angular.fire = global.angular.fire || {}, global.angular.fire.analytics = {}), global.ng.core, global.rxjs, global.ng.common, global.rxjs.operators, global.angular.fire, global.ng.router, global.ng.platformBrowser));
}(this, (function (exports, i0, rxjs, common, operators, i1, router, platformBrowser) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: base.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var proxyPolyfillCompat = {
        app: null,
        logEvent: null,
        setCurrentScreen: null,
        setUserId: null,
        setUserProperties: null,
        setAnalyticsCollectionEnabled: null,
    };

    /**
     * @record
     */
    function Config() { }
    /** @type {?} */
    var COLLECTION_ENABLED = new i0.InjectionToken('angularfire2.analytics.analyticsCollectionEnabled');
    /** @type {?} */
    var APP_VERSION = new i0.InjectionToken('angularfire2.analytics.appVersion');
    /** @type {?} */
    var APP_NAME = new i0.InjectionToken('angularfire2.analytics.appName');
    /** @type {?} */
    var DEBUG_MODE = new i0.InjectionToken('angularfire2.analytics.debugMode');
    /** @type {?} */
    var CONFIG = new i0.InjectionToken('angularfire2.analytics.config');
    /** @type {?} */
    var APP_NAME_KEY = 'app_name';
    /** @type {?} */
    var APP_VERSION_KEY = 'app_version';
    /** @type {?} */
    var DEBUG_MODE_KEY = 'debug_mode';
    /** @type {?} */
    var ANALYTICS_ID_FIELD = 'measurementId';
    /** @type {?} */
    var GTAG_CONFIG_COMMAND = 'config';
    /** @type {?} */
    var GTAG_FUNCTION_NAME = 'gtag';
    /** @type {?} */
    var DATA_LAYER_NAME = 'dataLayer';
    // WARNING: interface has both a type and a value, skipping emit
    /** @type {?} */
    var gtag;
    /** @type {?} */
    var analyticsInitialized;
    /** @type {?} */
    var analyticsInstanceCache = {};
    var AngularFireAnalytics = /** @class */ (function () {
        /**
         * @param {?} options
         * @param {?} nameOrConfig
         * @param {?} analyticsCollectionEnabled
         * @param {?} providedAppVersion
         * @param {?} providedAppName
         * @param {?} debugModeEnabled
         * @param {?} providedConfig
         * @param {?} platformId
         * @param {?} zone
         */
        function AngularFireAnalytics(options, nameOrConfig, analyticsCollectionEnabled, providedAppVersion, providedAppName, debugModeEnabled, providedConfig, 
        // tslint:disable-next-line:ban-types
        platformId, zone) {
            var _a, _b, _c;
            this.options = options;
            if (!analyticsInitialized) {
                if (common.isPlatformBrowser(platformId)) {
                    window[DATA_LAYER_NAME] = window[DATA_LAYER_NAME] || [];
                    /**
                     * According to the gtag documentation, this function that defines a custom data layer cannot be
                     * an arrow function because 'arguments' is not an array. It is actually an object that behaves
                     * like an array and contains more information then just indexes. Transforming this into arrow function
                     * caused issue #2505 where analytics no longer sent any data.
                     */
                    // tslint:disable-next-line: only-arrow-functions
                    gtag = (( /** @type {?} */(window[GTAG_FUNCTION_NAME]))) || (( /**
                     * @param {...?} _args
                     * @return {?}
                     */function () {
                        var _args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            _args[_i] = arguments[_i];
                        }
                        (( /** @type {?} */(window[DATA_LAYER_NAME]))).push(arguments);
                    }));
                    analyticsInitialized = zone.runOutsideAngular(( /**
                     * @return {?}
                     */function () { return new Promise(( /**
                     * @param {?} resolve
                     * @return {?}
                     */function (/**
                     * @param {?} resolve
                     * @return {?}
                     */ resolve) {
                        window[GTAG_FUNCTION_NAME] = ( /**
                         * @param {...?} args
                         * @return {?}
                         */function () {
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                            if (args[0] === 'js') {
                                resolve();
                            }
                            gtag.apply(void 0, __spread(args));
                        });
                    })); }));
                }
                else {
                    gtag = ( /**
                     * @return {?}
                     */function () {
                    });
                    analyticsInitialized = Promise.resolve();
                }
            }
            /** @type {?} */
            var analytics = analyticsInstanceCache[options[ANALYTICS_ID_FIELD]];
            if (!analytics) {
                analytics = rxjs.of(undefined).pipe(operators.observeOn(new i1.ɵAngularFireSchedulers(zone).outsideAngular), operators.switchMap(( /**
                 * @return {?}
                 */function () { return common.isPlatformBrowser(platformId) ? import('firebase/analytics') : rxjs.EMPTY; })), operators.map(( /**
                 * @return {?}
                 */function () { return i1.ɵfirebaseAppFactory(options, zone, nameOrConfig); })), operators.map(( /**
                 * @param {?} app
                 * @return {?}
                 */function (/**
                 * @param {?} app
                 * @return {?}
                 */ app) { return app.analytics(); })), operators.tap(( /**
                 * @param {?} analytics
                 * @return {?}
                 */function (/**
                 * @param {?} analytics
                 * @return {?}
                 */ analytics) {
                    if (analyticsCollectionEnabled === false) {
                        analytics.setAnalyticsCollectionEnabled(false);
                    }
                })), operators.shareReplay({ bufferSize: 1, refCount: false }));
                analyticsInstanceCache[options[ANALYTICS_ID_FIELD]] = analytics;
            }
            if (providedConfig) {
                this.updateConfig(providedConfig);
            }
            if (providedAppName) {
                this.updateConfig((_a = {}, _a[APP_NAME_KEY] = providedAppName, _a));
            }
            if (providedAppVersion) {
                this.updateConfig((_b = {}, _b[APP_VERSION_KEY] = providedAppVersion, _b));
            }
            if (debugModeEnabled) {
                this.updateConfig((_c = {}, _c[DEBUG_MODE_KEY] = 1, _c));
            }
            return i1.ɵlazySDKProxy(this, analytics, zone);
        }
        /**
         * @param {?} config
         * @return {?}
         */
        AngularFireAnalytics.prototype.updateConfig = function (config) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, analyticsInitialized];
                        case 1:
                            _a.sent();
                            gtag(GTAG_CONFIG_COMMAND, this.options[ANALYTICS_ID_FIELD], Object.assign(Object.assign({}, config), { update: true }));
                            return [2 /*return*/];
                    }
                });
            });
        };
        return AngularFireAnalytics;
    }());
    AngularFireAnalytics.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'any'
                },] }
    ];
    /** @nocollapse */
    AngularFireAnalytics.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Inject, args: [i1.FIREBASE_OPTIONS,] }] },
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [i1.FIREBASE_APP_NAME,] }] },
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [COLLECTION_ENABLED,] }] },
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [APP_VERSION,] }] },
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [APP_NAME,] }] },
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [DEBUG_MODE,] }] },
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [CONFIG,] }] },
        { type: Object, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
        { type: i0.NgZone }
    ]; };
    /** @nocollapse */ AngularFireAnalytics.ɵprov = i0.ɵɵdefineInjectable({ factory: function AngularFireAnalytics_Factory() { return new AngularFireAnalytics(i0.ɵɵinject(i1.FIREBASE_OPTIONS), i0.ɵɵinject(i1.FIREBASE_APP_NAME, 8), i0.ɵɵinject(COLLECTION_ENABLED, 8), i0.ɵɵinject(APP_VERSION, 8), i0.ɵɵinject(APP_NAME, 8), i0.ɵɵinject(DEBUG_MODE, 8), i0.ɵɵinject(CONFIG, 8), i0.ɵɵinject(i0.PLATFORM_ID), i0.ɵɵinject(i0.NgZone)); }, token: AngularFireAnalytics, providedIn: "any" });
    if (false) {
        /**
         * @type {?}
         * @private
         */
        AngularFireAnalytics.prototype.options;
    }
    i1.ɵapplyMixins(AngularFireAnalytics, [proxyPolyfillCompat]);

    /** @type {?} */
    var FIREBASE_EVENT_ORIGIN_KEY = 'firebase_event_origin';
    /** @type {?} */
    var FIREBASE_PREVIOUS_SCREEN_CLASS_KEY = 'firebase_previous_class';
    /** @type {?} */
    var FIREBASE_PREVIOUS_SCREEN_INSTANCE_ID_KEY = 'firebase_previous_id';
    /** @type {?} */
    var FIREBASE_PREVIOUS_SCREEN_NAME_KEY = 'firebase_previous_screen';
    /** @type {?} */
    var FIREBASE_SCREEN_CLASS_KEY = 'firebase_screen_class';
    /** @type {?} */
    var FIREBASE_SCREEN_INSTANCE_ID_KEY = 'firebase_screen_id';
    /** @type {?} */
    var FIREBASE_SCREEN_NAME_KEY = 'firebase_screen';
    /** @type {?} */
    var OUTLET_KEY = 'outlet';
    /** @type {?} */
    var PAGE_PATH_KEY = 'page_path';
    /** @type {?} */
    var PAGE_TITLE_KEY = 'page_title';
    /** @type {?} */
    var SCREEN_CLASS_KEY = 'screen_class';
    /** @type {?} */
    var SCREEN_NAME_KEY = 'screen_name';
    /** @type {?} */
    var SCREEN_VIEW_EVENT = 'screen_view';
    /** @type {?} */
    var EVENT_ORIGIN_AUTO = 'auto';
    /** @type {?} */
    var DEFAULT_SCREEN_CLASS = '???';
    /** @type {?} */
    var NG_PRIMARY_OUTLET = 'primary';
    /** @type {?} */
    var SCREEN_INSTANCE_DELIMITER = '#';
    /** @type {?} */
    var ANNOTATIONS = '__annotations__';
    // this is an INT64 in iOS/Android but use INT32 cause javascript
    /** @type {?} */
    var nextScreenInstanceID = Math.floor(Math.random() * (Math.pow(2, 32) - 1)) - Math.pow(2, 31);
    /** @type {?} */
    var knownScreenInstanceIDs = {};
    /** @type {?} */
    var getScreenInstanceID = ( /**
     * @param {?} params
     * @return {?}
     */function (params) {
        // unique the screen class against the outlet name
        /** @type {?} */
        var screenInstanceKey = [
            params[SCREEN_CLASS_KEY],
            params[OUTLET_KEY]
        ].join(SCREEN_INSTANCE_DELIMITER);
        if (knownScreenInstanceIDs.hasOwnProperty(screenInstanceKey)) {
            return knownScreenInstanceIDs[screenInstanceKey];
        }
        else {
            /** @type {?} */
            var ret = nextScreenInstanceID++;
            knownScreenInstanceIDs[screenInstanceKey] = ret;
            return ret;
        }
    });
    var ɵ0 = getScreenInstanceID;
    var ScreenTrackingService = /** @class */ (function () {
        /**
         * @param {?} analytics
         * @param {?} router
         * @param {?} title
         * @param {?} componentFactoryResolver
         * @param {?} platformId
         * @param {?} debugModeEnabled
         * @param {?} zone
         * @param {?} injector
         */
        function ScreenTrackingService(analytics, router$1, title, componentFactoryResolver, 
        // tslint:disable-next-line:ban-types
        platformId, debugModeEnabled, zone, injector) {
            var _this = this;
            if (!router$1 || !common.isPlatformBrowser(platformId)) {
                return this;
            }
            zone.runOutsideAngular(( /**
             * @return {?}
             */function () {
                /** @type {?} */
                var activationEndEvents = router$1.events.pipe(operators.filter(( /**
                 * @param {?} e
                 * @return {?}
                 */function (/**
                 * @param {?} e
                 * @return {?}
                 */ e) { return e instanceof router.ActivationEnd; })));
                /** @type {?} */
                var navigationEndEvents = router$1.events.pipe(operators.filter(( /**
                 * @param {?} e
                 * @return {?}
                 */function (/**
                 * @param {?} e
                 * @return {?}
                 */ e) { return e instanceof router.NavigationEnd; })));
                _this.disposable = navigationEndEvents.pipe(operators.withLatestFrom(activationEndEvents), operators.switchMap(( /**
                 * @param {?} __0
                 * @return {?}
                 */function (_a) {
                    var _b, _c, _d, _e, _f;
                    var _g = __read(_a, 2), navigationEnd = _g[0], activationEnd = _g[1];
                    // SEMVER: start using optional chains and nullish coalescing once we support newer typescript
                    /** @type {?} */
                    var pagePath = navigationEnd.url;
                    /** @type {?} */
                    var screenName = activationEnd.snapshot.routeConfig && activationEnd.snapshot.routeConfig.path || pagePath;
                    /** @type {?} */
                    var params = (_b = {},
                        _b[SCREEN_NAME_KEY] = screenName,
                        _b[PAGE_PATH_KEY] = pagePath,
                        _b[FIREBASE_EVENT_ORIGIN_KEY] = EVENT_ORIGIN_AUTO,
                        _b[FIREBASE_SCREEN_NAME_KEY] = screenName,
                        _b[OUTLET_KEY] = activationEnd.snapshot.outlet,
                        _b);
                    if (title) {
                        params[PAGE_TITLE_KEY] = title.getTitle();
                    }
                    /** @type {?} */
                    var component = activationEnd.snapshot.component;
                    /** @type {?} */
                    var routeConfig = activationEnd.snapshot.routeConfig;
                    /** @type {?} */
                    var loadChildren = routeConfig && routeConfig.loadChildren;
                    // TODO figure out how to handle minification
                    if (typeof loadChildren === 'string') {
                        // SEMVER: this is the older lazy load style "./path#ClassName", drop this when we drop old ng
                        // TODO is it worth seeing if I can look up the component factory selector from the module name?
                        // it's lazy so it's not registered with componentFactoryResolver yet... seems a pain for a depreciated style
                        return rxjs.of(Object.assign(Object.assign({}, params), (_c = {}, _c[SCREEN_CLASS_KEY] = loadChildren.split('#')[1], _c)));
                    }
                    else if (typeof component === 'string') {
                        return rxjs.of(Object.assign(Object.assign({}, params), (_d = {}, _d[SCREEN_CLASS_KEY] = component, _d)));
                    }
                    else if (component) {
                        /** @type {?} */
                        var componentFactory = componentFactoryResolver.resolveComponentFactory(component);
                        return rxjs.of(Object.assign(Object.assign({}, params), (_e = {}, _e[SCREEN_CLASS_KEY] = componentFactory.selector, _e)));
                    }
                    else if (loadChildren) {
                        /** @type {?} */
                        var loadedChildren = loadChildren();
                        /** @type {?} */
                        var loadedChildren$ = (loadedChildren instanceof rxjs.Observable) ?
                            loadedChildren :
                            rxjs.from(Promise.resolve(loadedChildren));
                        return loadedChildren$.pipe(operators.map(( /**
                         * @param {?} lazyModule
                         * @return {?}
                         */function (/**
                         * @param {?} lazyModule
                         * @return {?}
                         */ lazyModule) {
                            var _a, _b, _c;
                            if (lazyModule instanceof i0.NgModuleFactory) {
                                // AOT create an injector
                                /** @type {?} */
                                var moduleRef = lazyModule.create(injector);
                                // INVESTIGATE is this the right way to get at the matching route?
                                /** @type {?} */
                                var routes = moduleRef.injector.get(router.ROUTES);
                                /** @type {?} */
                                var component_1 = routes[0][0].component;
                                try {
                                    /** @type {?} */
                                    var componentFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(component_1);
                                    return Object.assign(Object.assign({}, params), (_a = {}, _a[SCREEN_CLASS_KEY] = componentFactory.selector, _a));
                                }
                                catch (_) {
                                    return Object.assign(Object.assign({}, params), (_b = {}, _b[SCREEN_CLASS_KEY] = DEFAULT_SCREEN_CLASS, _b));
                                }
                            }
                            else {
                                // JIT look at the annotations
                                // INVESTIGATE are there public APIs for this stuff?
                                /** @type {?} */
                                var declarations = [].concat.apply([], (lazyModule[ANNOTATIONS] || []).map(( /**
                                 * @param {?} f
                                 * @return {?}
                                 */function (f) { return f.declarations; })));
                                /** @type {?} */
                                var selectors = [].concat.apply([], declarations.map(( /**
                                 * @param {?} c
                                 * @return {?}
                                 */function (c) { return (c[ANNOTATIONS] || []).map(( /**
                                 * @param {?} f
                                 * @return {?}
                                 */function (f) { return f.selector; })); })));
                                // should I just be grabbing the selector like this or should i match against the route component?
                                //   const routerModule = lazyModule.ngInjectorDef.imports.find(i => i.ngModule && ....);
                                //   const route = routerModule.providers[0].find(p => p.provide == ROUTES).useValue[0];
                                return Object.assign(Object.assign({}, params), (_c = {}, _c[SCREEN_CLASS_KEY] = selectors[0] || DEFAULT_SCREEN_CLASS, _c));
                            }
                        })));
                    }
                    else {
                        return rxjs.of(Object.assign(Object.assign({}, params), (_f = {}, _f[SCREEN_CLASS_KEY] = DEFAULT_SCREEN_CLASS, _f)));
                    }
                })), operators.map(( /**
                 * @param {?} params
                 * @return {?}
                 */function (/**
                 * @param {?} params
                 * @return {?}
                 */ params) {
                    var _a;
                    return (Object.assign((_a = {}, _a[FIREBASE_SCREEN_CLASS_KEY] = params[SCREEN_CLASS_KEY], _a[FIREBASE_SCREEN_INSTANCE_ID_KEY] = getScreenInstanceID(params), _a), params));
                })), operators.tap(( /**
                 * @param {?} params
                 * @return {?}
                 */function (/**
                 * @param {?} params
                 * @return {?}
                 */ params) {
                    var _a, _b;
                    // TODO perhaps I can be smarter about this, bubble events up to the nearest outlet?
                    if (params[OUTLET_KEY] === NG_PRIMARY_OUTLET) {
                        analytics.setCurrentScreen(params[SCREEN_NAME_KEY]);
                        analytics.updateConfig((_a = {},
                            _a[PAGE_PATH_KEY] = params[PAGE_PATH_KEY],
                            _a[SCREEN_CLASS_KEY] = params[SCREEN_CLASS_KEY],
                            _a));
                        if (title) {
                            analytics.updateConfig((_b = {}, _b[PAGE_TITLE_KEY] = params[PAGE_TITLE_KEY], _b));
                        }
                    }
                })), operators.groupBy(( /**
                 * @param {?} params
                 * @return {?}
                 */function (/**
                 * @param {?} params
                 * @return {?}
                 */ params) { return params[OUTLET_KEY]; })), 
                // tslint:disable-next-line
                operators.mergeMap(( /**
                 * @param {?} group
                 * @return {?}
                 */function (/**
                 * @param {?} group
                 * @return {?}
                 */ group) { return group.pipe(operators.startWith(undefined), operators.pairwise()); })), operators.map(( /**
                 * @param {?} __0
                 * @return {?}
                 */function (_a) {
                    var _b;
                    var _c = __read(_a, 2), prior = _c[0], current = _c[1];
                    return prior ? Object.assign((_b = {}, _b[FIREBASE_PREVIOUS_SCREEN_CLASS_KEY] = prior[SCREEN_CLASS_KEY], _b[FIREBASE_PREVIOUS_SCREEN_NAME_KEY] = prior[SCREEN_NAME_KEY], _b[FIREBASE_PREVIOUS_SCREEN_INSTANCE_ID_KEY] = prior[FIREBASE_SCREEN_INSTANCE_ID_KEY], _b), current) : current;
                })), 
                // tslint:disable-next-line:no-console
                operators.tap(( /**
                 * @param {?} params
                 * @return {?}
                 */function (/**
                 * @param {?} params
                 * @return {?}
                 */ params) { return debugModeEnabled && console.info(SCREEN_VIEW_EVENT, params); })), operators.tap(( /**
                 * @param {?} params
                 * @return {?}
                 */function (/**
                 * @param {?} params
                 * @return {?}
                 */ params) { return zone.runOutsideAngular(( /**
                 * @return {?}
                 */function () { return analytics.logEvent(SCREEN_VIEW_EVENT, params); })); }))).subscribe();
            }));
        }
        /**
         * @return {?}
         */
        ScreenTrackingService.prototype.ngOnDestroy = function () {
            if (this.disposable) {
                this.disposable.unsubscribe();
            }
        };
        return ScreenTrackingService;
    }());
    ScreenTrackingService.decorators = [
        { type: i0.Injectable }
    ];
    /** @nocollapse */
    ScreenTrackingService.ctorParameters = function () { return [
        { type: AngularFireAnalytics },
        { type: router.Router, decorators: [{ type: i0.Optional }] },
        { type: platformBrowser.Title, decorators: [{ type: i0.Optional }] },
        { type: i0.ComponentFactoryResolver },
        { type: Object, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [DEBUG_MODE,] }] },
        { type: i0.NgZone },
        { type: i0.Injector }
    ]; };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ScreenTrackingService.prototype.disposable;
    }
    var UserTrackingService = /** @class */ (function () {
        // TODO a user properties injector
        /**
         * @param {?} analytics
         * @param {?} zone
         * @param {?} platformId
         */
        function UserTrackingService(analytics, zone, 
        // tslint:disable-next-line:ban-types
        platformId) {
            var _this = this;
            /** @type {?} */
            var schedulers = new i1.ɵAngularFireSchedulers(zone);
            if (!common.isPlatformServer(platformId)) {
                zone.runOutsideAngular(( /**
                 * @return {?}
                 */function () {
                    // @ts-ignore zap the import in the UMD
                    _this.disposable = rxjs.from(import('firebase/auth')).pipe(operators.observeOn(schedulers.outsideAngular), operators.switchMap(( /**
                     * @return {?}
                     */function () { return analytics.app; })), operators.map(( /**
                     * @param {?} app
                     * @return {?}
                     */function (/**
                     * @param {?} app
                     * @return {?}
                     */ app) { return app.auth(); })), operators.switchMap(( /**
                     * @param {?} auth
                     * @return {?}
                     */function (/**
                     * @param {?} auth
                     * @return {?}
                     */ auth) { return new rxjs.Observable(auth.onAuthStateChanged.bind(auth)); })), operators.switchMap(( /**
                     * @param {?} user
                     * @return {?}
                     */function (/**
                     * @param {?} user
                     * @return {?}
                     */ user) { return analytics.setUserId(user ? user.uid : null); }))).subscribe();
                }));
            }
        }
        /**
         * @return {?}
         */
        UserTrackingService.prototype.ngOnDestroy = function () {
            if (this.disposable) {
                this.disposable.unsubscribe();
            }
        };
        return UserTrackingService;
    }());
    UserTrackingService.decorators = [
        { type: i0.Injectable }
    ];
    /** @nocollapse */
    UserTrackingService.ctorParameters = function () { return [
        { type: AngularFireAnalytics },
        { type: i0.NgZone },
        { type: Object, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] }
    ]; };
    if (false) {
        /**
         * @type {?}
         * @private
         */
        UserTrackingService.prototype.disposable;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: analytics.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AngularFireAnalyticsModule = /** @class */ (function () {
        /**
         * @param {?} analytics
         * @param {?} screenTracking
         * @param {?} userTracking
         */
        function AngularFireAnalyticsModule(analytics, screenTracking, userTracking) {
            // calling anything on analytics will eagerly load the SDK
            // tslint:disable-next-line:no-unused-expression
            analytics.app.then(( /**
             * @return {?}
             */function () { }));
        }
        return AngularFireAnalyticsModule;
    }());
    AngularFireAnalyticsModule.decorators = [
        { type: i0.NgModule, args: [{
                    providers: [AngularFireAnalytics]
                },] }
    ];
    /** @nocollapse */
    AngularFireAnalyticsModule.ctorParameters = function () { return [
        { type: AngularFireAnalytics },
        { type: ScreenTrackingService, decorators: [{ type: i0.Optional }] },
        { type: UserTrackingService, decorators: [{ type: i0.Optional }] }
    ]; };

    /**
     * @fileoverview added by tsickle
     * Generated from: public_api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: angular-fire-analytics.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.APP_NAME = APP_NAME;
    exports.APP_VERSION = APP_VERSION;
    exports.AngularFireAnalytics = AngularFireAnalytics;
    exports.AngularFireAnalyticsModule = AngularFireAnalyticsModule;
    exports.COLLECTION_ENABLED = COLLECTION_ENABLED;
    exports.CONFIG = CONFIG;
    exports.DEBUG_MODE = DEBUG_MODE;
    exports.ScreenTrackingService = ScreenTrackingService;
    exports.UserTrackingService = UserTrackingService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-fire-analytics.umd.js.map
