import { mount } from '@vue/test-utils'
import indexPage from '@/pages/index.vue'

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(indexPage)
    expect(wrapper.exists()).toBeTruthy()
  })
})
