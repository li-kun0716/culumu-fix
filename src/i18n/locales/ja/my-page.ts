const myInfo = {
  title: 'プロフィール設定',
  basicInformation: '基本情報',
  identity: '氏名',
  furigana: 'フリガナ',
  birthday: '生年月日',
  gender: '性別',
  place: '住所',
  postalCode: '郵便番号',
  postalCodeAttention: 'ハイフン無しで入力してください',
  contact: '連絡先',
  tell: '電話番号',
  email: 'メールアドレス',
  p1: 'あなたのご職業・状況に当てはまるものは？',
  p2: '複数ある場合は「＋職業を追加」を選び、追加してください。',
  occupation: '職業',
  occupationAttention: '※選択肢に当てはまらない場合は「その他」を選び、記入してください。',
  organizationName: '組織名',
  post: '役職',
  occupation2: '職業',
  occupation2Attention: '※選択肢に当てはまらない場合は「その他」を選び、記入してください。',
  add: '職業を追加する',
  talkAbout: 'お話できることを教えてください',
  refer: '紹介できる人を教えてください',
  referAttention: '※紹介できるひとがいない場合は「なし」と入力してください。',
  introduction: '自己紹介文',
  update: '更新する',
  any: '任意',
  validation: {
    required: 'こちらは必須項目になります。',
    fullWidth: '全角カタカナで入力してください。',
    singleByteNum: '半角数字のみで入力してください。',
    singleByteEN: '半角英数字のみで入力してください。',
    noContact: 'xハイフン無しで入力してください',
  },
  select: {
    placeHolder: '選択する',
    genderSelect: [
      {
        label: '男性',
        value: 'male'
      },
      {
        label: '女性',
        value: 'female'
      }
    ],
    occupationSelect: [
      {
        label: '会社員',
        value: '会社員',
      }, {
        label: '公務員',
        value: '公務員',
      },
      {
        label: '教職員',
        value: '教職員',
      },
      {
        label: '経営者',
        value: '経営者',
      },
      {
        label: 'NPO・NGO',
        value: 'NPO・NGO',
      },
      {
        label: 'ボランティア',
        value: 'ボランティア',
      },
    ],
    postSelect: [{
      label: '経営者・代表',
      value: '経営者・代表'
    },
    {
      label: '役員',
      value: '役員'
    },
    {
      label: '会社員（正社員）',
      value: '会社員（正社員）'
    },
    {
      label: '会社員（契約社員）',
      value: '会社員（契約社員）'
    },
    {
      label: '会社員（派遣社員）',
      value: '会社員（派遣社員）'
    },
    {
      label: 'パート・アルバイト',
      value: 'パート・アルバイト'
    },
    {
      label: 'その他（自由記述）',
      value: 'その他（自由記述）'
    }]
  }
}

export default {
  title: 'マイページ',
  info: 'プロフィール設定',
  notify: '通知設定',
  query: 'お問い合わせ',
  policy: '利用規約・プライバシーポリシー',
  back: '退会する',
  barList: '案件管理|マイページ',
  myInfo
}