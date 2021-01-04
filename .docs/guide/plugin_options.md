# Plugin Options

## Usage

```javascript
Vue.use(VuexObjectify, options);
```

## Options

| Name        | Type           | Default  | Description |
| ------------- |:-------------| :-----| :-----|
| store | Vuex.Store      | Required | Your vuex store used in your application |
| attachToVue     | boolean      |  `false` | Add the objects: `dispatches`, `commits` and `getters` on the Vue instance, prefixed with `$` |
| dev     | boolean | `false` | When true, you can access all the objects from the browser javascript console from the `__vuexObjectify__` object |