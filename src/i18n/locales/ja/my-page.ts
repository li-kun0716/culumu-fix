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
    noContact: 'xハイフン無しで入力してください'
  },
  input: {
    fullNamePlaceHolder: '山田太郎',
    namePlaceHolder: 'ヤマダタロウ',
    tellPlaceHolder: '12345678900',
    emailPlaceHolder: 'contact@xxx.com',
    postalCodePlaceHolder: '1234567',
    organizationNamePlaceHolder: '株式会社STYZ',
    otherPlaceHolder: 'その他'
  },
  textArea: {
    talkAboutPlaceHolder: `・認知症の家族の悩みが話せます\n・車いす利用の当事者\n・理学療法士として高齢者の生活全般について話せます`,
    referPlaceHolder: '・認知症の家族を持つ仲間を紹介できます',
    introductionPlaceHolder: `・20年間理学療法士をしており、高齢に伴う身体機能の低下についてお話しできます\n・発達障害の子どもがおり、特別支援学校に通っています。親としての立場でお話しできます\n・発達障害の親同士でつながりがあるので、ご紹介できます`
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
      },
      {
        label: 'そのた',
        value: 'other'
      },
      {
        label: '答えたくない',
        value: 'noAnswer'
      }
    ],
    occupationSelect: [
      {
        label: '会社員',
        value: '会社員'
      },
      {
        label: '公務員（教職員除く）',
        value: '公務員'
      },
      {
        label: '教職員',
        value: '教職員'
      },
      {
        label: '経営者・役員',
        value: '経営者・役員'
      },
      {
        label: '専業主婦',
        value: '専業主婦'
      },
      {
        label: '自営業・自由業',
        value: '自営業・自由業'
      },
      {
        label: 'NPO・NGO',
        value: 'NPO・NGO'
      },
      {
        label: '学生',
        value: '学生'
      },
      {
        label: '士業（公認会計士・弁護士・税理士・司法書士）',
        value: '士業'
      },
      {
        label: '医療従事者',
        value: '医療従事者'
      },
      {
        label: 'パート・アルバイト',
        value: 'パート・アルバイト'
      },
      {
        label: '定年退職',
        value: '定年退職'
      },
      {
        label: 'ボランティア',
        value: 'ボランティア'
      },
      {
        label: '無職',
        value: '無職'
      },
      {
        label: 'その他',
        value: 'other'
      }
    ],
    postSelect: [
      {
        label: '経営者・代表',
        value: '経営者・代表'
      },
      {
        label: '役員',
        value: '役員'
      },
      {
        label: '一般社員（正社員）',
        value: '一般社員（正社員）'
      },
      {
        label: '契約社員',
        value: '契約社員'
      },
      {
        label: '派遣社員',
        value: '派遣社員'
      },
      {
        label: 'パート・アルバイト',
        value: 'パート・アルバイト'
      },
      {
        label: 'その他（自由記述）',
        value: 'other'
      }
    ],
    specialList: ['会社員', '公務員', '教職員', '経営者・役員', 'NPO・NGO', 'ボランティア']
  },
  updateSuccess: ' アップデートに成功',
  updateFail: ' アップデートに失敗'
};

const myPageInfo = {
  title: 'マイページ',
  info: 'プロフィール設定',
  notify: '通知設定',
  query: 'お問い合わせ',
  policy: '利用規約・プライバシーポリシー',
  back: '退会する',
  myInfo
};

export default myPageInfo;
