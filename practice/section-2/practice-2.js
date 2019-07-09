'use strict';

function countSameElements(collection) {
  const parseElement = inputString => {
    const separator = '-';
    let symbol = inputString;
    let count = 1;

    if (inputString.includes(separator)) {
      let symbolAndCount = inputString.split(separator);
      symbol = symbolAndCount[0];
      count = Number.parseInt(symbolAndCount[1]);
    }

    return { symbol, count }
  };

  let hash = {};

  collection.forEach(element => {
    const { symbol, count } = parseElement(element);
    let target = hash[symbol];

    hash = { ...hash };
    const nextCount = target ? target.count + count : count;

    hash[symbol] = { key: symbol, count: nextCount }
  });

  return Object.values(hash);
}
