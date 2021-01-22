import { InjectionToken, NgZone } from '@angular/core';
import { MonoTypeOperatorFunction, Observable, OperatorFunction } from 'rxjs';
import { FirebaseAppConfig, FirebaseOptions, ɵPromiseProxy } from '@angular/fire';
import firebase from 'firebase/app';
import { Settings } from './interfaces';
import * as ɵngcc0 from '@angular/core';
export interface ConfigTemplate {
    [key: string]: string | number | boolean;
}
export declare const SETTINGS: InjectionToken<firebase.remoteConfig.Settings>;
export declare const DEFAULTS: InjectionToken<ConfigTemplate>;
export interface AngularFireRemoteConfig extends ɵPromiseProxy<firebase.remoteConfig.RemoteConfig> {
}
export declare class Value implements firebase.remoteConfig.Value {
    _source: firebase.remoteConfig.ValueSource;
    _value: string;
    asBoolean(): boolean;
    asString(): string;
    asNumber(): number;
    getSource(): firebase.remoteConfig.ValueSource;
    constructor(_source: firebase.remoteConfig.ValueSource, _value: string);
}
export declare class Parameter extends Value {
    key: string;
    fetchTimeMillis: number;
    constructor(key: string, fetchTimeMillis: number, source: firebase.remoteConfig.ValueSource, value: string);
}
export declare const filterRemote: () => MonoTypeOperatorFunction<Parameter | Parameter[]>;
export declare const filterFresh: (howRecentInMillis: number) => MonoTypeOperatorFunction<Parameter | Parameter[]>;
export declare class AngularFireRemoteConfig {
    private zone;
    readonly changes: Observable<Parameter>;
    readonly parameters: Observable<Parameter[]>;
    readonly numbers: Observable<{
        [key: string]: number | undefined;
    }> & {
        [key: string]: Observable<number>;
    };
    readonly booleans: Observable<{
        [key: string]: boolean | undefined;
    }> & {
        [key: string]: Observable<boolean>;
    };
    readonly strings: Observable<{
        [key: string]: string | undefined;
    }> & {
        [key: string]: Observable<string | undefined>;
    };
    constructor(options: FirebaseOptions, nameOrConfig: string | FirebaseAppConfig | null | undefined, settings: Settings | null, defaultConfig: ConfigTemplate | null, zone: NgZone, platformId: Object);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AngularFireRemoteConfig, [null, { optional: true; }, { optional: true; }, { optional: true; }, null, null]>;
}
export declare const budget: <T>(interval: number) => MonoTypeOperatorFunction<T>;
export declare function scanToObject(): OperatorFunction<Parameter, {
    [key: string]: string | undefined;
}>;
export declare function scanToObject(to: 'numbers'): OperatorFunction<Parameter, {
    [key: string]: number | undefined;
}>;
export declare function scanToObject(to: 'booleans'): OperatorFunction<Parameter, {
    [key: string]: boolean | undefined;
}>;
export declare function scanToObject(to: 'strings'): OperatorFunction<Parameter, {
    [key: string]: string | undefined;
}>;
export declare function scanToObject<T extends ConfigTemplate>(template: T): OperatorFunction<Parameter, T & {
    [key: string]: string | undefined;
}>;
export declare function mapToObject(): OperatorFunction<Parameter[], {
    [key: string]: string | undefined;
}>;
export declare function mapToObject(to: 'numbers'): OperatorFunction<Parameter[], {
    [key: string]: number | undefined;
}>;
export declare function mapToObject(to: 'booleans'): OperatorFunction<Parameter[], {
    [key: string]: boolean | undefined;
}>;
export declare function mapToObject(to: 'strings'): OperatorFunction<Parameter[], {
    [key: string]: string | undefined;
}>;
export declare function mapToObject<T extends ConfigTemplate>(template: T): OperatorFunction<Parameter[], T & {
    [key: string]: string | undefined;
}>;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3RlLWNvbmZpZy5kLnRzIiwic291cmNlcyI6WyJyZW1vdGUtY29uZmlnLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbiwgT2JzZXJ2YWJsZSwgT3BlcmF0b3JGdW5jdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRmlyZWJhc2VBcHBDb25maWcsIEZpcmViYXNlT3B0aW9ucywgybVQcm9taXNlUHJveHkgfSBmcm9tICdAYW5ndWxhci9maXJlJztcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuZXhwb3J0IGludGVyZmFjZSBDb25maWdUZW1wbGF0ZSB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbjtcbn1cbmV4cG9ydCBkZWNsYXJlIGNvbnN0IFNFVFRJTkdTOiBJbmplY3Rpb25Ub2tlbjxmaXJlYmFzZS5yZW1vdGVDb25maWcuU2V0dGluZ3M+O1xuZXhwb3J0IGRlY2xhcmUgY29uc3QgREVGQVVMVFM6IEluamVjdGlvblRva2VuPENvbmZpZ1RlbXBsYXRlPjtcbmV4cG9ydCBpbnRlcmZhY2UgQW5ndWxhckZpcmVSZW1vdGVDb25maWcgZXh0ZW5kcyDJtVByb21pc2VQcm94eTxmaXJlYmFzZS5yZW1vdGVDb25maWcuUmVtb3RlQ29uZmlnPiB7XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBWYWx1ZSBpbXBsZW1lbnRzIGZpcmViYXNlLnJlbW90ZUNvbmZpZy5WYWx1ZSB7XG4gICAgX3NvdXJjZTogZmlyZWJhc2UucmVtb3RlQ29uZmlnLlZhbHVlU291cmNlO1xuICAgIF92YWx1ZTogc3RyaW5nO1xuICAgIGFzQm9vbGVhbigpOiBib29sZWFuO1xuICAgIGFzU3RyaW5nKCk6IHN0cmluZztcbiAgICBhc051bWJlcigpOiBudW1iZXI7XG4gICAgZ2V0U291cmNlKCk6IGZpcmViYXNlLnJlbW90ZUNvbmZpZy5WYWx1ZVNvdXJjZTtcbiAgICBjb25zdHJ1Y3Rvcihfc291cmNlOiBmaXJlYmFzZS5yZW1vdGVDb25maWcuVmFsdWVTb3VyY2UsIF92YWx1ZTogc3RyaW5nKTtcbn1cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFBhcmFtZXRlciBleHRlbmRzIFZhbHVlIHtcbiAgICBrZXk6IHN0cmluZztcbiAgICBmZXRjaFRpbWVNaWxsaXM6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3RvcihrZXk6IHN0cmluZywgZmV0Y2hUaW1lTWlsbGlzOiBudW1iZXIsIHNvdXJjZTogZmlyZWJhc2UucmVtb3RlQ29uZmlnLlZhbHVlU291cmNlLCB2YWx1ZTogc3RyaW5nKTtcbn1cbmV4cG9ydCBkZWNsYXJlIGNvbnN0IGZpbHRlclJlbW90ZTogKCkgPT4gTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uPFBhcmFtZXRlciB8IFBhcmFtZXRlcltdPjtcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IGZpbHRlckZyZXNoOiAoaG93UmVjZW50SW5NaWxsaXM6IG51bWJlcikgPT4gTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uPFBhcmFtZXRlciB8IFBhcmFtZXRlcltdPjtcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEFuZ3VsYXJGaXJlUmVtb3RlQ29uZmlnIHtcbiAgICBwcml2YXRlIHpvbmU7XG4gICAgcmVhZG9ubHkgY2hhbmdlczogT2JzZXJ2YWJsZTxQYXJhbWV0ZXI+O1xuICAgIHJlYWRvbmx5IHBhcmFtZXRlcnM6IE9ic2VydmFibGU8UGFyYW1ldGVyW10+O1xuICAgIHJlYWRvbmx5IG51bWJlcnM6IE9ic2VydmFibGU8e1xuICAgICAgICBba2V5OiBzdHJpbmddOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gICAgfT4gJiB7XG4gICAgICAgIFtrZXk6IHN0cmluZ106IE9ic2VydmFibGU8bnVtYmVyPjtcbiAgICB9O1xuICAgIHJlYWRvbmx5IGJvb2xlYW5zOiBPYnNlcnZhYmxlPHtcbiAgICAgICAgW2tleTogc3RyaW5nXTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgICB9PiAmIHtcbiAgICAgICAgW2tleTogc3RyaW5nXTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICB9O1xuICAgIHJlYWRvbmx5IHN0cmluZ3M6IE9ic2VydmFibGU8e1xuICAgICAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgfT4gJiB7XG4gICAgICAgIFtrZXk6IHN0cmluZ106IE9ic2VydmFibGU8c3RyaW5nIHwgdW5kZWZpbmVkPjtcbiAgICB9O1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IEZpcmViYXNlT3B0aW9ucywgbmFtZU9yQ29uZmlnOiBzdHJpbmcgfCBGaXJlYmFzZUFwcENvbmZpZyB8IG51bGwgfCB1bmRlZmluZWQsIHNldHRpbmdzOiBTZXR0aW5ncyB8IG51bGwsIGRlZmF1bHRDb25maWc6IENvbmZpZ1RlbXBsYXRlIHwgbnVsbCwgem9uZTogTmdab25lLCBwbGF0Zm9ybUlkOiBPYmplY3QpO1xufVxuZXhwb3J0IGRlY2xhcmUgY29uc3QgYnVkZ2V0OiA8VD4oaW50ZXJ2YWw6IG51bWJlcikgPT4gTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uPFQ+O1xuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gc2NhblRvT2JqZWN0KCk6IE9wZXJhdG9yRnVuY3Rpb248UGFyYW1ldGVyLCB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgdW5kZWZpbmVkO1xufT47XG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBzY2FuVG9PYmplY3QodG86ICdudW1iZXJzJyk6IE9wZXJhdG9yRnVuY3Rpb248UGFyYW1ldGVyLCB7XG4gICAgW2tleTogc3RyaW5nXTogbnVtYmVyIHwgdW5kZWZpbmVkO1xufT47XG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBzY2FuVG9PYmplY3QodG86ICdib29sZWFucycpOiBPcGVyYXRvckZ1bmN0aW9uPFBhcmFtZXRlciwge1xuICAgIFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG59PjtcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIHNjYW5Ub09iamVjdCh0bzogJ3N0cmluZ3MnKTogT3BlcmF0b3JGdW5jdGlvbjxQYXJhbWV0ZXIsIHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59PjtcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIHNjYW5Ub09iamVjdDxUIGV4dGVuZHMgQ29uZmlnVGVtcGxhdGU+KHRlbXBsYXRlOiBUKTogT3BlcmF0b3JGdW5jdGlvbjxQYXJhbWV0ZXIsIFQgJiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgdW5kZWZpbmVkO1xufT47XG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBtYXBUb09iamVjdCgpOiBPcGVyYXRvckZ1bmN0aW9uPFBhcmFtZXRlcltdLCB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgdW5kZWZpbmVkO1xufT47XG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBtYXBUb09iamVjdCh0bzogJ251bWJlcnMnKTogT3BlcmF0b3JGdW5jdGlvbjxQYXJhbWV0ZXJbXSwge1xuICAgIFtrZXk6IHN0cmluZ106IG51bWJlciB8IHVuZGVmaW5lZDtcbn0+O1xuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gbWFwVG9PYmplY3QodG86ICdib29sZWFucycpOiBPcGVyYXRvckZ1bmN0aW9uPFBhcmFtZXRlcltdLCB7XG4gICAgW2tleTogc3RyaW5nXTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbn0+O1xuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gbWFwVG9PYmplY3QodG86ICdzdHJpbmdzJyk6IE9wZXJhdG9yRnVuY3Rpb248UGFyYW1ldGVyW10sIHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59PjtcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIG1hcFRvT2JqZWN0PFQgZXh0ZW5kcyBDb25maWdUZW1wbGF0ZT4odGVtcGxhdGU6IFQpOiBPcGVyYXRvckZ1bmN0aW9uPFBhcmFtZXRlcltdLCBUICYge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHVuZGVmaW5lZDtcbn0+O1xuIl19