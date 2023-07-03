def solution(numbers, target):
    return dfs(0, 0,numbers,target)

def dfs(curRes, idx,numbers,target):
    res = 0
    if idx == len(numbers) and curRes == target:
        return 1
    elif idx >=len(numbers):
        return 0
    else :
        res += dfs(curRes + numbers[idx],idx+1,numbers,target)
        res += dfs(curRes + (-1)*numbers[idx],idx+1,numbers,target)
        return res