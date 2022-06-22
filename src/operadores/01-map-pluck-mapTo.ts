import { map, range, fromEvent, pluck, mapTo } from 'rxjs';

// const obs = {
//         next: (val) => console.log('Next', val),
//         complete: console.log('Complete')
// }

// range(1,5)
// .pipe(map<number, string>(
//         val => {
//                 return (val *10).toString()
//         }
// ))
// .subscribe(val => console.log(val))

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const  keyupCode$ = keyup$.pipe(map(event => event.code))
const keyupPluck$ = keyup$.pipe(
        pluck('target', 'baseURI')
);
const keyupMapTo$ = keyup$.pipe(
        mapTo('Tecla presionada')
);

keyupCode$.subscribe(console.log)
keyupCode$.subscribe(code => console.log('map', code))
keyupPluck$.subscribe(code => console.log('pluck', code))
keyupMapTo$.subscribe(code => console.log('mapTo', code))


