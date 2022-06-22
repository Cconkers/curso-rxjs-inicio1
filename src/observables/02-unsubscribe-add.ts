import { Observable, Observer } from 'rxjs';


const observer: Observer<any> = {
        next: (value) => console.log('next [obs]: ', value),
        error: (error) => console.warn('error [obs]: ', error),
        complete: () => console.info('Complete [obs]')
}

const intervalo$ = new Observable<number>(subscriber => {
        //Counter
        console.log(subscriber);
        let count = 0;
      const interval = setInterval(() => {
                //Every single second, emit a next number
                count++;
                subscriber.next(count);
                console.log(count);
        }, 1000);
        setTimeout(() => {
                subscriber.complete();
        }
        , 2500);
        return () => {
                clearInterval(interval);
                console.log('Interval destroyed');
        }

});

const subs1 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);

subs1.add(subs2);
subs1.add(subs3);
setTimeout(() => {
        subs1.unsubscribe()
        // subs2.unsubscribe(),
        // subs3.unsubscribe(),
        console.log('Timeout complete');
}, 3000);
