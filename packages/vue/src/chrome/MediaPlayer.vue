<script setup lang="ts">
import { ref } from "vue";
import Orb from "../core/Orb.vue";
import Badge from "../display/Badge.vue";
import Progress from "../display/Progress.vue";
import IconBtn from "../controls/IconBtn.vue";

const props = withDefaults(
  defineProps<{ track?: string; artist?: string; at?: number; defaultPlaying?: boolean }>(),
  { track: "Lagoon Drift", artist: "The Aero Collective", at: 42, defaultPlaying: true },
);

const playing = ref(props.defaultPlaying);
</script>

<template>
  <div class="glass glass-static" :style="{ padding: '20px', display: 'grid', gap: '14px' }">
    <div :style="{ display: 'flex', gap: '14px', alignItems: 'center' }">
      <Orb tint="cyan" :size="56" glyph="♪" />
      <div :style="{ flex: 1 }">
        <div class="aero-text-shadow" :style="{ fontSize: '15px', fontWeight: 600 }">{{ track }}</div>
        <div class="aero-text-shadow" :style="{ opacity: 0.75, fontSize: '12.5px' }">{{ artist }}</div>
      </div>
      <Badge tone="accent" dot>Live</Badge>
    </div>
    <Progress :value="at" />
    <div :style="{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center' }">
      <IconBtn :style="{ width: '34px', height: '34px', fontSize: '13px' }" title="shuffle">⤮</IconBtn>
      <IconBtn :style="{ width: '38px', height: '38px' }" title="prev">⏮</IconBtn>
      <IconBtn variant="primary" :style="{ width: '50px', height: '50px', fontSize: '18px' }" title="play" @click="playing = !playing">
        {{ playing ? "⏸" : "▶" }}
      </IconBtn>
      <IconBtn :style="{ width: '38px', height: '38px' }" title="next">⏭</IconBtn>
      <IconBtn :style="{ width: '34px', height: '34px', fontSize: '13px' }" title="repeat">⟳</IconBtn>
    </div>
  </div>
</template>
