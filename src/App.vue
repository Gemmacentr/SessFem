<script setup lang="ts">
import Sidebar from "./components/Core/Sidebar.vue";
import Navbar from "./components/Core/Navbar.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
defineEmits(["sidebarDescription"]);
/* MAIN che conterrà la routerView*/

const isHomeRoute = computed(() => route.name === "home");
</script>

<template>
  <Navbar />

  <Sidebar v-if="isHomeRoute" />

  <RouterView />
</template>
