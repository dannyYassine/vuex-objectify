import Vuex from "vuex";
import { shallowMount } from '../main';
import Empty from '../Empty';
import VuexObjectify, { dispatches, commits, getters } from '../../src';
import { createLocalVue, shallowMount as vueShallowMount } from '@vue/test-utils'
import { createStore } from '../store';

describe("HelloWorld.vue", () => {
  
  let wrapper, store;
  
  beforeEach(() => {
    wrapper = shallowMount(Empty);
    store = wrapper.vm.$store;
  });
  
  it("vuex-objectify objects be defined", () => {
    expect(commits).toBeDefined();
    expect(dispatches).toBeDefined();
    expect(getters).toBeDefined();
  });
  
  describe('Dispatch Proxy', () => {
    test('First level be defined', () => {
      expect(dispatches.count).toBeDefined();
      expect(dispatches.countSub).toBeDefined();
    });
    
    test('increment function be defined', () => {
      expect(dispatches.count.increment).toBeDefined();
    });
    
    test('increment to be function', () => {
      expect(typeof dispatches.count.increment).toBe('function');
    });
    
    test('increment function execute action', () => {
      const beforeCount = store.state.count.count;
      
      dispatches.count.increment();
      
      expect(store.state.count.count).toBeGreaterThan(beforeCount);
    });
  });
  
  describe('Commit Proxy', () => {
    test('First level be defined', () => {
      expect(commits.count).toBeDefined();
      expect(commits.countSub).toBeDefined();
    });
  
    test('setIncrement function be defined', () => {
      expect(commits.count.setIncrement).toBeDefined();
      expect(commits.countSub.setIncrement).toBeDefined();
    });
  
    test('setIncrement function be defined', () => {
      expect(commits.count.setIncrement).toBeDefined();
      expect(commits.countSub.setIncrement).toBeDefined();
    });
  
    test('setIncrement to be function', () => {
      expect(typeof commits.count.setIncrement).toBe('function');
      expect(typeof commits.countSub.setIncrement).toBe('function');
    });
  
    test('increment function execute action', () => {
      const beforeCount = store.state.count.count; // 0
      
      commits.count.setIncrement({ increment: 2 });
    
      expect(store.state.count.count).toBeGreaterThan(beforeCount);
      expect(store.state.count.count).toEqual(2);
    });
  
    test('increment function execute action', () => {
      const beforeCount = store.state.count.sub.count; // 0
      
      commits.countSub.setIncrement({ increment: 2 });
    
      expect(store.state.count.sub.count).toBeGreaterThan(beforeCount);
      expect(store.state.count.sub.count).toEqual(2);
    });
  });
  
  describe('Getter Proxy', () => {
    test('First level be defined', () => {
      expect(getters.count).toBeDefined();
      expect(getters.countSub).toBeDefined();
    });
  
    test('normalCount function be defined', () => {
      expect(getters.count.normalCount).toBeDefined();
      expect(getters.countSub.normalCount).toBeDefined();
    });
  
    test('normalCount not to be function', () => {
      expect(typeof getters.count.normalCount).not.toBe('function');
      expect(typeof getters.countSub.normalCount).not.toBe('function');
    });
  
    test('getAnotherCount to be function', () => {
      expect(typeof getters.count.getAnotherCount).toBe('function');
      expect(typeof getters.countSub.getAnotherCount).toBe('function');
    });
  
    test('normalCount function execute getter', () => {
      expect(getters.count.normalCount).toEqual(store.state.count.count);
    });
  
    test('normalCount function execute getter', () => {
      expect(getters.countSub.normalCount).toEqual(store.state.count.sub.count);
    });
  });
  
  describe('Plugin Options', () => {
    test('should throw error when store is missing', done => {
      const localVue = createLocalVue();
      localVue.use(Vuex);
      
      try {
        localVue.use(VuexObjectify);
        vueShallowMount(Empty, { localVue });
      } catch (e) {
        expect(e.message).toBe('Missing required Vuex Store');
        done();
      }
    })
    
    test('should attach the vuex-objectify objects to Vue instance', () => {
      const localVue = createLocalVue();
      localVue.use(Vuex);
      const store = createStore()
      
      localVue.use(VuexObjectify, { store, attachToVue: true });
      wrapper = vueShallowMount(Empty, { localVue, store });
      
      expect(wrapper.vm.$dispatches).toBeDefined();
      expect(wrapper.vm.$commits).toBeDefined();
      expect(wrapper.vm.$getters).toBeDefined();
  
      expect(wrapper.vm.$dispatches).toBe(dispatches);
      expect(wrapper.vm.$commits).toBe(commits);
      expect(wrapper.vm.$getters).toBe(getters);
    })
  })
});
