import { createLocalVue, shallowMount as vueShallowMount, mount as vueMount } from '@vue/test-utils'
import Vuex from 'vuex'
import VuexObjectify from './../src';
import { createStore } from './store';

export const localVue = createLocalVue();
localVue.use(Vuex);
const store = createStore();
localVue.use(VuexObjectify, { store, dev: true });

export const shallowMount = function (component, options = {}) {
  options.localVue = localVue;
  options.store = store;
  return vueShallowMount(component, options);
}
export const mount = function (component, options = {}) {
  options.localVue = localVue;
  options.store = store;
  return vueMount(component, options);
}