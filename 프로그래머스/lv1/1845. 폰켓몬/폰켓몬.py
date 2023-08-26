def solution(nums):
    answer = len(set(nums)) 
    return answer if answer<=len(nums)//2 else len(nums)//2