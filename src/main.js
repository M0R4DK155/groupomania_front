import Vue from "vue";
// import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
// import {library} from "@fortawesome/fontawesome-svg-core";
// import {fas} from "@fortawesome/free-solid-svg-icons";
// import {fab} from "@fortawesome/free-brands-svg-icons";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// library.add(fas, fab);

new Vue({
  router,
  store,
  render: h => h(App)
//   .component("fa", FontAwesomeIcon)
}).$mount("#app");
