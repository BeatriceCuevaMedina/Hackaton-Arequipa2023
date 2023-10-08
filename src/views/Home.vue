<style scoped>
.text-xxs {
  font-size: 0.75rem;
}
.text-xxxs {
  font-size: 0.55rem;
}
.category-wrapper,
.card-wrapper {
  @apply flex gap-3 overflow-scroll;
}
.category {
  @apply bg-gray-100 duration-300 px-3 py-1 rounded-xl text-green-500 text-xs font-medium;
}
.active {
  @apply bg-green-400 text-gray-50;
}
</style>

<template>
  <section class="px-6 py-5">
    <!-- Location -->
    <div class="text-gray-400 flex items-center gap-2">
      <i class="fas fa-map-marker-alt text-xxs"></i>
      <span class="text-xxs">{{ country }}, {{ city }}</span>
    </div>
    <!-- Wellcome notes -->
    <h1 class="text-2xl w-10/12 font-medium mt-5">
      Where do you like to go ? 👏
    </h1>

    <!-- Category -->
    <div class="category-wrapper mt-5">
      <template v-for="(category, index) in categories" :key="index">
        <span
          @click="activeBar = category.value"
          :class="activeBar === category.value ? 'active' : ''"
          class="category"
        >
          {{ category.label }}
        </span>
      </template>
    </div>

    <!-- Card -->
    <div class="card-wrapper mt-6">
      <template v-for="(element, idx) in elementsScrollBar" :key="idx">
        <Card :type="activeBar" :element="element.name"></Card>
      </template>
    </div>

    <!-- Recomendation for you -->
    <div class="mt-5 mb-20">
      <div class="flex items-center text-gray-600 justify-between">
        <p>Recomendations</p>
        <i class="fa fa-chevron-down"></i>
      </div>
      <template v-for="(planetRecommended,idx) in planets" :key="idx">
        <List type="planets"  :element="planetRecommended.name" ></List>
      </template>
    </div>
  </section>
  <Navbar></Navbar>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import { onMounted } from "vue";
import { solarSystem } from "../data/planets";
import Card from "../components/Card.vue";
import List from "../components/List.vue";
import Navbar from "../components/Navbar.vue";

const categories = ref([
  {
   label: "Planets",
   value: "planets",
  },
  {
   label: "Moons",
   value: "moons"
  },
  {
   label: "Stars",
   value: "stars"
  },
  {
   label: "Others",
   value: "otherObjects"
  }
]);
const activeBar = ref("planets");

const elementsScrollBar = computed(() => {
   return solarSystem[activeBar.value];
});
const planets = reactive([...solarSystem.planets]);

//-------Location Data
const city = ref("");
const country = ref("");
const token = "748056f5922ef5";
const url = "https://ipinfo.io";

//------Functions
async function getLocation() {
  try {
    const headers = new Headers({
      Authorization: "Bearer " + token,
    });
    const res = await fetch(url, { method: "GET", headers: headers });
    const data = await res.json();
    city.value = data.city;
    country.value = data.country;
  } catch (e) {
    console.error(e);
  }
}

onMounted(() => {
  getLocation();
});
</script>
