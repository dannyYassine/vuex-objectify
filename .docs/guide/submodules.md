# Sub Modules

There will be a usecase that in your vuex store, you will have a submodule.

```javascript
const parent = {
  namespaced: true, 
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... },
  modules: {
    child  // <------
  }
};
```

In order to access the actions, mutations and getters from the submodule `child`,
you need to append both the `parent` and `child` module names, and camel case them together.
You simply need to do the following:

```javascript
dispatches.parentChild.someAction();

commits.parentChild.someMutation();

getters.parentChild.someGetter;
```

Internally, `vuex-objectify`'s Proxy objects will turn transform `parentChild` into `parent/child` in order to match the vuex submodules store signature.
 