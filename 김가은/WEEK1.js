// 최종 코드
function solution(s) {
  let num = 0;
  for (let x of s) {
    x === '(' ? num++ : num--;
    if (num < 0) return false;
  }
  return num === 0 ? true : false;
}

// 정확성 테스트는 통과했지만 효율성 테스트에서 실패한 코드들
function solution2(s) {
  while (s.includes('()')) s = s.split('()').join('');
  return s === '' ? true : false;
}

function solution3(s) {
  while (s.includes('()')) {
    if (s[0] === '(') s = s.substring(1, s.length).replace(')', '');
    else return false;
  }
  return s === '' ? true : false;
}

function solution4(s) {
  let num = 0;
  let num2 = 0;
  while (num2 < s.length) {
    s[num2] === '(' ? num++ : num--;
    if (num < 0) return false;
    num2++;
  }
  return num === 0 ? true : false;
}
