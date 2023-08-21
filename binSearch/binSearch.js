function binSearch(sortedArray, searchElement) {
  let left = 0
  let right = sortedArray.length;
  let mid = Math.round((left + right)/2);

  while (sortedArray[mid] !== searchElement && left + 1 < right) {
    if (sortedArray[mid] < searchElement) { left = mid; }
    else { right = mid; }

    mid = Math.trunc((left + right)/2);
  }

  return sortedArray[mid] === searchElement ? mid : -1;
}

const mockArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 23, 51, 100, 153, 1241];

console.log(binSearch( [0,100,200,300,400], 400));