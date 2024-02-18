const secondPageTest = {
  text: 'second page test text',
  funInner: (arg1: number, arg2: string) => `In second page funInner is called. arg: ${arg1} - ${arg2}`,
  obj: {
    attr: 'attr',
    funObj: (arg1: number, arg2: string) => `In second page funObj is called. arg: ${arg1} - ${arg2}`
  }
};

export default {
  title: 'Hi from second page!',
  'back-to-home': 'Back to home',
  fun: (arg1: number, arg2: string) => `In second page fun function is called. arg: ${arg1} - ${arg2}`,
  secondPageTest
};
