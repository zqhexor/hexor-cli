<template>
  <section class="h-[184px] border border-gray-light px-5">
    <h3 class="text-base leading-[50px] text-primary">常见问题</h3>
    <ol class="flex flex-col">
      <RouterLink to="/help">
        <LiItem v-for="item in question" :key="item.id">
          {{ item.question }}
        </LiItem>
      </RouterLink>
    </ol>
  </section>
</template>

<script setup>
import { questionList } from '@/mock-data/question';
import LiItem from './li-item.vue';

const question = ref([]);
question.value = questionList.slice(0, 3);
</script>
