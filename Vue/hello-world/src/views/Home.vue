 <template>
  <div class="home">
    <div>
          <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <div :style="{active: isDeleted}">Welcome {{name}}</div> -->
    <!-- <h1 v-if="happy">Name is Success</h1> -->
    <!-- <h1 v-else>Name is Ayo</h1> -->
    <!-- <button v-on:click="addToCart">Add to cart</button>
    <p>There are {{counter}} items in cart</p> -->
    <!-- <input v-model="message" type="text ">
    <h2>{{message}}</h2> -->
    <!-- <input type="radio" id="location" value="Lagos" v-model="places">
    <label for="location">Lagos</label>
    <input type="radio" id="location" value="Ibadan" v-model="places">
    <label for="location">Ibadan</label>
    <input type="radio" id="location" value="Akure" v-model="places">
    <label for="location">Akure</label>
    <h1>Nice cities: {{places}}</h1> -->
    <!-- <input type="text" v-model="price">
    <p>The price is: {{price * 3}} </p> -->
    </div>

  <!-- <button class="button" @click="showForm= true">Add post</button>
  <PostForm v-if="showForm" @formSubmitted="handleSubmit" :currentPost="currentPost" />
  
  <div class="posts">
    <div class="post__single" v-for="post in allPosts" :key="post.id">
      <h3>{{post.title}}</h3>
      <p>{{post.body}}</p>
      <router-link :to="`article/${post.id}`">Read more</router-link> 
      <button class="button" @click="editForm(post)">Edit</button>
    </div>
  </div> -->
  
  
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "../components/HelloWorld.vue";
// import PostForm from '@/components/PostForm'
import axios from "axios"

export default {
  name: "Home",
  components: {
    // HelloWorld,
    // PostForm
  },
  data() {
    return {
      // allPosts: [],
      // loading: true,
      // showForm: false,
      // post: {
      //   userId: null,
      //   title: null,
      //   body: null
      // },
      // currentPost: {},
      // places: '',
      // price: '',
      // counter: 0,
      // message: '',
      // name: 'Ologunsua',
      // happy: false,
      // isDeleted: true,
      // hasError: true,
      // clubs: ['chelsea', 'man united', 'liverpool'],
      
    }
  },
  mounted() {
    // this.fetchAllPosts()
    axios
    .get('GET https://newsapi.org/v2/top-headlines?country=us&apiKey=27c4a49f467042b29eaa7ed40406ad14')
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {})
  },
  methods: {
    // addToCart() {
    //   this.counter+=2
    // },
    // handleSubmit(data) {
    //   this.showForm = false
    //   this.allPosts.push(data)
    // },
    // fetchAllPosts() {
    //   const apiURL = 'https://jsonplaceholder.typicode.com/posts'
    //   fetch(apiURL)
    //   .then(response => response.json())
    //   .then(response => {
    //   this.allPosts = response
    //   })
    //   .catch(error => alert(error))
    //   .finally(() => this.loading = false)
    // },
    // editForm(post) {
    //   this.currentPost = post
    //   this.showForm = true
    // }     

  }
};
</script>

<style scoped>
/* .active {
  color: blue;
}
.strikethrough {
  text-decoration: line-through;
} */
.home {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  background: #333333;
  min-height: 70vh;
}
.posts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}
.post__single {
  border: 1px solid red;
  border-radius: 4px;
  padding: 16px;
}
.button{
  padding: 10px 16px;
  font-size: 14px;
  color: white;
  background: burlywood;
  border-radius: 4px;
  margin-bottom: 10px;
}
.form{
  padding: 24px;
  margin: 0 auto;
  max-width: 40px;
}
</style>