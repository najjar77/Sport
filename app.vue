<script>
import {defineComponent} from "vue";
import NavigationBar from "~/Components/NavigationBar.vue";
import StartingColumns from "~/Components/StartingColumns.vue";

export default defineComponent({
  components: {StartingColumns, NavigationBar}
})


</script>

<template>
  <nuxtLayout>
    <v-app class="MainBgColor">
      <v-container>
        <v-row no-gutters>
          <v-col cols="1">
            <!--SIDEBAR -->
            <NavigationBar/>
          </v-col>
          <v-col cols="12">
            <!-- Main Source  -->
            <NuxtPage/>
          </v-col>

        </v-row>
      </v-container>
    </v-app>
  </nuxtLayout>
</template>

<style scoped>

.MainBgColor {
  background-color: #4E878C;
}

</style>