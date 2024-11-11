<template>
    <div class="sticky bottom-0 mt-4 p-4 bg-white shadow-lg rounded-lg overflow-x-auto">
      <div class="flex flex-nowrap space-x-2 md:space-x-4">
        <NuxtLink
          v-for="year in years"
          :key="year"
          :to="`/country/${year}/${countryCode}`"
          class="flex-none px-4 py-2 rounded-lg transition-colors bg-gray-950 text-white hover:bg-gray-300"
        >
          {{ year }}
        </NuxtLink>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      years: {
        type: Array,
        required: true
      },
      countryCode: {
        type: String,
        required: true
      }
    }
  };
  </script>