<template>
  <div>
    <h1>Products</h1>
    <p>{{ $t('hello') }}, {{ $t('world') }}!</p>
    <p>Welcome to our products page!</p>
    <router-link :to="{ name: 'Home'}">home</router-link>
  </div>
</template>

<script>
export default {
  name: 'Products',
};
</script>