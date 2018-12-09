import * as ds from 'hexlet-pairs-data';

const hornerRule = (x, coeffs) => {
  if (x === undefined || x === null || coeffs === null || !ds.isList(coeffs)) {
    return null;
  }
  if (ds.isEmpty(coeffs)) {
    return 0;
  }
  return ds.head(coeffs) + x * hornerRule(x, ds.tail(coeffs));
};

export default hornerRule;
