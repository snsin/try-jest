import { l as list } from 'hexlet-pairs-data';
import {
  printList,
  makeBranch,
  makeMobile,
  leftBranch,
  rightBranch,
  branchLength,
} from '../src/code/binary-mobile';

const leftBr = makeBranch(10, 6);
const rightBr = makeBranch(6, 10);
const leftBr1 = makeBranch(2, 2);
const rightBr1 = makeBranch(3, 3);
const complexBr = makeBranch(20, makeMobile(leftBr1, rightBr1));
const complexBr2 = makeBranch(5, makeMobile(rightBr, rightBr1));
const mobile = makeMobile(leftBr, rightBr);
const mobile1 = makeMobile(complexBr, complexBr2);

test('printList', () => {
  expect(printList(list())).toBe('()');
});

test('printList2', () => {
  expect(printList(list(1, 2, 3))).toBe('(1, 2, 3)');
});

describe('2.29 a. left-branch, right-branch, length, and strucrure selectors', () => {
  test('left branch', () => {
    expect(leftBranch(mobile)).toBe(leftBr);
    expect(leftBranch(mobile1)).toBe(complexBr);
  });
  test('rigth branch', () => {
    expect(rightBranch(mobile)).toBe(rightBr);
    expect(rightBranch(mobile1)).toBe(complexBr2);
  });

  test('branch length', () => {
    expect(branchLength(leftBr)).toBe(10);
    expect(branchLength(rightBr)).toBe(6);
  });
});
