<template>
  <footer class="mt-5 w-full border-t border-gray-light bg-footer">
    <article class="w-max-pc mx-auto">
      <section>
        <h3 class="py-2 text-sm font-black leading-[30px] text-black">
          合作伙伴
        </h3>
        <ol class="flex">
          <li
            v-for="item in partners"
            :key="item.value"
            class="mr-4 h-[140px] w-[280px] last:mr-0"
          >
            <img :src="item.image" class="h-full w-full" />
          </li>
        </ol>
      </section>
      <div class="my-4 flex w-full justify-center text-sm text-title">
        <RouterLink to="/about#company-intro">
          <h3 class="cursor-pointer">关于我们</h3>
        </RouterLink>
        <span class="mx-2">|</span>
        <RouterLink to="/about#contact-us">
          <h3 class="cursor-pointer">联系我们</h3>
        </RouterLink>
        <span class="mx-2">|</span>
        <RouterLink to="/legal">
          <h3 class="cursor-pointer">法律声明</h3>
        </RouterLink>
      </div>
    </article>
    <small
      class="flex items-center justify-center bg-[#272A39] py-6 text-center text-sm text-[#999]"
    >
      Copyright © 2020 南京格瓦克信息科技有限公司 All rights reserved. &nbsp;
      <a
        href="https://beian.miit.gov.cn/"
        title="备案号"
        target="_blank"
        class="hover:text-primary"
      >
        苏ICP备19050911号-1</a
      >
    </small>
  </footer>
</template>

<script setup>
import ImgChinaMobile from '@/assets/img/china-mobile.jpg';
import ImgChinaTelecom from '@/assets/img/china-telecom.jpg';
import ImgChinaUnicom from '@/assets/img/china-unicom.jpg';

const partners = [
  {
    value: 'china-mobile',
    image: ImgChinaMobile,
  },
  {
    value: 'china-telecom',
    image: ImgChinaTelecom,
  },
  {
    value: 'china-unicom',
    image: ImgChinaUnicom,
  },
];
</script>
