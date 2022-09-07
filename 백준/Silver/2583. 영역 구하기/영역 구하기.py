from collections import deque
import sys

m,n,k = map(int,sys.stdin.readline().split())

grid = [[0 for _ in range(n)] for _ in range(m)]

for _ in range(k):
    x1,y1,x2,y2 = map(int,sys.stdin.readline().split())
    
    width = x2-x1
    height = y2-y1
    
    for j in range(0,height):
        for i in range(0,width):
            grid[y1+j][x1+i] = 1

dx = [1,-1,0,0]
dy = [0,0,-1,1]

def bfs(x,y):
	q= deque()
	size = 1
	q.append((x,y))
	while q:
		nx,ny = q.popleft()
		for i in range(4):
			nnx = nx + dx[i]
			nny = ny + dy[i]
			if nnx >= 0 and nnx < n and nny >= 0 and nny < m and grid[nny][nnx] != 1:
				q.append((nnx,nny))
				size += 1
				grid[nny][nnx] = 1
	return size

each_size = []

for col in range(n):
	for row in range(m):
		if grid[row][col] != 1:
			grid[row][col] = 1
			each_size.append(bfs(col,row))

each_size.sort()

print(len(each_size))
for res in each_size:
    print(res,end=' ')