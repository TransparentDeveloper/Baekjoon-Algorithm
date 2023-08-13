def solution(s):
    s = list(s)
    stack = []
    idx = 0
    while idx < len(s):
        if not stack:
            stack.append(s[idx])
        elif s[idx] == stack[-1]:
            stack.pop()
        else:
            stack.append(s[idx])
        idx+=1;
    return 0 if stack else 1
        