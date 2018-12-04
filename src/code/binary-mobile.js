import { l as list, reduce, head, tail, isList } from 'hexlet-pairs-data';

export const makeMobile = (left, right) => list(left, right);
export const makeBranch = (length, structure) => list(length, structure);
export const printList = (elements) => {
  const arr = reduce((i, acc) => [...acc, i], [], elements);
  return `(${arr.join(', ')})`;
};

export const leftBranch = (mobile) => {
  const left = head(mobile);
  return isList(left) ? left : null;
};
export const rightBranch = (mobile) => {
  const rest = tail(mobile);
  return isList(rest) ? head(rest) : null;
};
export const branchLength = branch => head(branch);
export const branchStructure = branch => head(tail(branch));
export const noop = () => {};

console.log(list(1, 2, 3, 4));
console.log(reduce((i, acc) => [...acc, i], [], makeMobile(makeBranch(10, 6), makeBranch(6, 10))));
