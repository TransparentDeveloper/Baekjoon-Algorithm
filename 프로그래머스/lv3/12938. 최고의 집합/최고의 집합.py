def solution(n, s):
    if n>s:
        return [-1]
    li = [s//n for _ in range(n)]
    namuge = s%n
    print(namuge)
    for idx in range(len(li)-namuge,len(li)):
        li[idx] += 1 
    return li