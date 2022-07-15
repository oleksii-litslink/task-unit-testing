<script setup>
import Test1 from './components/Test1.vue'
import Test2 from './components/Test2.vue'
import Test3 from './components/Test3.vue'
</script>

<template>
  <div style="margin-bottom: 3rem; line-height: 1.5">
    <h1 style="margin-bottom: 0.5rem;">Hi! Happy to have you here!</h1>
    <div>The assignments below will include setting up a test framework from scratch and creating some rudimentary tests.</div>
    <div>The code is intentionally simple and may contain bugs. Feel free to fix them as you find them.</div>
    <div>Finishing these assignments should not take long.</div>
  </div>

  <Test1 style="margin-bottom: 5rem;" />
  <Test2 style="margin-bottom: 5rem;" />
  <Test3 />
</template>

<style scoped>
</style>
