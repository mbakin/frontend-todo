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

export default {
  name: "Layout",
  components: {TodoList, TodoInput},
}
</script>

<style scoped>

</style>