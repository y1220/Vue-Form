<script setup lang="ts">
import { ref } from 'vue';

type Tweet = {
  id: string;
  description: string;
};
const tweets = ref<Tweet[]>([
  {
    id: "1",
    description: "Hello World",
  },
  {
    id: "2",
    description: "`exsmple",
  },
]);
  const tweet = ref<Tweet>({
  id: "",
  description: "",
});

const search = ref<string>("");
const onsubmit = () => {
  // tweets.value.push(tweet.value);
  tweets.value = [
    ...tweets.value,
    {
      id: Math.random().toString(),
      description: tweet.value.description,
    },
  ];
};

const onDelete = (id: string) => {
  tweets.value = tweets.value.filter((tweet) => tweet.id !== id);
};
</script>

<template>
  <h1>Twitter</h1>
  <form @submit.prevent="onsubmit">
    <input type="text" v-model="tweet.description">
    <button type="submit">Tweet</button>
  </form>

  <input type="text" v-model="search"/>

  <ul>git
    <li v-for="tweet in tweets">
      <!-- v-show can be also used -->
      <div v-if="tweet.description.includes(search)">
        <span>{{ tweet.description }}</span>
        <button @click="() => onDelete(tweet.id)">Delete</button>
      </div>
    </li>
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
