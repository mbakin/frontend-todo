<template>
  <div>
    <input type="text" id="add-todo-input" v-model="todo">
    <button id="add-todo-button" @click="addTodo">Add Todo Item</button>
  </div>
</template>

<script>
import API from '../api.js'

export default {
  name: "TodoInput",
  data() {
    return {
      todo: "",
      todos: ""
    }
  },
  methods: {
    async addTodo() {
      if (this.todo === ""){
        this.todos = "";
        return
      }
      try {
        this.todos = await API.createTodo(this.todo);
        this.$emit('todo', this.todos);
      }catch (error) {
        console.log(error);
      }
      finally {
        this.todo = "";
      }

    }
  }
}
</script>

<style scoped>

</style>