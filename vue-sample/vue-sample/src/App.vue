<script setup lang="ts">
//import HelloWorld from './components/HelloWorld.vue'
import PaymentVue from './components/Payment.vue'
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/payment.png" class="logo" alt="Vite logo" />
    </a>
    <!-- <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a> -->
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <PaymentVue />
  <!-- <label class="label">Vue learning</label> -->
</template>

<style scoped>
.logo {
  height: 30em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.label {
  font-size: 2em;
  color: #42b883;
  margin-top: 1em;
}
</style>
