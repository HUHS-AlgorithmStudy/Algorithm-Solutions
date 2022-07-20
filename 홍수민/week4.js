/*
 *  프로그래머스 2단계 - 영어 끝말잇기
 *  https://school.programmers.co.kr/learn/courses/30/lessons/12981
 */

function solution(n, words) {
    if (words[0].length === 0) return [1, 1];
    
    for (let i = 1; i < words.length; i++) {
        const currentWord = words[i];
        
        if (words[i-1].slice(-1) !== currentWord[0] || 
            currentWord.length === 1 || 
            words.slice(0, i).indexOf(currentWord) !== -1 ) {
            return [(i % n) + 1 , (i % n) + 1 === 1 ? Math.ceil(i / n) + 1 : Math.ceil(i / n)];
        };
    }
    
    return [0, 0];
}