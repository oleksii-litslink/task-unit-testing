import { describe, it, expect } from 'vitest'

import usersStore, { users } from '@/modules/test3/users'

describe('users store', () => {
  describe('dispatch', () => {
    describe('fetch', () => {
      it('fetches the data for admin user', async () => {
        const adminUser = users[0]
        usersStore.dispatch.login(adminUser.username, adminUser.password)

        const result = await usersStore.dispatch.fetch()
        expect(result).toContain(`Data can been fetched by ${adminUser.username}`)
      })

      it('cannot fetch the data for non-admin user', async () => {
        const user = users[1]
        usersStore.dispatch.login(user.username, user.password)

        try {
          await usersStore.dispatch.fetch()
        } catch (error) {
          expect(error).toContain(`Data cannot be fetched by ${user.username}`)
        }
      })
    })
  })
})