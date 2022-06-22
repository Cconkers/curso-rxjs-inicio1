import { Observable, Observer, subscribeOn, Subscriber, Subject } from 'rxjs';


const observer: Observer<any> = {
        next: (value) => console.log('next [obs]: ', value),
        error: (error) => console.warn('error [obs]: ', error),
        complete: () => console.info('Complete [obs]')
}

const intervalo$ = new Observable<number>(subs => {

        const intervaliD = setInterval(
                () => subs.next(Math.random()), 500)
                return () => {
                        clearInterval(intervaliD);
                        console.log('Interval destroyed');
                }
        })

/**
 * 1- Casteo múltiple
 * 2- También es un observer
 * 3- Next, error, complete
 */

const subject$ = new Subject();

const subscription = intervalo$.subscribe(subject$);

const subs1 = subject$.subscribe(rnd => console.log('subs1', rnd));
const subs2 = subject$.subscribe(rnd => console.log('subs2', rnd));

setTimeout(()=> {
subject$.next(10);
subject$.complete();
subscription.unsubscribe();
}, 3500)