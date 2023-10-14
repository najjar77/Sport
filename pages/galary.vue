<script setup lang="ts">
const dateValue= ref<Date>()
</script>

<template>
 <h2>date picker</h2>
  <v-date-picker v-model="dateValue" show-adjacent-months/>
  <h1>{{dateValue}}</h1>
</template>

<style scoped>

</style>