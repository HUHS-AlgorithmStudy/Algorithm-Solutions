// 유클리드 호제법을 통한 최소공약수 구하기
// 최종풀이1
function solution(w, h) {
  let add = w + h;
  let mul = w * h;
  let tmp;
  while (true) {
    if (w % h === 0) {
      tmp = h;
      break;
    } else w = w % h;
    if (h % w === 0) {
      tmp = w;
      break;
    } else h = h % w;
  }
  return mul - (add - tmp);
}
// 최종풀이2
function solution1(w, h) {
  let add = w + h;
  let mul = w * h;
  let tmp = mod(w, h);
  return mul - (add - tmp);
}
function mod(w, h) {
  let modu = w % h;
  if (modu === 0) return h;
  return mod(h, modu);
}
