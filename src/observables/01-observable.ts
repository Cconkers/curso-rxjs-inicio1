import {Observable, Observer} from 'rxjs';


const observer: Observer<any> = {
        next: (value) => console.log('next [obs]: ', value),
        error: (error) => console.warn('error [obs]: ', error),
        complete: () => console.info('Complete [obs]')
}

const obs$ = new Observable<string>( subs => {

subs.next('Hola');
subs.next('Mundo');
subs.next('Hola');
subs.next('Mundo');

//Creating Error

// const a = undefined;
// a.name = 'Juan';

subs.complete();
} );

obs$.subscribe(observer);

// obs$.subscribe( {
//         next: v => console.log('next: ', v),
//          error: e => console.error('error: ', e),
//          complete: () => console.info('Complete')
// }     
//  );  

