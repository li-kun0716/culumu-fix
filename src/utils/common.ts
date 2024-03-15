const occupationList = [
  '会社員',
  '公務員（教職員除く）',
  '教職員',
  '経営者・役員',
  '専業主婦',
  '自営業・自由業',
  'NPO・NGO',
  '学生',
  '士業（公認会計士・弁護士・税理士・司法書士）',
  '医療従事者',
  'パート・アルバイト',
  '定年退職',
  'ボランティア',
  '無職'
];

const yearOptions = () => {
  const now = new Date();
  const options: { label: string; value: string }[] = [];

  for (let i = now.getFullYear(); i >= 1900; i--) {
    options.push({ label: i.toString(), value: i.toString() });
  }

  return options;
};

const monthOptions = () => {
  const options: { label: string; value: string }[] = [];

  for (let i = 12; i >= 1; i--) {
    options.push({ label: i.toString(), value: i.toString() });
  }

  return options;
};

const occupationOptions = () => {
  const options: { label: string; value: string }[] = [];

  return occupationList.map((item) => {
    return { label: item.toString(), value: item.toString() };
  });
};

export { yearOptions, monthOptions, occupationOptions };
