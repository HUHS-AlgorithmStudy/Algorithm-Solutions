/*
 *  프로그래머스 2단계 - 오픈채팅방
 *  https://school.programmers.co.kr/learn/courses/30/lessons/42888
 */

function solution(record) {
    let answer = [];
    let userTable = {};
    let recordLength = record.length;
    
    for (let i = 0; i < recordLength; i++) {
        const [action, userId, name] = record[i].split(" "); // [Enter, uid1234, Muzi]
        
        if (name) {
            userTable[userId] = name;    
        } else if (action === "Enter" || action === "Change") {
            userTable[userId] = name;
        }
    }
    
    for (let i = 0; i < recordLength; i++) {
        const [ action, userId ] = record[i].split(" ");
        
        if (action === "Enter") {
            answer.push(`${userTable[userId]}님이 들어왔습니다.`);    
        }
        if (action === "Leave") {
            answer.push(`${userTable[userId]}님이 나갔습니다.`);    
        }
    }
    
    return answer;
}