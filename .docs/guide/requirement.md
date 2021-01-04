# Requirement

## Namepaced modules

When you are building your vuex store, it preferable breaking out your store into modules.
This helps you desconstruct these module into smaller pieces that make sense to your application.
`vuex-objectivify` needs your vuex store to be namedspace for it to work properly

```javascript
const moduleA = {
  namespaced: true,  // <------- very important 
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
};

const moduleB = {
  namespaced: true, // <------- very important
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
};

const store = new Vuex.Store({
  modules: {
    moduleA,
    moduleB
  }
})
```

You can find more information about the subject on the [vuex documentation](https://vuex.vuejs.org/guide/modules.html#modules).
