<script setup lang="ts">

</script>

<template>
  <div>
    <form class="tweet-form">
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <button type="submit">Tweet</button>
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
