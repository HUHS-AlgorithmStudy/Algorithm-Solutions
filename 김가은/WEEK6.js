// 최종 코드
function solution(skill, skill_trees) {
  let answer = 0;

  skill_trees.map((a) => {
    let num = 0;
    for (x of a) {
      if (skill.includes(x)) {
        if (skill[num] !== x) return;
        num++;
      }
    }
    answer++;
  });

  return answer;
}
