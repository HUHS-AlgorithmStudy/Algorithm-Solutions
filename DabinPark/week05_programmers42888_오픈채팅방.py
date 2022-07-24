def solution(record):
    answer = []
    answer2str = []
    nickname = dict()
    enterStr = "님이 들어왔습니다."
    leaveStr = "님이 나갔습니다."
    
    for line in record:
        args = line.split(" ")

        if (args[0] == "Enter"):
            nickname[args[1]] = args[2]
            answer.append([args[1], enterStr])
        elif (args[0] == "Leave"):
            answer.append([args[1], leaveStr])
        elif (args[0] == "Change"):
            nickname[args[1]] = args[2]

    for line in answer:
        answer2str.append(nickname[line[0]]+line[1])

    return answer2str
