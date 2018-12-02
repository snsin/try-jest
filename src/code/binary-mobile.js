import {
  cons, car, cdr, toString 
} from 'hexlet-pairs';

const mob = cons({ name: 'left' }, 'right');
console.log(car(mob));
