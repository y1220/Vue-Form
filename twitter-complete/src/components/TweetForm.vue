<script setup lang="ts">
import { ref } from 'vue';

const tweet = ref('');

const onSubmit = () => {
  console.log(tweet.value);
  emits('submit', tweet.value);
  tweet.value = '';
};
// defineEmits is a function that takes an array of strings and returns an object with
// the same keys, but with the value of any type.
const emits = defineEmits(['submit']);
</script>

<template>
  <div>
    <form class="tweet-form">
      <textarea placeholder="insert message" cols="30" rows="10" v-model="tweet"></textarea>
      <button @click.prevent="onSubmit" type="submit">Tweet</button>
      <!-- prevent works for avoiding page refresh -->
    </form>
  </div>
</template>

<style scoped>
.tweet-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
}

.tweet-form textarea {
  width: 100%;
  padding: 1em;
  margin-bottom: 1em;
  border-radius: 5px;
  border: 1px solid #42b883;
  font-size: 1.5em;
}

.tweet-form button {
  padding: 1em 2em;
  border-radius: 5px;
  background-color: #42b883;
  color: white;
  font-size: 1.5em;
  border: none;
  cursor: pointer;
}
</style>
