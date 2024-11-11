export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      baseUrlCountry: process.env.BASE_URL_COUNTRY,
      baseUrlList: process.env.BASE_URL_LIST_COUNTRIES
    }
    
  }
})