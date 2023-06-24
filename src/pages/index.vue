<template>
  <ServiceContent class="mt-4" />

  <article class="w-max-pc mx-auto mt-5 grid grid-cols-3 gap-5">
    <Question />
    <Notice />
    <OnlineService />
  </article>
</template>

<script setup>
import ServiceContent from './_components_/service-content.vue';
import Question from './_components_/question.vue';
import Notice from './_components_/notice.vue';
import OnlineService from './_components_/online-service.vue';
</script>
