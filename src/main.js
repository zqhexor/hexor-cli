import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from '~pages';
import SvgIcon from 'svg-icon';
import './assets/css/index.css';

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash };
    } else if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  if (to.path === '/service') {
    window.$message.warning('请先登录');
    return false;
  }
  next();
});

const app = createApp(App);

app.component('SvgIcon', SvgIcon);
app.use(router).mount('#app');
