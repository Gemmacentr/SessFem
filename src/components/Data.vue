<script setup lang="ts">
import { ref } from "vue";
import GemmaInput from "./UI/GemmaInput.vue";
import Configurator from "./Misc/Configurator.vue";

const elementsOfData = ref([
  {
    value: "a",
    placeholder: "firstPlaceholder",
    borderColor: "yellow",
  },
  {
    value: "b",
    placeholder: "secondPlaceholder",
    borderColor: "red",
  },
  {
    value: "c",
    placeholder: "thirdPlaceholder",
    borderColor: "green",
  },
]);
</script>

<template>
  <div class="margin">
    Data
    <pre>{{ elementsOfData }}</pre>

    <div v-for="_ of elementsOfData">
      <GemmaInput v-model="_.value" />
    </div>

    <Configurator v-model="elementsOfData" />
  </div>
</template>

<style lang="scss">
.margin {
  padding-top: 10rem;
}
</style>
