<script setup lang="ts">
import { Hex } from "~~/composables/hex";

const props = defineProps<{
  hex: Hex;
  index: number;
}>();
</script>

<template>
  <div>
    <div
      class="underline font-medieval"
      :class="{ 'font-bold': !!hex.settlement, 'text-lg': !!hex.settlement }"
    >
      {{ index }}. {{ hex.name }}
    </div>
    <p>{{ hex.description }}</p>
  </div>
</template>
