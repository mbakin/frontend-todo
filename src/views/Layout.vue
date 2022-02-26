<template>
  <div class="layout">
    <h2>Web Based Todo List</h2>
    <TodoInput @todo="addTodo($event)"/>
    <ul class="todos">
      <TodoList v-for="todo in todos" :todo="todo" :key="todo.id" />
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
  data () {
    return {
      todos: []
    }
  },
  methods: {
    addTodo(todo) {
      this.todos.push(todo);
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