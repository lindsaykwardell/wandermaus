<script setup lang="ts">
import { generateEmptyHexgrid, generateHexes } from "~~/composables/hexgrid";
import { Background, generateTerrain } from "~~/composables/hex";
import { generateSettlement } from "~~/composables/settlement";

const hexgrid = generateEmptyHexgrid();

const selectedHex = ref<number>();
const allowRiverPlacement = ref(false);
const mouseX = ref(0);
const mouseY = ref(0);

function selectHex(id: number) {
  selectedHex.value = id;
}

const hex = computed(() => {
  if (selectedHex.value !== undefined) {
    return hexgrid.hexes[selectedHex.value];
  }
});

function updateBackground(background: Background) {
  if (selectedHex.value !== undefined) {
    hexgrid.hexes[selectedHex.value].background = background;
    hexgrid.hexes[selectedHex.value].terrain = generateTerrain(background);
  }
}

function generateRandomHexes() {
  hexgrid.hexes = generateHexes();
}

function whereIsMouse(e: MouseEvent) {
  const grid = document.getElementById("hexgrid");
  const gridLeft = grid?.getBoundingClientRect().left;
  const gridTop = grid?.getBoundingClientRect().top;

  // Display coordinates of mouse within the grid
  const x = e.clientX - gridLeft!;
  const y = e.clientY - gridTop!;
  if (x > 0 && x < 400 && y > 0 && y < 440) {
    mouseX.value = x;
    mouseY.value = y;
  }
}

function addRiverNode(e: MouseEvent) {
  if (allowRiverPlacement.value) {
    e.stopPropagation();
    if (
      hexgrid.rivers.length === 0 ||
      hexgrid.rivers[hexgrid.rivers.length - 1].x2
    ) {
      hexgrid.rivers.push({
        x1: mouseX.value,
        y1: mouseY.value,
      });
    } else {
      hexgrid.rivers[hexgrid.rivers.length - 1].x2 = mouseX.value;
      hexgrid.rivers[hexgrid.rivers.length - 1].y2 = mouseY.value;
      hexgrid.rivers.push({
        x1: mouseX.value,
        y1: mouseY.value,
      });
    }
  }
}

function clearRiverPlacement(e: KeyboardEvent) {
  if (e.key === "Escape") {
    hexgrid.rivers.pop();
    allowRiverPlacement.value = false;
  }
}

function removeSettlement() {
  if (hex.value?.settlement) {
    hex.value.settlement = null;
  }
}

function addSettlement() {
  console.log(hex.value);
  if (hex.value) {
    hex.value.settlement = generateSettlement();
  }
}

watch(allowRiverPlacement, () => {
  setTimeout(() => {
    if (allowRiverPlacement.value) {
      window.addEventListener("mousemove", whereIsMouse);
      window.addEventListener("click", addRiverNode);
      window.addEventListener("keydown", clearRiverPlacement);
    } else {
      window.removeEventListener("mousemove", whereIsMouse);
      window.removeEventListener("click", addRiverNode);
      window.removeEventListener("keydown", clearRiverPlacement);
    }
  }, 100);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", whereIsMouse);
  window.removeEventListener("click", addRiverNode);
  window.removeEventListener("keydown", clearRiverPlacement);
});
</script>

<template>
  <div class="flex gap-4">
    <Hexgrid
      :hexgrid="hexgrid"
      :mouseX="mouseX"
      :mouseY="mouseY"
      @selectHex="selectHex"
    />
    <div class="grid grid-cols-3 flex-grow p-3">
      <HexOverview
        v-for="(hex, index) in hexgrid.hexes"
        :key="index"
        :hex="hex"
        :index="index + 1"
        @click="selectHex(index)"
        class="cursor-pointer"
      />
    </div>
  </div>
  <div class="flex gap-4 p-3">
    <button
      class="bg-blue-300 px-3 py-1 rounded"
      @click="allowRiverPlacement = !allowRiverPlacement"
    >
      {{ allowRiverPlacement ? "Disable" : "Enable" }} River Placement
    </button>
    <button class="bg-green-300 px-3 py-1 rounded" @click="generateRandomHexes">
      Generate Random Hexes
    </button>
  </div>
  <div class="bg-gray-300 rounded-lg">
    <div v-if="selectedHex !== undefined && hex" class="p-4">
      <div class="flex pb-4">
        <div class="pr-4">
          <p class="text-xl font-medieval font-bold flex gap-2">
            <div class="whitespace-nowrap">{{ selectedHex + 1 }} - </div> <input v-model="hex.name" class="w-full" />
          </p>
          <p>Landmark: <input v-model="hex.landmark" class="w-full" /></p>
          <p>Description: <input v-model="hex.description" class="w-full" /></p>
          <div class="flex gap-8 pt-4">
            <!-- grassland, forest, hills, mountain, swamp, barren, water -->
            <button @click="updateBackground('grassland')">
              <img src="/tiles/Hexes/grassland.png" class="w-16" />
            </button>
            <button @click="updateBackground('forest')">
              <img src="/tiles/Hexes/forest.png" class="w-16" />
            </button>
            <button @click="updateBackground('hills')">
              <img src="/tiles/Hexes/hills.png" class="w-16" />
            </button>
            <button @click="updateBackground('mountain')">
              <img src="/tiles/Hexes/mountains.png" class="w-16" />
            </button>
            <button @click="updateBackground('swamp')">
              <img src="/tiles/Hexes/swamp.png" class="w-16" />
            </button>
            <button @click="updateBackground('barren')">
              <img src="/tiles/Hexes/barren.png" class="w-16" />
            </button>
          </div>
        </div>
        <div v-if="hex.settlement" class="border-l border-black pl-4">
          <button
            @click="removeSettlement"
            class="border border-blue-500 rounded min-w-[1.7rem]"
          >
            -
          </button>
          <SettlementDetails :settlement="hex.settlement" />
        </div>
        <div v-else class="border-l border-black pl-4">
          <button
            @click="addSettlement"
            class="bg-blue-500 text-white px-3 py-1 rounded min-w-[1.7rem]"
          >
            Add Settlement
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
input,
select {
  background: transparent;
  border-bottom: 1px solid black;
}
</style>
