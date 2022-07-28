/*
 *  프로그래머스 2단계 - 스킬트리
 *  https://school.programmers.co.kr/learn/courses/30/lessons/49993#
 */

function solution(skill, skill_trees) {
    let answer = 0;

    skill_trees.forEach((trees) => {

        let arr = [];
        skill.split("").forEach((sk) => {
            const result = trees.split("").indexOf(sk)
            result < 0 ? arr.push(result + 30) : arr.push(result);
        })
        
        const origin = [...arr];
        if (origin.join() === arr.sort((a, b) => a - b).join()) {
            answer += 1;
        }
        
    })
    
    return answer; 
}