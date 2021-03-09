<template>
    <b-container>
        <b-form @submit.prevent="onSubmit">
        <b-form-group
            id="input-group-1"
            label="Task Title:"
            label-for="input-1"
            description="Short name for the task you want to complete"
            >          
            <b-form-input
            id="input-1"
            type="text"
            v-model="item.title"
            placeholder="Enter task title"
            required
            ></b-form-input>
        </b-form-group>
        <b-form-group
            id="input-group-1"
            label="Task Description:"
            label-for="input-1"
            description="Long description of the task"
            >
             <b-form-textarea
            id="textarea"
            v-model="item.description"
            placeholder="Enter something..."
            rows="3"
            max-rows="6"
            ></b-form-textarea>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </b-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'AddTodoForm',
    data() {
        return {
            item: {
                title: '',
                description: '',
            }
        }
    },
    methods: {
        ...mapActions(['addTodoItem']),
        onSubmit() {
            const { item } = this; // destructuring, same as 'this.item'
            this.addTodoItem(item)
            this.item = {
                title: '',
                description: '',
            }
}
    }
}
</script>
