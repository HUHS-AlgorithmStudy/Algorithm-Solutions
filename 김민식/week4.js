// 최종 풀이
function solution(n, words) {
  for (let i = 1; i < words.length; i++) {
    if (
      words[i][0] !== words[i - 1][words[i - 1].length - 1] ||
      words.indexOf(words[i]) !== i
    ) {
      return [(i + 1) % n === 0 ? n : (i + 1) % n, Math.ceil((i + 1) / n)];
    }
  }
  return [0, 0];
}
