<template>
<div>
      <ul>
      <li 
        v-for="todo in todos" 
        :key="todo.id" 
        :class="[todo.isCompleted ? 'line' : '']"> 
          {{todo.text}} 
          <span><input @click="toggle(todo)" type="checkbox" class="pl"></span> 
      </li>
    </ul>
</div>
</template>

<script>
export default {
  props: {
    todos: {
      type: Array,
      required: true      
    }
  }
}
</script>

<style scoped>

</style>