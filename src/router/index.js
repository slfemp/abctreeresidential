import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Treeremoval from '../views/Treeremoval.vue';
import Landclearing from '../views/Landclearing.vue';
import Shrubpruning from '../views/Shrubpruning.vue';
import Treetrimming from '../views/Treetrimming.vue';
import Stormprepandcleanup from '../views/Stormprepandcleanup.vue';

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
];

const router = new VueRouter({
  routes,
});

export default router;
