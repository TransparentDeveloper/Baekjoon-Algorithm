def solution(N, road, K):
    graph = [[500001 for _ in range(N+1)] for _ in range(N+1)]
    for i in range(1,N+1):
        graph[i][i] = 0
    
    for a,b,k in road:
        graph[a][b] = min(graph[a][b],k)
        graph[b][a] = min(graph[b][a],k)
    
    for k in range(1,N+1):
        for i in range(1,N+1):
            for j in range(1,N+1):
                graph[i][j] = min(graph[i][j],graph[i][k] + graph[k][j])
    
    answers = [x for x in graph[1] if x <= K]
    return len(answers)