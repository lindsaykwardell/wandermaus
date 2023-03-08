<script setup lang="ts">
import {
  MouseSettlement,
  getNotableFeature,
  getIndustry,
} from "~~/composables/settlement";

const props = defineProps<{
  settlement: MouseSettlement;
}>();

function addNotableFeature() {
  props.settlement.notableFeature.push(getNotableFeature()[0]);
}

function addIndustry() {
  props.settlement.industry.push(getIndustry()[0]);
}

function addTavern() {
  props.settlement.taverns.push(getTaverns()[0]);
}

function removeNotableFeature(index: number) {
  props.settlement.notableFeature.splice(index, 1);
}

function removeIndustry(index: number) {
  props.settlement.industry.splice(index, 1);
}

function removeTavern(index: number) {
  props.settlement.taverns.splice(index, 1);
}
</script>

<template>
  <h2 class="py-3 font-medieval text-xl flex items-center gap-2">
    Settlement Details
  </h2>
  <p>Settlement name: <input v-model="settlement.name" /></p>
  <p>
    Size:
    <select v-model="settlement.size">
      <option v-for="size in [1, 2, 3, 4, 5, 6]" :value="size">
        {{ sizeDescription(size) }}
      </option>
    </select>
  </p>
  <p>Governance: <input v-model="settlement.governance" /></p>
  <p>Details: <input v-model="settlement.details" /></p>
  <div>
    Notable Features:
    <ul class="list-disc pl-4">
      <li v-for="(feature, index) in settlement.notableFeature" class="flex">
        <button
          @click="removeNotableFeature(index)"
          class="border border-blue-500 rounded w-7"
        >
          -
        </button>
        <input v-model="settlement.notableFeature[index]" />
      </li>
      <li>
        <button
          @click="addNotableFeature"
          class="bg-blue-500 rounded w-7 text-white"
        >
          +
        </button>
      </li>
    </ul>
  </div>
  <div>
    Industry:
    <ul class="list-disc pl-4">
      <li v-for="(industry, index) in settlement.industry" class="flex">
        <button
          @click="removeNotableFeature(index)"
          class="border border-blue-500 rounded w-7"
        >
          -
        </button>
        <input v-model="settlement.industry[index]" />
      </li>
      <li>
        <button @click="addIndustry" class="bg-blue-500 rounded w-7 text-white">
          +
        </button>
      </li>
    </ul>
  </div>
  <div>Event: <input v-model="settlement.event" /></div>
  <div>
    Taverns:
    <ul class="list-disc pl-4">
      <li v-for="(tavern, index) in settlement.taverns" class="flex gap-2">
        <button
          @click="removeTavern(index)"
          class="border border-blue-500 rounded min-w-[1.7rem]"
        >
          -
        </button>
        <input v-model="settlement.taverns[index].name" /> -
        <input v-model="settlement.taverns[index].specialty" />
      </li>
      <li>
        <button @click="addTavern" class="bg-blue-500 rounded w-7 text-white">
          +
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
input,
select {
  background: transparent;
  border-bottom: 1px solid black;
  width: 100%;
}
</style>
