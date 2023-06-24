<template>
  <article class="w-max-pc mx-auto flex">
    <ol class="flex flex-none flex-col">
      <li
        v-for="item in SERVICE_CONTENT"
        :key="item.label"
        class="group flex h-[80px] w-[250px] cursor-pointer items-center border border-t-0 border-gray-light first:border-t"
        @click="toDetail(item)"
      >
        <SvgIcon :name="item.icon" class="ml-5 mr-4 fill-primary" size="36" />
        <span class="text-base text-title group-hover:text-primary">{{
          item.label
        }}</span>
      </li>
    </ol>

    <div class="ml-4 flex-auto overflow-hidden">
      <section class="swiper relative h-[400px]">
        <ol class="swiper-wrapper">
          <li
            v-for="item in SERVICE_CONTENT"
            :key="item.label"
            class="swiper-slide group relative cursor-pointer bg-gray-light"
            @mouseenter="handleMouseEnter"
            @mouseleave="handleMouseLeave"
            @click="toDetail(item)"
          >
            <img :src="item.cover" class="h-full w-full object-cover" />
            <div
              class="absolute left-0 top-0 hidden h-full w-full items-center justify-center bg-[rgba(0,0,0,0.3)] text-xl text-white group-hover:flex"
            >
              {{ item.label }}
            </div>
          </li>
        </ol>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
      </section>
    </div>
  </article>
</template>

<script setup>
import { SERVICE_CONTENT } from '@/constant';
import { Swiper, Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';

const router = useRouter();
const toDetail = (item) => {
  router.push(item.path);
};

const delay = 3000;

const swiper = ref(null);
onMounted(() => {
  swiper.value = new Swiper('.swiper', {
    loop: true,
    modules: [Autoplay, Pagination, Navigation],
    autoplay: {
      delay,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});

onBeforeMount(() => {
  swiper.value?.destroy();
  swiper.value = null;
});

const handleMouseEnter = () => {
  swiper.value.autoplay.stop();
};

const handleMouseLeave = () => {
  swiper.value.autoplay.start();
};
</script>

<style scoped>
.swiper-button-next,
.swiper-button-prev {
  color: rgb(var(--color-primary));
}
</style>
