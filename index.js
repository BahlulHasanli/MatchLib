const matchlib = (val) => (...args) => (not) => {
  const [, exec] = args.find(([item]) => item(val)) ?? [, not];

  return exec && typeof exec === 'function' ? exec(val) : [, not];
};

export default matchlib;
