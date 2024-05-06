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
  set: (value) => emit("update:modelValue", value),
});

const toggle = () => {
  model.value = !model.value;
  console.log(model.value);
};
</script>

<template>
  <label>
    Accedi alla Newsletter
    <input @click="toggle" type="checkbox" />
    <span></span>
  </label>
</template>
