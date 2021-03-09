<template>
  <div class="home"></div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
      return{
          allHeadlines: [],
          isLoading: true
      }
  },
  mounted() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=27c4a49f467042b29eaa7ed40406ad14"
      )
      .then(data => {
        const { articles } = data;
        this.allHeadlines = articles
        console.log(articles);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => { this.isLoading = false });
  }
};
</script>

<style scoped>
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
  border: 1px solid #333333;
  border-radius: 4px;
  padding: 16px;
}
</style>
