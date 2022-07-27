// 최종풀이
function solution(record) {
  let user = {};
  let answer = [];
  for (let item of record) {
    let userId = item.split(" ");
    switch (userId[0]) {
      case "Enter":
        user[userId[1]] = userId[2];
        answer.push(`${userId[0]} ${userId[1]}`);
        break;
      case "Leave":
        answer.push(`${userId[0]} ${userId[1]}`);
        break;
      case "Change":
        user[userId[1]] = userId[2];
        break;
    }
  }
  return answer.map((item) => {
    const select = item.split(" ");
    return select[0] === "Leave"
      ? `${user[select[1]]}님이 나갔습니다.`
      : `${user[select[1]]}님이 들어왔습니다.`;
  });
}
