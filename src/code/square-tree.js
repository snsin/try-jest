import * as ds from 'hexlet-pairs-data';

export const noop = () => {};

const emptyList = ds.l();

export const squareTree = (coll = emptyList) => {
  if (ds.isEmpty(coll)) return emptyList;
  const head = ds.head(coll);
  const rest = ds.tail(coll);
  if (ds.isList(head)) {
    return ds.concat(ds.l(squareTree(head)), squareTree(rest));
  }
  return ds.concat(ds.l(head ** 2), squareTree(rest));
};

const squareTreeMap = (coll = emptyList) => {
  if (ds.isEmpty(coll)) return emptyList;
  return ds.map(e => (ds.isList(e) ? squareTreeMap(e) : e ** 2), coll);
};

export default squareTreeMap;