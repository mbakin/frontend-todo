<template>
  <li id="todo-item"> {{todo.todo}} </li>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    todo : Object
  }
}
</script>

<style scoped>
li {
  list-style: none;
}
</style>