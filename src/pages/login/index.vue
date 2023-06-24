<template>
  <article
    class="mx-auto my-20 w-[500px] rounded border border-gray-light px-[60px] py-[40px] shadow-lg shadow-gray-light"
  >
    <h3 class="pb-10 text-center text-xl font-black">用户登录</h3>
    <n-form
      ref="formRef"
      :model="model"
      :rules="rules"
      label-placement="left"
      label-width="0"
    >
      <n-form-item path="username">
        <n-input v-model:value="model.username" placeholder="请输入用户名">
          <template #prefix>
            <SvgIcon name="contact" class="fill-gray-dark"></SvgIcon>
          </template>
        </n-input>
      </n-form-item>
      <n-form-item path="password">
        <n-input v-model:value="model.password" placeholder="请输入密码">
          <template #prefix>
            <SvgIcon name="password" class="fill-gray-dark"></SvgIcon>
          </template>
        </n-input>
      </n-form-item>
      <n-form-item path="capture">
        <n-input v-model:value="model.capture" placeholder="请输入验证码">
          <template #prefix>
            <SvgIcon name="capture" class="fill-gray-dark"></SvgIcon>
          </template>
        </n-input>
        <div class="ml-1 inline-block h-[34px] w-[100px]">
          <img
            :src="capture"
            class="h-full w-full"
            alt="验证码"
            @click="getCapture"
          />
        </div>
      </n-form-item>
    </n-form>

    <button
      class="mt-8 h-[34px] w-full cursor-pointer rounded bg-primary px-[14px] leading-[34px] text-white active:opacity-75"
      @click="login"
    >
      登录
    </button>
  </article>
</template>

<script setup>
import verification from 'verification-code';

const model = ref({
  username: '',
  password: '',
  capture: '',
});

const rules = {
  username: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入用户名',
  },
  password: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入密码',
  },
  capture: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入验证码',
  },
};

const capture = ref('');
const getCapture = () => {
  capture.value = verification.create().dataURL;
};
getCapture();

const formRef = ref(null);
const loadingBar = useLoadingBar();
const message = useMessage();
const login = async () => {
  await formRef.value.validate();
  loadingBar.start();
  setTimeout(() => {
    loadingBar.finish();
    message.error('登录失败');
    getCapture();
  }, 2000);
};
</script>
