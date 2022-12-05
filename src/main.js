import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "./style.css";

const app = createApp(App);
import VueProgressBar from "@aacassandra/vue3-progressbar";
import Maska from "maska";
const options = {
  color: "#3C82F6",
  failedColor: "#874b4b",
  thickness: "3px",
  transition: {
    speed: "0.5s",
    opacity: "0.7s",
    termination: 300,
  },
  autoRevert: true,
  location: "top",
  inverse: false,
};
app.use(createPinia());
app.use(router).use(VueProgressBar, options).use(Maska);

app.mount("#app");
