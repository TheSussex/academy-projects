<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Todo Lists</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
    <div class="m-2">
      <TodoList :todos="list" @delete="deleteTodo" @edit="editTodo" />

      <div class="p-4" v-show="!showForm">
        <b-button @click="showForm = true" block variant="primary">Add Todo</b-button>
      </div>
       <br><br><br> 
      <TodoForm 
        :selected="currentTodo"
        @addTodo="addNewTodo"
        @updateTodo="updateTodo"
        @closeForm="resetForm" 
        v-show="showForm"/>
    </div>
  </div>
</template>

<script>
import TodoList from './TodoList'
import TodoForm from './TodoForm'

export default {
  name: "TodoWrapper",
  components: {
    TodoList,
    TodoForm
  },
  data() {
    return {
      showForm: false,
      list: [
        {
          id: 1,
          title: "Wake Up",
          isComplete: false
        },
        {
          id: 2,
          title: "Eat",
          isComplete: false
        },
        {
          id: 3,
          title: "Code",
          isComplete: false
        },
        {
          id: 4,
          title: "Rinse and Repeat",
          isComplete: false
        }
      ],
      currentTodo: {
        id: null,
        title: null,
        isComplete: false
      }
    }
  },
  methods: {
    addNewTodo(value) {
      const todoObject = {
        id: this.list.length + 1,
        title: value,
        isComplete: false
      }

      this.list.push(todoObject)
    },
    deleteTodo(id) {
      let todoList = this.list.filter(item => item.id !== id)
      this.list = todoList
    },
    editTodo(id) {
      const selectedTodo = this.list.find(item => item.id === id)
      this.currentTodo = selectedTodo
      this.showForm = true
    },
    updateTodo(value) {
      let todo = {
        ...this.currentTodo, title: value
      }
      let currentIndex = todo.id - 1
      this.list.splice(currentIndex, 1, todo)
      this.resetForm()
    },
    resetForm() {
      this.showForm = false
      this.currentTodo = {
        id: null,
        title: null,
        isComplete: false
      }
    }
  }
}
</script>

<style scoped></style>