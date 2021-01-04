import { ProxyBuilder } from './ProxyBuilder';
import { getCommit, getDispatch, getGetter } from './helpers';

export const VuexObjectify = {
  /**
   * @param Vue
   * @param {object} options
   */
  install(Vue, options) {
    if (!options.store) {
      throw new Error('Missing required Vuex Store');
    }
    
    this.$store = options.store;
    
    if (options.attachToVue) {
      Vue.prototype.$dispatches = dispatches;
      Vue.prototype.$commits = commits;
      Vue.prototype.$getters = getters;
    }
    
    if (options.dev) {
      window.__vuexObjectify__ = {
        dispatches,
        commits,
        getters,
        store: this.$store
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
