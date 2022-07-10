# import sys
from collections import deque
# input = sys.stdin.readline

N = int(input())
graph = []
for i in range(N):
    graph.append(list(map(int, input())))

visited = [0]*N
for i in range(N):
    visited[i] = [False for _ in range(N)]

num_complex = 0
sizes = []

def bfs(x,y):
    q=deque()
    q.append((x,y))
    dx = [1,-1,0,0]
    dy = [0,0,-1,1]
    size = 1
    while(q):
        x,y = q.popleft()
        for i in range(4):
            nx = x+dx[i]
            ny = y+dy[i]      
            if nx<0 or nx>=N or ny<0 or ny>=N:
                continue
            if graph[ny][nx] == 0:
            	continue
            if visited[ny][nx]:
            	continue
            else:
                size+=1
                visited[ny][nx] = True
                q.append((nx,ny))
                
    sizes.append(size)


for row in range(N):
	for col in range(N):
		if graph[row][col] == 1:
			if not visited[row][col]:
				num_complex += 1
				visited[row][col] = True
				bfs(col,row)
                

print(num_complex)
sizes.sort()
for i in range(len(sizes)):
    print(sizes[i])