<script setup lang="ts">
import { ref } from 'vue';
import type { Tweet } from '../types/Tweet';

const tweets = ref<Tweet[]>([
    {
        id: "1",
        text: 'Hello, Vue 3!' },
    {
        id: "2",
        text: 'Hello, Vite!' },
    {
        id: "3",
        text: 'Hello, TypeScript!' }
]);
</script>

<template>
    <div>
        <ul>
            <li v-for="tweet in tweets" :key="tweet.id">
                {{ tweet.text }}
            </li>
        </ul>
    </div>
</template>

<style scoped>
ul {
    list-style: none;  /* remove bullet points */
    padding: 0;
    margin: 0;
}

.tweet-list li {
    padding: 1em;
    border-bottom: 1px solid #42b883;
    font-size: 10em;
}
</style>
