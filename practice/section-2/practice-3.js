'use strict';

function countSameElements(collection) {
  const parseElement = inputString => {
    const separators = ['-', '[', ':'];
    let symbol = inputString;
    let count = 1;

    separators.forEach(separator => {
      if (inputString.includes(separator)) {
        let symbolAndCount = inputString.split(separator);
        symbol = symbolAndCount[0];
        count = Number.parseInt(symbolAndCount[1]);

        return { symbol, count }
      }
    });

    return { symbol, count }
  };

  let hash = {};

  collection.forEach(element => {
    const { symbol, count } = parseElement(element);
    let target = hash[symbol];

    hash = { ...hash };
    const nextCount = target ? target.summary + count : count;

    hash[symbol] = { name: symbol, summary: nextCount }
  });

  return Object.values(hash);
}
