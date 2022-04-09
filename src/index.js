function arrayMadness(a, b) {
  let sum_a = 0;
  let sum_b = 0;

  for (let num in a) {
    sum_a = sum_a + a[num] ** 2;
  }
  for (let num in b) {
    sum_b = sum_b + b[num] ** 3;
  }
  return sum_a > sum_b;
}

export default arrayMadness;
