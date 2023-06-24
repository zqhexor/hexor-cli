<template>
  <header class="header sticky left-0 top-0 z-[2] h-[80PX] w-full bg-white">
    <section class="w-max-pc mx-auto flex h-full items-center">
      <RouterLink to="/">
        <h1 class="h-full w-36 text-2xl font-bold leading-[80PX]">爱尔贝</h1>
      </RouterLink>

      <div class="flex-auto"></div>

      <!-- 端菜单 -->
      <nav class="h-[60px] w-1/2 min-w-[480PX]">
        <ol class="flex h-full justify-between">
          <li
            v-for="item in menu"
            :key="item.label"
            class="menu-item group relative flex h-full w-1/6 cursor-pointer items-center justify-center text-base hover:text-primary"
            :class="toMenuItemClass(item)"
          >
            <RouterLink :to="item.path">
              <h2>{{ item.label }}</h2>
            </RouterLink>

            <template v-if="item.children && item.children.length > 0">
              <ol
                class="absolute top-full z-[11] -mt-4 hidden w-40 flex-col rounded bg-white p-4 text-sm font-normal text-black shadow-2xl group-hover:flex"
              >
                <li
                  v-for="subItem in item.children"
                  :key="subItem.label"
                  class="w-full text-center leading-[30PX] hover:bg-[#f5fafe] hover:text-primary"
                >
                  <RouterLink :to="subItem.path">
                    <h3>{{ subItem.label }}</h3>
                  </RouterLink>
                </li>
              </ol>
            </template>
          </li>
        </ol>
      </nav>

      <div class="ml-8">
        <button
          class="h-[34px] cursor-pointer rounded bg-primary px-[14px] leading-[34px] text-white active:opacity-75"
          @click="toLogin"
        >
          登录
        </button>
        <button
          class="box ml-2 h-[34px] cursor-pointer rounded bg-white px-[14px] leading-[34px] text-primary ring-1 ring-inset ring-primary active:opacity-75"
          @click="register"
        >
          注册
        </button>
      </div>
    </section>
  </header>
</template>

<script setup>
import { MENU } from '@/constant/index';
import { debounce } from '@/utils/index';

const menu = [{ label: '首页', path: '/' }, ...MENU];

const route = useRoute();
const router = useRouter();

const toMenuItemClass = (item) => {
  if (route.path.match(/\/[^/]*/)[0] === item.path) {
    return 'menu-item-active before:absolute z-10 font-bold text-primary before:left-0 before:bottom-px before:w-full before:h-1 before:bg-primary';
  }
  return '';
};

const toLogin = () => router.push('/login');

const message = useMessage();
// 挂载出去，给路由守卫使用
window.$message = message;
const register = () => {
  message.warning('自动注册已关闭，请联系商务进行开户');
};

const onScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY;
};

const debounceOnScroll = debounce(onScroll);
onMounted(() => {
  debounceOnScroll();
  window.addEventListener('scroll', debounceOnScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', debounceOnScroll);
});
</script>

<style>
html[data-scroll='0'] .header {
  /* color: white;
  background: transparent; */
}

html[data-scroll='0'] .header::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 1px;
  width: 100%;
  height: 2px;
  background: rgb(255 255 255 / 50%);
}

html[data-scroll='0'] .header .menu-item:hover {
  /* color: #fff; */
}

html[data-scroll='0'] .header .menu-item-active {
  /* color: #fff; */
}

html[data-scroll='0'] .header .menu-item-active::before {
  /* background: #fff; */
}
</style>
