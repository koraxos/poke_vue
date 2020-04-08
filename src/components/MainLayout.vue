<template>
    <a-layout>
        <a-layout-header>
            <a-menu theme="dark"
                    mode="horizontal">
                <a-menu-item>Article</a-menu-item>
                <a-menu-item>Connexion</a-menu-item>
                <a-menu-item>Inscription</a-menu-item>
            </a-menu>
        </a-layout-header>

        <div class="main-content">
            <Article class="padding-top" v-for="(article) in $data" :key="article.id" :article="article">
            </Article>
        </div>
    </a-layout>
</template>

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
<script>
	import Article from "@/components/Article";

	export default {
		components: {Article},
		data: function () {
			return [
				{id: 1, title: 'article 1', resume: 'c\'est larticle1'},
				{id: 2, title: 'article 2', resume: 'c\'est larticle2'},
			]
		}
	}
</script>
