const homePageTest = {
  text: 'home page test text',
  funInner: (arg1: number, arg2: string) => `In home page funInner is called. arg: ${arg1} - ${arg2}`,
  obj: {
    attr: 'attr',
    funObj: (arg1: number, arg2: string) => `In home page objFun is called. arg: ${arg1} - ${arg2}`
  }
};

export default {
  title: 'Hi there!!',
  'to-second-page': 'To second page',
  'to-client-page': 'To client page',
  languageSwitcher: 'Switch from <1>{{lng}}</1> to: ',
  homeFun: (arg1: number, arg2: string) => `homeFun called arg: ${arg1} - ${arg2}`,
  homePageTest
};
