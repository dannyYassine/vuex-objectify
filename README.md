<div style="text-align:center">
<p align="center">
<img height="400px" style="max-width:100%" src="https://github.com/dannyYassine/vuex-objectify/blob/master/.docs/.vuepress/public/logo.png?raw=true" alt="logo.png">
</p>

<p align="center">
<a href='https://coveralls.io/github/dannyYassine/vuex-objectify?branch=master'><img src='https://coveralls.io/repos/github/dannyYassine/vuex-objectify/badge.svg?branch=master' alt='Coverage Status' /></a>
<a href='https://www.npmjs.com/package/vuex-objectify'><img src='https://img.shields.io/npm/v/vuex-objectify.svg' alt='Coverage Status' /></a>
<a href='https://travis-ci.org/dannyYassine/vuex-objectify'><img src='https://travis-ci.org/dannyYassine/vuex-objectify.svg?branch=master' alt='Build Status' /></a>
</p>

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

<br>
<h4 align="center">
  No more <b>constants</b>, no more <b>strings</b>
</h4>
</div>
<br>

## Getting Started

* [Go to website](https://dannyyassine.github.io/vuex-objectify/)
* [Go to docs](https://dannyyassine.github.io/vuex-objectify/guide/install.html)
