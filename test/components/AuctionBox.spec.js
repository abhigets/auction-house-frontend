import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import AuctionBox from '@/components/AuctionBox.vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'


const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(Vuetify)

describe('Logo', () => {
  let vuetify
  let actions
  let store
  let wrapper2
  let state

  beforeEach(() => {
    vuetify = new Vuetify()
    actions = {
      send: jest.fn()
    }
    state = {
      bid:''
    }
    store = new Vuex.Store({actions, state})
    
    wrapper2 = mount(AuctionBox, {store, localVue, vuetify})
  })

  test('ensure send method calls send action', ()=>{
    const button = wrapper2.find('#submit-bid')
    button.trigger('click')
    expect(actions.send).toHaveBeenCalled()
  })

  test('is a Vue instance', () => {
    const wrapper = mount(AuctionBox)
    expect(wrapper.exists()).toBeTruthy()
  })

  test('contains auction input box', () => {
    const wrapper = mount(AuctionBox)
    const inputBox = wrapper.find('#input')
    expect(inputBox.exists()).toBeTruthy()
  })

  test('auction input box has label', () => {
    const wrapper = mount(AuctionBox)
    expect(wrapper.html()).toContain('Input your auctions')
  })

  test('auction input box contains hint', () => {
    const wrapper = mount(AuctionBox)
    expect(wrapper.html()).toContain('Enter new line after each auction')
  })

  test('auction input box has clear button', () => {
    const wrapper = mount(AuctionBox)
    // wrapper.find('#input').setValue("alice")
    // expect(wrapper.html()).toContain('test')
    // const clearButton = wrapper.find('.v-input__icon--clear')
    // expect(clearButton.exists()).toBeTruthy()
  })

  test('auction input box has default focus', () => {
    const wrapper = mount(AuctionBox)
    const inputBox = wrapper.find('#input')
    expect(inputBox.attributes('autofocus')).toBeTruthy()
  })

  test('auction input box  can accommodate 11 rows', () => {
    const wrapper = mount(AuctionBox)
    const inputBox = wrapper.find('#input')
    expect(inputBox.attributes('rows')).toBe('11')
  })

  test('contains auction sample box', () => {
    const wrapper = mount(AuctionBox)
    const sampleBox = wrapper.find('#sample')
    expect(sampleBox.exists()).toBeTruthy()
  })

  test('auction sample box is disabled', () => {
    const wrapper = mount(AuctionBox)
    const sampleBox = wrapper.find('#sample')
    expect(sampleBox.attributes('disabled')).toBeTruthy()
    expect(sampleBox.attributes('rows')).toBe('11')
  })

  test('auction sample box can accommodate 11 rows', () => {
    const wrapper = mount(AuctionBox)
    const sampleBox = wrapper.find('#sample')
    expect(sampleBox.attributes('rows')).toBe('11')
  })
})