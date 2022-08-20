// 최종 코드
function solution(s) {
  let stack = [''];
  for (let x of s) stack[stack.length - 1] === x ? stack.pop() : stack.push(x);
  return stack.length === 1 ? 1 : 0;
}
