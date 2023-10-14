<script setup lang="ts">
import {DayEntry} from "~/src/models/DayEntry";

const dateValue= ref<Date>()
const allDayEntries = ref<DayEntry[]>([])
const isDialogOpen = ref(false)
const clickHandler = () => {
  console.log('dialog öffnet')
  isDialogOpen.value = true;
}
</script>

<template>
  <div>
 <h2>date picker</h2>
  <v-btn  @click="clickHandler" size="large" icon="mdi-plus"></v-btn>
    <span>Neuer Eintrag.</span>
  <v-date-picker v-model="dateValue" show-adjacent-months/>
  <h1>{{dateValue}}</h1>

    <v-dialog
        v-model="isDialogOpen"
        activator="parent"
        width="auto"
    >
    <h1>ein dialogtext</h1>
    </v-dialog>
  </div>
</template>

<style scoped>

</style>