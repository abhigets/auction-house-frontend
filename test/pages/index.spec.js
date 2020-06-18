import { mount ,shallowMount } from '@vue/test-utils'
import indexPage from '@/pages/index.vue'

describe('Home Page', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(indexPage)
    expect(wrapper.exists()).toBeTruthy()
  })

  test('contains auction box', () => {
    const wrapper = shallowMount(indexPage)
    expect(wrapper.find('#auction-box').exists()).toBeTruthy()
  })
})
