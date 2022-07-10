import sys
from collections import deque
input = sys.stdin.readline

N = int(input())
graph = [list(map(int,input().split())) for _ in range(N)]
rain_max = max(max(graph))

def bfs(x,y):
    q = deque();
    q.append((x,y))
    
    dx = [1,-1,0,0]
    dy = [0,0,-1,1]
    while q:
        x,y = q.popleft()
        for i in range(4):
            nx = x+dx[i]
            ny = y+dy[i]
            if nx<0 or nx>=N or ny<0 or ny>=N:
                continue
            if graph[ny][nx] <= rain:
                continue
            if visited[ny][nx]:
                continue
            else:
                visited[ny][nx] = True
                q.append((nx,ny))
                
safe_zone = 0
max_safe = 0
for rain in range(0,rain_max):
    safe_zone = 0
    visited = [[False for _ in range(N)] for _ in range(N)]
    for row in range(N):
        for col in range(N):
            if(graph[row][col] > rain):
                if not visited[row][col]:
                    safe_zone += 1
                    visited[row][col] =True
                    bfs(col,row)
    max_safe = max(max_safe,safe_zone)
print(max_safe)