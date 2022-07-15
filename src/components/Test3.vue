<template>
  <div>
    <h2>Test 3: Create a test that clicks the button and verify that data has been fetched</h2>
    <h4 style="margin-top: -0.75rem; margin-bottom: 2rem;">Bonus point: Test that only the admin user can fetch the data</h4>

    <div style="margin-bottom: 1rem">
      <button data-fetch-button type="button" @click="onClick">Fetch data</button>
    </div>

    <textarea data-textarea :value="fetchData" :disabled="true"/>
  </div>
</template>

<script>
import { ref } from 'vue';

import usersStore from '../modules/test3/users';

export default {
  setup() {
    const fetchData = ref('');

    return {
      fetchData,

      async onClick() {
        fetchData.value = await usersStore.dispatch.fetch();
      },
    };
  },
};
</script>

<style scoped>
</style>
