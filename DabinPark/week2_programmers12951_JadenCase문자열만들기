def solution(s):
    answer = ''
    splited = True
    
    for word in s:
        if (word == " "):
            splited = True
            answer += " "
            continue

        if (splited):
            word = word.upper()
        else:
            word = word.lower()
        answer += word
        splited = False
    return answer

'''
#Runtime Error: case of consecutive spaces
def solution(s):
    answer = []
    words = s.split(" ")
    for i in range(len(words)):
        word = words[i][0].upper() + words[i][1:].lower()
        answer.append(word)
    return " ".join(answer)
'''
