import { createRouter, createWebHistory } from "vue-router";
import Mobiles from "./../components/Mobiles.vue";

const routes = [
  { path: "/", redirect: "/mobiles" },

  {
    path: "/mobiles",
    component: Mobiles,
  },
  {
    path: "/mobiles/:id",
    component: Mobiles,
  },
  { path: "/:catchAll(.*)", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
