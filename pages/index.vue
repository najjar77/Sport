<script setup lang="ts">
import {ref} from 'vue';

const cardTitles = ref(["Home", "Gallery", "Account", "Settings"]);
</script>

<template>
  <!-- <starting-Navigation-Cards/> -->
  <v-container class=content-centered>
    <v-row>
      <v-col v-for="(title,index) in cardTitles" :key="index" cols="6">
        <v-card
            :class="`mainCardsDesign card-style`"
            elevation="24"
            outlined
            @click="navigateTo('/'+title.toLocaleLowerCase())"
        >
          {{title}}
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <!-- statistic-cards -->
  <v-container>

  </v-container>



</template>

<style scoped>

.mainCardsDesign {
  width: 60%; /* Setze die Breite der Karten auf 50% des Container-Elements */
  height: 20vh; /* Setze die Höhe der Karten auf 50% der Viewport-Höhe */
  background-size: cover;
  background-position: center;
}



.card-style{
  align-items: center;
  background-image: linear-gradient(144deg, #60248b, #463a8a 50%, #55b2b7);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #FFFFFF;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 28px;
  justify-content: center;
  line-height: 1em;
  padding: 19px 24px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
}

</style>