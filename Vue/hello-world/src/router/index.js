import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Article from '../views/Article.vue'

const About = () => import(/* webpackChunkName: "about" */ '../views/About.vue');
const Testimonials = () => import(/* webpackChunkName: "about" */ '../views/Testimonials.vue')
// const ContactUs = () => import(/* webpackChunkName: "about" */ '../views/ContactUs.vue')

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/testimonials',
    name: 'TestimonialPage',
    component: Testimonials
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: Article
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;