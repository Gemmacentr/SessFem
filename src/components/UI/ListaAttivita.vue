<script setup lang="ts">
import { ref, Ref } from "vue";
defineProps({
  modelValue: {
    default: () => {
      [];
    },
    type: Array,
  },
});

const comment = ref("");
const newComment: Ref<string[]> = ref([]);

const emit = defineEmits(["update:modelValue"]);

const addComment = () => {
  if (comment.value.trim() !== "") {
    newComment.value.push(comment.value);

    comment.value = "";
  }
};
const deleteComment = (index: any) => {
  newComment.value.splice(index);
  console.log(comment.value);
};
</script>

<template>
  <label>
    Aggiungi elmento
    <div>
      <input v-model="comment" type="text" />
      <span></span>
      <button @click="addComment"></button>
      <div>
        <ul v-for="x in newComment">
          <li>
            {{ x }}
            <button @click="deleteComment"></button>
          </li>
        </ul>
      </div>
    </div>
  </label>
</template>
