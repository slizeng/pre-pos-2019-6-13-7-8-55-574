'use strict';

function collectSameElements(collectionA, objectB) {
  return collectionA.filter(element => objectB.value.includes(element));
}
