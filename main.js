function findMissingKeys(mainList, otherList) {
  let missingKeys = {};

  for (let key in mainList) {
    let found = false;
    for (let otherKey in otherList) {
      if (key.toLowerCase() === otherKey.toLowerCase()) {
        found = true;
        break;
      }
    }
    if (!found) {
      missingKeys[key] = mainList[key];
    }
  }

  return missingKeys;
}

const mainList = {};

const otherList = {};

const missingKeys = findMissingKeys(mainList, otherList);

console.log("Keys");
for (let key in missingKeys) {
  console.log(`${key}`);
}

console.log("Value");
for (let key in missingKeys) {
  console.log(`${missingKeys[key]}`);
}
