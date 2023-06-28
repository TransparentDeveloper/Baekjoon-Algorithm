def solution(s):
    stack = []
    for i in s:
        if i == "(":
            stack.append(i)
        else:
            if not stack:
                return False
            elif stack[-1] != "(" :
                return False
            else:
                stack.pop(-1)
    if stack:
        return False
            
    return True