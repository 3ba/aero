<script setup lang="ts">
import Avatar from "../display/Avatar.vue";

export interface ChatMessage {
  from: string;
  text: string;
  me?: boolean;
}

defineProps<{ messages: ChatMessage[] }>();
</script>

<template>
  <div :style="{ display: 'flex', flexDirection: 'column', gap: '10px' }">
    <div
      v-for="(m, i) in messages"
      :key="i"
      :style="{ display: 'flex', gap: '8px', alignItems: 'flex-end', flexDirection: m.me ? 'row-reverse' : 'row' }"
    >
      <Avatar :name="m.from" :size="28" />
      <div class="aero-chat-bubble" :class="m.me ? 'aero-chat-me' : 'aero-chat-them'">{{ m.text }}</div>
    </div>
  </div>
</template>
