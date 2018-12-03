import {
  cons, car, cdr, toString 
} from 'hexlet-pairs';

import { l as list, reduce } from 'hexlet-pairs-data';

const mob = cons({ name: 'left' }, 'right');
console.log(car(mob));
console.log(list(1, 2, 3, 4));
console.log(reduce((i, acc) => [...acc, i], [], list('o', 'my', 'god')));
