function solution(clothes) {
  let answer = 1;
  // 빈 객체 생성.
  let object = {};
  // clothes 배열을 forEach문으로 돌면서 옷의 종류를 key로, 옷의 개수를 value값으로 할당.
  clothes.forEach((cloth) => {
    object[cloth[1]] = (object[cloth[1]] || 0) + 1;
  });

  // 옷의 종류 개수 만큼 곱해준다.
  for (let key in object) {
    answer *= object[key] + 1;
  }

  // 전체 경우의수에서 조건에 스파이가 옷을 입지 않는 경우는 없으므로 -1을 해준다.
  return answer - 1;
}
