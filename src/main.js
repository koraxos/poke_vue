import Vue from 'vue'
import App from './App.vue'
import Antd from "ant-design-vue";
import axios from "axios";
import router from "./router/router";

Vue.config.productionTip = false;
Vue.use(Antd);
Vue.use(axios);

new Vue({
	router,
	render: h => h(App),
	component: App
}).$mount('#app');
