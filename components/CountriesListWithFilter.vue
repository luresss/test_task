<template>
    <div class="w-1/2 bg-white p-6 overflow-y-auto custom-scrollbar">
        <div class="flex items-center mb-4">
            <h2 class="text-xl font-semibold">Countries</h2>
            <div class="ml-4 flex-1">
                <input
                    v-model="searchTerm"
                    type="text"
                    placeholder="Search holidays..."
                    class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
            </div>
        </div>
        <div v-for="h in filteredCountries" :key="h.countryCode" class="mb-4">
            <NuxtLink :to="`/country/${currentYear}/${h.countryCode}`">
                <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <p class="text-base font-semibold text-gray-800 mb-2">{{ h.name }}</p>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<script>
export default {
    props: {
      countries: {
        type: Array,
        required: true
      },
      currentYear: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        searchTerm: ''
      };
    },
    computed: {
      filteredCountries() {
        return this.countries.filter((country) =>
          country.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      }
    }
  };
  </script>
  <!-- const filteredCountries = computed(() => {
    const term = searchTerm.value.toLowerCase();
    return holidays.value.filter(holiday => holiday.name.toLowerCase().includes(term));
}); --> 