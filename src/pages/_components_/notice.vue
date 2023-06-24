<template>
  <section class="h-[184px] border border-gray-light px-5">
    <h3 class="text-base leading-[50px] text-primary">公告</h3>
    <ol class="flex flex-col">
      <LiItem
        v-for="item in notice"
        :key="item.id"
        @click="toNoticeDetail(item.id)"
      >
        温馨提示：{{ item.time }} {{ item.title }}
      </LiItem>
    </ol>
  </section>
</template>

<script setup>
import { noticeList } from '@/mock-data/notice';
import LiItem from './li-item.vue';

const router = useRouter();

const notice = ref([]);
notice.value = noticeList.slice(0, 3);

const toNoticeDetail = (id) => {
  router.push(`/notice/${id}`);
};
</script>
