import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import messagesStore from '@/modules/test2/messages'

import Test2 from '@/components/Test2.vue'

describe('Test2', () => {
  it('renders first mocked message', () => {
    const wrapper = shallowMount(Test2)
    
    /**
     * @description
     * rendering a wrapper with initial data;
     * checking the node tree and text of the count
     */
    expect(wrapper.findAll('[data-message-item]').length).toEqual(1)
    expect(wrapper.find('[data-count]').text()).toEqual('Number of messages: 1')
  })

  it('renders multiple messages depending on store state change', async () => {
    const wrapper = shallowMount(Test2)

    /**
     * @description
     * checking count initially
     */
    expect(wrapper.find('[data-count]').text()).toEqual('Number of messages: 1')

    /**
     * @description
     * pushing a new message in order to check
     * if the list and count item are updated
     */
    messagesStore.state.messages.push({ id: 2, username: 'username 2', message: 'message 2' })

    await wrapper.vm.$nextTick()

    expect(wrapper.findAll('[data-message-item]').length).toEqual(2)
    expect(wrapper.find('[data-count]').text()).toEqual('Number of messages: 2')

    const [firstMessage, secondMessage] = wrapper.findAll('[data-message-item]')

    expect(firstMessage.find('[data-message-username]').text()).toEqual('username 1:')
    expect(secondMessage.find('[data-message-username]').text()).toEqual('username 2:')

    expect(firstMessage.find('[data-message-text]').text()).toEqual('message 1')
    expect(secondMessage.find('[data-message-text]').text()).toEqual('message 2')
  })
})
