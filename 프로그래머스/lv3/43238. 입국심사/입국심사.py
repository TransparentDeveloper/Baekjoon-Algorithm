def solution(n, times):
    global N,Times
    N = n
    Times = times
    left = 1
    right = max(times)*n
    answer = 0
    while left <= right:
        # print(answer)
        mid = (left+right)//2
        
        if isPossible(mid): 
            # n명을 mid 시간동안 해결 가능하다면 그보다 더 적은 시간 안에서도 해결 가능하지 않을까?
            answer = mid
            right = mid-1
        else:
            left = mid + 1
    return answer




# n명의 사람을 mid 시간 안에서 해결 가능한지 판단 (해결 가능하면 True)
def isPossible(mid):
    passed = 0 # mid시간 동안 심사를 통과한 모든 사람
    for time in Times:
        passed += mid // time
    return passed>=N