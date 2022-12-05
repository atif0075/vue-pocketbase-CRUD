<template>
  <main>
    <div class="container mt-5 mx-auto">
      <div class="overflow-x-auto relative">
        <table
          class="w-full text-sm text-left text-zinc-500 dark:text-zinc-400"
        >
          <thead
            class="text-xs text-zinc-700 uppercase bg-zinc-50 dark:bg-zinc-700 dark:text-zinc-400"
          >
            <tr>
              <th scope="col" class="py-3 px-6">Name</th>
              <th scope="col" class="py-3 px-6">Email</th>
              <th scope="col" class="py-3 px-6">Company</th>
              <th scope="col" class="py-3 px-6">Phone</th>
              <th scope="col" class="py-3 px-6">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in data"
              :key="index"
              class="bg-white border-b dark:bg-zinc-800 dark:border-zinc-700"
            >
              <th
                scope="row"
                class="py-4 px-6 font-medium text-zinc-900 whitespace-nowrap dark:text-white"
              >
                {{ item.fname + " " + item.lname }}
              </th>
              <td class="py-4 px-6">{{ item.email }}</td>
              <td class="py-4 px-6">{{ item.company }}</td>
              <td class="py-4 px-6">{{ item.phone }}</td>
              <td class="py-4 px-6">
                <svg
                  @click="deleteUser(item.id)"
                  class="w-6 h-6 cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>
<script setup>
import PocketBase from "pocketbase";
import { onMounted, ref } from "vue";
const pb = new PocketBase("https://pocketbase-production-91bb.up.railway.app");
const data = ref([]);
onMounted(async () => {
  data.value = await pb.collection("all_users").getFullList();
});
let deleteUser = async (id) => {
  await pb.collection("all_users").delete(id);
  data.value = await pb.collection("all_users").getFullList();
};
</script>
<style></style>
