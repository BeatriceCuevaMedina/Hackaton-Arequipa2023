<style scoped>
.card {
  min-width: 70%;
  animation: card 0.3s ease-in-out forwards;
  @apply rounded-xl relative overflow-hidden;
}
.card-footer {
  @apply absolute bottom-2 left-2 right-2 rounded-xl px-3 py-2 bg-gray-50 flex items-start gap-1;
}

@keyframes card {
  from {
    transform: translateX(-150%) scale(0.75);
  }
  to {
    transform: translateX(0) scale(1);
  }
}
</style>

<template>
  <!-- Card -->
  <div class="card" @click="router.push('/view/' + type + '/' + solarElement.name)">
    <img src="../assets/mount.jpeg" />

    <div class="card-footer">
      <div @click="router.push({ name: 'view' })" class="flex flex-wrap">
        <strong class="text-xxxs mb-0 w-full">{{ solarElement.name }}</strong>
        <p class="text-xxxxs text-gray-400">{{ solarElement.distanceFromSun }}</p>
      </div>
      <i
        @click="isHeartClick = !isHeartClick"
        :class="isHeartClick ? 'fas' : 'far'"
        class="fa-heart duration-300 text-xs text-green-500"
      ></i>
      
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { defineProps } from "vue";
import { solarSystem } from "../data/planets";

const router = useRouter();
const props = defineProps({
  type: {
    type: String,
    default: "planets",
  },
  element: {
    type: String,
    default: "Earth",
  },
});

const isHeartClick = ref(false);
const solarElement = computed(() => {
   const elements =   solarSystem[props.type];
   return elements.find(e => e.name === props.element);
})
</script>
