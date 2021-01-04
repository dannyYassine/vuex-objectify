# Installation

## via Yarn / NPM

```bash
yarn add vuex-objectify

# or with NPM
npm install vuex-objectify
```

## via CDN

```html
<script src="https://unpkg.com/vuex-objectify@1.0.0"></script>
```

## Usage

```js
import Vue from 'vue'
import Vuex from 'vuex'
import VuexObjectify from 'vuex-objectify'

// Vuex needs to be insalled first
Vue.use(Vuex)

// Vuex store needs to be instantiated
const store = new Vuex.Store({ ... })

// store MUST be passed in options
Vue.use(VuexObjectify, { store });
```

Then anywhere your application:

```vue
<template>
  <input id="email"/>
  <input id="password"/>
  <button @click="onLoginClicked"></button>
</template>
<script>
import { dispatches } from 'vuex-objectify';

export default {
  name: 'Login',
  methods: {
    onLoginClicked() {
      const { email, password } = this;
      dispatches.session.login({ email, password })
    } 
  }
}
</script>
```

Even in your javascript files:

```javascript
import { commits } from 'vuex-objectify';

export class LogoutSerivce {
  execute() {
    commits.session.setLogout();
  }
}
```