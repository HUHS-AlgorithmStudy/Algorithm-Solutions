/*
 *  프로그래머스 2단계 - JadenCase 문자열 만들기
 *  https://programmers.co.kr/learn/courses/30/lessons/12951?language=javascript
 */

function solution(s) {
  let string = s.toLocaleLowerCase();
  let answer = string
    .split(" ")
    .map((s) => {
      let arr = s.split("");
      if (arr[0] != null) arr[0] = arr[0].toUpperCase();
      return arr.join("");
    })
    .join(" ");

  return answer;
}
