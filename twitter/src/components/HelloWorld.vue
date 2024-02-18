<script setup lang="ts">
import { ref } from 'vue';
const tweets = ref(['Tweet1', 'Tweet2', 'Tweet3']);
</script>

<template>
  <h1>Twitter</h1>
  <ul>
    <li v-for="tweet in tweets">{{ tweet }}</li>
  </ul>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-top: 1rem;
}
</style>
