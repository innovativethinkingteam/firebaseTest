import { InjectionToken, NgZone } from '@angular/core';
import { AngularFireList, AngularFireObject, PathReference, QueryFn } from './interfaces';
import { FirebaseAppConfig, FirebaseOptions, ɵAngularFireSchedulers } from '@angular/fire';
import { Observable } from 'rxjs';
import 'firebase/database';
import firebase from 'firebase/app';
import * as ɵngcc0 from '@angular/core';
export declare const URL: InjectionToken<string>;
export declare class AngularFireDatabase {
    readonly database: firebase.database.Database;
    readonly schedulers: ɵAngularFireSchedulers;
    readonly keepUnstableUntilFirst: <T>(obs$: Observable<T>) => Observable<T>;
    constructor(options: FirebaseOptions, nameOrConfig: string | FirebaseAppConfig | null | undefined, databaseURL: string | null, platformId: Object, zone: NgZone);
    list<T>(pathOrRef: PathReference, queryFn?: QueryFn): AngularFireList<T>;
    object<T>(pathOrRef: PathReference): AngularFireObject<T>;
    createPushId(): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AngularFireDatabase, [null, { optional: true; }, { optional: true; }, null, null]>;
}
export { PathReference, DatabaseSnapshot, ChildEvent, ListenEvent, QueryFn, AngularFireList, AngularFireObject, AngularFireAction, Action, SnapshotAction } from './interfaces';

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2UuZC50cyIsInNvdXJjZXMiOlsiZGF0YWJhc2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQU1BOzs7Ozs7Ozs7O0FBU0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbmd1bGFyRmlyZUxpc3QsIEFuZ3VsYXJGaXJlT2JqZWN0LCBQYXRoUmVmZXJlbmNlLCBRdWVyeUZuIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEZpcmViYXNlQXBwQ29uZmlnLCBGaXJlYmFzZU9wdGlvbnMsIMm1QW5ndWxhckZpcmVTY2hlZHVsZXJzIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgJ2ZpcmViYXNlL2RhdGFiYXNlJztcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xuZXhwb3J0IGRlY2xhcmUgY29uc3QgVVJMOiBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+O1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQW5ndWxhckZpcmVEYXRhYmFzZSB7XG4gICAgcmVhZG9ubHkgZGF0YWJhc2U6IGZpcmViYXNlLmRhdGFiYXNlLkRhdGFiYXNlO1xuICAgIHJlYWRvbmx5IHNjaGVkdWxlcnM6IMm1QW5ndWxhckZpcmVTY2hlZHVsZXJzO1xuICAgIHJlYWRvbmx5IGtlZXBVbnN0YWJsZVVudGlsRmlyc3Q6IDxUPihvYnMkOiBPYnNlcnZhYmxlPFQ+KSA9PiBPYnNlcnZhYmxlPFQ+O1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IEZpcmViYXNlT3B0aW9ucywgbmFtZU9yQ29uZmlnOiBzdHJpbmcgfCBGaXJlYmFzZUFwcENvbmZpZyB8IG51bGwgfCB1bmRlZmluZWQsIGRhdGFiYXNlVVJMOiBzdHJpbmcgfCBudWxsLCBwbGF0Zm9ybUlkOiBPYmplY3QsIHpvbmU6IE5nWm9uZSk7XG4gICAgbGlzdDxUPihwYXRoT3JSZWY6IFBhdGhSZWZlcmVuY2UsIHF1ZXJ5Rm4/OiBRdWVyeUZuKTogQW5ndWxhckZpcmVMaXN0PFQ+O1xuICAgIG9iamVjdDxUPihwYXRoT3JSZWY6IFBhdGhSZWZlcmVuY2UpOiBBbmd1bGFyRmlyZU9iamVjdDxUPjtcbiAgICBjcmVhdGVQdXNoSWQoKTogc3RyaW5nO1xufVxuZXhwb3J0IHsgUGF0aFJlZmVyZW5jZSwgRGF0YWJhc2VTbmFwc2hvdCwgQ2hpbGRFdmVudCwgTGlzdGVuRXZlbnQsIFF1ZXJ5Rm4sIEFuZ3VsYXJGaXJlTGlzdCwgQW5ndWxhckZpcmVPYmplY3QsIEFuZ3VsYXJGaXJlQWN0aW9uLCBBY3Rpb24sIFNuYXBzaG90QWN0aW9uIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbiJdfQ==