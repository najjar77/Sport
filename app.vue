<script>
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
      <v-app class="MainBgColor">
        <!--SIDEBAR -->
        <NavigationBar/>
        <!-- Main Source  -->

        <NuxtPage/>
      </v-app>
    </nuxtLayout>
  </div>
</template>

<style scoped>

.MainBgColor{
  background-color: #4E878C ;
}

</style>