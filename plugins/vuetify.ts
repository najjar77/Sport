import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import {VDatePicker} from "vuetify/labs/VDatePicker";

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        // ... your configuration
        components:{VDatePicker}
    })
    app.vueApp.use(vuetify)
})