(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@angular/fire'), require('@angular/common'), require('firebase/firestore'), require('firebase/app')) :
    typeof define === 'function' && define.amd ? define('@angular/fire/firestore', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', '@angular/fire', '@angular/common', 'firebase/firestore', 'firebase/app'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.angular = global.angular || {}, global.angular.fire = global.angular.fire || {}, global.angular.fire.firestore = {}), global.ng.core, global.rxjs, global.rxjs.operators, global.angular.fire, global.ng.common, null, global.firebase));
}(this, (function (exports, i0, rxjs, operators, i1, common, firestore, firebase) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var firebase__default = /*#__PURE__*/_interopDefaultLegacy(firebase);

    /**
     * @fileoverview added by tsickle
     * Generated from: observable/fromRef.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T, R
     * @param {?} ref
     * @param {?=} scheduler
     * @return {?}
     */
    function _fromRef(ref, scheduler) {
        if (scheduler === void 0) { scheduler = rxjs.asyncScheduler; }
        return new rxjs.Observable(( /**
         * @param {?} subscriber
         * @return {?}
         */function (/**
         * @param {?} subscriber
         * @return {?}
         */ subscriber) {
            /** @type {?} */
            var unsubscribe;
            if (scheduler != null) {
                scheduler.schedule(( /**
                 * @return {?}
                 */function () {
                    unsubscribe = ref.onSnapshot(subscriber);
                }));
            }
            else {
                unsubscribe = ref.onSnapshot(subscriber);
            }
            return ( /**
             * @return {?}
             */function () {
                if (unsubscribe != null) {
                    unsubscribe();
                }
            });
        }));
    }
    /**
     * @template R
     * @param {?} ref
     * @param {?=} scheduler
     * @return {?}
     */
    function fromRef(ref, scheduler) {
        return _fromRef(ref, scheduler);
    }
    /**
     * @template T
     * @param {?} ref
     * @param {?=} scheduler
     * @return {?}
     */
    function fromDocRef(ref, scheduler) {
        return fromRef(ref, scheduler)
            .pipe(operators.map(( /**
     * @param {?} payload
     * @return {?}
     */function (/**
     * @param {?} payload
     * @return {?}
     */ payload) { return ({ payload: payload, type: 'value' }); })));
    }
    /**
     * @template T
     * @param {?} ref
     * @param {?=} scheduler
     * @return {?}
     */
    function fromCollectionRef(ref, scheduler) {
        return fromRef(ref, scheduler).pipe(operators.map(( /**
         * @param {?} payload
         * @return {?}
         */function (/**
         * @param {?} payload
         * @return {?}
         */ payload) { return ({ payload: payload, type: 'query' }); })));
    }

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
     * Generated from: collection/changes.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Return a stream of document changes on a query. These results are not in sort order but in
     * order of occurence.
     * @template T
     * @param {?} query
     * @param {?=} scheduler
     * @return {?}
     */
    function docChanges(query, scheduler) {
        return fromCollectionRef(query, scheduler)
            .pipe(operators.map(( /**
     * @param {?} action
     * @return {?}
     */function (/**
     * @param {?} action
     * @return {?}
     */ action) { return action.payload.docChanges()
            .map(( /**
     * @param {?} change
     * @return {?}
     */function (/**
     * @param {?} change
     * @return {?}
     */ change) { return (( /** @type {?} */({ type: change.type, payload: change }))); })); })));
    }
    /**
     * Return a stream of document changes on a query. These results are in sort order.
     * @template T
     * @param {?} query
     * @param {?} events
     * @param {?=} scheduler
     * @return {?}
     */
    function sortedChanges(query, events, scheduler) {
        return fromCollectionRef(query, scheduler)
            .pipe(operators.map(( /**
     * @param {?} changes
     * @return {?}
     */function (/**
     * @param {?} changes
     * @return {?}
     */ changes) { return changes.payload.docChanges(); })), operators.scan(( /**
         * @param {?} current
         * @param {?} changes
         * @return {?}
         */function (current, changes) { return combineChanges(current, changes, events); }), []), operators.map(( /**
         * @param {?} changes
         * @return {?}
         */function (/**
         * @param {?} changes
         * @return {?}
         */ changes) { return changes.map(( /**
         * @param {?} c
         * @return {?}
         */function (/**
         * @param {?} c
         * @return {?}
         */ c) { return (( /** @type {?} */({ type: c.type, payload: c }))); })); })));
    }
    /**
     * Combines the total result set from the current set of changes from an incoming set
     * of changes.
     * @template T
     * @param {?} current
     * @param {?} changes
     * @param {?} events
     * @return {?}
     */
    function combineChanges(current, changes, events) {
        changes.forEach(( /**
         * @param {?} change
         * @return {?}
         */function (/**
         * @param {?} change
         * @return {?}
         */ change) {
            // skip unwanted change types
            if (events.indexOf(change.type) > -1) {
                current = combineChange(current, change);
            }
        }));
        return current;
    }
    /**
     * Creates a new sorted array from a new change.
     * @template T
     * @param {?} combined
     * @param {?} change
     * @return {?}
     */
    function combineChange(combined, change) {
        switch (change.type) {
            case 'added':
                if (combined[change.newIndex] && combined[change.newIndex].doc.ref.isEqual(change.doc.ref)) {
                    // Not sure why the duplicates are getting fired
                }
                else {
                    combined.splice(change.newIndex, 0, change);
                }
                break;
            case 'modified':
                if (combined[change.oldIndex] == null || combined[change.oldIndex].doc.ref.isEqual(change.doc.ref)) {
                    // When an item changes position we first remove it
                    // and then add it's new position
                    if (change.oldIndex !== change.newIndex) {
                        combined.splice(change.oldIndex, 1);
                        combined.splice(change.newIndex, 0, change);
                    }
                    else {
                        combined.splice(change.newIndex, 1, change);
                    }
                }
                break;
            case 'removed':
                if (combined[change.oldIndex] && combined[change.oldIndex].doc.ref.isEqual(change.doc.ref)) {
                    combined.splice(change.oldIndex, 1);
                }
                break;
        }
        return combined;
    }

    /**
     * @param {?=} events
     * @return {?}
     */
    function validateEventsArray(events) {
        if (!events || events.length === 0) {
            events = ['added', 'removed', 'modified'];
        }
        return events;
    }
    /**
     * AngularFirestoreCollection service
     *
     * This class creates a reference to a Firestore Collection. A reference and a query are provided in
     * in the constructor. The query can be the unqueried reference if no query is desired.The class
     * is generic which gives you type safety for data update methods and data streaming.
     *
     * This class uses Symbol.observable to transform into Observable using Observable.from().
     *
     * This class is rarely used directly and should be created from the AngularFirestore service.
     *
     * Example:
     *
     * const collectionRef = firebase.firestore.collection('stocks');
     * const query = collectionRef.where('price', '>', '0.01');
     * const fakeStock = new AngularFirestoreCollection<Stock>(collectionRef, query);
     *
     * // NOTE!: the updates are performed on the reference not the query
     * await fakeStock.add({ name: 'FAKE', price: 0.01 });
     *
     * // Subscribe to changes as snapshots. This provides you data updates as well as delta updates.
     * fakeStock.valueChanges().subscribe(value => console.log(value));
     * @template T
     */
    var AngularFirestoreCollection = /** @class */ (function () {
        /**
         * The constructor takes in a CollectionReference and Query to provide wrapper methods
         * for data operations and data streaming.
         *
         * Note: Data operation methods are done on the reference not the query. This means
         * when you update data it is not updating data to the window of your query unless
         * the data fits the criteria of the query. See the AssociatedRefence type for details
         * on this implication.
         * @param {?} ref
         * @param {?} query
         * @param {?} afs
         */
        function AngularFirestoreCollection(ref, query, afs) {
            this.ref = ref;
            this.query = query;
            this.afs = afs;
        }
        /**
         * Listen to the latest change in the stream. This method returns changes
         * as they occur and they are not sorted by query order. This allows you to construct
         * your own data structure.
         * @param {?=} events
         * @return {?}
         */
        AngularFirestoreCollection.prototype.stateChanges = function (events) {
            if (!events || events.length === 0) {
                return docChanges(this.query, this.afs.schedulers.outsideAngular).pipe(this.afs.keepUnstableUntilFirst);
            }
            return docChanges(this.query, this.afs.schedulers.outsideAngular).pipe(operators.map(( /**
             * @param {?} actions
             * @return {?}
             */function (/**
             * @param {?} actions
             * @return {?}
             */ actions) { return actions.filter(( /**
             * @param {?} change
             * @return {?}
             */function (/**
             * @param {?} change
             * @return {?}
             */ change) { return events.indexOf(change.type) > -1; })); })), operators.filter(( /**
             * @param {?} changes
             * @return {?}
             */function (/**
             * @param {?} changes
             * @return {?}
             */ changes) { return changes.length > 0; })), this.afs.keepUnstableUntilFirst);
        };
        /**
         * Create a stream of changes as they occur it time. This method is similar to stateChanges()
         * but it collects each event in an array over time.
         * @param {?=} events
         * @return {?}
         */
        AngularFirestoreCollection.prototype.auditTrail = function (events) {
            return this.stateChanges(events).pipe(operators.scan(( /**
             * @param {?} current
             * @param {?} action
             * @return {?}
             */function (current, action) { return __spread(current, action); }), []));
        };
        /**
         * Create a stream of synchronized changes. This method keeps the local array in sorted
         * query order.
         * @param {?=} events
         * @return {?}
         */
        AngularFirestoreCollection.prototype.snapshotChanges = function (events) {
            /** @type {?} */
            var validatedEvents = validateEventsArray(events);
            /** @type {?} */
            var scheduledSortedChanges$ = sortedChanges(this.query, validatedEvents, this.afs.schedulers.outsideAngular);
            return scheduledSortedChanges$.pipe(this.afs.keepUnstableUntilFirst);
        };
        /**
         * @template K
         * @param {?=} options
         * @return {?}
         */
        AngularFirestoreCollection.prototype.valueChanges = function (options) {
            if (options === void 0) { options = {}; }
            return fromCollectionRef(this.query, this.afs.schedulers.outsideAngular)
                .pipe(operators.map(( /**
         * @param {?} actions
         * @return {?}
         */function (/**
         * @param {?} actions
         * @return {?}
         */ actions) { return actions.payload.docs.map(( /**
             * @param {?} a
             * @return {?}
             */function (/**
             * @param {?} a
             * @return {?}
             */ a) {
                var _a;
                if (options.idField) {
                    return ( /** @type {?} */(Object.assign(Object.assign({}, ( /** @type {?} */(a.data()))), (_a = {}, _a[options.idField] = a.id, _a))));
                }
                else {
                    return a.data();
                }
            })); })), this.afs.keepUnstableUntilFirst);
        };
        /**
         * Retrieve the results of the query once.
         * @param {?=} options
         * @return {?}
         */
        AngularFirestoreCollection.prototype.get = function (options) {
            return rxjs.from(this.query.get(options)).pipe(operators.observeOn(this.afs.schedulers.insideAngular));
        };
        /**
         * Add data to a collection reference.
         *
         * Note: Data operation methods are done on the reference not the query. This means
         * when you update data it is not updating data to the window of your query unless
         * the data fits the criteria of the query.
         * @param {?} data
         * @return {?}
         */
        AngularFirestoreCollection.prototype.add = function (data) {
            return this.ref.add(data);
        };
        /**
         * Create a reference to a single document in a collection.
         * @template T
         * @param {?=} path
         * @return {?}
         */
        AngularFirestoreCollection.prototype.doc = function (path) {
            return new AngularFirestoreDocument(this.ref.doc(path), this.afs);
        };
        return AngularFirestoreCollection;
    }());
    if (false) {
        /** @type {?} */
        AngularFirestoreCollection.prototype.ref;
        /**
         * @type {?}
         * @private
         */
        AngularFirestoreCollection.prototype.query;
        /**
         * @type {?}
         * @private
         */
        AngularFirestoreCollection.prototype.afs;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: document/document.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * AngularFirestoreDocument service
     *
     * This class creates a reference to a Firestore Document. A reference is provided in
     * in the constructor. The class is generic which gives you type safety for data update
     * methods and data streaming.
     *
     * This class uses Symbol.observable to transform into Observable using Observable.from().
     *
     * This class is rarely used directly and should be created from the AngularFirestore service.
     *
     * Example:
     *
     * const fakeStock = new AngularFirestoreDocument<Stock>(doc('stocks/FAKE'));
     * await fakeStock.set({ name: 'FAKE', price: 0.01 });
     * fakeStock.valueChanges().map(snap => {
     *   if(snap.exists) return snap.data();
     *   return null;
     * }).subscribe(value => console.log(value));
     * // OR! Transform using Observable.from() and the data is unwrapped for you
     * Observable.from(fakeStock).subscribe(value => console.log(value));
     * @template T
     */
    var AngularFirestoreDocument = /** @class */ (function () {
        /**
         * The contstuctor takes in a DocumentReference to provide wrapper methods
         * for data operations, data streaming, and Symbol.observable.
         * @param {?} ref
         * @param {?} afs
         */
        function AngularFirestoreDocument(ref, afs) {
            this.ref = ref;
            this.afs = afs;
        }
        /**
         * Create or overwrite a single document.
         * @param {?} data
         * @param {?=} options
         * @return {?}
         */
        AngularFirestoreDocument.prototype.set = function (data, options) {
            return this.ref.set(data, options);
        };
        /**
         * Update some fields of a document without overwriting the entire document.
         * @param {?} data
         * @return {?}
         */
        AngularFirestoreDocument.prototype.update = function (data) {
            return this.ref.update(data);
        };
        /**
         * Delete a document.
         * @return {?}
         */
        AngularFirestoreDocument.prototype.delete = function () {
            return this.ref.delete();
        };
        /**
         * Create a reference to a sub-collection given a path and an optional query
         * function.
         * @template R
         * @param {?} path
         * @param {?=} queryFn
         * @return {?}
         */
        AngularFirestoreDocument.prototype.collection = function (path, queryFn) {
            /** @type {?} */
            var collectionRef = this.ref.collection(path);
            var _a = associateQuery(collectionRef, queryFn), ref = _a.ref, query = _a.query;
            return new AngularFirestoreCollection(ref, query, this.afs);
        };
        /**
         * Listen to snapshot updates from the document.
         * @return {?}
         */
        AngularFirestoreDocument.prototype.snapshotChanges = function () {
            /** @type {?} */
            var scheduledFromDocRef$ = fromDocRef(this.ref, this.afs.schedulers.outsideAngular);
            return scheduledFromDocRef$.pipe(this.afs.keepUnstableUntilFirst);
        };
        /**
         * Listen to unwrapped snapshot updates from the document.
         * @return {?}
         */
        AngularFirestoreDocument.prototype.valueChanges = function () {
            return this.snapshotChanges().pipe(operators.map(( /**
             * @param {?} action
             * @return {?}
             */function (/**
             * @param {?} action
             * @return {?}
             */ action) {
                return action.payload.data();
            })));
        };
        /**
         * Retrieve the document once.
         * @param {?=} options
         * @return {?}
         */
        AngularFirestoreDocument.prototype.get = function (options) {
            return rxjs.from(this.ref.get(options)).pipe(operators.observeOn(this.afs.schedulers.insideAngular));
        };
        return AngularFirestoreDocument;
    }());
    if (false) {
        /** @type {?} */
        AngularFirestoreDocument.prototype.ref;
        /**
         * @type {?}
         * @private
         */
        AngularFirestoreDocument.prototype.afs;
    }

    /**
     * AngularFirestoreCollectionGroup service
     *
     * This class holds a reference to a Firestore Collection Group Query.
     *
     * This class uses Symbol.observable to transform into Observable using Observable.from().
     *
     * This class is rarely used directly and should be created from the AngularFirestore service.
     *
     * Example:
     *
     * const collectionGroup = firebase.firestore.collectionGroup('stocks');
     * const query = collectionRef.where('price', '>', '0.01');
     * const fakeStock = new AngularFirestoreCollectionGroup<Stock>(query, afs);
     *
     * // Subscribe to changes as snapshots. This provides you data updates as well as delta updates.
     * fakeStock.valueChanges().subscribe(value => console.log(value));
     * @template T
     */
    var AngularFirestoreCollectionGroup = /** @class */ (function () {
        /**
         * The constructor takes in a CollectionGroupQuery to provide wrapper methods
         * for data operations and data streaming.
         * @param {?} query
         * @param {?} afs
         */
        function AngularFirestoreCollectionGroup(query, afs) {
            this.query = query;
            this.afs = afs;
        }
        /**
         * Listen to the latest change in the stream. This method returns changes
         * as they occur and they are not sorted by query order. This allows you to construct
         * your own data structure.
         * @param {?=} events
         * @return {?}
         */
        AngularFirestoreCollectionGroup.prototype.stateChanges = function (events) {
            if (!events || events.length === 0) {
                return docChanges(this.query, this.afs.schedulers.outsideAngular).pipe(this.afs.keepUnstableUntilFirst);
            }
            return docChanges(this.query, this.afs.schedulers.outsideAngular)
                .pipe(operators.map(( /**
         * @param {?} actions
         * @return {?}
         */function (/**
         * @param {?} actions
         * @return {?}
         */ actions) { return actions.filter(( /**
             * @param {?} change
             * @return {?}
             */function (/**
             * @param {?} change
             * @return {?}
             */ change) { return events.indexOf(change.type) > -1; })); })), operators.filter(( /**
             * @param {?} changes
             * @return {?}
             */function (/**
             * @param {?} changes
             * @return {?}
             */ changes) { return changes.length > 0; })), this.afs.keepUnstableUntilFirst);
        };
        /**
         * Create a stream of changes as they occur it time. This method is similar to stateChanges()
         * but it collects each event in an array over time.
         * @param {?=} events
         * @return {?}
         */
        AngularFirestoreCollectionGroup.prototype.auditTrail = function (events) {
            return this.stateChanges(events).pipe(operators.scan(( /**
             * @param {?} current
             * @param {?} action
             * @return {?}
             */function (current, action) { return __spread(current, action); }), []));
        };
        /**
         * Create a stream of synchronized changes. This method keeps the local array in sorted
         * query order.
         * @param {?=} events
         * @return {?}
         */
        AngularFirestoreCollectionGroup.prototype.snapshotChanges = function (events) {
            /** @type {?} */
            var validatedEvents = validateEventsArray(events);
            /** @type {?} */
            var scheduledSortedChanges$ = sortedChanges(this.query, validatedEvents, this.afs.schedulers.outsideAngular);
            return scheduledSortedChanges$.pipe(this.afs.keepUnstableUntilFirst);
        };
        /**
         * Listen to all documents in the collection and its possible query as an Observable.
         * @return {?}
         */
        AngularFirestoreCollectionGroup.prototype.valueChanges = function () {
            /** @type {?} */
            var fromCollectionRefScheduled$ = fromCollectionRef(this.query, this.afs.schedulers.outsideAngular);
            return fromCollectionRefScheduled$
                .pipe(operators.map(( /**
         * @param {?} actions
         * @return {?}
         */function (/**
         * @param {?} actions
         * @return {?}
         */ actions) { return actions.payload.docs.map(( /**
             * @param {?} a
             * @return {?}
             */function (/**
             * @param {?} a
             * @return {?}
             */ a) { return a.data(); })); })), this.afs.keepUnstableUntilFirst);
        };
        /**
         * Retrieve the results of the query once.
         * @param {?=} options
         * @return {?}
         */
        AngularFirestoreCollectionGroup.prototype.get = function (options) {
            return rxjs.from(this.query.get(options)).pipe(operators.observeOn(this.afs.schedulers.insideAngular));
        };
        return AngularFirestoreCollectionGroup;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        AngularFirestoreCollectionGroup.prototype.query;
        /**
         * @type {?}
         * @private
         */
        AngularFirestoreCollectionGroup.prototype.afs;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: firestore.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var atFirestore = require('@firebase/firestore');
    /**
     * The value of this token determines whether or not the firestore will have persistance enabled
     * @type {?}
     */
    var ENABLE_PERSISTENCE = new i0.InjectionToken('angularfire2.enableFirestorePersistence');
    /** @type {?} */
    var PERSISTENCE_SETTINGS = new i0.InjectionToken('angularfire2.firestore.persistenceSettings');
    /** @type {?} */
    var SETTINGS = new i0.InjectionToken('angularfire2.firestore.settings');
    /**
     * A utility methods for associating a collection reference with
     * a query.
     *
     * @param {?} collectionRef - A collection reference to query
     * @param {?=} queryFn - The callback to create a query
     *
     * Example:
     * const { query, ref } = associateQuery(docRef.collection('items'), ref => {
     *  return ref.where('age', '<', 200);
     * });
     * @return {?}
     */
    function associateQuery(collectionRef, queryFn) {
        if (queryFn === void 0) { queryFn = ( /**
         * @param {?} ref
         * @return {?}
         */function (/**
         * @param {?} ref
         * @return {?}
         */ ref) { return ref; }); }
        /** @type {?} */
        var query = queryFn(collectionRef);
        /** @type {?} */
        var ref = collectionRef;
        return { query: query, ref: ref };
    }
    /**
     * AngularFirestore Service
     *
     * This service is the main entry point for this feature module. It provides
     * an API for creating Collection and Reference services. These services can
     * then be used to do data updates and observable streams of the data.
     *
     * Example:
     *
     * import { Component } from '\@angular/core';
     * import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '\@angular/fire/firestore';
     * import { Observable } from 'rxjs/Observable';
     * import { from } from 'rxjs/observable';
     *
     * \@Component({
     *   selector: 'app-my-component',
     *   template: `
     *    <h2>Items for {{ (profile | async)?.name }}
     *    <ul>
     *       <li *ngFor="let item of items | async">{{ item.name }}</li>
     *    </ul>
     *    <div class="control-input">
     *       <input type="text" #itemname />
     *       <button (click)="addItem(itemname.value)">Add Item</button>
     *    </div>
     *   `
     * })
     * export class MyComponent implements OnInit {
     *
     *   // services for data operations and data streaming
     *   private readonly itemsRef: AngularFirestoreCollection<Item>;
     *   private readonly profileRef: AngularFirestoreDocument<Profile>;
     *
     *   // observables for template
     *   items: Observable<Item[]>;
     *   profile: Observable<Profile>;
     *
     *   // inject main service
     *   constructor(private readonly afs: AngularFirestore) {}
     *
     *   ngOnInit() {
     *     this.itemsRef = afs.collection('items', ref => ref.where('user', '==', 'davideast').limit(10));
     *     this.items = this.itemsRef.valueChanges().map(snap => snap.docs.map(data => doc.data()));
     *     // this.items = from(this.itemsRef); // you can also do this with no mapping
     *
     *     this.profileRef = afs.doc('users/davideast');
     *     this.profile = this.profileRef.valueChanges();
     *   }
     *
     *   addItem(name: string) {
     *     const user = 'davideast';
     *     this.itemsRef.add({ name, user });
     *   }
     * }
     */
    var AngularFirestore = /** @class */ (function () {
        /**
         * Each Feature of AngularFire has a FirebaseApp injected. This way we
         * don't rely on the main Firebase App instance and we can create named
         * apps and use multiple apps.
         * @param {?} options
         * @param {?} nameOrConfig
         * @param {?} shouldEnablePersistence
         * @param {?} settings
         * @param {?} platformId
         * @param {?} zone
         * @param {?} persistenceSettings
         */
        function AngularFirestore(options, nameOrConfig, shouldEnablePersistence, settings, 
        // tslint:disable-next-line:ban-types
        platformId, zone, persistenceSettings) {
            var _this = this;
            this.schedulers = new i1.ɵAngularFireSchedulers(zone);
            this.keepUnstableUntilFirst = i1.ɵkeepUnstableUntilFirstFactory(this.schedulers);
            this.firestore = zone.runOutsideAngular(( /**
             * @return {?}
             */function () {
                /** @type {?} */
                var app = i1.ɵfirebaseAppFactory(options, zone, nameOrConfig);
                // INVESTIGATE this seems to be required because in the browser build registerFirestore is an Object?
                //             seems like we're fighting ngcc. In the server firestore() isn't available, so I have to register
                //             in the browser registerFirestore is not a function... maybe this is an underlying firebase-js-sdk issue
                if ('registerFirestore' in atFirestore) {
                    (( /** @type {?} */(atFirestore))).registerFirestore(( /** @type {?} */(firebase__default['default'])));
                }
                /** @type {?} */
                var firestore = app.firestore();
                if (settings) {
                    firestore.settings(settings);
                }
                return firestore;
            }));
            if (shouldEnablePersistence && !common.isPlatformServer(platformId)) {
                // We need to try/catch here because not all enablePersistence() failures are caught
                // https://github.com/firebase/firebase-js-sdk/issues/608
                /** @type {?} */
                var enablePersistence = ( /**
                 * @return {?}
                 */function () {
                    try {
                        return rxjs.from(_this.firestore.enablePersistence(persistenceSettings || undefined).then(( /**
                         * @return {?}
                         */function () { return true; }), ( /**
                         * @return {?}
                         */function () { return false; })));
                    }
                    catch (e) {
                        return rxjs.of(false);
                    }
                });
                this.persistenceEnabled$ = zone.runOutsideAngular(enablePersistence);
            }
            else {
                this.persistenceEnabled$ = rxjs.of(false);
            }
        }
        /**
         * @template T
         * @param {?} pathOrRef
         * @param {?=} queryFn
         * @return {?}
         */
        AngularFirestore.prototype.collection = function (pathOrRef, queryFn) {
            /** @type {?} */
            var collectionRef;
            if (typeof pathOrRef === 'string') {
                collectionRef = this.firestore.collection(pathOrRef);
            }
            else {
                collectionRef = pathOrRef;
            }
            var _a = associateQuery(collectionRef, queryFn), ref = _a.ref, query = _a.query;
            /** @type {?} */
            var refInZone = this.schedulers.ngZone.run(( /**
             * @return {?}
             */function () { return ref; }));
            return new AngularFirestoreCollection(refInZone, query, this);
        };
        /**
         * Create a reference to a Firestore Collection Group based on a collectionId
         * and an optional query function to narrow the result
         * set.
         * @template T
         * @param {?} collectionId
         * @param {?=} queryGroupFn
         * @return {?}
         */
        AngularFirestore.prototype.collectionGroup = function (collectionId, queryGroupFn) {
            /** @type {?} */
            var queryFn = queryGroupFn || (( /**
             * @param {?} ref
             * @return {?}
             */function (/**
             * @param {?} ref
             * @return {?}
             */ ref) { return ref; }));
            /** @type {?} */
            var collectionGroup = this.firestore.collectionGroup(collectionId);
            return new AngularFirestoreCollectionGroup(queryFn(collectionGroup), this);
        };
        /**
         * @template T
         * @param {?} pathOrRef
         * @return {?}
         */
        AngularFirestore.prototype.doc = function (pathOrRef) {
            /** @type {?} */
            var ref;
            if (typeof pathOrRef === 'string') {
                ref = this.firestore.doc(pathOrRef);
            }
            else {
                ref = pathOrRef;
            }
            /** @type {?} */
            var refInZone = this.schedulers.ngZone.run(( /**
             * @return {?}
             */function () { return ref; }));
            return new AngularFirestoreDocument(refInZone, this);
        };
        /**
         * Returns a generated Firestore Document Id.
         * @return {?}
         */
        AngularFirestore.prototype.createId = function () {
            return this.firestore.collection('_').doc().id;
        };
        return AngularFirestore;
    }());
    AngularFirestore.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'any'
                },] }
    ];
    /** @nocollapse */
    AngularFirestore.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Inject, args: [i1.FIREBASE_OPTIONS,] }] },
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [i1.FIREBASE_APP_NAME,] }] },
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [ENABLE_PERSISTENCE,] }] },
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [SETTINGS,] }] },
        { type: Object, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
        { type: i0.NgZone },
        { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [PERSISTENCE_SETTINGS,] }] }
    ]; };
    /** @nocollapse */ AngularFirestore.ɵprov = i0.ɵɵdefineInjectable({ factory: function AngularFirestore_Factory() { return new AngularFirestore(i0.ɵɵinject(i1.FIREBASE_OPTIONS), i0.ɵɵinject(i1.FIREBASE_APP_NAME, 8), i0.ɵɵinject(ENABLE_PERSISTENCE, 8), i0.ɵɵinject(SETTINGS, 8), i0.ɵɵinject(i0.PLATFORM_ID), i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(PERSISTENCE_SETTINGS, 8)); }, token: AngularFirestore, providedIn: "any" });
    if (false) {
        /** @type {?} */
        AngularFirestore.prototype.firestore;
        /** @type {?} */
        AngularFirestore.prototype.persistenceEnabled$;
        /** @type {?} */
        AngularFirestore.prototype.schedulers;
        /** @type {?} */
        AngularFirestore.prototype.keepUnstableUntilFirst;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: firestore.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AngularFirestoreModule = /** @class */ (function () {
        function AngularFirestoreModule() {
        }
        /**
         * Attempt to enable persistent storage, if possible
         * @param {?=} persistenceSettings
         * @return {?}
         */
        AngularFirestoreModule.enablePersistence = function (persistenceSettings) {
            return {
                ngModule: AngularFirestoreModule,
                providers: [
                    { provide: ENABLE_PERSISTENCE, useValue: true },
                    { provide: PERSISTENCE_SETTINGS, useValue: persistenceSettings },
                ]
            };
        };
        return AngularFirestoreModule;
    }());
    AngularFirestoreModule.decorators = [
        { type: i0.NgModule, args: [{
                    providers: [AngularFirestore]
                },] }
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: public_api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: angular-fire-firestore.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.AngularFirestore = AngularFirestore;
    exports.AngularFirestoreCollection = AngularFirestoreCollection;
    exports.AngularFirestoreCollectionGroup = AngularFirestoreCollectionGroup;
    exports.AngularFirestoreDocument = AngularFirestoreDocument;
    exports.AngularFirestoreModule = AngularFirestoreModule;
    exports.ENABLE_PERSISTENCE = ENABLE_PERSISTENCE;
    exports.PERSISTENCE_SETTINGS = PERSISTENCE_SETTINGS;
    exports.SETTINGS = SETTINGS;
    exports.associateQuery = associateQuery;
    exports.combineChange = combineChange;
    exports.combineChanges = combineChanges;
    exports.docChanges = docChanges;
    exports.fromCollectionRef = fromCollectionRef;
    exports.fromDocRef = fromDocRef;
    exports.fromRef = fromRef;
    exports.sortedChanges = sortedChanges;
    exports.validateEventsArray = validateEventsArray;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-fire-firestore.umd.js.map
