import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Default from '@/views/Default.vue';
import Dashboard from '@/views/Dashboard.vue';
import Welcome from '@/views/Welcome.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Default
  },
  {
    path: '/dashboard',
    component: Dashboard
  },
  {
    path: '/welcome',
    component: Welcome
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
