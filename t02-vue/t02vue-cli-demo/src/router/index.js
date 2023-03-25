import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyView from '../views/MyView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },

        {
            path: '/my',
            name: 'my',
            component: MyView
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/views/AboutView.vue')
        },
        {
            path: '/item/:id',//动态路由
            name: 'item-details',
            props: true,
            component: () => import('@/views/ItemDetailsView.vue'),
        },
    ]
})

export default router
