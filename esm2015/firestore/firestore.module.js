/**
 * @fileoverview added by tsickle
 * Generated from: firestore.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { AngularFirestore, ENABLE_PERSISTENCE, PERSISTENCE_SETTINGS } from './firestore';
export class AngularFirestoreModule {
    /**
     * Attempt to enable persistent storage, if possible
     * @param {?=} persistenceSettings
     * @return {?}
     */
    static enablePersistence(persistenceSettings) {
        return {
            ngModule: AngularFirestoreModule,
            providers: [
                { provide: ENABLE_PERSISTENCE, useValue: true },
                { provide: PERSISTENCE_SETTINGS, useValue: persistenceSettings },
            ]
        };
    }
}
AngularFirestoreModule.decorators = [
    { type: NgModule, args: [{
                providers: [AngularFirestore]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZXN0b3JlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvd29ya3NwYWNlL3NyYy9maXJlc3RvcmUvIiwic291cmNlcyI6WyJmaXJlc3RvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLG9CQUFvQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBS3pGLE1BQU0sT0FBTyxzQkFBc0I7Ozs7OztJQUlqQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsbUJBQXlDO1FBQ2hFLE9BQU87WUFDTCxRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO2dCQUMvQyxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUU7YUFDakU7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBZkYsUUFBUSxTQUFDO2dCQUNSLFNBQVMsRUFBRSxDQUFFLGdCQUFnQixDQUFFO2FBQ2hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBlcnNpc3RlbmNlU2V0dGluZ3MgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgQW5ndWxhckZpcmVzdG9yZSwgRU5BQkxFX1BFUlNJU1RFTkNFLCBQRVJTSVNURU5DRV9TRVRUSU5HUyB9IGZyb20gJy4vZmlyZXN0b3JlJztcblxuQE5nTW9kdWxlKHtcbiAgcHJvdmlkZXJzOiBbIEFuZ3VsYXJGaXJlc3RvcmUgXVxufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFyRmlyZXN0b3JlTW9kdWxlIHtcbiAgLyoqXG4gICAqIEF0dGVtcHQgdG8gZW5hYmxlIHBlcnNpc3RlbnQgc3RvcmFnZSwgaWYgcG9zc2libGVcbiAgICovXG4gIHN0YXRpYyBlbmFibGVQZXJzaXN0ZW5jZShwZXJzaXN0ZW5jZVNldHRpbmdzPzogUGVyc2lzdGVuY2VTZXR0aW5ncyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8QW5ndWxhckZpcmVzdG9yZU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQW5ndWxhckZpcmVzdG9yZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IEVOQUJMRV9QRVJTSVNURU5DRSwgdXNlVmFsdWU6IHRydWUgfSxcbiAgICAgICAgeyBwcm92aWRlOiBQRVJTSVNURU5DRV9TRVRUSU5HUywgdXNlVmFsdWU6IHBlcnNpc3RlbmNlU2V0dGluZ3MgfSxcbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=