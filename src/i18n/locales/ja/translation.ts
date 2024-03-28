import clientPage from './client-page';
import backPage from './back-page';
import notifyPage from './notify-page';
import setupPage from './setup-page';
import myPage from './my-page';
import greetingPage from './greeting-page';
import authPage from './auth-page';

const homePageTest = {
  text: 'ホームページテストテキスト',
  funInner: (arg1: number, arg2: string) => `ホームページ funInner 関数がコールされ arg: ${arg1} - ${arg2}`,
  obj: {
    attr: '属性',
    funObj: (arg1: number, arg2: string) => `ホームページ objFun 関数がコールされ arg: ${arg1} - ${arg2}`
  }
};

export default {
  title: 'Hi こちら!!',
  'to-second-page': 'Second ページへ',
  'to-client-page': 'Client ページへ',
  languageSwitcher: 'Switch from <1>{{lng}}</1> to: ',
  homeFun: (arg1: number, arg2: string) => `homeFun がコールされ arg: ${arg1} - ${arg2}`,
  homePageTest,
  clientPage,
  backPage,
  notifyPage,
  setupPage,
  myPage,
  greetingPage,
  authPage
};
