<template>
  <div class="about">
    <!-- <div class="array-classwork">
      <h3>Unordered Languages</h3>
      <ul>
        <li v-for="(language, index) in getLanguages" :key="index">
          {{language}}
        </li>
      </ul>

      <h3>Ordered Languages</h3>
      <ul>
        <li v-for="(language, index) in getSortedLanguages" :key="index">
          {{language}}
        </li>
      </ul>
    </div> -->
    <!-- <h3>Your job is {{job}}</h3>
    <form action="" @submit.prevent="addJob">
      <input type="text" v-model="new__job">
    </form> -->
  </div>
</template>


<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'About',
  data() {
    return {
      new__job: '',
    }
  },
  computed: {
    ...mapGetters({
      job: 'getJob'
    }),
  },
  methods: {
    ...mapMutations(['changeJob']),
    submitForm() {
      console.log(this.new__job);
      this.changeJob(this.new__job);
      this.new__job = '';
    },
  },
};

  // array classwork
  // data() {
  //   return{
  //     message: 'Welcome to your vuex'
  //   };
  // },
  // computed: {
  //   ...mapGetters(['getMessage']),
  //   lowercaseMessage() {
  //     return this.message.toLowerCase();
  //   },
  // },
  // mounted() {
  //   console.log(this.getMessage);
  // },
  // computed: {
    // ...mapGetters(['getLanguages', 'getSortedLanguages']),
  // }

</script>
