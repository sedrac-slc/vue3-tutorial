<template>
  <CHeader title="Menu" v-once/>
  <div class="container mx-auto">
    <RouterView></RouterView>
  </div>
</template>
<script setup>
import CHeader from './components/CHeader.vue';
</script>