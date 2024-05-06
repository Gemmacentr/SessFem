<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
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
  GEMMA INPUT
  <input v-model="model" :placeholder="placeholder" />
</template>
