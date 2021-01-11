import Vuex from 'vuex';

export const createStore = () => {
  const sub = {
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
      normalCount: (state) => {
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
      normalCount: (state) => {
        return state.count;
      },
      getAnotherCount: (state) => (aNum) => {
        return state.count + aNum;
      }
    },
    modules: {
      sub
    }
  };
  
  return new Vuex.Store({
    modules: {
      count
    }
  });
}
