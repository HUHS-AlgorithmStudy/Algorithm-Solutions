function solution(n, words) {
  let answer = [0, 0]; // 초기값을 [0,0]으로 설정해줍니다.
  let checkDup = false; // 중복을 체크하는 checkDup 변수를 만들어주고 false로 할당해줍니다.

  // 배열안에 중복이 있는지 체크합니다.
  words.some((item, index, array) => {
    if (array.slice(0, index).includes(item)) {
      answer = [(index % n) + 1, Math.floor(index / n) + 1];
      checkDup = true;
      return true;
    }
  });

  // 만약 중복이 없다면 앞단어와 끝단어가 일치하는지 확인합니다.
  if (checkDup === false) {
    for (i = 0; i < words.length - 1; i++) {
      if (words[i].slice(-1)[0] !== words[i + 1].charAt(0)) {
        answer = [
          (words.indexOf(words[i + 1]) % n) + 1,
          Math.floor(words.indexOf(words[i + 1]) / n + 1),
        ];
        break;
      }
    }
  }

  return answer;
}
