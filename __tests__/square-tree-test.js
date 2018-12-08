import * as ds from 'hexlet-pairs-data';
import squareTree from '../src/code/square-tree';

describe('square-tree implemented without map()', () => {
  const smallTree = ds.l(1, 2, 3, 4);
  const complexTree = ds.l(2, ds.l(1, 3), ds.l(4, ds.l(5, 6, ds.l(7)), 8), 9);
  test('empty tree', () => {
    expect(ds.toString(squareTree(ds.l()))).toBe('()');
  });
  test('one level tree', () => {
    expect(ds.toString(squareTree(smallTree))).toBe('(1, 4, 9, 16)');
  });

  test('complex tree', () => {
    expect(ds.toString(squareTree(complexTree)))
      .toBe('(4, (1, 9), (16, (25, 36, (49)), 64), 81)');
  });
});
