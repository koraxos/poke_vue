<template>
    <a-layout>
        <a-layout-header>
            <a-menu theme="dark"
                    mode="horizontal">
                <a-menu-item>
                    <router-link to="/">Article</router-link>
                </a-menu-item>
                <a-menu-item>
                    <router-link to="/signup">Inscription</router-link>
                </a-menu-item>
                <a-menu-item>
                    <SignIn></SignIn>
                </a-menu-item>
            </a-menu>
        </a-layout-header>
        <router-view></router-view>
    </a-layout>
</template>
<script>
	import axios from "axios"
	import SignIn from "@/components/signin/SignIn"

	export default {
		mounted() {
			this.loadArticle();
		},
		components: {SignIn},
		data() {
			return {
				articles: [],
				dataReady: false
			}
		},
		methods: {
			loadArticle() {
				axios.get('http://localhost:3000/article/all').then(response => {
					console.log(response);
					this.articles = response.data;
					this.dataReady = true
				}).catch(error => console.log(error));
			}
		}
	}
</script>

<style scoped>
    @import "~ant-design-vue/dist/antd.min.css";

    .main-content {
        height: 100vh;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }
</style>
