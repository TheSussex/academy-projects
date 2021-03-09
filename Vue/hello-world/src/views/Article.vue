<template>
    <div class="article">
        <h1>Article Page</h1>
    </div>
</template>

<script>
export default {
    name: 'SingleArticle',
    mounted() {
        console.log(this.$route);
        const postId = this.$route.params.id
    }
}
</script>   