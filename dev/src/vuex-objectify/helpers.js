export function turnCamelCaseToSlashCase(str) {
  const separator = '/';
  return str
    .replace(/([a-z\d])([A-Z])/g, `$1${separator}$2`)
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, `$1${separator}$2`)
    .toLowerCase();
}

export function getDispatch(storeFn) {
  return function(module, fn, ...args) {
    const slashedProp = turnCamelCaseToSlashCase(module);
    return storeFn().dispatch(`${slashedProp}/${fn}`, ...args);
  }
}

export function getCommit(storeFn) {
  return function(module, fn, ...args) {
    const slashedProp = turnCamelCaseToSlashCase(module);
    return storeFn().commit(`${slashedProp}/${fn}`, ...args);
  }
}

export function getGetter(storeFn) {
  return function(module, fn) {
    const slashedProp = turnCamelCaseToSlashCase(module);
    return storeFn().getters[`${slashedProp}/${fn}`];
  }
}
