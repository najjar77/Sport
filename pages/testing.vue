<script setup lang="ts">
//import Icon from '@mdi/react';
//import { mdiShieldAccount } from '@mdi/js';

</script>

<template>

  <v-navigation-drawer
      expand-on-hover
      rail="true"
  >
    <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
        title="Amiin || Soufian"
        subtitle="Email@"
    ></v-list-item>

    <v-divider></v-divider>

    <v-list density="comfortable" nav>
      <v-list-item prepend-icon="mdi-home" title="Home" value="Nav_Home"/>
      <v-list-item prepend-icon="mdi-widgets" title="Galerie" value="Nav_Gallery"/>
      <v-list-item prepend-icon="mdi-account" title="Konto" subtitle="Einstellungen" value="Nav_Account"/>
      <v-list-item prepend-icon="mdi-wrench" title="Einstellungen" value="Nav_Settings"/>
      <v-divider/>

      <v-list-item prepend-icon="mdi-shield-account" title="Admin" value="Nav_AdminAccount"/>

    </v-list>


  </v-navigation-drawer>

</template>

<style scoped>

</style>


