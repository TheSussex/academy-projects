 <template>
  <div>
    <h1>Article page</h1>
    <h2>{{ article.title }}</h2>
    <p>{{ article.body }}</p>
  </div>
</template>

<script>
export default {
  name: 'SingleArticle',
  data() {
    return {
      article: {
        title: '',
        body: '',
        id: '',
        userId: ''
      }
    }
  },
  mounted() {
    const { id } = this.$route.params
    const apiURL = 'https://jsonplaceholder.typicode.com/posts'
    fetch(`${apiURL}/${id}`)
      .then(response => response.json())
      .then(response => this.article = response)
      .catch(error => alert(error))
  }
}
</script>