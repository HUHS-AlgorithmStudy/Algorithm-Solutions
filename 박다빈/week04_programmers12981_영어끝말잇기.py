def solution(n, words):
    history = []
    init = words[0][0]
    answer = []

    for i in range(len(words)):
        if (words[i][0] != init):
            answer = [i%n+1, i//n+1]
            break
        elif (words[i] in history):
            answer = [i%n+1, i//n+1]
            break

        init = words[i][-1]
        history.append(words[i])
        answer = [0, 0]
    
    return answer
