import { l as list } from 'hexlet-pairs-data';
import { printList } from '../src/code/binary-mobile';

test('printList', () => {
  expect(printList(list())).toBe('()');
});

test('printList2', () => {
  expect(printList(list(1, 2, 3))).toBe('(1, 2, 3)');
});
