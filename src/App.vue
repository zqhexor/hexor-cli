<template>
  <n-loading-bar-provider>
    <n-message-provider>
      <div>
        <layout-header />
         <RouterView />
        <layout-footer />
      </div>
    </n-message-provider>
  </n-loading-bar-provider>
</template>
