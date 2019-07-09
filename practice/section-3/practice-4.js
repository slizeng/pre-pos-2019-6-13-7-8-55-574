'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let elements = countSameElements(collectionA);

  return minusCollectionElements(elements, objectB);
}

function minusCollectionElements(collectionA, objectB) {
  const shouldMinus = key => objectB.value.includes(key);

  const minus = count => count - Math.trunc(count / 3);

  return collectionA.map(({ count, key }) => ({
    key,
    count: shouldMinus(key) ? minus(count) : count
  }));
}

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
