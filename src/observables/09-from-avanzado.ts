import { from, of } from 'rxjs';

/**
 * of = toma argumentos y genera una secuencia
 * from = array, promise, iterable, observable
 */


const obs =  {
        next: val => console.log('Next', val),
        complete: () => console.log('Complete')
};

// const source$ = from([1,2,3,4,5]);
// const source$ = of(...[1,2,3,4,5]);
// const source$ = from('Pepeillo');


const source$ = from(fetch('https://api.github.com/users/cconker'));

// source$.subscribe(async resp => {
//         console.log(resp);

//         const dataResp = await        resp.json();

//         console.log(dataResp);
// })

// source$.subscribe(obs);

const myGenerator = function*() {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
        yield 5;
}

const myIterable = myGenerator();

// for (let id of myIterable) {
//         console.log(id);
// }

from(myIterable).subscribe(obs)
