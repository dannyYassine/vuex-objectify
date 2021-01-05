<div style="text-align:center">
<p align="center">
<img height="400px" style="max-width:100%" src="https://github.com/dannyYassine/vuex-objectify/blob/master/.docs/.vuepress/public/logo.png?raw=true" alt="logo.png">
</p>
<br>
<p align="center">
<b>Dynamically</b> creates an <b>interface of objects</b> to easily communicate with vuex
</p>
<br>
<h4>Turning this:</h4>

```javascript
this.$store.dispatch('module/action', { data });

this.$store.commit(Types.mutations.SET_FIRST_THING, 10);

this.$store.getters[TYPES.getters.getSomething]
```

<h4>Into this:</h4>

```javascript
dispatches.module.action({ data });

commits.module.setFirstThing(10);

getters.module.getSomething();
```
</div>

## Getting Started

* [Go to website](https://dannyyassine.github.io/vuex-objectify/)
* [Go to docs](https://dannyyassine.github.io/vuex-objectify/guide/install.html)
