import sys
from collections import deque
input = sys.stdin.readline

N,M = map(int,input().split())

graph = [[] for _ in range(N+1)]
chk = [False for _ in range(N+1)]

for i in range(M):
    a,b = map(int,input().split())
    graph[a].append(b)
    graph[b].append(a)

def bfs(x):
    q = deque()
    q.append(x)
    while q:
        x = q.popleft()
        if not chk[x]:
            for j in graph[x]:
                if not chk[j]:
                    q.append(j)
            chk[x] = True
            
    
cnt = 0
for row in range(1,N+1):
	if not chk[row]:
		cnt +=1
		for col in graph[row]:
			bfs(col)
		chk[row] = True

print(cnt)