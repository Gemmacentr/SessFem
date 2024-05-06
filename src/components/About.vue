<script setup lang="ts">
import { ref } from "vue";

// Define a reactive variable to hold the new comment
const newComment = ref("");
// Define an array to hold all the comments
const comments = ref<string[]>([]);

// Function to add a new comment to the list
const addComment = () => {
  if (newComment.value.trim() !== "") {
    comments.value.push(newComment.value);
    // Clear the textarea after adding the comment
    newComment.value = "";
  }
};
const removeComment = (index: any) => {
  comments.value.splice(index, 1);
};
</script>
<template>
  <div>
    <h2>Comments</h2>
    <form @submit.prevent="addComment">
      <textarea
        v-model="newComment"
        placeholder="Enter your comment"
      ></textarea>
      <button type="submit">Publish</button>
    </form>
    <ul>
      <li v-for="(comment, index) in comments" :key="index">
        {{ comment }}
        <button @click.prevent="removeComment" type="submit">Delete</button>
      </li>
    </ul>
  </div>
</template>
