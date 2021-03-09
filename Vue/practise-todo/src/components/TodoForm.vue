<template>
  <div class="card p-4 text-left">
    <form @submit.prevent="add">
      <input ref="todoText" type="text" v-model="todoText" >
      <input type="submit" value="Submit" >
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoText: ''
    }
  },
  methods: {
    add() {
      this.$emit("submit-todo", this.todoText)
      this.todoText = ''
    }
  }
}
</script>