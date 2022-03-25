'use strict';

const ages = (persons) => {
  const result = {};
  for (const person in persons) {
    const value = persons[person];
    result[person] = value.died - value.born;
  }
  return result;
};

module.exports = { ages };
