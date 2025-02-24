/**
 * @fileoverview added by tsickle
 * Generated from: analytics.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Optional } from '@angular/core';
import { ScreenTrackingService, UserTrackingService } from './analytics.service';
import { AngularFireAnalytics } from './analytics';
export class AngularFireAnalyticsModule {
    /**
     * @param {?} analytics
     * @param {?} screenTracking
     * @param {?} userTracking
     */
    constructor(analytics, screenTracking, userTracking) {
        // calling anything on analytics will eagerly load the SDK
        // tslint:disable-next-line:no-unused-expression
        analytics.app.then((/**
         * @return {?}
         */
        () => { }));
    }
}
AngularFireAnalyticsModule.decorators = [
    { type: NgModule, args: [{
                providers: [AngularFireAnalytics]
            },] }
];
/** @nocollapse */
AngularFireAnalyticsModule.ctorParameters = () => [
    { type: AngularFireAnalytics },
    { type: ScreenTrackingService, decorators: [{ type: Optional }] },
    { type: UserTrackingService, decorators: [{ type: Optional }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHl0aWNzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvd29ya3NwYWNlL3NyYy9hbmFseXRpY3MvIiwic291cmNlcyI6WyJhbmFseXRpY3MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLG1CQUFtQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBS25ELE1BQU0sT0FBTywwQkFBMEI7Ozs7OztJQUNyQyxZQUNFLFNBQStCLEVBQ25CLGNBQXFDLEVBQ3JDLFlBQWlDO1FBRTdDLDBEQUEwRDtRQUMxRCxnREFBZ0Q7UUFDaEQsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJOzs7UUFBQyxHQUFHLEVBQUUsR0FBRSxDQUFDLEVBQUMsQ0FBQztJQUMvQixDQUFDOzs7WUFaRixRQUFRLFNBQUM7Z0JBQ1IsU0FBUyxFQUFFLENBQUUsb0JBQW9CLENBQUU7YUFDcEM7Ozs7WUFKUSxvQkFBb0I7WUFEcEIscUJBQXFCLHVCQVN6QixRQUFRO1lBVG1CLG1CQUFtQix1QkFVOUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2NyZWVuVHJhY2tpbmdTZXJ2aWNlLCBVc2VyVHJhY2tpbmdTZXJ2aWNlIH0gZnJvbSAnLi9hbmFseXRpY3Muc2VydmljZSc7XG5pbXBvcnQgeyBBbmd1bGFyRmlyZUFuYWx5dGljcyB9IGZyb20gJy4vYW5hbHl0aWNzJztcblxuQE5nTW9kdWxlKHtcbiAgcHJvdmlkZXJzOiBbIEFuZ3VsYXJGaXJlQW5hbHl0aWNzIF1cbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhckZpcmVBbmFseXRpY3NNb2R1bGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBhbmFseXRpY3M6IEFuZ3VsYXJGaXJlQW5hbHl0aWNzLFxuICAgIEBPcHRpb25hbCgpIHNjcmVlblRyYWNraW5nOiBTY3JlZW5UcmFja2luZ1NlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgdXNlclRyYWNraW5nOiBVc2VyVHJhY2tpbmdTZXJ2aWNlXG4gICkge1xuICAgIC8vIGNhbGxpbmcgYW55dGhpbmcgb24gYW5hbHl0aWNzIHdpbGwgZWFnZXJseSBsb2FkIHRoZSBTREtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdW51c2VkLWV4cHJlc3Npb25cbiAgICBhbmFseXRpY3MuYXBwLnRoZW4oKCkgPT4ge30pO1xuICB9XG59XG4iXX0=