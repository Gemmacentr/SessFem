const childrenRoutes = [
  {
    path: "",
    name: "home",
    component: () => import("./components/Home.vue"),
  },

  {
    path: "data",
    name: "data",
    component: () => import("./components/Data.vue"),
  },
  {
    path: "user",
    name: "user",
    component: () => import("./components/User.vue"),
  },
  {
    path: "dataObject",
    name: "dataObject",
    component: () => import("./components/DataObject.vue"),
  },
];

export default childrenRoutes;
