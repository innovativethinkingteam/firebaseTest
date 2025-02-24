(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@angular/fire'), require('@angular/common'), require('firebase/app')) :
    typeof define === 'function' && define.amd ? define('@angular/fire/remote-config', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', '@angular/fire', '@angular/common', 'firebase/app'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.angular = global.angular || {}, global.angular.fire = global.angular.fire || {}, global.angular.fire['remote-config'] = {}), global.ng.core, global.rxjs, global.rxjs.operators, global.angular.fire, global.ng.common, global.firebase));
}(this, (function (exports, i0, rxjs, operators, i1, common, firebase) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var firebase__default = /*#__PURE__*/_interopDefaultLegacy(firebase);

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
     * @record
     */
    function ConfigTemplate() { }
    /** @type {?} */
    var SETTINGS = new i0.InjectionToken('angularfire2.remoteConfig.settings');
    /** @type {?} */
    var DEFAULTS = new i0.InjectionToken('angularfire2.remoteConfig.defaultConfig');
    // WARNING: interface has both a type and a value, skipping emit
    /** @type {?} */
    var AS_TO_FN = { strings: 'asString', numbers: 'asNumber', booleans: 'asBoolean' };
    /** @type {?} */
    var STATIC_VALUES = { numbers: 0, booleans: false, strings: undefined };
    // TODO look into the types here, I don't like the anys
    /** @type {?} */
    var proxyAll = ( /**
     * @param {?} observable
     * @param {?} as
     * @return {?}
     */function (observable, as) { return ( /** @type {?} */(new Proxy(observable.pipe(mapToObject(( /** @type {?} */(as)))), {
        get: ( /**
         * @param {?} self
         * @param {?} name
         * @return {?}
         */function (self, name) { return self[name] || observable.pipe(operators.map(( /**
         * @param {?} all
         * @return {?}
         */function (/**
         * @param {?} all
         * @return {?}
         */ all) { return all.find(( /**
         * @param {?} p
         * @return {?}
         */function (/**
         * @param {?} p
         * @return {?}
         */ p) { return p.key === name; })); })), operators.map(( /**
         * @param {?} param
         * @return {?}
         */function (/**
         * @param {?} param
         * @return {?}
         */ param) { return param ? param[AS_TO_FN[as]]() : STATIC_VALUES[as]; })), operators.distinctUntilChanged()); })
    }))); });
    var ɵ0 = proxyAll;
    // TODO export as implements Partial<...> so minor doesn't break us
    var Value = /** @class */ (function () {
        // tslint:disable-next-line:variable-name
        /**
         * @param {?} _source
         * @param {?} _value
         */
        function Value(_source, _value) {
            this._source = _source;
            this._value = _value;
        }
        /**
         * @return {?}
         */
        Value.prototype.asBoolean = function () {
            return ['1', 'true', 't', 'y', 'yes', 'on'].indexOf(this._value.toLowerCase()) > -1;
        };
        /**
         * @return {?}
         */
        Value.prototype.asString = function () {
            return this._value;
        };
        /**
         * @return {?}
         */
        Value.prototype.asNumber = function () {
            return Number(this._value) || 0;
        };
        /**
         * @return {?}
         */
        Value.prototype.getSource = function () {
            return this._source;
        };
        return Value;
    }());
    if (false) {
        /** @type {?} */
        Value.prototype._source;
        /** @type {?} */
        Value.prototype._value;
    }
    // SEMVER use ConstructorParameters when we can support Typescript 3.6
    var Parameter = /** @class */ (function (_super) {
        __extends(Parameter, _super);
        /**
         * @param {?} key
         * @param {?} fetchTimeMillis
         * @param {?} source
         * @param {?} value
         */
        function Parameter(key, fetchTimeMillis, source, value) {
            var _this = _super.call(this, source, value) || this;
            _this.key = key;
            _this.fetchTimeMillis = fetchTimeMillis;
            return _this;
        }
        return Parameter;
    }(Value));
    if (false) {
        /** @type {?} */
        Parameter.prototype.key;
        /** @type {?} */
        Parameter.prototype.fetchTimeMillis;
    }
    // If it's a Parameter array, test any, else test the individual Parameter
    /** @type {?} */
    var filterTest = ( /**
     * @param {?} fn
     * @return {?}
     */function (fn) { return operators.filter(( /**
     * @param {?} it
     * @return {?}
     */function (/**
     * @param {?} it
     * @return {?}
     */ it) { return Array.isArray(it) ? it.some(fn) : fn(it); })); });
    var ɵ1 = filterTest;
    // Allow the user to bypass the default values and wait till they get something from the server, even if it's a cached copy;
    // if used in conjuntion with first() it will only fetch RC values from the server if they aren't cached locally
    /** @type {?} */
    var filterRemote = ( /**
     * @return {?}
     */function () { return filterTest(( /**
     * @param {?} p
     * @return {?}
     */function (/**
     * @param {?} p
     * @return {?}
     */ p) { return p.getSource() === 'remote'; })); });
    // filterFresh allows the developer to effectively set up a maximum cache time
    /** @type {?} */
    var filterFresh = ( /**
     * @param {?} howRecentInMillis
     * @return {?}
     */function (howRecentInMillis) { return filterTest(( /**
     * @param {?} p
     * @return {?}
     */function (/**
     * @param {?} p
     * @return {?}
     */ p) { return p.fetchTimeMillis + howRecentInMillis >= new Date().getTime(); })); });
    // I ditched loading the defaults into RC and a simple map for scan since we already have our own defaults implementation.
    // The idea here being that if they have a default that never loads from the server, they will be able to tell via fetchTimeMillis
    // on the Parameter. Also if it doesn't come from the server it won't emit again in .changes, due to the distinctUntilChanged,
    // which we can simplify to === rather than deep comparison
    /** @type {?} */
    var scanToParametersArray = ( /**
     * @param {?} remoteConfig
     * @return {?}
     */function (remoteConfig) { return rxjs.pipe(operators.withLatestFrom(remoteConfig), operators.scan(( /**
     * @param {?} existing
     * @param {?} __1
     * @return {?}
     */function (existing, _a) {
        var _b = __read(_a, 2), all = _b[0], rc = _b[1];
        // SEMVER use "new Set" to unique once we're only targeting es6
        // at the scale we expect remote config to be at, we probably won't see a performance hit from this unoptimized uniqueness
        // implementation.
        // const allKeys = [...new Set([...existing.map(p => p.key), ...Object.keys(all)])];
        /** @type {?} */
        var allKeys = __spread(existing.map(( /**
             * @param {?} p
             * @return {?}
             */function (/**
             * @param {?} p
             * @return {?}
             */ p) { return p.key; })), Object.keys(all)).filter(( /**
     * @param {?} v
     * @param {?} i
     * @param {?} a
     * @return {?}
     */function (v, i, a) { return a.indexOf(v) === i; }));
        return allKeys.map(( /**
         * @param {?} key
         * @return {?}
         */function (/**
         * @param {?} key
         * @return {?}
         */ key) {
            /** @type {?} */
            var updatedValue = all[key];
            return updatedValue ? new Parameter(key, rc ? rc.fetchTimeMillis : -1, updatedValue.getSource(), updatedValue.asString())
                : existing.find(( /**
                 * @param {?} p
                 * @return {?}
                 */function (/**
                 * @param {?} p
                 * @return {?}
                 */ p) { return p.key === key; }));
        }));
    }), ( /** @type {?} */([])))); });
    var ɵ2 = scanToParametersArray;
    var AngularFireRemoteConfig = /** @class */ (function () {
        /**
         * @param {?} options
         * @param {?} nameOrConfig
         * @param {?} settings
         * @param {?} defaultConfig
         * @param {?} zone
         * @param {?} platformId
         */
        function AngularFireRemoteConfig(options, nameOrConfig, settings, defaultConfig, zone, 
        // tslint:disable-next-line:ban-types
        platformId) {
            this.zone = zone;
            /** @type {?} */
            var schedulers = new i1.ɵAngularFireSchedulers(zone);
            /** @type {?} */
            var remoteConfig$ = rxjs.of(undefined).pipe(operators.observeOn(schedulers.outsideAngular), operators.switchMap(( /**
             * @return {?}
             */function () { return common.isPlatformBrowser(platformId) ? import('firebase/remote-config') : rxjs.EMPTY; })), operators.switchMap(( /**
             * @return {?}
             */function () { return import('@firebase/remote-config'); })), operators.tap(( /**
             * @param {?} rc
             * @return {?}
             */function (/**
             * @param {?} rc
             * @return {?}
             */ rc) { return rc.registerRemoteConfig && rc.registerRemoteConfig(( /** @type {?} */(firebase__default['default']))); })), operators.map(( /**
             * @return {?}
             */function () { return i1.ɵfirebaseAppFactory(options, zone, nameOrConfig); })), operators.map(( /**
             * @param {?} app
             * @return {?}
             */function (/**
             * @param {?} app
             * @return {?}
             */ app) { return app.remoteConfig(); })), operators.tap(( /**
             * @param {?} rc
             * @return {?}
             */function (/**
             * @param {?} rc
             * @return {?}
             */ rc) {
                if (settings) {
                    rc.settings = settings;
                }
                if (defaultConfig) {
                    rc.defaultConfig = defaultConfig;
                }
            })), 
            // tslint:disable-next-line
            operators.startWith(undefined), operators.shareReplay({ bufferSize: 1, refCount: false }));
            /** @type {?} */
            var loadedRemoteConfig$ = remoteConfig$.pipe(operators.filter(( /**
             * @param {?} rc
             * @return {?}
             */function (/**
             * @param {?} rc
             * @return {?}
             */ rc) { return !!rc; })));
            /** @type {?} */
            var default$ = rxjs.of(Object.keys(defaultConfig || {}).reduce(( /**
             * @param {?} c
             * @param {?} k
             * @return {?}
             */function (c, k) {
                var _a;
                return (Object.assign(Object.assign({}, c), (_a = {}, _a[k] = new Value('default', defaultConfig[k].toString()), _a)));
            }), {}));
            // we should filter out the defaults we provided to RC, since we have our own implementation
            // that gives us a -1 for fetchTimeMillis (so filterFresh can filter them out)
            /** @type {?} */
            var filterOutDefaults = operators.map(( /**
             * @param {?} all
             * @return {?}
             */function (/**
             * @param {?} all
             * @return {?}
             */ all) { return Object.keys(all)
                .filter(( /**
         * @param {?} key
         * @return {?}
         */function (/**
         * @param {?} key
         * @return {?}
         */ key) { return all[key].getSource() !== 'default'; }))
                .reduce(( /**
         * @param {?} acc
         * @param {?} key
         * @return {?}
         */function (acc, key) {
                var _a;
                return (Object.assign(Object.assign({}, acc), (_a = {}, _a[key] = all[key], _a)));
            }), {}); }));
            /** @type {?} */
            var existing$ = loadedRemoteConfig$.pipe(operators.switchMap(( /**
             * @param {?} rc
             * @return {?}
             */function (/**
             * @param {?} rc
             * @return {?}
             */ rc) { return rc.activate()
                .then(( /**
         * @return {?}
         */function () { return rc.ensureInitialized(); }))
                .then(( /**
         * @return {?}
         */function () { return rc.getAll(); })); })), filterOutDefaults);
            /** @type {?} */
            var fresh$ = loadedRemoteConfig$.pipe(operators.switchMap(( /**
             * @param {?} rc
             * @return {?}
             */function (/**
             * @param {?} rc
             * @return {?}
             */ rc) { return zone.runOutsideAngular(( /**
             * @return {?}
             */function () { return rc.fetchAndActivate()
                .then(( /**
         * @return {?}
         */function () { return rc.ensureInitialized(); }))
                .then(( /**
         * @return {?}
         */function () { return rc.getAll(); })); })); })), filterOutDefaults);
            this.parameters = rxjs.concat(default$, existing$, fresh$).pipe(scanToParametersArray(remoteConfig$), i1.ɵkeepUnstableUntilFirstFactory(schedulers), operators.shareReplay({ bufferSize: 1, refCount: true }));
            this.changes = this.parameters.pipe(operators.switchMap(( /**
             * @param {?} params
             * @return {?}
             */function (/**
             * @param {?} params
             * @return {?}
             */ params) { return rxjs.of.apply(void 0, __spread(params)); })), operators.groupBy(( /**
             * @param {?} param
             * @return {?}
             */function (/**
             * @param {?} param
             * @return {?}
             */ param) { return param.key; })), operators.mergeMap(( /**
             * @param {?} group
             * @return {?}
             */function (/**
             * @param {?} group
             * @return {?}
             */ group) { return group.pipe(operators.distinctUntilChanged()); })));
            this.strings = proxyAll(this.parameters, 'strings');
            this.booleans = proxyAll(this.parameters, 'booleans');
            this.numbers = proxyAll(this.parameters, 'numbers');
            return i1.ɵlazySDKProxy(this, loadedRemoteConfig$, zone);
        }
        return AngularFireRemoteConfig;
    }());
    AngularFireRemoteConfig.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'any'
                },] }
    ];
    /** @nocollapse */
    AngularFireRemoteConfig.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Inject, args: [i1.FIREBASE_OPTIONS,] }] },
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [i1.FIREBASE_APP_NAME,] }] },
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [SETTINGS,] }] },
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [DEFAULTS,] }] },
        { type: i0.NgZone },
        { type: Object, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] }
    ]; };
    /** @nocollapse */ AngularFireRemoteConfig.ɵprov = i0.ɵɵdefineInjectable({ factory: function AngularFireRemoteConfig_Factory() { return new AngularFireRemoteConfig(i0.ɵɵinject(i1.FIREBASE_OPTIONS), i0.ɵɵinject(i1.FIREBASE_APP_NAME, 8), i0.ɵɵinject(SETTINGS, 8), i0.ɵɵinject(DEFAULTS, 8), i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i0.PLATFORM_ID)); }, token: AngularFireRemoteConfig, providedIn: "any" });
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
    var budget = ( /**
     * @template T
     * @param {?} interval
     * @return {?}
     */function (interval) { return ( /**
     * @param {?} source
     * @return {?}
     */function (source) { return new rxjs.Observable(( /**
     * @param {?} observer
     * @return {?}
     */function (/**
     * @param {?} observer
     * @return {?}
     */ observer) {
        /** @type {?} */
        var timedOut = false;
        // TODO use scheduler task rather than settimeout
        /** @type {?} */
        var timeout = setTimeout(( /**
         * @return {?}
         */function () {
            observer.complete();
            timedOut = true;
        }), interval);
        return source.subscribe({
            /**
             * @param {?} val
             * @return {?}
             */
            next: function (val) {
                if (!timedOut) {
                    observer.next(val);
                }
            },
            /**
             * @param {?} err
             * @return {?}
             */
            error: function (err) {
                if (!timedOut) {
                    clearTimeout(timeout);
                    observer.error(err);
                }
            },
            /**
             * @return {?}
             */
            complete: function () {
                if (!timedOut) {
                    clearTimeout(timeout);
                    observer.complete();
                }
            }
        });
    })); }); });
    /** @type {?} */
    var typedMethod = ( /**
     * @param {?} it
     * @return {?}
     */function (it) {
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
    var ɵ3 = typedMethod;
    /**
     * @template T
     * @param {?=} to
     * @return {?}
     */
    function scanToObject(to) {
        if (to === void 0) { to = 'strings'; }
        return rxjs.pipe(
        // TODO cleanup
        operators.scan(( /**
         * @param {?} c
         * @param {?} p
         * @return {?}
         */function (c, p) {
            var _a;
            return (Object.assign(Object.assign({}, c), (_a = {}, _a[p.key] = typeof to === 'object' ?
                p[typedMethod(to[p.key])]() :
                p[AS_TO_FN[to]](), _a)));
        }), typeof to === 'object' ?
            ( /** @type {?} */(to)) :
            ( /** @type {?} */({}))), operators.debounceTime(1), budget(10), operators.distinctUntilChanged(( /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */function (a, b) { return JSON.stringify(a) === JSON.stringify(b); })));
    }
    /**
     * @template T
     * @param {?=} to
     * @return {?}
     */
    function mapToObject(to) {
        if (to === void 0) { to = 'strings'; }
        return rxjs.pipe(
        // TODO this is getting a little long, cleanup
        operators.map(( /**
         * @param {?} params
         * @return {?}
         */function (params) { return params.reduce(( /**
         * @param {?} c
         * @param {?} p
         * @return {?}
         */function (c, p) {
            var _a;
            return (Object.assign(Object.assign({}, c), (_a = {}, _a[p.key] = typeof to === 'object' ?
                p[typedMethod(to[p.key])]() :
                p[AS_TO_FN[to]](), _a)));
        }), typeof to === 'object' ?
            ( /** @type {?} */(to)) :
            ( /** @type {?} */({}))); })), operators.distinctUntilChanged(( /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */function (a, b) { return JSON.stringify(a) === JSON.stringify(b); })));
    }
    i1.ɵapplyMixins(AngularFireRemoteConfig, [proxyPolyfillCompat]);

    /**
     * @fileoverview added by tsickle
     * Generated from: remote-config.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AngularFireRemoteConfigModule = /** @class */ (function () {
        function AngularFireRemoteConfigModule() {
        }
        return AngularFireRemoteConfigModule;
    }());
    AngularFireRemoteConfigModule.decorators = [
        { type: i0.NgModule, args: [{
                    providers: [AngularFireRemoteConfig]
                },] }
    ];

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

    exports.AngularFireRemoteConfig = AngularFireRemoteConfig;
    exports.AngularFireRemoteConfigModule = AngularFireRemoteConfigModule;
    exports.DEFAULTS = DEFAULTS;
    exports.Parameter = Parameter;
    exports.SETTINGS = SETTINGS;
    exports.Value = Value;
    exports.budget = budget;
    exports.filterFresh = filterFresh;
    exports.filterRemote = filterRemote;
    exports.mapToObject = mapToObject;
    exports.scanToObject = scanToObject;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-fire-remote-config.umd.js.map
