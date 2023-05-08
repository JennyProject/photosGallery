import Layout from '../components/layout.vue'
import Aibg from '../pages/aibg.vue'
import Buddha from '../pages/buddha.vue'

import NotFound from '@/pages/404.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
interface roleType {
  [x:string]:Array<string>
}
const roleMap:roleType = {
  sender: ['/submitDoc', '/submitDoc/edit', '/login'],
  auditor: ['/approved', '/approved/edit', '/login'],
}
const routes: RouteRecordRaw[] = [
  // { path: '/login', name: 'Login', component: Login },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      { path: 'aibg', name: 'AI背景', component: Aibg },
      { path: 'buddha', name: '佛像', component: Buddha },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
