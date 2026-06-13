<script setup lang="ts">
import { ref } from "vue";

export interface AccordionItem {
  title: string;
  body: string;
}

const props = withDefaults(defineProps<{ items: AccordionItem[]; defaultOpen?: number }>(), { defaultOpen: 0 });
const open = ref(props.defaultOpen);

function toggle(i: number) {
  open.value = open.value === i ? -1 : i;
}
</script>

<template>
  <div class="aero-accordion">
    <div v-for="(it, i) in items" :key="i" class="aero-acc-item" :data-open="open === i">
      <div class="aero-acc-head" @click="toggle(i)">
        <span>{{ it.title }}</span>
        <span class="aero-acc-caret">▼</span>
      </div>
      <div v-if="open === i" class="aero-acc-body">{{ it.body }}</div>
    </div>
  </div>
</template>
