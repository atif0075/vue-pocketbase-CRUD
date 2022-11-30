<script setup>
import { getCurrentInstance } from "vue";
import { RouterView, useRouter } from "vue-router";
import Navbar from "./components/Navbar.vue";
const internalInstance = getCurrentInstance();
internalInstance.appContext.config.globalProperties.$Progress.start();
setTimeout(() => {
  internalInstance.appContext.config.globalProperties.$Progress.finish();
}, 3500);
const router = useRouter();
const created = () => {
  internalInstance.appContext.config.globalProperties.$Progress.start();
  router.beforeEach((to, from, next) => {
    if (to.meta.progress !== undefined) {
      let meta = to.meta.progress;
      internalInstance.appContext.config.globalProperties.$Progress.parseMeta(
        meta
      );
    }
    internalInstance.appContext.config.globalProperties.$Progress.start();
    next();
  });
  router.afterEach((to, from) => {
    internalInstance.appContext.config.globalProperties.$Progress.finish();
  });
};
created();
</script>

<template>
  <main class="w-full h-screen bg-zinc-900 text-white overflow-auto">
    <vue-progress-bar></vue-progress-bar>
    <Navbar />
    <RouterView />
  </main>
</template>

<style>
.active {
  @apply text-blue-500 border-solid -translate-y-2 border-blue-500 !important;
}
</style>
