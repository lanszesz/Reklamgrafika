<template>
  <h1>homeee</h1>
  <router-link :to="{ name: 'Products'}">Produc</router-link>
  <button class="primary-button">TOVÁBB</button>
  <svg class="h-6 w-6">
    <use xlink:href="#facebook"></use>
  </svg>
  <svg class="h-6 w-6">
    <use xlink:href="#twitter"></use>
  </svg>
  <svg class="h-6 w-6">
    <use xlink:href="#email"></use>
  </svg>
</template>

<script>
export default {
  name: "HomeView"
}
</script>