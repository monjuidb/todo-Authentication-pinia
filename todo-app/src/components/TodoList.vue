<script setup>
import { useTodoListStore } from '../stores/todoList.js';
import {storeToRefs} from 'pinia';
const store = useTodoListStore()
const {todoList} = storeToRefs(store);
const  { toggleCompleted, deleteTodo} = store

</script>

<template>
  <div v-for="todo in todoList" :key="todo.id" class="item">
    <div class="content">
        <span :class="{completed: todo.completed}">{{ todo.item }}</span>
        <!-- <span :class="{completed: todo.completed}" @click.stop="toggleCompleted(todo.id)"> &#10004;
        </span> -->
         <span >
          <input type="checkbox" class="chcbx" v-model="todo.completed"/>
         </span>
       
        <span @click="deleteTodo(todo.id)" class="x"> &#10060;</span>
    </div>
  </div>
</template>

<style scoped>
span {
  margin: 0 10px;
  cursor: pointer;
}
.item {
  display: flex;
  justify-content: center;
}
.chcbx{
  height: 20px;
  width: 20px;
}
.content {
  display: flex;
  font-size: 1.5em;
  justify-content: space-between;
  width: 80vw;
  padding: 5px;
}
.completed {
  text-decoration: line-through;
}
</style>
