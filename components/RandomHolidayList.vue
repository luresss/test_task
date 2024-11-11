<template>
    <div class="w-1/2 bg-white p-6 flex flex-col">
        <h2 class="text-xl font-semibold mb-4">Next holidays in random countries</h2>
        <div v-for="h in randomCountiesCodes" :key="h.countryCode" class="mb-4">
            <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <p class="text-bas text-gray-800 mb-2">{{ h.name }}</p>
                <p class="text-bas font-semibold text-gray-800 mb-2">{{ h.countryName }}</p>
                <p class="text-bas text-gray-800 mb-2">{{ h.dateFormatted }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    randomCountiesCodes: {
      type: Array,
      required: true
    }
  }
};
</script>