module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    node: true,
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'prettier',
    './.eslintrc-auto-import.json',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['vue'],
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'vue/multi-word-component-names': 'off',
  },
};
