import Vue from "vue";
import App from "./App.vue";
import vueTableResize from "@/plugin/vue-table-resize/vue-table-resize";
import "@/plugin/vue-table-resize/style/main.scss";

Vue.config.productionTip = false;
Vue.use(vueTableResize);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
