def solution(n):
    return min([i for i in range(n,0,-1) if n%i == 1])