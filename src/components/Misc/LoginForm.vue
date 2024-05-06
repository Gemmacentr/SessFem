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
  <div class="login">
    <GemmaInput
      v-model="model.inputPassword.value"
      :type="'password'"
      :placeholder="'password'"
    />
    <GemmaInput v-model="model.inputUsername.value" :placeholder="'username'" />
  </div>
</template>
