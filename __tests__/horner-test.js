import * as ds from 'hexlet-pairs-data';
import hornerRule from '../src/code/horner-schem';

describe('horner rule polinomial comp', () => {
  test('no poly', () => {
    expect(hornerRule()).toBeNull();
    expect(hornerRule(2, 3)).toBeNull();
    expect(hornerRule(2, ds.l())).toBeNull();
    expect(hornerRule(3, ds.l(0))).toBe(0);
  });
  test('some poly', () => {
    expect(hornerRule(0, ds.l(1))).toBe(1);
    expect(hornerRule(3, ds.l(10, 2))).toBe(16);
    expect(hornerRule(2, ds.l(1, 3, 0, 5, 0, 1))).toBe(79); // x^5 + 5x^3 + 3x + 1; x == 2
  });
});
