<script>
import testing from '/Components/NavigationBar.vue';
import {defineComponent} from "vue";
import NavigationBar from "~/Components/NavigationBar.vue";
import StartingColumns from "~/Components/StartingColumns.vue";

export default defineComponent({
  components: {StartingColumns, NavigationBar}
})


</script>

<template>
  <div>
    <nuxtLayout>
      <v-app>
        <!--SIDEBAR -->
          <NavigationBar/>
          <!-- Main Source-->
          <starting-columns/>
          <v-card> Hello from App</v-card>
        <NuxtPage/>
      </v-app>
    </nuxtLayout>
  </div>
</template>
