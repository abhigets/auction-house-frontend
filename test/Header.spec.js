import { mount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Header)
    expect(wrapper.exists()).toBeTruthy()
  })

  test('has title', () => {
    const wrapper = mount(Header)
    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.find('#title')).toBe('Auction House')
  })
})
