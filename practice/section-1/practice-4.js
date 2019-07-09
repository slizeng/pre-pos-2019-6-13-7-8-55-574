'use strict';

function collectSameElements(collectionA, objectB) {
  return collectionA
    .map(object => object.key)
    .filter(key => objectB.value.includes(key));
}
