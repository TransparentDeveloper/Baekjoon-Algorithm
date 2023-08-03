def solution(n, times):
    left = 1
    right = max(times)*n
    answer = 0
    while left <= right:
        mid = (left+ right)//2
        
        cnt = 0
        # mid 시간 동안 각 심사관이 심사할 수 있는 사람의 수
        for time in times:
            cnt += mid//time
        # 최소시간을 구해라
        if cnt >= n:
            answer = mid 
            right = mid - 1
        else:
            left = mid + 1
        
    
    return answer