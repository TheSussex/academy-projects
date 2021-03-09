<template>
  <div class="card p-4 text-left">
    <form action="" @submit.prevent="addTodo">
      <div class="mb-3">
        <label for="todo" class="form-label">Todo title</label>
        <input
          v-model="title"
          type="text"
          class="form-control"
          id="todo"
          placeholder="Name of Todo"
        />
      </div>
      <div>
        <button 
          class="btn btn-outline-primary"
          variant="outline-primary" 
          type="submit"
          :disabled="!title"
          >
          {{selected.id ? 'Edit' : 'Add'}} Todo
        </button>
        <button class="btn" variant="danger" type="button" @click="$emit('closeForm')">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'TodoForm',
  data() {
    return {
      title: ''
    }
  },
  props: {
    selected: {
      required: false,
      type: Object
    }
  },
  watch: {
    selected: {
      deep: true,
      immediate: true,
      handler: function(value) {
        this.title = value.title
      }
    }
  },
  methods: {
    addTodo() {
      if(this.selected.id) {
        this.$emit('updateTodo', this.title)
      } else {
        this.$emit('addTodo', this.title)
      }
      this.title = ''
    }
  }
}
</script>