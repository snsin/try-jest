import { car, cdr, cons, isPair, } from 'hexlet-pairs';

export const makeMobile = (left, right) => cons(left, right);

export const makeBranch = (length, weight) => cons(length, weight);

export const leftBranch = mobile => car(mobile);

export const rightBranch = mobile => cdr(mobile);

export const branchLength = branch => car(branch);

export const branchStructure = branch => cdr(branch);

/*  should add this abstraction to not rewrite to much code
    if added, it is needed to override only selectors and 'isMobile' itself
    rest code stays unchanged */
const isMobile = candidate => isPair(candidate);


export const totalWeight = (mobile) => {
  const getWeight = elem => (isMobile(elem) ? totalWeight(elem) : elem);
  const rightBrElem = branchStructure(rightBranch(mobile));
  const leftBrElem = branchStructure(leftBranch(mobile));
  return getWeight(rightBrElem) + getWeight(leftBrElem);
};

export const isBalanced = (mobile) => {
  const moment = (branch) => {
    const brChild = branchStructure(branch);
    const childWeight = isMobile(brChild) ? totalWeight(brChild) : brChild;
    return branchLength(branch) * childWeight;
  };
  const leftBr = leftBranch(mobile);
  const rightBr = rightBranch(mobile);
  if (moment(leftBr) !== moment(rightBr)) {
    return false;
  }
  const leftChild = branchStructure(leftBr);
  const rightChild = branchStructure(rightBr);
  if (isMobile(leftChild)) {
    return isBalanced(leftChild);
  }
  if (isMobile(rightChild)) {
    return isBalanced(rightChild);
  }
  return true;
};
