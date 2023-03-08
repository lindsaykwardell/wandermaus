<script setup lang="ts">
import { Hexgrid } from "~~/composables/hexgrid";

const props = defineProps<{
  hexgrid: Hexgrid;
  mouseX: number;
  mouseY: number;
}>();

const emit = defineEmits(["selectHex"]);

function selectHex(id: number) {
  emit("selectHex", id);
}
</script>

<template>
  <div id="hexgrid" class="relative h-[440px] w-[440px] min-w-[440px] mx-2">
    <div class="flex absolute left-[150px] pointer-events-none">
      <Hex id="hex-7" :hex="hexgrid.hexes[7]" @click="selectHex(7)" />
    </div>
    <div
      class="flex absolute top-[42px] left-[75px] gap-[50px] pointer-events-none"
    >
      <Hex :hex="hexgrid.hexes[18]" @click="selectHex(18)" />
      <Hex :hex="hexgrid.hexes[8]" @click="selectHex(8)" />
    </div>
    <div class="flex absolute top-[85px] gap-[50px] pointer-events-none">
      <Hex :hex="hexgrid.hexes[17]" @click="selectHex(17)" />
      <Hex :hex="hexgrid.hexes[1]" @click="selectHex(1)" />
      <Hex :hex="hexgrid.hexes[9]" @click="selectHex(9)" />
    </div>
    <div
      class="flex absolute top-[127px] left-[75px] gap-[50px] pointer-events-none"
    >
      <Hex :hex="hexgrid.hexes[6]" @click="selectHex(6)" />
      <Hex :hex="hexgrid.hexes[2]" @click="selectHex(2)" />
    </div>
    <div class="flex absolute top-[170px] gap-[50px] pointer-events-none">
      <Hex :hex="hexgrid.hexes[16]" @click="selectHex(16)" />
      <Hex :hex="hexgrid.hexes[0]" @click="selectHex(0)" />
      <Hex :hex="hexgrid.hexes[10]" @click="selectHex(10)" />
    </div>
    <div
      class="flex absolute top-[213px] left-[75px] gap-[50px] pointer-events-none"
    >
      <Hex :hex="hexgrid.hexes[5]" @click="selectHex(5)" />
      <Hex :hex="hexgrid.hexes[3]" @click="selectHex(3)" />
    </div>
    <div class="flex absolute top-[256px] gap-[50px] pointer-events-none">
      <Hex :hex="hexgrid.hexes[15]" @click="selectHex(15)" />
      <Hex :hex="hexgrid.hexes[4]" @click="selectHex(4)" />
      <Hex :hex="hexgrid.hexes[11]" @click="selectHex(11)" />
    </div>
    <div
      class="flex absolute top-[299px] left-[75px] gap-[50px] pointer-events-none"
    >
      <Hex :hex="hexgrid.hexes[14]" @click="selectHex(14)" />
      <Hex :hex="hexgrid.hexes[12]" @click="selectHex(12)" />
    </div>
    <div class="flex absolute top-[341px] left-[150px] pointer-events-none">
      <Hex :hex="hexgrid.hexes[13]" @click="selectHex(13)" />
    </div>
    <div>
      <River
        v-for="segment in hexgrid.rivers"
        :x1="segment.x1"
        :y1="segment.y1"
        :x2="segment.x2 || mouseX"
        :y2="segment.y2 || mouseY"
      />
    </div>
  </div>
</template>
