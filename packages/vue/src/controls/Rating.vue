<script setup lang="ts">
import { ref } from "vue";

withDefaults(defineProps<{ max?: number }>(), { max: 5 });
const model = defineModel<number>({ default: 3 });

const hover = ref(0);
</script>

<template>
  <div class="aero-rating" @mouseleave="hover = 0">
    <span
      v-for="i in max"
      :key="i"
      class="aero-rating-star"
      :data-on="(hover || model) >= i"
      @mouseenter="hover = i"
      @click="model = i"
      >★</span
    >
  </div>
</template>
