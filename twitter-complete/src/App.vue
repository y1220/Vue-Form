<script setup lang="ts">
import TweetForm from './components/TweetForm.vue';
import TweetList from './components/TweetList.vue';
import SettingsModal from './components/SettingsModal.vue';
import { userNameKey, updateUserNameKey } from './key';
import { Ref, provide, ref } from 'vue';
import type { Tweet } from './types/Tweet';

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

const onSubmitForm = (tweet: string) => {
    tweets.value.push({
        id: (tweets.value.length + 1).toString(),
        text: tweet
    });
    console.log(tweets.value);
};

const isModalOpen = ref(false);
const onClickSettings = () => {
  isModalOpen.value = true;
  console.log('Settings clicked');
};

const onSubmittedSettings = () => {
  isModalOpen.value = false;
  console.log('Settings submitted: ' + userName);
};

const userName = ref('');
const updateUserName = (name: string) => {
  userName.value = name;
  console.log('updateUserName: ' + name);
};

import { readonly } from 'vue';

provide(userNameKey, readonly(userName));
provide(updateUserNameKey, updateUserName);
</script>

<template>
  <div class="container">
    <div class="header">
      <button @click="onClickSettings">
        Settings
      </button>
    </div>
    <Teleport to="body">
      <SettingsModal @submit="onSubmittedSettings" v-if="isModalOpen"/>
    </Teleport>
    {{ userName }}
    <TweetForm @submit="onSubmitForm"/>
    <TweetList :tweets="tweets"/>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
.header {
  display: flex;
  justify-content: flex-end;
  font-size: 1em;
  color: #42b883;
  margin-bottom: 1em;
  button {
    padding: 1em 2em;
    border-radius: 5px;
    background-color: #42b883;
    color: white;
    font-size: 1.5em;
    border: none;
    cursor: pointer;
  }
}
</style>
