import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import Sidebar from '../components/Sidebar.vue'
import Login from '../components/Login.vue'
import {authStore} from '../store/store.js'
import Admin from '../components/Admin.vue'


const routes = [
    {
        path: '/', components: {
            default: Home,
            LeftSideBar: Sidebar
        }
    },
    {
        path: '/login', components: {
            default: Login,
            LeftSideBar: Sidebar
        }
    },
    {
        path: '/about', components: {
            default: About,
            LeftSideBar: Sidebar
        }
    },
    {
        path: '/admin', components: {
            default: Admin,
            LeftSideBar: Sidebar
        },
        meta:{
            requiresAuth: true,
        }
    },
    
    {
        path: '/contact', components: {
            default: Contact,
            LeftSideBar: Sidebar
        },
        meta:{
            requiresAuth: true,
        }
    }
]

// const isAuthenticated = () => {
//     return localStorage.getItem('token')=='123'
// }

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const auth = authStore()
    if(to.meta.requiresAuth && !auth.isAuthenticated){
        next('/login')
    }else{
        next()
    }
})

export default router
