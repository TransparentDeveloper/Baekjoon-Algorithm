# dp
def solution(n):
    dp = [0 for _ in range(100001)]
    dp[0] = 0
    dp[1] = 1
    for i in range(2,100001):
        dp[i] = (dp[i-1]+dp[i-2])%1234567
    return dp[n]