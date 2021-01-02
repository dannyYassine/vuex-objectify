
export class ProxyBuilder {
  
  constructor() {
    this.action = null;
    this.isGetter = false;
  }
  
  setAction(action) {
    this.action = action;
    return this;
  }
  
  setAsGetters(value = true) {
    this.isGetter = value;
  
    return this;
  }
  
  build() {
    const self = this;
    return new Proxy({}, {
      get(_, prop) {
        return new Proxy({prop}, {
          get(target, innerProp) {
            return self.isGetter ?
              self.action(prop, innerProp) :
              function(...args) {
                return self.action(prop, innerProp, ...args);
              }
          }
        })
      }
    });
  }
}