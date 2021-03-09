<template>
    <div>
        <form action="" class="form" @submit.prevent="sendPost">
            <div>
                <label for="title">Title</label>
                <input type="text" name="title" id="title" v-model="post.title">
            </div>
            <div>
                <label for="userId">Post Author</label>
                <input type="number" name="userId" id="userId" v-model="post.userId">
            </div>
            <div>
                <label for="body">Post Body</label>
                <textarea name="body" id="body" cols="30" rows="10" v-model="post.body"></textarea>
            </div>    
            <button class="button">Send Post</button>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return{
            post: {
                userId: null,
                title: null,
                body: null
            }
        }
    },
    props: {
       currentPost: {
           type: Object,
           required: false
       } 
    },
    mounted() {
        if(this.currentPost && this.currentPost.id ) {
            this.post = this.currentPost
        }
    },
    methods: {
    sendPost() {
      const { post, currentPost } = this
      const apiURL = 'https://jsonplaceholder.typicode.com/posts'

      if (currentPost && currentPost.id) {
          fetch(`${apiURL}/${currentPost.id}`, {
              method: 'PUT',
              body: JSON.stringify(post),
              headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then(response => response.json())
      .then(data => {
        if(data) {
          alert('Post updated successfully')
          this.post = {
            userId: null,
            title: null,
            body: null
          }
          console.log(data)
        //   this.$emit('formSubmitted')
        }
          })
      } else {
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
          alert('Post added successfully')
          this.post = {
            userId: null,
            title: null,
            body: null
          }
          this.$emit('formSubmitted', data)
        }
      })
      // .catch(error => alert(error))    
      }
        
    },
    },
}
</script>
