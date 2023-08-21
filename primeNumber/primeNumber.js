function primeNumber(limit) {
  function isPrime(number) {
    if (number === false) { return false; }

    for (let del = 2; del <= Math.sqrt(number); del++) {
      if (number % del === 0) return false;
    }
    return true;
  }

  const array = [];

  for (let index = 2; index <= limit; index++) {
    array.push(index);
  }

  for (let index = 0; index < limit - 1; index++) {
    const number = array[index];

    if (isPrime(number)) {
      let index2 = index + number;

      while (index2 < limit - 1) { array[index2] = false; index2 += number; }
    }
  }

  return array.filter((item) => item);
}

console.log(primeNumber(30));