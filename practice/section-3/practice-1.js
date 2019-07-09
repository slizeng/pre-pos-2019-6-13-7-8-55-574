'use strict';

function createUpdatedCollection(collectionA, objectB) {
  const shouldMinus = key => objectB.value.includes(key);

  return collectionA.map(({ count, key }) => ({
    key,
    count: shouldMinus(key) ? count - 1 : count
  }));
}
