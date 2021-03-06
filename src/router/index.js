import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Treeremoval from '../views/Treeremoval.vue';
import About from '../views/About.vue';
import Landclearing from '../views/Landclearing.vue';
import Shrubpruning from '../views/Shrubpruning.vue';
import Treetrimming from '../views/Treetrimming.vue';
import Contact from '../views/Contact.vue';
import Stormprepandcleanup from '../views/Stormprepandcleanup.vue';
import Requestsubmit from '../views/Requestsubmit.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/treeremoval',
    name: 'Treeremoval',
    component: Treeremoval,
  },
  {
    path: '/shrubpruning',
    name: 'Shrubpruning',
    component: Shrubpruning,
  },
  {
    path: '/treetrimming',
    name: 'Treetrimming',
    component: Treetrimming,
  },
  {
    path: '/stormprepandcleanup',
    name: 'Stormprepandcleanup',
    component: Stormprepandcleanup,
  },
  {
    path: '/landclearing',
    name: 'Landclearing',
    component: Landclearing,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/requestsubmit',
    name: 'Requestsubmit',
    component: Requestsubmit,
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior() {
    window.scrollTo(0, 0);
  },
});

export default router;
