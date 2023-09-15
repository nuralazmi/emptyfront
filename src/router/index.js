import {createRouter, createWebHashHistory} from 'vue-router';
import Home from "@/views/Home.vue";
import Dashboard from "@/views/Dashboard.vue";
import AppLayout from '@/components/layout/AppLayout.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/',
                    name: 'dashboard',
                    component: Dashboard,
                },
            ]
        },
    ]
});

export default router;
