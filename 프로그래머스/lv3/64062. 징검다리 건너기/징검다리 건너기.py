def solution(stones, k):
    left = 0
    right = 200000000
    answer = 0
    while left <= right:
        mid = (left+right) //2
        jump = 1
        for x in stones:
            if x-mid <= 0:
                jump += 1
                if jump > k:
                    break
            else:
                jump = 1
        if jump > k:
            right = mid -1
        else:
            left = mid + 1
        
    return left