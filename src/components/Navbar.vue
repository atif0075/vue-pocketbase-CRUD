<template>
  <main>
    <div class="w-full pt-36">
      <div class="flex justify-center items-center">
        <h1 class="text-2xl font-semibold py-3">
          Pocket Base - {{ route.meta.title }}
        </h1>
      </div>
      <div class="flex justify-center items-center">
        <router-link
          to="/"
          class="p-4 px-6 hover:-translate-y-2 hover:text-blue-500 hover:border-blue-500 hover:border-solid border-dashed duration-500 ease-in-out border text-2xl font-semibold"
        >
          C
        </router-link>
        <router-link
          to="/read"
          class="p-4 px-6 hover:-translate-y-2 hover:text-blue-500 hover:border-blue-500 hover:border-solid border-dashed duration-500 ease-in-out border text-2xl font-semibold mx-2"
        >
          R
        </router-link>
        <router-link
          to="/update"
          class="p-4 px-6 hover:-translate-y-2 hover:text-blue-500 hover:border-blue-500 hover:border-solid border-dashed duration-500 ease-in-out border text-2xl font-semibold mr-2"
        >
          U
        </router-link>
        <router-link
          to="/delete"
          class="p-4 px-6 hover:-translate-y-2 hover:text-blue-500 hover:border-blue-500 hover:border-solid border-dashed duration-500 ease-in-out border text-2xl font-semibold"
        >
          D
        </router-link>
      </div>
    </div>
  </main>
</template>
<script setup>
import { useRoute } from "vue-router";

let route = useRoute();
</script>
<style></style>
