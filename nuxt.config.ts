// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    buildAssetsDir: 'dist',
  },
  devtools: { enabled: true },
  router:{
    base: '/Sport/'
  }
})
