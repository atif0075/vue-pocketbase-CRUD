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
              <th scope="col" class="py-3 px-6">Update</th>
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
              <td>
                <svg
                  @click="editUser(item.id)"
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
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  ></path>
                </svg>
              </td>

              <TransitionRoot appear :show="isOpen" as="template">
                <Dialog as="div" @close="closeModal" class="relative z-10">
                  <TransitionChild
                    as="template"
                    enter="duration-300 ease-out"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="duration-200 ease-in"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                  >
                    <div class="fixed inset-0 bg-black bg-opacity-25" />
                  </TransitionChild>

                  <div class="fixed inset-0 overflow-y-auto">
                    <div
                      class="flex min-h-full items-center justify-center p-4 text-center"
                    >
                      <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95"
                      >
                        <DialogPanel
                          class="w-full max-w-md transform overflow-hidden rounded-2xl bg-zinc-800 p-6 text-left align-middle shadow-xl transition-all"
                        >
                          <div class="mt-2">
                            <div class="grid gap-2 md:grid-cols-2">
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
                                  v-maska="'###-##-###'"
                                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                  v-model="phone"
                                  required
                                />
                              </div>
                            </div>
                            <div class="mb-6">
                              <label
                                for="email"
                                class="block my-2 text-sm font-medium text-zinc-900 dark:text-white"
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
                          </div>

                          <div class="mt-4 flex justify-end items-center">
                            <button
                              type="button"
                              class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                              @click="updateUser(item.id)"
                            >
                              Update
                            </button>
                          </div>
                        </DialogPanel>
                      </TransitionChild>
                    </div>
                  </div>
                </Dialog>
              </TransitionRoot>
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
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
} from "@headlessui/vue";
const pb = new PocketBase("https://pocketbase-production-91bb.up.railway.app");
const data = ref([]);
onMounted(async () => {
  data.value = await pb.collection("all_users").getFullList();
});
let fName = ref("");
let lName = ref("");
let company = ref("");
let phone = ref("");
let email = ref("");

let editUser = async (id) => {
  openModal();
  let user = data.value.find((user) => user.id === id);
  fName.value = user.fname;
  lName.value = user.lname;
  company.value = user.company;
  phone.value = user.phone;
  email.value = user.email;
};
let updateUser = async (id) => {
  closeModal();
  let newData = {
    fname: fName.value,
    lname: lName.value,
    company: company.value,
    phone: phone.value,
    email: email.value,
  };
  await pb.collection("all_users").update(id, newData);
  data.value = await pb.collection("all_users").getFullList();
};

const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}
</script>
<style></style>
