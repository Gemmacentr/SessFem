<script setup lang="ts">
import { computed } from "vue";
import GemmaInput from "../UI/GemmaInput.vue";
const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({}),
  },
});
const emit = defineEmits(["update:modelValue"]);
const model = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <h1>configurator</h1>

  <GemmaInput v-model="model.first.value" />
  <GemmaInput v-model="model.second.value" />
  <GemmaInput v-model="model.third.value" />
</template>
