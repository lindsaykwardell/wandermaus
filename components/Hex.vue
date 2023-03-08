<script setup lang="ts">
import { Hex } from "~~/composables/hex";

const props = defineProps<{
  hex: Hex;
}>();

const bg = computed(() => `bg-${props.hex.background}`);
</script>

<template>
  <div class="cell-wrapper pointer-events-auto cursor-pointer">
    <div :class="bg" class="cell" />
    <img
      :src="props.hex.terrain"
      class="absolute w-[100px]"
      :class="{
        'top-[-15px]':
          props.hex.settlement &&
          ['forest', 'grassland', 'hills', 'mountain'].includes(
            props.hex.background
          ),
      }"
    />
    <img
      v-if="props.hex.settlement"
      :src="`/tiles/Buildings/Small/hex_small${props.hex.settlement.size}.png`"
      class="absolute w-[75px] top-[30px]"
    />
  </div>
</template>

<style>
.cell {
  width: 98px;
  aspect-ratio: 1;
  clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
}

.bg-forest {
  background-image: url("/tiles/Hexes/forest.png");
  /* background-size: 50%; */
  background-position: center;
  background-repeat: no-repeat;
}

.bg-grassland {
  background-image: url("/tiles/Hexes/grassland.png");
  /* background-size: 50%; */
  background-position: center;
  background-repeat: no-repeat;
}

.bg-hills {
  background-image: url("/tiles/Hexes/hills.png");
  /* background-size: 50%; */
  background-position: center;
  background-repeat: no-repeat;
}

.bg-mountain {
  background-image: url("/tiles/Hexes/mountains.png");
  /* background-size: 50%; */
  background-position: center;
  background-repeat: no-repeat;
}

.bg-swamp {
  background-image: url("/tiles/Hexes/swamp.png");
  /* background-size: 50%; */
  background-position: center;
  background-repeat: no-repeat;
}

.bg-barren {
  background-image: url("/tiles/Hexes/barren.png");
  /* background-size: 50%; */
  background-position: center;
  background-repeat: no-repeat;
}

.bg-water {
  background-image: url("/tiles/Hexes/water_shallow.png");
  /* background-size: 50%; */
  background-position: center;
  background-repeat: no-repeat;
}

.cell-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  aspect-ratio: 1;
  clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
  background-color: black;
}

/* .bg-farm {
  background-image: url("https://juralen.lindsaykwardell.com/img/farm.svg");
  background-size: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-color: lightgoldenrodyellow;
}

.bg-farm:hover {
  background-color: goldenrod;
}

.bg-forest {
  background-image: url("https://juralen.lindsaykwardell.com/img/forest.png");
  background-size: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-color: lightgreen;
}

.bg-forest:hover {
  background-color: green;
}

.bg-mountain {
  background-image: url("https://juralen.lindsaykwardell.com/img/mountain.png");
  background-size: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #f5f5f5;
}

.bg-mountain:hover {
  background-color: #d3d3d3;
}

.bg-field {
  background-color: limegreen;
}

.bg-field:hover {
  background-color: lime;
} */
</style>
