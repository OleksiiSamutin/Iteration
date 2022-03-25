'use strict';

const max = (matrix) => {
  let res = matrix[0][0];
  const compare = (a, b) => (a > b ? a : b);
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      res = compare(res, row[j]);
    }
  }
  return res;
};

module.exports = { max };
