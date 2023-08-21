function insertionSort(array) {
  const sortedArray = [array[0]];

  for (let index1 = 1; index1 < array.length; index1++) {
    let num = array[index1];

    let index2 = 0;
    for (index2; index2 < sortedArray.length; index2++) {
      if (sortedArray[index2] > num) { break; }
    }

    sortedArray.splice(index2, 0, num);
  }

  return sortedArray;
}

const mockArr = [4, 1, 4, 9, 1, 3, 5, 9, 1, 2, 12, 41, 0];

console.log(insertionSort(mockArr));