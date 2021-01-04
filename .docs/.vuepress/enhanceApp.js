import Buefy from 'buefy';
import Vuex from 'vuex'
import VuexObjectify from 'vuex-objectify';

import 'buefy/dist/buefy.css'
import './styles/app.scss';

export default ({Vue, options, router, siteData}) => {
  Vue.use(Vuex)
  Vue.use(Buefy, {
    defaultIconPack: 'fa'
  });
  
  const store = new Vuex.Store({
    modules: {
    }
  })
  Vue.use(VuexObjectify, { store, dev: true });
};