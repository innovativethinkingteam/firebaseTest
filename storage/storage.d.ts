import { InjectionToken, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseAppConfig, FirebaseOptions, ɵAngularFireSchedulers } from '@angular/fire';
import { UploadMetadata } from './interfaces';
import 'firebase/storage';
import firebase from 'firebase/app';
import * as ɵngcc0 from '@angular/core';
export declare const BUCKET: InjectionToken<string>;
/**
 * AngularFireStorage Service
 *
 * This service is the main entry point for this feature module. It provides
 * an API for uploading and downloading binary files from Cloud Storage for
 * Firebase.
 */
export declare class AngularFireStorage {
    readonly storage: firebase.storage.Storage;
    readonly keepUnstableUntilFirst: <T>(obs: Observable<T>) => Observable<T>;
    readonly schedulers: ɵAngularFireSchedulers;
    constructor(options: FirebaseOptions, nameOrConfig: string | FirebaseAppConfig | null | undefined, storageBucket: string | null, platformId: Object, zone: NgZone);
    ref(path: string): import("./ref").AngularFireStorageReference;
    upload(path: string, data: any, metadata?: UploadMetadata): import("./task").AngularFireUploadTask;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AngularFireStorage, [null, { optional: true; }, { optional: true; }, null, null]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5kLnRzIiwic291cmNlcyI6WyJzdG9yYWdlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFNQTs7Ozs7Ozs7Ozs7Ozs7OztBQWVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRmlyZWJhc2VBcHBDb25maWcsIEZpcmViYXNlT3B0aW9ucywgybVBbmd1bGFyRmlyZVNjaGVkdWxlcnMgfSBmcm9tICdAYW5ndWxhci9maXJlJztcbmltcG9ydCB7IFVwbG9hZE1ldGFkYXRhIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCAnZmlyZWJhc2Uvc3RvcmFnZSc7XG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJztcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IEJVQ0tFVDogSW5qZWN0aW9uVG9rZW48c3RyaW5nPjtcbi8qKlxuICogQW5ndWxhckZpcmVTdG9yYWdlIFNlcnZpY2VcbiAqXG4gKiBUaGlzIHNlcnZpY2UgaXMgdGhlIG1haW4gZW50cnkgcG9pbnQgZm9yIHRoaXMgZmVhdHVyZSBtb2R1bGUuIEl0IHByb3ZpZGVzXG4gKiBhbiBBUEkgZm9yIHVwbG9hZGluZyBhbmQgZG93bmxvYWRpbmcgYmluYXJ5IGZpbGVzIGZyb20gQ2xvdWQgU3RvcmFnZSBmb3JcbiAqIEZpcmViYXNlLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBbmd1bGFyRmlyZVN0b3JhZ2Uge1xuICAgIHJlYWRvbmx5IHN0b3JhZ2U6IGZpcmViYXNlLnN0b3JhZ2UuU3RvcmFnZTtcbiAgICByZWFkb25seSBrZWVwVW5zdGFibGVVbnRpbEZpcnN0OiA8VD4ob2JzOiBPYnNlcnZhYmxlPFQ+KSA9PiBPYnNlcnZhYmxlPFQ+O1xuICAgIHJlYWRvbmx5IHNjaGVkdWxlcnM6IMm1QW5ndWxhckZpcmVTY2hlZHVsZXJzO1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IEZpcmViYXNlT3B0aW9ucywgbmFtZU9yQ29uZmlnOiBzdHJpbmcgfCBGaXJlYmFzZUFwcENvbmZpZyB8IG51bGwgfCB1bmRlZmluZWQsIHN0b3JhZ2VCdWNrZXQ6IHN0cmluZyB8IG51bGwsIHBsYXRmb3JtSWQ6IE9iamVjdCwgem9uZTogTmdab25lKTtcbiAgICByZWYocGF0aDogc3RyaW5nKTogaW1wb3J0KFwiLi9yZWZcIikuQW5ndWxhckZpcmVTdG9yYWdlUmVmZXJlbmNlO1xuICAgIHVwbG9hZChwYXRoOiBzdHJpbmcsIGRhdGE6IGFueSwgbWV0YWRhdGE/OiBVcGxvYWRNZXRhZGF0YSk6IGltcG9ydChcIi4vdGFza1wiKS5Bbmd1bGFyRmlyZVVwbG9hZFRhc2s7XG59XG4iXX0=