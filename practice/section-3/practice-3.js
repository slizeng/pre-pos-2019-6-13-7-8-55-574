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
  let hash = {};

  collection.forEach(element => {
    let target = hash[element];
    hash = { ...hash };
    const nextCount = target ? target.count + 1 : 1;
    hash[element] = { key: element, count: nextCount }
  });

  return Object.values(hash);
}
