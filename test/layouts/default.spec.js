import { createLocalVue, mount ,shallowMount } from '@vue/test-utils'
import defaultPage from '@/layouts/default.vue'
// import Vue from 'vue'
// import Vuetify from 'vuetify';
// Vue.use(Vuetify);


const localVue = createLocalVue()

describe('Logo', () => {

  test('is a Vue instance', () => {
    const wrapper = shallowMount(defaultPage, {
      localVue,
    })
    expect(wrapper.exists()).toBeTruthy()
  })

  test('has title', () => {
    const wrapper = shallowMount(defaultPage, {
      localVue,
    })
    console.log('\n\n\n\n' + wrapper.html())
    expect(wrapper.find('#title').text()).toBe('Auction House')
  })
})
