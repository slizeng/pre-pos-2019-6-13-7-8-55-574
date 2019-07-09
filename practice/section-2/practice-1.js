'use strict';

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
