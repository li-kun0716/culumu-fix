const clientPageTest = {
  text: 'Client ページテストテキスト.',
  funInner: (arg1: number, arg2: string) => `Client ページ funInner がコールされ arg: ${arg1} - ${arg2}`,
  obj: {
    attr: '属性',
    funObj: (arg1: number, arg2: string) => `Client ページ funObj がコールされ arg: ${arg1} - ${arg2}`
  }
};

export default {
  title: 'Client ページ',
  counter_one: '1 回選択された。',
  counter_other: '{{count}} 回クリックされた。',
  counter_zero: 'クリックされたことない。',
  'back-to-home': 'ホームに戻す',
  clientPageFun: (arg1: number, arg2: string) => `Client ページ clientPageFun コールされ arg: ${arg1} - ${arg2}`,
  clientPageTest
};
