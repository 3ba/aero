<script setup lang="ts">
import { ref } from "vue";
import {
  AeroThemeProvider,
  AeroSky,
  Navbar,
  ThemeSwitcher,
  Card,
  Stat,
  Btn,
  Toggle,
  Slider,
  Select,
  Badge,
  Progress,
  Tabs,
  Alert,
  Toast,
  MediaPlayer,
  Stack,
  SectionLabel,
} from "@aero/vue";
import type { AeroThemeSetting } from "@aero/vue";

const theme = ref<AeroThemeSetting>("morning");
const bubbles = ref(true);
const volume = ref(64);
const tab = ref(0);
const scene = ref("Lagoon");
</script>

<template>
  <AeroThemeProvider :theme="theme" :bubbles="bubbles">
    <AeroSky :style="{ minHeight: '100vh', padding: '28px 22px', boxSizing: 'border-box' }">
      <div :style="{ maxWidth: '980px', margin: '0 auto', display: 'grid', gap: '22px' }">
        <Navbar />

        <Stack row wrap justify="space-between" align="center" :gap="16">
          <div>
            <SectionLabel>Frutiger Aero · Vue</SectionLabel>
            <h1 class="aero-text-shadow" :style="{ margin: '6px 0 0', fontWeight: 300, fontSize: '34px' }">A sky for every hour</h1>
          </div>
          <ThemeSwitcher v-model="theme" />
        </Stack>

        <Stack row wrap :gap="16">
          <Stat label="Visitors" value="12.4k" delta="8%" glyph="☀" />
          <Stat label="Signups" value="1,208" delta="3%" glyph="✦" />
          <Stat label="Bounce" value="22%" delta="1%" :up="false" glyph="↯" />
        </Stack>

        <div :style="{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }">
          <Card title="Controls" subtitle="Everything recolors with the theme">
            <Stack :gap="16">
              <Toggle v-model="bubbles" label="Drifting bubbles" />
              <Slider v-model="volume" label="Volume" show-value unit="%" />
              <Select v-model="scene" :options="['Lagoon', 'Meadow', 'Aurora', 'Twilight']" />
              <Stack row :gap="10" wrap>
                <Btn variant="primary">Primary</Btn>
                <Btn variant="positive">Positive</Btn>
                <Btn variant="ghost">Ghost</Btn>
                <Badge tone="accent" dot>Live</Badge>
              </Stack>
            </Stack>
          </Card>

          <Card title="Status" subtitle="Feedback surfaces">
            <Stack :gap="14">
              <Tabs v-model="tab" :items="['Overview', 'Activity', 'Alerts']" />
              <Progress :value="volume" label="Sync" />
              <Alert tone="success" title="All systems nominal">The sky is clear and the bubbles are rising.</Alert>
              <Toast title="Saved to the cloud" body="Your changes are floating safely." action="Undo" />
            </Stack>
          </Card>
        </div>

        <MediaPlayer :at="volume" />
      </div>
    </AeroSky>
  </AeroThemeProvider>
</template>
