import ImgPhone from '@/assets/img/phone.jpg';
import ImgFlow from '@/assets/img/flow.jpg';
import ImgMessage from '@/assets/img/message.jpg';
import ImgOil from '@/assets/img/oil.jpg';
import ImgAccount from '@/assets/img/account.jpg';

/**
 * 服务内容
 */
export const SERVICE_CONTENT = [
  {
    value: 'phone',
    label: '话费充值',
    path: '/service?tab=1',
    icon: 'phone',
    cover: ImgPhone,
  },
  {
    value: 'flow',
    label: '流量充值',
    path: '/service?tab=2',
    icon: 'flow',
    cover: ImgFlow,
  },
  {
    value: 'message',
    label: '短信产品',
    path: '/service?tab=3',
    icon: 'message',
    cover: ImgMessage,
  },
  {
    value: 'oil',
    label: '油卡充值',
    path: '/service?tab=4',
    icon: 'oil',
    cover: ImgOil,
  },
  {
    value: 'account',
    label: '微信公众号',
    path: '/service?tab=5',
    icon: 'account',
    cover: ImgAccount,
  },
];

export const MENU = [
  {
    label: '服务内容',
    path: '/service',
    children: SERVICE_CONTENT,
  },
  {
    label: '帮助中心',
    path: '/help',
  },
  {
    label: '关于我们',
    path: '/about',
    children: [
      { label: '公司简介', path: '/about#company-intro' },
      { label: '联系我们', path: '/about#contact-us' },
      { label: '法律声明', path: '/legal' },
    ],
  },
];
