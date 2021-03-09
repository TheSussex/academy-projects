<template>
  <div class="home">

    <button class="button" @click="showForm  = true">Add Post</button>

    <PostForm v-if="showForm" @formSubmited="handleSubmit" :currentPost="currentPost" />

    <h1 v-if="loading">Loading....</h1>

    <div class="posts" v-else>
      <div class="post__single" v-for="post in allPosts" :key="post.id">
        <h2>{{post.title}}</h2>
        <p>{{post.body}}</p>
        <router-link :to="`article/${post.id}`">Read more</router-link>
        <button class="button" @click="editForm(post)">Edit</button>
      </div>
    </div>

  </div>
</template>

<script>
import PostForm from '@/components/PostForm'
export default {
  props: {
    post: {
      type: Object,
      required: false
    }
  }, 
  name: 'Home',
  components: {
    PostForm
  },
  data() {
    return  {
      allPosts: [],
      loading: true,
      showForm: false,
      currentPost: {}
    }
  },
  mounted() {
    const apiURL = 'https://jsonplaceholder.typicode.com/posts'
    fetch(apiURL)
      .then(response => response.json())
      .then(data => {
        this.allPosts = data
      })
      .catch(error => alert(error))
      .finally(() => this.loading = false)
  },
  methods: {
    handleSubmit(data) {
      this.showForm = false;
      this.allPosts.push(data)
    },
    editForm(post) {
      this.currentPost = post
      this.showForm = true
    }
  }
}
</script>

<style scoped>
.posts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}
.post__single {
  border: 1px solid #333333;
  border-radius: 4px;
  padding: 16px;
}
.button {
  padding: 10px 16px;
  font-size: 14px;
  color: #ffffff;
  background: burlywood;
  border-radius: 4px;
  margin-bottom: 8px;
}
.form {
  padding: 24px;
  margin: 0 auto;
  max-width: 400px;
}
</style>