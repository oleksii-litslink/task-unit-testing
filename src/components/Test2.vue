<template>
  <div>
    <h2>Test 2: Mock messages below and create a test to verify they are displayed</h2>
    <h4 style="margin-top: -0.75rem; margin-bottom: 2rem;">Bonus point: Test that the count is correct</h4>

    <div class="grid">
      <div>USERNAME</div>
      <div>MESSAGE</div>
    </div>
    <div v-for="{ message, username } in messages" data-message-item class="grid">
      <div data-message-username>{{ username }}:</div>
      <div data-message-text>{{ message }}</div>
    </div>

    <div style="margin-top: 1rem;" data-count>Number of messages: {{ count }}</div>
  </div>
</template>

<script>
import messagesStore from '../modules/test2/messages';

export default {
  setup() {
    return {
      ...messagesStore.state,
      ...messagesStore.getters,
    };
  },
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 10rem auto;
}
</style>
