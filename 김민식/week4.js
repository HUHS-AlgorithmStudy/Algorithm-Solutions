function solution(n, words) {
  let answer = [];
  let count = 2;
  let lastWord = words.map((item) => item[item.length - 1]);
  for (let i = 1; i < lastWord.length; i++) {
    answer.push(words[i - 1]);
    if (words[i][0] !== lastWord[i - 1] || answer.includes(words[i])) {
      return count % n === 0
        ? [n, Math.ceil(count / n)]
        : [count % n, Math.ceil(count / n)];
    }
    count++;
  }
  return [0, 0];
}
