import {
  l as list, reduce, head, tail, isList,
} from 'hexlet-pairs-data';

export const makeMobile = (left, right) => list(left, right);
export const makeBranch = (length, structure) => list(length, structure);
export const printList = (elements) => {
  const arr = reduce((i, acc) => [...acc, i], [], elements);
  return `(${arr.join(', ')})`;
};
export const noop = () => {};

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

export const totalWeight = (mobile) => {
  const getWeight = elem => (isList(elem) ? totalWeight(elem) : elem);
  const rightBrElem = branchStructure(rightBranch(mobile));
  const leftBrElem = branchStructure(leftBranch(mobile));
  return getWeight(rightBrElem) + getWeight(leftBrElem);
};

export const isBalanced = (mobile) => {
  const moment = (branch) => {
    const brChild = branchStructure(branch);
    const childWeight = isList(brChild) ? totalWeight(brChild) : brChild;
    return branchLength(branch) * childWeight;
  };
  const leftBr = leftBranch(mobile);
  const rightBr = rightBranch(mobile);
  if (moment(leftBr) !== moment(rightBr)) {
    return false;
  }
  const leftChild = branchStructure(leftBr);
  const rightChild = branchStructure(rightBr);
  if (isList(leftChild)) {
    return isBalanced(leftChild);
  }
  if (isList(rightChild)) {
    return isBalanced(rightChild);
  }
  return true;
};


console.log(list(1, 2, 3, 4));
console.log(reduce((i, acc) => [...acc, i], [], makeMobile(makeBranch(10, 6), makeBranch(6, 10))));
