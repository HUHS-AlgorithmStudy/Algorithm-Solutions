// 최종 코드
function solution(s) {
  return s.toLowerCase().replace(/\b\w/g, (a) => a.toUpperCase());
}
