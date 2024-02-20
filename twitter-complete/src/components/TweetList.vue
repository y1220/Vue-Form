<script setup lang="ts">
import { ref } from 'vue';

const tweets = ref([
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
</style>
