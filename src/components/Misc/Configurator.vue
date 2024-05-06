<script setup lang="ts">
import { PropType, computed } from "vue";
import GemmaInput from "../UI/GemmaInput.vue";

// Itereare el in modo da avere lo stesso numero di input sia su Data che in questo componente
// Fare in modo che i v-model siano dinamici, cioè:
// Se in Data.vue il primo input scrivo 'abc', lo devo visualizzare anche nel primo input di Configurator e viceversa, e così anche per il placeholder ed il colore
// dell'input.

const props = defineProps({
  modelValue: {
    type: Array as PropType<Array<any>>,
    default: () => [],
  },
});

const emit = defineEmits(["update:modelValue"]);

const modelConfigurator = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <div class="configurator">
    CONFIGURATOR
    <br />
    {{ modelValue }}
    <br />
    <GemmaInput
      v-model="element.value"
      :placeholder="element.placeholder"
      :borderColor="element.borderColor"
      v-for="element of modelConfigurator"
    />
  </div>
</template>
<style lang="scss">
.configurator {
  padding: 3rem;
  border: 1px solid red;
}
</style>
