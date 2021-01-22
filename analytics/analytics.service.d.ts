import { ComponentFactoryResolver, Injector, NgZone, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAnalytics } from './analytics';
import { Title } from '@angular/platform-browser';
import * as ɵngcc0 from '@angular/core';
export declare class ScreenTrackingService implements OnDestroy {
    private disposable;
    constructor(analytics: AngularFireAnalytics, router: Router, title: Title, componentFactoryResolver: ComponentFactoryResolver, platformId: Object, debugModeEnabled: boolean | null, zone: NgZone, injector: Injector);
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ScreenTrackingService, [null, { optional: true; }, { optional: true; }, null, null, { optional: true; }, null, null]>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ScreenTrackingService>;
}
export declare class UserTrackingService implements OnDestroy {
    private disposable;
    constructor(analytics: AngularFireAnalytics, zone: NgZone, platformId: Object);
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserTrackingService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<UserTrackingService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHl0aWNzLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiYW5hbHl0aWNzLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7O0FBSUE7Ozs7Ozs7QUFLQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0b3IsIE5nWm9uZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQW5ndWxhckZpcmVBbmFseXRpY3MgfSBmcm9tICcuL2FuYWx5dGljcyc7XG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU2NyZWVuVHJhY2tpbmdTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIGRpc3Bvc2FibGU7XG4gICAgY29uc3RydWN0b3IoYW5hbHl0aWNzOiBBbmd1bGFyRmlyZUFuYWx5dGljcywgcm91dGVyOiBSb3V0ZXIsIHRpdGxlOiBUaXRsZSwgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIHBsYXRmb3JtSWQ6IE9iamVjdCwgZGVidWdNb2RlRW5hYmxlZDogYm9vbGVhbiB8IG51bGwsIHpvbmU6IE5nWm9uZSwgaW5qZWN0b3I6IEluamVjdG9yKTtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVXNlclRyYWNraW5nU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBkaXNwb3NhYmxlO1xuICAgIGNvbnN0cnVjdG9yKGFuYWx5dGljczogQW5ndWxhckZpcmVBbmFseXRpY3MsIHpvbmU6IE5nWm9uZSwgcGxhdGZvcm1JZDogT2JqZWN0KTtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19