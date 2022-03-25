'use strict';

const sum = (...args) => {
  let res = 0;
  let i = 0;
  if (args.length === 0) return 0;
  do {
    res += args[i];
    i++;
  } while (i < args.length);
  return res;

};

module.exports = { sum };
