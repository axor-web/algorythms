function selectionSort(array) {
  array = [...array];

  let startIndex = 0;

  while (startIndex < array.length - 1) {
    let minNumber = Infinity;
    let minNumberIndex = -1;

    for (let index = startIndex; index < array.length; index++) {
      if (array[index] < minNumber) {
        minNumber = array[index];
        minNumberIndex = index;
      }
    }

    [array[startIndex], array[minNumberIndex]] = [array[minNumberIndex], array[startIndex]];
    startIndex++;
  }

  return array;
}

const mockArr = [4, 1, 4, 9, 1, 3, 5, 9, 1, 2, 12, 41, 0];

console.log(selectionSort(mockArr));