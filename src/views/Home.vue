<script setup>
import { ref } from "vue";
import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");
let fName = ref("");
let lName = ref("");
let company = ref("");
let email = ref("");
let phone = ref("");
const addData = async () => {
  const data = {
    fname: fName.value,
    lname: lName.value,
    company: company.value,
    email: email.value,
    phone: phone.value,
  };
  await pb.collection("all_users").create(data);
};
</script>

<template>
  <div class="max-w-[32rem] mt-5 mx-auto">
    <div class="grid gap-6 mb-6 md:grid-cols-2">
      <div>
        <label
          for="first_name"
          class="block mb-2 text-sm font-medium text-zinc-900 dark:text-white"
          >First name</label
        >
        <input
          type="text"
          id="first_name"
          class="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="John"
          v-model="fName"
          required
        />
      </div>
      <div>
        <label
          for="last_name"
          class="block mb-2 text-sm font-medium text-zinc-900 dark:text-white"
          >Last name</label
        >
        <input
          type="text"
          id="last_name"
          class="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Doe"
          v-model="lName"
          required
        />
      </div>
      <div>
        <label
          for="company"
          class="block mb-2 text-sm font-medium text-zinc-900 dark:text-white"
          >Company</label
        >
        <input
          type="text"
          id="company"
          class="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Pocketbase"
          v-model="company"
          required
        />
      </div>
      <div>
        <label
          for="phone"
          class="block mb-2 text-sm font-medium text-zinc-900 dark:text-white"
          >Phone number</label
        >
        <input
          type="tel"
          id="phone"
          class="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="123-45-678"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          v-model="phone"
          required
        />
      </div>
    </div>
    <div class="mb-6">
      <label
        for="email"
        class="block mb-2 text-sm font-medium text-zinc-900 dark:text-white"
        >Email address</label
      >
      <input
        type="email"
        id="email"
        class="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="john.doe@company.com"
        v-model="email"
        required
      />
    </div>

    <div class="flex justify-end">
      <button
        type="button"
        @click="addData"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </div>
  </div>
</template>
