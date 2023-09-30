import {defineStore} from 'pinia';

export const useTodoListStore = defineStore('todoList',{
    //state
    state: () => ({
        todoList: [
            {
                id:1,
                item:'task 1',
                completed: true
            },
            {
                id:2,
                item:'task 2',
                completed: false
            },
            {
                id:3,
                item:'task 3',
                completed: true
            }

        ],
        id:4
    }),
    // actions
    actions: {
        addTodo(item) {
            this.todoList.push({item, id: this.id++, completed: false})
        },
        deleteTodo(itemId){
            this.todoList = this.todoList.filter((object) => {
                return object.id !== itemId;
            })
        },
        toggleCompleted(idToFind){
            const todo = this.todoList.find((obj) => obj.id === idToFind
            )

            if(todo){
                todo.completed = !todo.completed;
            }
        }
    },
    // getters
})