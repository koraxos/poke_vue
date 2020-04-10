<template>
    <div>
        <Article class="padding-top" v-for="(article) in articles" :key="article.id" :article="article">
        </Article>
    </div>
</template>

<script>
	import Article from './Article'
	import axios from "axios";

	export default {
		name: "Articles",
		mounted() {
			this.loadArticle();
		},
		components: {Article},
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

</style>
