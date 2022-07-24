def MakeCloset(clothes):
    closet = dict()
    for cloth in clothes:
        name = cloth[0]
        kind = cloth[1]

        if kind in closet:
            cloth = closet[kind]
            cloth.append(name)
            closet[kind] = cloth
        else:
            closet[kind] = [name]
    return closet

def solution(clothes):
    closet = MakeCloset(clothes)
    answer = 0
    for cloth in closet.values():
        if (answer == 0):
            answer = 1+len(cloth)
        else:
            answer *= (1+len(cloth))
    
    return answer-1
