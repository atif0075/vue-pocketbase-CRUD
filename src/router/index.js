import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      meta: { title: "Create" },
      component: HomeView,
    },
    {
      path: "/read",
      name: "read",
      meta: { title: "Read" },
      component: () => import("../views/Read.vue"),
    },
    {
      path: "/update",
      name: "update",
      meta: { title: "Update" },
      component: () => import("../views/Update.vue"),
    },
    {
      path: "/delete",
      name: "delete",
      meta: { title: "Delete" },
      component: () => import("../views/Delete.vue"),
    },
  ],
  linkActiveClass:
    "active",
});
router.beforeEach((to, from, next) => {
  document.title = `PocketBase CRUD - ${to.meta.title}`;
  next();
});

export default router;
