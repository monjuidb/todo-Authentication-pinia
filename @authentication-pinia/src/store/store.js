import {ref, reactive} from 'vue'
import { defineStore } from "pinia";
import router from '../router/router'
const authStore = defineStore('auth',()=>{
    const isAuthenticated = ref(false)
    function authenticate(email, password)  {
        isAuthenticated.value = true
        router.push('/')
    }
    const login = () => {
        isAuthenticated.value = true
    }
    const logout = () => {
        isAuthenticated.value = false
    }

    return {isAuthenticated, authenticate, logout}
})

export {authStore}