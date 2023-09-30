<script setup>
import TodoForm from '@/components/TodoForm.vue';
import TodoList from '@/components/TodoList.vue'
</script>

<template>
  <div class="todo-app">
    <h1>To Do List</h1>
    <todo-form/>
    <todo-list/>
  </div>
</template>

<style scoped>
.todo-app {
  padding: 5vh;
  min-height: 50%;
  width: 50rem;
  background-color: #8ea9d2;
}
</style>
