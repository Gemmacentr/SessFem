<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  modelValue: {
    default: false,
    type: Boolean,
  },
});

const emit = defineEmits(["update:modelValue"]);
const model = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit("update:modelValue", value);
  },
});

const toggleMenu = () => {
  model.value = !model.value;
  console.log(model.value);
};
</script>

<template>
  <label @click="toggleMenu">
    Resta Connesso
    <input v-model="model" type="checkbox" />
    <span></span>
  </label>
</template>
