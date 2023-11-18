<script>

export default {
  data() {
    return {
      name: "",
      note:"",
      vslider:"",
      AmountProtein:"50",
      AmountBCAA:"0",
      AmountEAA:"9",
      AmountCreatin:"7",
      selectedSportType: [], // Für Mehrfachauswahl, initialisiere mit einem leeren Array
      selectedSaunaType: [],
      SportType: ['Gym', 'Running', 'Cycling','Bouldering','HIIT', 'Ruhe Tag'], // Optionen für die Auswahl
      SaunaType:['Bio Sauna','Finnish Sauna', 'Steam Sauna'],
      checkboxBCAA: false,
      checkboxCreatin: false,
      checkboxEAA: false,
      checkboxProtein: false,
      checkboxSauna: false,
    };
  }
};

</script>

<template>
  <div class="MainBgColor">
    <v-sheet>
      <v-form fast-fail @submit.prevent>

        <div class="d-flex justify-center">
          <v-subheader class="custom-subheader">Trainings data</v-subheader>
        </div>

        <v-text-field
            v-model="name"
            label="Name"

        />
        <v-select
            v-model="selectedSportType"
            :items="SportType"
            :rules="[v => v.length > 0 || 'Mindestens ein Item ist erforderlich']"
            label="Sport Art"
            :multiple="true"
            required
        ></v-select>

        <v-divider :thickness="5"/>
        <div class="d-flex justify-center" >
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
          <v-col cols="12" sm="3" >
              <v-checkbox v-model="checkboxBCAA" label="BCAA" />
              <v-text-field label="BCAA gr." v-model="AmountBCAA"/>
            </v-col>
          <v-col cols="12" sm="3">
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
.DividerStyle{
  height: 15px;
  color: #fe6847;
}

.v-sheet {
  background-color: transparent;
}

</style>