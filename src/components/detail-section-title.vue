<template>
  <h2
    class="mb-[40px] text-[28px] font-bold !leading-none text-title before:mr-2.5 before:inline-block before:h-[28px] before:w-[4px] before:bg-primary before:align-bottom"
  >
    {{ title }}
  </h2>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
