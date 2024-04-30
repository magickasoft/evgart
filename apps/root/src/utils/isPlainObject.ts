/**
 * Checks if the given value is an object.
 *
 * @param {object} o - The value to check.
 * @return {boolean} Returns true if the value is an object, false otherwise.
 */
export function isObject(o: object) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

/**
 * Checks if the given object is a plain object.
 *
 * @param {object} o - The object to check.
 * @return {boolean} Returns true if the object is a plain object, false otherwise.
 */
export function isPlainObject(o: object): boolean {
  let ctor, prot;

  if (isObject(o) === false) return false;

  ctor = o.constructor;
  if (ctor === undefined) return true;

  prot = ctor.prototype;
  if (isObject(prot) === false) return false;

  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  return true;
}
