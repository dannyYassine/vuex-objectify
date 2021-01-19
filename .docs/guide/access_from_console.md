# Access from the Javascript Console

By setting `dev: true`, when passing it as an option:

```javascript
Vue.use(VuexObjectify, { store, dev: true })
```

You will now have access to all of the `dispatches`, `commits`, and `getters` methods directly from the browsers' javascript console.

<br>

This is very useful while debugging and during development. You can now manipulate your vuex store and your application from the console.

<br>

![Access from javascript console](/vuex-objectify/javascript_console.png)