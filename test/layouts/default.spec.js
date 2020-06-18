import { createLocalVue, mount ,shallowMount } from '@vue/test-utils'
import defaultPage from '@/layouts/default.vue'

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
    expect(wrapper.find('#title').text()).toBe('Auction House')
  })
})
