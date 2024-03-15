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

export { yearOptions, monthOptions };
