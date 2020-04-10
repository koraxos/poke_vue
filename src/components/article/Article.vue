<template>
    <a-card class="article" :title="article.title">
        <p>{{article.resume}}</p>
    </a-card>
</template>

<script>
	export default {
		props: {
			article: {
				title: {
					type: String
				},
				resume: {
					type: String
				}
			}
		}
	}
</script>

<style>
    .article {
        min-height: 250px;
        min-width: 300px;
    }
</style>
