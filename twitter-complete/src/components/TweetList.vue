<script setup lang="ts">

import { PropType } from 'vue';
import type { Tweet } from '../types/Tweet';

const props = defineProps({
    tweets: {
        type: Array as PropType<Tweet[]>,
    }
});

</script>

<template>
    <div>
        <ul>
            <li v-for="tweet in props.tweets" :key="tweet.id">
                {{ tweet.text }}
                <span class="user-name-span">@{{ tweet.userName }}</span>
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
.user-name-span {
    font-size: 1em;
    color: #42b883;
}
</style>
