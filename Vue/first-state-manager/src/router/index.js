import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import AddTodo from '../views/AddTodo.vue'
import ViewTodo from '../views/ViewTodo.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/add-todo',
    name: 'AddTodo',
    component: AddTodo
  },
  {
    path: '/view-todo/:id',
    name: 'ViewTodo',
    component: ViewTodo
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];


const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL, was available for old
  routes,
});

export default router;
