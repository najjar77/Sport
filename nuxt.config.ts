// https://nuxt.com/docs/api/configuration/nuxt-config
import * as Process from "process";
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'


console.log('hallo ', Process.env.NODE_ENV)

export default defineNuxtConfig({
  app:{
    baseURL: isDevelopment() ? '':'/Sport/',
    buildAssetsDir: 'assets',
  },
  build: {
    transpile: ['vuetify'],
  },
  devtools: { enabled: true },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})

function isDevelopment(): boolean{
  return Process.env.NODE_ENV === 'development'
}