<script setup lang="ts">
import TweetForm from './components/TweetForm.vue';
import TweetList from './components/TweetList.vue';
import SettingsModal from './components/SettingsModal.vue';
import TweetDeleteModal from './components/TweetDeleteModal.vue';
import { userNameKey, updateUserNameKey } from './key';
import { provide, ref } from 'vue';
import type { Tweet } from './types/Tweet';
import { readonly } from 'vue';

const tweets = ref<Tweet[]>([
    {
        id: "1",
        text: 'Hello, Vue 3!',
        userName: 'user1'},
    {
        id: "2",
        text: 'Hello, Vite!',
        userName: 'user2'},
    {
        id: "3",
        text: 'Hello, TypeScript!',
        userName: 'user3'}
]);

const onSubmitForm = (tweet: string) => {
    tweets.value.push({
        id: (tweets.value.length + 1).toString(),
        text: tweet,
        userName: userName.value,
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

provide(userNameKey, readonly(userName));
provide(updateUserNameKey, updateUserName);

const isShowDeleteModal = ref(false);
const isDeletingID = ref('');
const onClickTweet = (id: string) => { // store id of tweet to be deleted
  console.log('onClickTweet: ' + id);
  isShowDeleteModal.value = true;
  isDeletingID.value = id;
};

const onDelete = () => {
  console.log('onDelete: ' + isDeletingID.value);
  deleteTweet(isDeletingID.value);
};

const deleteTweet = (id: string) => {
  console.log('deleteTweet: ' + isDeletingID.value);
  tweets.value = tweets.value.filter((tweet) => tweet.id !== id);
  isShowDeleteModal.value = false;
};
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
    <Teleport to="body">
      <TweetDeleteModal
      v-if="isShowDeleteModal"
      @submit="onDelete"
      @cancel="isShowDeleteModal = false"/>
    </Teleport>
    {{ userName }}
    <TweetForm @submit="onSubmitForm"/>
    <TweetList :tweets="tweets" @click="(id) => onClickTweet(id)"/>
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
