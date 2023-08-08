
# 플로이드 와샬
def solution(n, s, a, b, fares):
    def floydWarshall():
        distances = [[int(1e10) for _ in range(0,n+1)] for _ in range(0,n+1)]
        for nod in range(1,n+1): 
            distances[nod][nod] = 0
        for start,end,fare in fares:
            distances[start][end] = fare
            distances[end][start] = fare
        for k in range(1,n+1):
            for i in range(1,n+1):
                for j in range(1,n+1):
                    distances[i][j] = min(distances[i][j],distances[i][k]+distances[k][j]) 
        return distances
    
    distances = floydWarshall()
    answer = int(1e10)
    for i in range(1,n+1):
        answer = min(answer,distances[i][s]+distances[i][a]+distances[i][b])
    
    return answer
    