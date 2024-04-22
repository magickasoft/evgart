export const get = (obj: any, path: any, defaultValue = undefined) => {
  const fn = (regexp: any) =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce((res, key) => (res !== null && res !== undefined ? res[key] : res), obj);
  const result = fn(/[,[\]]+?/) || fn(/[,[\].]+?/);
  return result === undefined || result === obj ? defaultValue : result;
};
