def solution(triangle):
    dp = [[0 for i in range(len(triangle))]for i in range(len(triangle))]
    dp[0][0] = triangle[0][0]
    
    for row in range(1,len(triangle)):
        for col in range(len(triangle[row])):    
            if col == 0:
                dp[row][col] = triangle[row][col] + dp[row-1][0]
            elif col == len(triangle[row])-1:
                dp[row][col] = triangle[row][col] + dp[row-1][col-1]
            else:
                dp[row][col] = max(dp[row-1][col]+triangle[row][col],dp[row-1][col-1]+triangle[row][col])

    return max(dp[len(triangle[-1])-1])