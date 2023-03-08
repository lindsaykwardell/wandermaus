<script setup lang="ts">
const props = defineProps<{
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}>();
</script>

<template>
  <svg class="absolute pointer-events-none" height="440" width="400">
    <line
      :x1="props.x1"
      :y1="props.y1"
      :x2="props.x2"
      :y2="props.y2"
      style="stroke: blue; stroke-width: 6; pointer-events: auto;"
      stroke-linecap="round"
    />
  </svg>
</template>
