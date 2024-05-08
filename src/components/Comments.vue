<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
  collection,
  onSnapshot,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase/index.ts";

const todos = ref<{ id: string; content: string; done: boolean }[]>([]);
const todosCollectionRef = collection(db, "todos");

// Load todos from Firestore on component mount
onMounted(() => {
  onSnapshot(todosCollectionRef, (querySnapshot) => {
    let fbTodos: Array<{ id: string; content: string; done: boolean }> = [];
    querySnapshot.forEach((doc) => {
      const todo = {
        id: doc.id,
        content: doc.data().content,
        done: doc.data().done,
      };
      fbTodos.push(todo);
    });
    todos.value = fbTodos;
  });
});

const newComment = ref("");
const addComment = async () => {
  await addDoc(todosCollectionRef, {
    content: newComment.value,
    done: false,
  });
  newComment.value = "";
};

const deleteTodo = async (id: string) => {
  await deleteDoc(doc(todosCollectionRef, id));
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
      <div v-for="(comment, index) in todos" :key="index" class="comment-item">
        <div class="comment-card">
          <span class="comment-text">{{ comment.content }}</span>
          <button @click.prevent="deleteTodo(comment.id)" class="delete-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
