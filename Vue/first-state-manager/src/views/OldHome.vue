<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="message"/>
    {{ getMessage }}
    <h1>{{getName}}, {{getMessage}}</h1>
    <form action="" @submit.prevent="submitForm">
      <input type="text" v-model="username">
    </form> -->

    <!-- <button @click="updateClick">Clicked</button>
    <p>Button has been clicked {{ getClickCount }} times</p> -->

    <!-- <div class="array-classwork">
    <h3>Unordered Users</h3>
    <ul>
      <li v-for="(user, index) in getUsers" :key="index">
        {{user}}
      </li>
    </ul>

    <h3>Ordered Users</h3>
    <ul>
      <li v-for="(user, index) in getSortedUsers" :key="index">
        {{user}}
      </li>
    </ul>
  </div> -->
  
  
  </div>
</template>

<script>
// @ is an alias to /src
// import { mapGetters, mapMutations } from 'vuex';

export default {
  // name: 'Home',
  // data() {
  //   return {
  //     message: 'Welcome to the Users\' Page'
  //   }
  // },
  // computed: {
  //   ...mapGetters([ 'getUsers', 'getSortedUsers', 'getMyName' ])
  // },
  name: 'Home',
  data() {
    return {
      username: ''
    };
  },
  computed: {
    ...mapGetters([ 'getMessage', 'getName', 'getLanguages' ])
    // If you want to map a getter to a different name, use an object
    // ...mapGetters({
    //   message: 'getMessage',
    //   companies: 'getCompany',
    //   languagesWithExperience: 'experiencedLanguages'
    // })
  }, 
  methods: {
    ...mapMutations(['updateName', 'addLanguage', 'updateClick']),
    submitForm() {
      this.updateName(this.username);
      this.addLanguage(this.username);
      this.username = '';
    }
  },
  // 
};
</script>
