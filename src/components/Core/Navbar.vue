<script setup lang="ts">
import { ref } from "vue";

const isActive = ref(false);

const toggleHeader = () => {
  isActive.value = !isActive.value;
};

const closeNav = () => {
  isActive.value = false;
};
</script>
<template>
  <nav :class="{ active: isActive }">
    <button @click="toggleHeader" :class="'toggle-nav'">
      <span
        class="span"
        :style="{ transform: isActive ? 'rotate(-270deg)' : 'rotate(-90deg)' }"
        >></span
      >
    </button>
    <ul :class="'nav'" @click="closeNav">
      <li :class="'loud'">
        <router-link :to="{ path: '/' }"> Home </router-link>
      </li>
      <li :class="'loud'">
        <router-link :to="{ path: 'Notes' }"> Notes </router-link>
      </li>
    </ul>
  </nav>
</template>
