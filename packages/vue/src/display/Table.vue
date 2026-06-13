<script setup lang="ts">
defineProps<{ columns: string[]; rows: (string | number)[][] }>();
</script>

<template>
  <table class="aero-table">
    <thead>
      <tr>
        <th v-for="c in columns" :key="c">{{ c }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(r, i) in rows" :key="i">
        <td v-for="(cell, j) in r" :key="j">{{ cell }}</td>
      </tr>
    </tbody>
  </table>
</template>
