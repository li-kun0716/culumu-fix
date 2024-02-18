const secondPageTest = {
  text: 'Second ページテストテキスト。',
  funInner: (arg1: number, arg2: string) => `Second ページ funInner コールされ arg: ${arg1} - ${arg2}`,
  obj: {
    attr: '属性',
    funObj: (arg1: number, arg2: string) => `Second ページ funObj コールされ arg: ${arg1} - ${arg2}`
  }
};

export default {
  title: 'Hi、Second ページ!',
  'back-to-home': 'ホームに戻す',
  fun: (arg1: number, arg2: string) => `IClient ページ function コールされ arg: ${arg1} - ${arg2}`,
  secondPageTest
};
