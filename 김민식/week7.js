//최종풀이
function solution(s) {
  let name = s.replace(/{/g, (e) => "");
  let list = [];
  let arr = name.split("},").map((item) => item.split(","));
  for (let i = 1; i < c.length + 1; i++) {
    arr.forEach((item) => {
      if (item.length === i) {
        item.forEach((item) => {
          if (!list.includes(parseInt(item))) {
            list.push(parseInt(item));
          }
        });
      }
    });
  }
  return list;
}
