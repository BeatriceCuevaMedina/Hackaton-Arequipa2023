<style scoped>
.list {
  @apply mt-3 flex gap-4 md:justify-between;
  animation: list 0.3s ease-in-out forwards;
}
:list:hover{
   background-color: rgba(70, 70, 70, 0.219);
}

@keyframes list {
  from {
    transform: translateY(-50%) scale(0.75);
  }
  to {
    transform: translateY(0) scale(1);
  }
}
</style>
<template>
  <!-- List card -->
  <div @click="router.push('/view/' + type + '/' + element)" class="list">
    <div class="flex gap-3">
      <span>
        <img class="rounded-xl" src="../assets/mount-square.jpg" width="60" />
      </span>
      <div>
        <strong class="text-xs mb-0 w-full">{{ solarElement.name }}</strong>
        <p class="text-xxxxs text-gray-400">{{ solarElement.distanceFromSun }}</p>
      </div>
    </div>
    <span class="text-xxxxs gap-1 flex items-center">
      <i class="fa fa-star text-xxxxs text-yellow-400"></i>
      4.6
    </span>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { defineProps, computed } from "vue";
import { solarSystem } from "../data/planets";

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

const router = useRouter();
const solarElement = computed(() => {
   const elements =   solarSystem[props.type];
   console.log(props.type);
   return elements.find(e => e.name === props.element);
})
</script>
