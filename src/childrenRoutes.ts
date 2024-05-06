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
];

export default childrenRoutes;
