<template>
  <section class="h-[184px] border border-gray-light px-5">
    <h3 class="text-base leading-[50px] text-primary">在线客服</h3>
    <div class="flex">
      <a
        class="group relative mr-4 block h-[72px] w-[72px] cursor-pointer rounded-full border-2 border-content hover:border-primary"
        href="tel:13913996954"
      >
        <SvgIcon
          name="call"
          size="60"
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 fill-content group-hover:fill-primary"
        ></SvgIcon>
      </a>
      <div class="flex flex-col justify-between py-2.5 text-sm text-content">
        <p>客服电话：13913996954</p>
        <p>周一至周日 8:00-18:00</p>
      </div>
    </div>
  </section>
</template>
