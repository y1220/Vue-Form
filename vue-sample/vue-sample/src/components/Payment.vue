<script setup lang="ts">

const itemName1 = 'pizza';
const itemPrice1 = '5 euro';
const itemLink1 = 'https://vitejs.dev';

const itemName2 = 'cola';
const itemPrice2 = '2 euro';
const itemLink2 = 'https://vitejs.dev';

const buy = (itemName: string) => {
  console.log('buy');
    alert('buy ' + itemName + ' success!');
}

const input = (event: any) => {
  console.log('input' + event.target.value);
    // alert('input: ' + event.target.value);
}
</script>

<template>
  <div class="container">
    <h1>Recent payment</h1>
    <div class="payment">
        <label>{{ itemName1 }}</label>
        <label>{{ itemPrice1 }}</label>
        <a v-bind:href=itemLink1>
          <img src="/pizza.jpg" class="product-img" alt="Vite logo" /></a>
          <button v-on:click="buy(itemName1)">Buy</button>
    </div>
    <div class="payment">
        <label>{{ itemName2 }}</label>
        <label>{{ itemPrice2 }}</label>
        <a v-bind:href=itemLink2>
          <img src="/drink.jpg" class="product-img" alt="Vite logo" /></a>
          <button v-on:click="buy(itemName2)">Buy</button>
    </div>
    <input v-on:input="input" />

  </div>
  <!-- <label>Payment.js</label> -->
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

.product-img {
    height: 80px;
    width: 80px;
}
</style>
