// 최종풀이
function solution(skill, skill_trees) {
  let arr = skill.split("");
  let answer = skill_trees.filter((item) => {
    //스킬트리의 한 요소씩 비교를 실시합니다.
    let tmp = 0;
    for (let i = 0; i < item.length; i++) {
      if (arr.includes(item[i])) {
        //반복문을 돌다가 item이 skill 단어 중 무언가를 포함하고 있다면
        if (tmp === arr.indexOf(item[i])) {
          // 그리고 그 인덱스가 tmp라는 임의의 변수에 값과 같다면 tmp를 1증가시켰습니다.
          // 결론적으로 순서대로 잘 들어가있다면 0,1,2,3~순으로 계속해서 tmp는 1이 더해질 것 입니다.
          tmp++;
        } else tmp -= 1000;
        // 만약 순서에 맞지 않는 값이 들어온다면 -1000을 더하여 음수 값으로 만들어버렸습니다.
      }
    }
    return tmp >= 0;
    // 해당 조건을 만족하는 요소만 filter가 새로운 배열로 반환하게 됩니다.
  });
  return answer.length;
}
