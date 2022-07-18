function solution(clothes) {
  let answer = 1;
  let object = {};
  clothes.forEach((cloth) => {
    object[cloth[1]] = (object[cloth[1]] || 0) + 1;
  });

  for (let key in object) {
    answer *= object[key] + 1;
  }

  return answer - 1;
}
