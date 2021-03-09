<template>
  <ul class="list-group">
    <li v-for="todo in todos" :key="todo.id" class="list-group-item text-left relative d-flex justify-content-between" :class="{'strikethrough': todo.isComplete, 'text-primary': !todo.isComplete}">
      <div>
        <input class="mr-2" type="checkbox" v-model="todo.isComplete" />
        {{todo.title}}
      </div>
      <div class="">
        <b-button @click="$emit('edit', todo.id)" variant="succes" class="mr-2">Edit</b-button>
        <b-button @click="$emit('delete', todo.id)" variant="danger">Delete</b-button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    todos: {
      required: true,
    }
  }
}
</script>
<style scoped>
.strikethrough {
  text-decoration: line-through;
}
</style>