import { filter, fromEvent, range, from, map } from 'rxjs';

range(20, 30).pipe(
        filter((val, i )=> {
                console.log('index', i);
             return   val % 2 === 1
        })
)
// .subscribe(console.log)

interface Personaje  {
        tipo: string;
        nombre: string;
}

const personajes: Personaje[] = [
        {
                tipo: 'Héroe',
                nombre: 'Batman'
        },
        {
                tipo: 'Héroe',
                nombre: 'Robin'
        },
        {
                tipo: 'Vilano',
                nombre: 'Joker'
        },
        {
                tipo: 'Villano',
                nombre: 'Cerveza'
        }
]

from(personajes).pipe(
        filter(p => p.tipo === 'Héroe')
).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
        map(event => event.code )
        filter(  )
);
keyup$.subscribe(console.log)