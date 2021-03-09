<template>
  <div id="task">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <h1 v-if="userName">Welcome, {{userName}}</h1>
    <h1 v-else>Welcome Guest</h1>
    <form action="">
      <input v-model="userName" type="text" placeholder="Name" value=""><br><br>
      <input v-model="userEmail" type="email" placeholder="Email" value=""><br><br>
      <textarea v-model="msg" placeholder="Enter a message" id="" name="message" ></textarea><br><br>
      <button @click="onClick">Submit</button>
    </form>       
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
export default {
  name: "ContactUs",
  components: {
    HelloWorld
  },
  data() {
    return {
        name: "",
        userName: 'Success',
        userEmail: "",
        msg: "",
    };
  },
  computed: {
    alertMessage() {
        return "Thank you " + this.name + ". Your details have been submitted successfully."
    }
  },
  methods: {
    onClick() {
        alert(`Welcome ${this.userName}, your details have been submitted successfully.`)
    }
  }          
};
</script>

