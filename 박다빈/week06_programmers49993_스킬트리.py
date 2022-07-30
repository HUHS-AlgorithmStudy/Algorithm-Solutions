def solution(skill, skill_trees):
    answer = 0
    
    for skillset in skill_trees:
        idx = 0
        
        for upskill in skillset:
            if (upskill in skill):
                if (upskill != skill[idx]):
                    break
                idx += 1
                
            if (upskill == skillset[-1]):
                answer += 1
    
    return answer
