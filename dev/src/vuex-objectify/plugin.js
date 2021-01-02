import { ProxyBuilder } from './ProxyBuilder';
import { getCommit, getDispatch, getGetter } from './helpers';

export const VuexObjectify = {
  install(Vue, options) {
    if (!options.store) {
      throw new Error('Missing required Vuex Store');
    }
    
    this.$store = options.store;
    
    if (options.dev) {
      window.__vuexObjectify__ = {
        dispatches,
        commits,
        getters,
        getStore: () => {
          return this.$store
        }
      };
    }
  }
};

export const dispatches = (new ProxyBuilder())
  .setAction(getDispatch(() => VuexObjectify.$store))
  .build();

export const commits = (new ProxyBuilder())
  .setAction(getCommit(() => VuexObjectify.$store))
  .build();

export const getters = (new ProxyBuilder())
  .setAction(getGetter(() => VuexObjectify.$store))
  .setAsGetters()
  .build();
