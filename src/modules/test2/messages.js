import { reactive, computed } from 'vue';

const state = reactive({
  messages: [
    { id: 1, username: 'username 1', message: 'message 1' }
  ],
});

export default {
  state,

  getters: {
    count: computed(() => state.messages.length),
  },
};
