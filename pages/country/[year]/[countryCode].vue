<template>
    <div class="h-screen bg-gray-100 flex justify-center items-center">
      <div class="container w-3/4 mx-auto p-3 h-full flex flex-col">
        <div class="flex-1 overflow-y-auto custom-scrollbar">
            <HolidayList :holidays="holidays"/>
            <YearNavigation :years="years" :country-code="countryCode"/>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  const config = useRuntimeConfig();
  const route = useRoute();
  const { year, countryCode } = route.params;
  
  const currentYear = parseInt(year);
  const uri = `${config.public.baseUrlCountry}${currentYear}/${countryCode}`;
  const { data: holidays } = await useFetch(uri);
  
  const years = [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];
  </script>
  
<style>
   
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #747981; 
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #2D3748; 
  }

  ::-webkit-scrollbar-track {
    background-color: #EDF2F7; 
  }

  .router-link-exact-active {
        color: #f8fafc;
        background-color: #747981;
    }
</style>