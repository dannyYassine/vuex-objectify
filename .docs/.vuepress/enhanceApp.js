import Buefy from 'buefy';
import Vuex from 'vuex'
import VuexObjectify from 'vuex-objectify';

import 'buefy/dist/buefy.css'

export default ({Vue, options, router, siteData}) => {
  
  const store = new Vuex.Store({
    modules: {
    }
  })
  
  Vue.use(VuexObjectify, { store, dev: true });
  
  Vue.use(Buefy, {
    defaultIconPack: 'fa'
  });
};