function findDiff(arr1, arr2) {
  let updated = 0,
    added = 0,
    deleted = 0;

  for (let i = 0; i < arr2.length; i++) {
    let item = arr2[i];
    let found = false;
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[j] === item) {
        found = true;
      }
    }
    if (found) {
      updated += 1;
    } else {
      added += 1;
    }
  }
  for (let i = 0; i < arr1.length; i++) {
    let found = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        found = true;
      }
    }
    if (!found) {
      deleted += 1;
    }
  }
  return {
    updated: updated,
    added: added,
    deleted: deleted,
  };
}

let diff = findDiff([1, 2, 3], [3, 2, 4, 5]);
console.log(diff);
