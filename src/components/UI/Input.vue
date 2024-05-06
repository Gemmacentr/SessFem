<script setup lang="ts">
const firstName = defineModel("name");
const lastName = defineModel("surname");
defineProps({
  name: String,
  surname: String,
});
</script>

<template>
  <div class="input-container">
    <form>
      <div class="input-group">
        <label for="firstName" class="label">Name</label>
        <input
          autocomplete="given-name"
          type="text"
          id="firstName"
          name="firstName"
          v-model="firstName"
          :class="'field'"
        />
      </div>
      <div class="input-group">
        <label for="lastName" class="label">Surname</label>
        <input
          autocomplete="family-name"
          type="text"
          name="lastName"
          id="lastName"
          v-model="lastName"
          :class="'field'"
        />
      </div>
    </form>
  </div>
</template>
