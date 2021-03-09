<template>
  <div>
    <TodoForm @submit-todo="addTodo($event)" />
    <TodoList :todos="todos" /> 
  </div>
</template>

<script>
import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default {
  components: {
    TodoForm,
    TodoList
  },
 data() {
   return {
     todos: [
     {
       id: 1,
       text: "Eat",
       isCompleted: false
     },
     {
       id: 2,
       text: "Sleep",
       isCompleted: false
     },
     {
       id: 3,
       text: "Code",
       isCompleted: false
     },
   ]
   }
 },
 methods: {
   addTodo(todoText) {
     this.todos.push({
       id: Math.floor(Math.random() * 1000),
       text: todoText,
       isCompleted: false
     })
     
     console.log(todoText);
   },
   toggle(todo){
     todo.isCompleted = !todo.isCompleted
   }
 }
}
</script>

<style scoped>
  .pl{
    margin-left: 2rem;
  }
  .line{
    text-decoration: line-through;
  }
</style>