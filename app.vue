<script setup lang="ts">
 let message = ref<number >(1)
  let bobo= ref< number> (665);
</script>


<template>
  <div>
    <button @click="message++">Click me</button>
    <button @click="bobo"> Yooo</button>
    <h1>{{message}}</h1>
  </div>
</template>


<style>
.bobo{
  background: aqua;
}


</style>