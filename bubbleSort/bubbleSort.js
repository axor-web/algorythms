function bubbleSort(array) {
  const arrayCopy = [...array];
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;

    for (let index = 0; index < arrayCopy.length - 1; index++) {
      if (arrayCopy[index] > arrayCopy[index + 1]) {
        isSorted = false;
        [arrayCopy[index], arrayCopy[index + 1]] = [arrayCopy[index + 1], arrayCopy[index]];
      }
    }
  }

  return arrayCopy;
}

const mockArr = [4, 1, 4, 9, 1, 3, 5, 9, 1, 2, 12, 41, 0];

console.log(bubbleSort(mockArr));