import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'

Vue.use(Router)

let routerMap = [{
        path: '/login',
        name: 'login',
        component: Login
    }, {
        path: '/input',
        name: 'input',
        component: require('@/components/input/index'),
        redirect:'/input/fridge',
        children: [
            { path: 'fridge', name: 'fridge', component: require('@/components/input/fridge/index') },
            { path: 'ln', name: 'ln', component: require('@/components/input/ln/index') }
        ]
    }


]

let router = new Router({
    mode: 'history',
    routes: routerMap
})

export default router
