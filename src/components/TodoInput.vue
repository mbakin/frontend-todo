<template>
  <div>
    <input type="text" id="add-todo-input" v-model="todo">
    <button id="add-todo-button" @click="addTodo">Add Todo Item</button>
  </div>
</template>

<script>


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
    }
  }
}
</script>

<style scoped>

</style>