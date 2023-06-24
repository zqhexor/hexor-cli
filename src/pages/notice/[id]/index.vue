<template>
  <article
    class="w-max-pc mx-auto min-h-[550px] border border-gray-light px-[80px] py-[30px]"
  >
    <div class="mb-4 border-b border-dashed border-gray-light py-4">
      <h2 class="mb-4 text-center text-2xl font-black text-black">
        {{ notice.title }}
      </h2>
      <time class="inline-block w-full text-center text-base text-title">
        {{ notice.time }}
      </time>
    </div>
    <div v-html="notice.content"></div>
  </article>
</template>

<script setup>
import { noticeList } from '@/mock-data/notice';

const route = useRoute();
const id = route.params?.id;

const notice = ref({});
const getNotice = () => {
  const notice = noticeList.find((item) => item.id === id);
  return notice ? notice : {};
};

notice.value = getNotice();
</script>
