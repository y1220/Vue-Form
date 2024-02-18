<script setup lang="ts">

</script>

<template>
  <div class="container">
    <h1>Recent payment</h1>
    <div class="payment">
        <label>pizza</label>
        <label>5 euro</label>
    </div>
    <div class="payment">
        <label>cola</label>
        <label>2 euro</label>
    </div>
  </div>
  <label>Payment.js</label>
  <br/>
</template>

<style scoped>
label {
  font-size: 2em;
  color: #42b883;
}
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.payment {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    width: 400px;
    background-color: aliceblue;
    margin-bottom: 8px;
}
</style>
