import { l as list, reduce } from 'hexlet-pairs-data';

const makeMobile = (left, right) => list(left, right);
const makeBranch = (length, structure) => list(length, structure);
export const printList = (elements) => {
  const arr = reduce((i, acc) => [...acc, i], [], elements);
  return `(${arr.join(', ')})`;
};

export const noop = () => {};

console.log(list(1, 2, 3, 4));
console.log(reduce((i, acc) => [...acc, i], [], makeMobile(makeBranch(10, 6), makeBranch(6, 10))));
