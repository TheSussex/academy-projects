<template>
  <form action="" class="form" @submit.prevent="sendPost">
      <div>
        <label for="title">Post Title</label>
        <input type="text" name="title" id="title" v-model="post.title">
      </div>
      <div>
        <label for="userId">Post Author</label>
        <input type="number" name="userId" id="userId" v-model="post.userId">
      </div>
      <div>
        <textarea name="body" id="body" cols="30" rows="10" v-model="post.body"></textarea>
      </div>
      <button class="button">Send Post</button>
    </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        userId: null,
        title: null,
        body: null
      }
    }
  },
  methods: {
    sendPost() {
      const { post } = this
      const apiURL = 'https://jsonplaceholder.typicode.com/posts'
      fetch(apiURL, {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then(response => response.json())
      .then(data => {
        if(data) {
          alert('Post Added Successfully')
          this.post = {
            userId: null,
            title: null,
            body: null
          }
          this.$emit('formSubmited',data)
        }
      })
      .catch(error => alert(error))
    }
  }
}
</script>