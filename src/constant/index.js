import ImgPic1 from '@/assets/img/pic1.jpg';
import ImgPic2 from '@/assets/img/pic2.jpg';
import ImgPic3 from '@/assets/img/pic3.png';
import ImgPic4 from '@/assets/img/pic4.png';
import ImgPic5 from '@/assets/img/pic5.jpg';

/**
 * 服务内容
 */
export const SERVICE_CONTENT = [
  {
    value: 'phone',
    label: '业务1',
    path: '/service?tab=1',
    icon: 'phone',
    cover: ImgPic1,
  },
  {
    value: 'flow',
    label: '业务2',
    path: '/service?tab=2',
    icon: 'flow',
    cover: ImgPic2,
  },
  {
    value: 'message',
    label: '业务3',
    path: '/service?tab=3',
    icon: 'message',
    cover: ImgPic3,
  },
  {
    value: 'oil',
    label: '业务4',
    path: '/service?tab=4',
    icon: 'oil',
    cover: ImgPic4,
  },
  {
    value: 'account',
    label: '业务5',
    path: '/service?tab=5',
    icon: 'account',
    cover: ImgPic5,
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
