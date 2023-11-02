<script setup lang="ts">
import {ref} from 'vue';

const CardTitle=(["Home","Galerie","Konto","Einstellungen"])

</script>

<template>
  <v-container>
    <v-row v-for="row in 2" >
      <v-col v-for="col in 2"  >
        <v-card
            class="mainCardsDesign2"
            color="#00b0ff"
            title="'Titel'  "
            subtitle="subtitle" + {{n}}
        >
        </v-card>

      </v-col>
    </v-row>

  </v-container>

</template>

<style scoped>

.mainCardsDesign2 {

  max-width: 200px;
  max-height: 400px;

}

</style>