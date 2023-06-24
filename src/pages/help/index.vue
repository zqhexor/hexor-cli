<template>
  <article class="w-max-pc mx-auto grid">
    <article class="pt-[80px]">
      <DetailSectionTitle title="新手指引" />
      <ol class="flex w-full items-center justify-between">
        <template v-for="item in guideList" :key="item">
          <li
            class="hexagon h-[120px] w-[120px] bg-primary text-center leading-[120px] text-white"
          >
            {{ item }}
          </li>
          <SvgIcon name="arrow" size="28" class="fill-primary last:hidden" />
        </template>
      </ol>
    </article>

    <article class="pt-[80px]">
      <DetailSectionTitle title="常见问题" />
      <ol class="grid grid-cols-2 gap-5">
        <li
          v-for="item in question"
          :key="item.id"
          class="border border-gray-light p-4"
        >
          <h3
            class="flex items-start text-base text-title before:mr-2 before:block before:w-5 before:flex-none before:rounded-[3px] before:bg-primary before:text-center before:leading-5 before:text-white before:content-['Q']"
          >
            {{ item.question }}
          </h3>
          <p
            class="mt-1.5 flex items-start text-sm text-content before:mr-2 before:block before:w-5 before:flex-none before:rounded-[3px] before:bg-gray before:text-center before:leading-5 before:text-white before:content-['A']"
          >
            {{ item.answer }}
          </p>
        </li>
      </ol>
    </article>
  </article>
</template>

<script setup>
import { questionList } from '@/mock-data/question';

const guideList = [
  '登录系统',
  '选择服务',
  '选择产品',
  '添写信息',
  '提交',
  '查询记录',
];

const question = ref([]);
question.value = questionList;
</script>

<style scoped>
.hexagon {
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}
</style>
