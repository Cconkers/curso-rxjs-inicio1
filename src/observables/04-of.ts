import {of} from 'rxjs';

const obs$ = of(1,2,3,4,6,7,8,9,2,3,4,5,6,7,8,9);

obs$.subscribe( {
        next: (value) => console.log('next: ', value),
       error: null,
        complete: () => console.info('Sequence completed')
}
 );

 console.log('End of Observable');
 