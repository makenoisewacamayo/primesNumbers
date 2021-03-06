const eratosthenes = (n: number): number[] => {
  // Eratosthenes algorithm to find all primes under n
  const array: boolean[] = [],
    upperLimit = Math.sqrt(n),
    output: number[] = [];

  // Make an array from 2 to (n - 1)
  for (let i = 0; i < n; i++) {
    array.push(true);
  }

  // Remove multiples of primes starting from 2, 3, 5,...
  for (let i = 2; i <= upperLimit; i++) {
    for (let j = i * i; j < n; j += i) {
      array[j] = false;
    }
  }

  // All array[i] set to true are primes in reverse order
  for (let i = n - 1; i >= 2; i--) {
    if (array[i]) {
      output.push(i);
    }
  }

  return output;
};

export default eratosthenes;
