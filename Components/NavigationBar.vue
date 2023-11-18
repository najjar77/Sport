<script setup lang="ts">
//import Icon from '@mdi/react';
//import { mdiShieldAccount } from '@mdi/js';
const navigate = async (path: string) => {
  await navigateTo(path)
}

</script>

<template>

  <VNavigationDrawer
      class="NavigationBarStyle"
      expand-on-hover
      :rail="true"
      permanent

  >
    <VListItem
        prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
        title="Amiin || Soufian"
        subtitle="Email@"
    ></VListItem>

    <VDivider></VDivider>

    <VList density="comfortable" >
      <VListItem @click="navigate('/')" prepend-icon="mdi-home" title="Home" value="Nav_Home"/>
      <VListItem @click="navigate('/gallery')" prepend-icon="mdi-widgets" title="Galerie" value="Nav_Gallery"/>
      <VListItem @click="navigate('/account')" prepend-icon="mdi-account" title="Konto" value="Nav_Account"/>
      <VListItem @click="navigate('/settings')" prepend-icon="mdi-wrench" title="Einstellungen" value="Nav_Settings"/>
      <VDivider/>
      <VListItem @click="navigate('/admin')" prepend-icon="mdi-shield-account" title="Admin" value="Nav_AdminAccount">
      </VListItem>



    </VList>


  </VNavigationDrawer>

</template>

<style scoped>

.NavigationBarStyle{
  background-color: #8ECAE6;
}

</style>


