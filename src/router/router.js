import Vue from 'vue'
import Router from 'vue-router';
import SignUp from "@/components/signup/SignUp";
import Articles from "@/components/article/Articles";

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{path: '/', redirect: {name: 'home'}},
		{path: 'signup', name: 'signup', component: SignUp},
		{path: 'home', name: 'home', component: Articles}
	]
})
