<script setup lang="ts">
import { ref, computed, reactive } from 'vue';


const item1 = reactive({
  name: 'pizza',
  price: 5,
  link: 'https://vitejs.dev'
});

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

const clear = () => {
  item1.name = '';
  item1.price = 0;
}

const budget = 5;

const priceLabel = computed(() => {
    if(item1.price <= budget) {
    return  item1.price + ' euro';
    } else {
    return 'Over budget';
    }
});
</script>

<template>
  <div class="container">
    <h1>Recent payment</h1>
    <div class="payment">
        <label>{{ item1.name }}</label>
        <label>{{ priceLabel }}</label>
        <a v-bind:href=item1.link>
          <img src="/pizza.jpg" class="product-img" alt="Vite logo" /></a>
          <button v-on:click="buy(item1.name)">Buy</button>
    </div>
    <div class="payment">
        <label>{{ itemName2 }}</label>
        <label>{{ itemPrice2 }}</label>
        <a v-bind:href=itemLink2>
          <img src="/drink.jpg" class="product-img" alt="Vite logo" /></a>
          <button v-on:click="buy(itemName2)">Buy</button>
    </div>
    <input v-model="item1.name" />
    <input v-model="item1.price" />
    <button v-on:click="clear">Clear</button>

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
