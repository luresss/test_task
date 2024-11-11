<template>
    <div>
        <div v-for="h in holidays" :key="h.countryCode" class="mb-4">
            <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <p class="text-base font-semibold text-gray-800 mb-2">{{ h.name }}</p>
                <p class="text-gray-600">
                    <span class="font-medium">{{ formatDate(h.date) }}</span>
                </p>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  import moment from 'moment';
  
  export default {
    props: {
      holidays: {
        type: Array,
        required: true
      }
    },
    methods: {
      formatDate(date) {
        return moment(date).format('Do MMMM');
      }
    }
  };
  </script>