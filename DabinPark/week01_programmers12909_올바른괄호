def solution(s):
    check=0

    #O(n)
    #check pair of bracket
    for char in s:
        if (char == '('):
            check += 1
        else:
            check -= 1

        #error case: ')' is more then '('
        if (check<0):
            return False

    #error case '(' is more then ')'
    if (check==0):
        return True
    else:
        return False
