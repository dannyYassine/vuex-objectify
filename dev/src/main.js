import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VuexObjectify from './vuex-objectify';

Vue.config.productionTip = false

Vue.use(Vuex)

const tiny = {
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
    increment(context) {
      context.commit('setIncrement', { increment: 1 });
    }
  },
  getters: {
    getCount: (state) => {
      return state.count;
    },
    getAnotherCount: (state) => (aNum) => {
      return state.count + aNum;
    }
  }
};

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
    increment(context) {
      context.commit('setIncrement', { increment: 1 });
    }
  },
  getters: {
    getCount: (state) => {
      return state.count;
    },
    getAnotherCount: (state) => (aNum) => {
      return state.count + aNum;
    }
  },
  modules: {
    tiny
  }
};

const store = new Vuex.Store({
  modules: {
    count
  }
})

Vue.use(VuexObjectify, { store, dev: true });

new Vue({
  render: h => h(App),
  store: store,
}).$mount('#app')
