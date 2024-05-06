<script setup lang="ts">
import { ref } from "vue";

const isActive = ref(false);

const toggleHeader = () => {
  isActive.value = !isActive.value;
};
</script>
<template>
  <nav :class="{ active: isActive }">
    <button @click="toggleHeader" :class="'toggle-nav'">
      <span class="span">></span>
    </button>
    <ul :class="'nav'">
      <li :class="'loud'">
        <router-link :to="{ path: '/' }"> Home </router-link>
      </li>
      <li :class="'loud'">
        <router-link :to="{ path: 'Notes' }"> Notes </router-link>
      </li>
      <li :class="'loud'">
        <router-link :to="{ path: 'About' }"> About</router-link>
      </li>
    </ul>
  </nav>
</template>
