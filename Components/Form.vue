<script setup lang="ts">

const SportType = ['Gym', 'Running', 'Cycling', 'Bouldering', 'HIIT', 'Ruhe Tag'] // Optionen für die Auswahl
const SaunaType = ['Bio Sauna', 'Finnish Sauna', 'Steam Sauna']


const name = ref("")
const note = ref("")
const vslider = ref("")
const AmountProtein = ref("50")
const AmountBCAA = ref("0")
const AmountEAA = ref("9")
const AmountCreatin = ref("7")
const selectedSportType = ref([]) // Für Mehrfachauswahl, initialisiere mit einem leeren Array
const selectedSaunaType = ref([])
const checkboxBCAA = ref(false)
const checkboxCreatin = ref(false)
const checkboxEAA = ref(false)
const checkboxProtein = ref(false)
const checkboxSauna = ref(false)
const checkboxVitD =ref(false)
const checkboxZinc=ref(false)
const checkboxLionsMain=ref(false)
const checkboxMultiVit=ref(false)
const checkboxMagesium=ref(false)

const props = defineProps({
  toggleFormVisible: Function
});


</script>

<template>
  <div class="MainBgColor">
    <v-sheet>
      <v-form fast-fail @submit.prevent>


        <v-btn prepend-icon="mdi-chevron-left" @click="props.toggleFormVisible" rounded>cancel</v-btn>
        <div class="d-flex justify-center">
          <v-subheader class="custom-subheader">Trainings data</v-subheader>
        </div>
        <v-row>
          <v-col cols="1" sm="6">
            <v-text-field v-model="name" label="Name"/>
          </v-col>
          <v-col cols="1" sm="6">
        <v-select
            v-model="selectedSportType"
            :items="SportType"
            :rules="[v => v.length > 0 || 'Mindestens ein Item ist erforderlich']"
            label="Sport Art"
            :multiple="true"
            required
        ></v-select>
          </v-col>
          <v-col cols="2" sm="3">
        <v-date-picker></v-date-picker>
          </v-col>
        </v-row>
        <v-divider :thickness="5"/>
        <div class="d-flex justify-center">
          <v-subheader class="custom-subheader">Sauna</v-subheader>
        </div>


        <v-select
            v-model="selectedSaunaType"
            :items="SaunaType"
            :rules="[v => v.length > 0 || 'Mindestens ein Item ist erforderlich']"
            label="Sauna Art"
            :multiple="true"
        ></v-select>
        <v-divider class="DividerStyle" :thickness="5"/>

        <div class="d-flex justify-center">
          <v-subheader class="custom-subheader">Supplements</v-subheader>
        </div>

        <v-row>
          <v-col cols="1" sm="3">
            <v-checkbox v-model="checkboxBCAA" label="BCAA"/>
            <v-text-field label="BCAA gr." v-model="AmountBCAA"/>
          </v-col>
          <v-col cols="1" sm="3">
            <v-checkbox
                v-model="checkboxCreatin"
                label="Creatin"
            />
            <v-text-field label="Creatin gr." v-model="AmountCreatin"/>
          </v-col>
          <v-col cols="12" sm="3">
            <v-checkbox
                v-model="checkboxEAA"
                label="EAA"
            />
            <v-text-field label="EAA gr." v-model="AmountEAA"/>
          </v-col>
          <v-col cols="12" sm="3">
            <v-checkbox
                v-model="checkboxProtein"
                label="Protein"
            />
            <v-text-field label="Protein gr." v-model="AmountProtein"/>
          </v-col>
        </v-row>
        <v-divider :thickness="5"/>
        <div class="d-flex justify-center">

          <v-subheader class="custom-subheader">Vitamins</v-subheader>
        </div>
        <v-row>
          <v-col cols="1" sm="3">
            <v-checkbox v-model="checkboxVitD" label="Vitamin D3"/>
          </v-col>
          <v-col cols="1" sm="3">
            <v-checkbox v-model="checkboxZinc" label="Zinc"/>
          </v-col>
          <v-col cols="1" sm="3">
            <v-checkbox v-model="checkboxMultiVit" label="Multi Vitamin"/>
          </v-col>
          <v-col cols="1" sm="3">
            <v-checkbox v-model="checkboxMagesium" label="Magnesium"/>
          </v-col>
          <v-col cols="1" sm="3">
            <v-checkbox v-model="checkboxLionsMain" label="Lions Main"/>
          </v-col>
        </v-row>

        <v-divider class="DividerStyle" :thickness="5"/>

        <div class="d-flex justify-center">
          <v-subheader class="custom-subheader">Feedback</v-subheader>
        </div>

        <v-text-field
            v-model="note"
            label="Notes"

        />

        <v-slider
            v-model="vslider"
            label="How was it?"
            :min="0"
            :max="10"
            :step="0.25"
            color="orange"
            thumb-label
        />

        <v-btn prepend-icon="mdi-content-save-outline" type="submit" block
               color="#fe6847"
               elevation="24"
               large
               rounded> Save
        </v-btn>
      </v-form>
    </v-sheet>


  </div>


</template>

<style scoped>

.custom-subheader {
  font-size: 18px;
  font-weight: bold;
}

.DividerStyle {
  height: 15px;
  color: #942108;
}

.v-sheet {
  background-color: transparent;
}

</style>