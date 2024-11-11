<template>
    <div class="h-screen flex">
        <CountriesListWithFilter :countries="holidays" :current-year="currentYear"/>
        <RandomHolidayList :random-counties-codes="randomCountiesCodes"/>  
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import moment from "moment";
const config = useRuntimeConfig();

const { data:availableCountries } = await useFetch(config.public.baseUrlList);

const randomCountiesCodes = ref([]);
const currentYear = moment().format('YYYY');
const currentDate = moment();

const holidays = ref([]);


function getRandomElements(arr, num) {
    const shuffled = arr.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, num);
}

async function fetchData(apiCalls) {
    try {
        const responses = await Promise.all(
        apiCalls.map(url => fetch(url).then(response => response.json()))
        );
        const formattedHolidays = responses.map(item => getNextHoliday(item));
        return formattedHolidays;
    } catch (error) {
        console.error("Error fetching data", error);
        return [];
    }
}


function getNextHoliday(arr) {
  const res = arr.map(holiday => ({
    ...holiday,
    dateObj: moment(holiday.date),
    dateFormatted: moment(holiday.date).format('Do MMMM')
    }))
    .filter(holiday => holiday.dateObj.isSameOrAfter(currentDate))
    .sort((a, b) => a.dateObj - b.dateObj);

    return res.length ? formatRandomHolidaysData(res[0]) : null;
}

function formatRandomHolidaysData(item) {
    const countryName = holidays.value.find(el => item.countryCode === el.countryCode)?.name;
    return {
        ...item,
        countryName
    };
}

onMounted(async () => {
    holidays.value = availableCountries.value || [];
    const randomHolidays = getRandomElements(holidays.value, 3);
    const apiCalls = randomHolidays.map(item => 
        `${config.public.baseUrlCountry}${currentYear}/${item.countryCode}`
    );

  randomCountiesCodes.value = await fetchData(apiCalls); 
  console.log('Fetched holidays data:', randomCountiesCodes.value);
});
</script>
<style>
  .custom-scrollbar {
    scrollbar-width: thin; 
    scrollbar-color: transparent transparent; 
  }

  .custom-scrollbar::-webkit-scrollbar {
    width: 8px; 
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #747981; 
    border-radius: 10px; 
  }

  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: #2d3748; 
  }

  .custom-scrollbar::-webkit-scrollbar-track {
    background-color: #EDF2F7; 
  }

  .custom-scrollbar:hover {
    scrollbar-color: #747981 #EDF2F7; 
  }

  .custom-scrollbar:hover::-webkit-scrollbar-thumb {
    background-color: #747981; 
  }

  .custom-scrollbar:hover::-webkit-scrollbar-track {
    background-color: #EDF2F7; 
  }
</style>