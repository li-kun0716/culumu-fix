const clientPageTest = {
  text: 'client page test text.',
  funInner: (arg1: number, arg2: string) => `In client page funInner is called. arg: ${arg1} - ${arg2}`,
  obj: {
    attr: 'attr',
    funObj: (arg1: number, arg2: string) => `In client page funObj is called. arg: ${arg1} - ${arg2}`
  }
};

export default {
  title: 'Client page',
  counter_one: 'one selected',
  counter_other: '{{count}} selected',
  counter_zero: 'none selected',
  'back-to-home': 'Back to home',
  clientPageFun: (arg1: number, arg2: string) => `clientPageFun is called arg: ${arg1} - ${arg2}`,
  clientPageTest
};
