import { describe } from "node:test";

const signUp = {
  title: 'CULUMUリサーチから２パターンの依頼が届きます！会員登録して、好きな依頼に参加しましょう！',
  success: {
    title: '会員登録が完了しました！',
    description: '案件の依頼はLINEで届きます。\nご依頼までお待ちください'
  },
  topSecondTitle: '自分が参加する',
  topSecondText: '企業のインタビューやワークショップにあなた自身が参加します。',
  bottomSecondTitle: '人を紹介する',
  bottomSecondText: '企業のインタビューやワークショップに参加してくれる友人・知人を紹介します。',
  about: {
    basicInfo: '基本情報',
    title: 'あなたについて入力しましょう',
    tip: '※全て必須入力事項です。',
    name: '氏名',
    kanaName: 'フリガナ',
    birth: '生年月日',
    gender: '性別',
    contactInfo: '連絡先',
    tel: '電話番号',
    email: 'メールアドレス',
    address: '住所',
    zipCode: '郵便番号',
    zipCodeTip: '※ハイフン無しで入力してください。'
  },
  introduce: {
    title: '自己紹介文を入力しましょう!',
    description: '自己紹介を書くと依頼が届きやすくなります。\nあなたの声を届ける機会を増やしましょう！',
    tip: '・20年間理学療法士をしており、高齢に伴う身体機能の低下についてお話しできます\n・発達障害の子どもがおり、特別支援学校に通っています。親としての立場でお話しできます\n・発達障害の親同士でつながりがあるので、ご紹介できます'
  },
  introduceSuccess: {
    title: '自己紹介入力が完了しました！',
    description: '案件の依頼はLINEで届きます。\nご依頼までお待ちください',
    returnToLine: 'LINEに戻る',
  },
  complete: '登録を完了する',
};

export default {
  signUp
};
