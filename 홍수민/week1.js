/*
 *  프로그래머스 2단계 - 올바른 괄호
 *  https://programmers.co.kr/learn/courses/30/lessons/12909
 */

function solution(s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    // 괄호 짝을 맞춰보기 위해 count를 체크
    if (s[i] === "(") {
      ++count;
    } else {
      --count;
    }

    // 주어진 문자열을 반복하는 루프 안에서 짝이 맞지 않는 경우 체크
    if (count < 0) {
      return false;
    }
  }

  if (count === 0) {
    return true;
  }
  return false;
}
