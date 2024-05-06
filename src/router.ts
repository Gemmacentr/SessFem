import { createRouter, createWebHistory } from "vue-router";
import childrenRoutes from "./childrenRoutes.ts";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "main",
      component: () => import('../src/components/MainRoute/Main.vue'),
      children: [...childrenRoutes],
    },
  ],
});

export default router;
