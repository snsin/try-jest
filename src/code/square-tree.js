import * as ds from 'hexlet-pairs-data';

export const noop = () => {};

const emptyList = ds.l();

export const squareTreeRaw = (coll) => {
  if (!coll || !ds.isList(coll)) return null;
  if (ds.isEmpty(coll)) return emptyList;
  const head = ds.head(coll);
  const rest = ds.tail(coll);
  if (ds.isList(head)) {
    return ds.concat(ds.l(squareTreeRaw(head)), squareTreeRaw(rest));
  }
  return ds.concat(ds.l(head ** 2), squareTreeRaw(rest));
};

export const squareTreeMap = (coll) => {
  if (!coll || !ds.isList(coll)) return null;
  return ds.map(e => (ds.isList(e) ? squareTreeMap(e) : e ** 2), coll);
};

const treeMap = (fn, coll) => {
  if (!coll || !ds.isList(coll)) {
    return null;
  }
  return ds.map(e => (ds.isList(e) ? treeMap(fn, e) : fn(e)), coll);
};

export default tree => treeMap(e => e ** 2, tree);
