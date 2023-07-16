def solution(numbers):
    global answer, nums, visited, isPrime
    nums = list(numbers)
    visited = [False for _ in nums]
    answer = set()
    nums = list(numbers)
    dfs(0,0)
    return len(answer)

def check(num):
    if num ==0 or num == 1:
        return False
    for i in range(2,num):
        if num % i == 0:
            return False
    return True

def dfs(num , att):
    if(check(num)):
        answer.add(num)
    if att == len(nums):
        return
    for i,n in enumerate(nums):
        if not visited[i]:
            visited[i] = True
            dfs(num*10 + int(n), att+1)
            visited[i] = False
    
    
    