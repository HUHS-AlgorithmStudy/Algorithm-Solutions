function solution(s) {
  var answer = s
    //3people unFollowed me 같은 문제를 처리해주기 위해 모두 소문자로 초기화 해주었습니다.
    .toLowerCase()
    // 공백을 기준으로 문자를 배열로 만들어주기 위해 split 메서드를 사용하였습니다.
    .split(" ")
    // 배열로 나눈 것들에 모두 적용한 이후 배열로 반환하기 위해서 map 메서드를 사용하였습니다.
    // charAt 메서드를 통해 앞글자를 추출하고 toUpperCase를 통해 대문자로 만들어주었습니다.
    // 나머지 문자들을 합쳐주기 위해서 문자열을 자르는 메서드인 substring을 사용하였습니다.
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    // 배열을 다시 문자열로 만들어주기 위해 join 메서드를 사용하였습니다.
    .join(" ");

  return answer;
}
