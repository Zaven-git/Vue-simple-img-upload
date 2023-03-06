import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '@/views/todo/Index';
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: 'home',
    component: Index,
  },
  {
    path: "/todo",
    redirect: {
      name: 'home'
    }
  },
  {
    path: "/todo/:id(\\d+)",
    name: 'todo',
    component: Index,
  },
  {
    path: "*",
    redirect: {name: 'home'}
  }
]

const router = new VueRouter({
  routes,
})

export default router;

