const childrenRoutes = [
  {
    path: "",
    name: "home",
    component: () => import("./components/Home.vue"),
  },

  {
    path: "notes",
    name: "notes",
    component: () => import("./components/Comments.vue"),
  },
  {
    path: "about",
    name: "about",
    component: () => import("./components/About.vue"),
  },
];

export default childrenRoutes;
