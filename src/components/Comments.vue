<script setup lang="ts">
import { ref, onMounted } from "vue";

// Define a reactive variable to hold the new comment
const newComment = ref("");
// Define an array to hold all the comments
const comments = ref<string[]>([]);

// Load comments from localStorage on component mount
onMounted(() => {
  const storedComments = localStorage.getItem("comments");
  if (storedComments) {
    comments.value = JSON.parse(storedComments);
  }
});

// Function to add a new comment to the list
const addComment = () => {
  if (newComment.value.trim() !== "") {
    comments.value.push(newComment.value);
    // Clear the textarea after adding the comment
    newComment.value = "";
    // Save comments to localStorage
    localStorage.setItem("comments", JSON.stringify(comments.value));
  }
};

// Function to remove a comment from the list
const removeComment = (index: any) => {
  comments.value.splice(index, 1);
  // Save comments to localStorage after removal
  localStorage.setItem("comments", JSON.stringify(comments.value));
};
</script>

<template>
  <div class="comments-container">
    <div class="text-h2">
      <h2>Emozioni ed Espressioni</h2>
      <h4>
        Questo è uno spazio all'interno del quale ognun@ può condividere
        pensieri o sensazioni provati duranti gli incontri di Sessfem
      </h4>
    </div>
    <form @submit.prevent="addComment" class="comment-form">
      <textarea
        v-model="newComment"
        placeholder="Sentiti liber* di esprimerti"
        class="comment-textarea"
      ></textarea>
      <button type="submit" class="publish-btn">Publish</button>
    </form>
    <div class="comments-grid">
      <div
        v-for="(comment, index) in comments"
        :key="index"
        class="comment-item"
      >
        <div class="comment-card">
          <span class="comment-text">{{ comment }}</span>
          <button @click.prevent="removeComment(index)" class="delete-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
