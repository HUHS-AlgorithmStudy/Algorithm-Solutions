/*
 *   프로그래머스 2단계 - 위장
 *   https://school.programmers.co.kr/learn/courses/30/lessons/42578
 */

// 조합 수학공식 및 팩토리얼 함수 사용하기
const com = (a, b) =>  fac(a) / (fac(a-b) * fac(b));
const fac = (n) => n < 2 ? 1 : n * fac(n-1);

function solution(clothes) {
    let answer = 1;
    let type = {};
    
    // type별 갯수를 세는 Loop
    for (const item of clothes) {
         const [name, typeName] = item;
         if (type.hasOwnProperty(typeName)) {
            type[typeName] = type[typeName] + 1;
            continue;
         }
         type[typeName] = 1;
     }
    
    // type의 값만 배열로 만듬
    const values = Object.values(type)
    for (const num of values) {
        answer *= com(num, 1) + com(num, 0);
    }
    
    // 모든 의상을 안입경 경우를 빼준다.
    return answer - 1;
}