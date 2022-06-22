import { asyncScheduler } from 'rxjs';

// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000)

const hi = () => console.log('Hello World');
const hi2 = (nombre) => console.log(`Hello ${nombre}`);

// asyncScheduler.schedule( hi, 2000 );
// asyncScheduler.schedule( hi2, 2000, 'Juan Alfredo' );

const subs = asyncScheduler.schedule( function (state) {
        console.log('state', state);
        this.schedule(state + 1, 1000)
}, 3000, 1)

// setTimeout(()=> {
//         subs.unsubscribe();
// }, 6000);

asyncScheduler.schedule( () => subs.unsubscribe(), 6000 );