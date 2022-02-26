<template>
<div class="layout">
  <h2>Web Based Todo List</h2>
  <TodoInput/>
  <ul class="todos">
  <TodoList/>
  </ul>
</div>
</template>

<script>
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";
import API from "@/api";

export default {
  name: "Layout",
  components: {TodoList, TodoInput},

  methods: {
    addTodo(todo) {

    }
  },
  async created() {
    try {
      this.todos = await API.getTodos()
    }catch (e) {
      console.log("error:", e)
    }
  }
}
</script>

<style scoped>

</style>