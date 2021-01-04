# Usage

## Simple Store

When you have your Vuex store setup and followed the installation guide:

```javascript
const count = {
  namespaced: true,
  state: {
    count: 0
  },
  mutations: {
    setIncrement (state, { increment }) {
      state.count = increment;
    }
  },
  actions: {
    increment() {
      commits.count.setIncrement({ increment: 1 });
    }
  },
  getters: {
    superCount: (state) => {
      return state.count * state.count;
    },
    getSuperCountMultiplier: (state) => (multiplier) => {
      return state.count * multiplier;
    }
  }
};

const store = new Vuex.Store({
  modules: {
    count
  }
})
```

## Load the plugin

```javascript
import Vue from 'vue'
import Vuex from 'vuex'
import VuexObjectify from 'vuex-objectify'
import store from './store';

// Vuex needs to be insalled first
Vue.use(Vuex)

// store MUST be passed in options
Vue.use(VuexObjectify, { store });
```

## Usage

You can start using `vuex-objectivity` anywhere in your application:

```javascript
import { dispatches, commits, getters } from 'vuex-objectify';

// actions
dispatches.count.increment();

// mutations
commits.count.setIncrement();

// getters
getters.count.superCount();
getters.count.getSuperCountMultiplier();
```

## Example

```vue
<template>
  <div @click="onClicked">{{count}}</div>
</template>
<script>
import { dispatches, commits, getters } from 'vuex-objectify';

export default {
  name: 'Login',
  computed: {
    count() {
      return getters.count.superCount;
    },
    countMultiplier() {
      return getters.count.getSuperCountMultiplier(4);
    }
  },
  methods: {
    onClicked() {
      // using actions
      dispatches.count.increment();
    
      // or prefer using the mutations
      commits.count.setIncrement({ increment: 1 });
    }
  }
}
</script>