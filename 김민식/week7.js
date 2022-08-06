function solution(n, weak, dist) {
  let distMax = Math.max(...dist);
  let numMax = Number.MIN_SAFE_INTEGER;
  weak.push(weak[0]);

  for (let i = 0; i < weak.length; i++) {
    let num = Math.abs(weak[i] - weak[i + 1]);
    if (num > n / 2) {
      if (weak[i] < weak[i + 1]) {
        num = Math.abs(0 - weak[i]) + Math.abs(n - weak[i + 1]);
      } else {
        num = Math.abs(n - weak[i]) + Math.abs(0 - weak[i + 1]);
      }
    }
    if (num > numMax) {
      numMax = num;
      weak = weak.filter((item) => {
        return item !== weak[i] && item !== weak[i + 1];
      });
    }
  }

  console.log(weak);
  console.log(numMax);
  return -1;
}
