import { describe, it, expect, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import usersStore from '@/modules/test3/users'

import Test3 from '@/components/Test3.vue'

describe('Test3', () => {
  it('fetches the data on button click', async () => {
    const fetch = vi.fn(() => Promise.resolve('success'))
    usersStore.dispatch.fetch = fetch

    const wrapper = shallowMount(Test3)
    
    const fetchButton = wrapper.find('[data-fetch-button]')
    fetchButton.trigger('click')
    
    await fetch()
    await wrapper.vm.$nextTick()

    expect(fetch).toHaveBeenCalled();
    expect(wrapper.find('[data-textarea]').element.value).toEqual('success')
  })
})
