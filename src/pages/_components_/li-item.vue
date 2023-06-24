<template>
  <li
    class="flex h-10 w-full cursor-pointer items-center border-b border-b-gray-light text-sm text-content last:border-b-0"
  >
    <span class="mr-2 flex-none text-2xl text-gray-dark">·</span>
    <span class="flex-auto overflow-hidden text-ellipsis whitespace-nowrap">
      <slot></slot>
    </span>
    <span class="ml-2 flex-none">&gt;</span>
  </li>
</template>
