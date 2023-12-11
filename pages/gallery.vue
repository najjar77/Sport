<script setup lang="ts">
import Form from "~/Components/Form.vue";
import Table from "~/Components/Table.vue";
import useSportStatsManger from "~/composables/useSportStatsManager";

const {sportStats} = useSportStatsManger();

const isFormVisible = ref(false);

function toggleFormVisible() {
  isFormVisible.value = !isFormVisible.value;
}


</script>

<template>
  <Form v-if="isFormVisible"/>

  <v-btn prepend-icon="mdi-plus-circle" block rounded="xl" @click="toggleFormVisible"> Add Entry</v-btn>
  <v-divider thickness="15"/>
  <Table v-if="!isFormVisible"/>

</template>

<style scoped>

</style>