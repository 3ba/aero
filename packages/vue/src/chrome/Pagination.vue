<script setup lang="ts">
const props = withDefaults(defineProps<{ pages?: number }>(), { pages: 6 });
const model = defineModel<number>({ default: 1 });

function go(p: number) {
  model.value = Math.max(1, Math.min(props.pages, p));
}
</script>

<template>
  <div class="aero-pagination">
    <button class="aero-page" @click="go(model - 1)">‹</button>
    <button v-for="i in pages" :key="i" class="aero-page" :data-active="model === i" @click="go(i)">{{ i }}</button>
    <button class="aero-page" @click="go(model + 1)">›</button>
  </div>
</template>
