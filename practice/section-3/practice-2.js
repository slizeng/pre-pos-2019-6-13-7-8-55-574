'use strict';

function createUpdatedCollection(collectionA, objectB) {
  const shouldMinus = key => objectB.value.includes(key);

  const minus = count => count - Math.trunc(count / 3);

  return collectionA.map(({ count, key }) => ({
    key,
    count: shouldMinus(key) ? minus(count) : count
  }));
}
