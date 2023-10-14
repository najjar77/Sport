// https://nuxt.com/docs/api/configuration/nuxt-config
import * as Process from "process";


console.log('hallo ', Process.env.NODE_ENV)

export default defineNuxtConfig({
  app:{
    baseURL: isDevelopment() ? '':'/Sport/',
    buildAssetsDir: 'assets',
  },
  devtools: { enabled: true }
})

function isDevelopment(): boolean{
  return Process.env.NODE_ENV === 'development'
}