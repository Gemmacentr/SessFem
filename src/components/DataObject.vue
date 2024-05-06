<script setup lang="ts">
import { computed, ref } from "vue";
import GemmaInput from "./UI/GemmaInput.vue";

import ConfiguratorObject from "./Misc/ConfiguratorObject.vue";

const elementsOfData = ref({
  first: {
    value: "a",
    placeholder: "firstPlaceholder",
    borderColor: "yellow",
  },
  second: {
    value: "b",
    placeholder: "secondPlaceholder",
    borderColor: "red",
  },
  third: {
    value: "c",
    placeholder: "thirdPlaceholder",
    borderColor: "green",
  },
});

const backgroundColor = computed(() => {
  return elementsOfData.value.first.value === "a" &&
    elementsOfData.value.second.value === "b" &&
    elementsOfData.value.third.value === "c"
    ? "ciao"
    : "nick";
});
</script>
<template>
  <div :class="[backgroundColor, 'we']">
    <GemmaInput v-model="elementsOfData.first.value"></GemmaInput>
    <GemmaInput v-model="elementsOfData.second.value"></GemmaInput>
    <GemmaInput v-model="elementsOfData.third.value"></GemmaInput>
    <ConfiguratorObject v-model="elementsOfData" />
  </div>
</template>
<style>
.ciao {
  background-color: blueviolet;
}
.nick {
  background-color: red;
}
.we {
  margin-top: 3rem;
  font-size: 1.5rem;
}
</style>
