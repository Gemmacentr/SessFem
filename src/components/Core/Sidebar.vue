<script setup lang="ts">
import images from "../../assets/images";
import { jsonData } from "../Api/Api";
import { ApiData } from "../Modelli";
import { PropType, ref } from "vue";

defineProps({
  elementsToShow: {
    type: Array as PropType<ApiData[]>,
    default: () => [],
  },
});

const items = ref([
  images.Anatomia,
  images.Intro,
  images.Images2,
  images.Post10,
  images.posta,
  images.Post7,
  images.Rush2,
  images.Rush,
  images.Poteri,
  images.Post4,
  images.Post2,
  images.Images,
]);

const is_expanded = ref(false);

const toggleMenu = () => {
  is_expanded.value = !is_expanded.value;
};
</script>

<template>
  <main>
    <aside :class="is_expanded ? 'is-expanded' : 'not-show'">
      <div :class="'menu-toggle-wrap'">
        <button :class="'menu-toggle'" @click="toggleMenu">
          <span class="material-symbols-outlined">
            keyboard_double_arrow_right
          </span>
        </button>

        <div :class="'layout'" v-for="pippo in jsonData" :key="pippo.id">
          <div class="list-column">
            <ul>
              <li :class="'text'">
                {{ pippo.title }}
              </li>
            </ul>
          </div>

          <div :class="'description'">
            <p :class="'text-description'">{{ pippo.description }}</p>
          </div>
        </div>
      </div>
    </aside>
    <div :class="'wrapper'">
      <div :class="'cards'">
        <div v-for="(image, index) in items" :key="index">
          <img :class="'foto'" :src="image" alt="Immagine" />
        </div>
      </div>
    </div>
  </main>
</template>
