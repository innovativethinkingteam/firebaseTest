import { NgZone } from '@angular/core';
import { Observable, Operator, SchedulerAction, SchedulerLike, Subscriber, Subscription, TeardownLogic } from 'rxjs';
/**
 * Schedules tasks so that they are invoked inside the Zone that is passed in the constructor.
 */
export declare class ɵZoneScheduler implements SchedulerLike {
    private zone;
    private delegate;
    constructor(zone: any, delegate?: any);
    now(): any;
    schedule(work: (this: SchedulerAction<any>, state?: any) => void, delay?: number, state?: any): Subscription;
}
export declare class ɵBlockUntilFirstOperator<T> implements Operator<T, T> {
    private zone;
    private task;
    constructor(zone: any);
    call(subscriber: Subscriber<T>, source: Observable<T>): TeardownLogic;
    private unscheduleTask;
}
export declare class ɵAngularFireSchedulers {
    ngZone: NgZone;
    readonly outsideAngular: ɵZoneScheduler;
    readonly insideAngular: ɵZoneScheduler;
    constructor(ngZone: NgZone);
}
/**
 * Operator to block the zone until the first value has been emitted or the observable
 * has completed/errored. This is used to make sure that universal waits until the first
 * value from firebase but doesn't block the zone forever since the firebase subscription
 * is still alive.
 */
export declare function ɵkeepUnstableUntilFirstFactory(schedulers: ɵAngularFireSchedulers): <T>(obs$: Observable<T>) => Observable<T>;
declare type FunctionPropertyNames<T> = {
    [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];
declare type PromiseReturningFunctionPropertyNames<T> = {
    [K in FunctionPropertyNames<T>]: ReturnType<T[K]> extends Promise<any> ? K : never;
}[FunctionPropertyNames<T>];
declare type NonPromiseReturningFunctionPropertyNames<T> = {
    [K in FunctionPropertyNames<T>]: ReturnType<T[K]> extends Promise<any> ? never : K;
}[FunctionPropertyNames<T>];
declare type NonFunctionPropertyNames<T> = {
    [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];
export declare type ɵPromiseProxy<T> = {
    [K in NonFunctionPropertyNames<T>]: Promise<T[K]>;
} & {
    [K in NonPromiseReturningFunctionPropertyNames<T>]: (...args: Parameters<T[K]>) => Promise<ReturnType<T[K]>>;
} & {
    [K in PromiseReturningFunctionPropertyNames<T>]: (...args: Parameters<T[K]>) => ReturnType<T[K]>;
};
export declare const ɵlazySDKProxy: (klass: any, observable: Observable<any>, zone: NgZone) => any;
export declare const ɵapplyMixins: (derivedCtor: any, constructors: any[]) => void;
export {};
