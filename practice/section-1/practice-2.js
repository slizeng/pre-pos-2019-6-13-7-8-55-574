'use strict';

function collectSameElements(collectionA, collectionB) {
  return collectionA.filter(element => collectionB.flat().includes(element));
}
