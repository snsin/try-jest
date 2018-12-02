import { plusThree } from '../src/code/big-func';

test('must works', () => {
  expect(plusThree()).toBe(3);
});

test('must add three', () => {
  expect(plusThree(5)).toBe(8);
});
