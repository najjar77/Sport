<script setup lang="ts">
 let message = ref<number >(1)

</script>


<template>
  <div>
    <button @click="message++">Click me</button>
    <h1>{{message}}</h1>
  </div>
</template>


<style>
.bobo{
  background: aqua;
}


</style>