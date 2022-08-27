from collections import deque

n = int(input())
m = int(input())

graph = [[] for _ in range(n+1)]
visited = [False for _ in range(n+1)]
count = 0

for _ in range(m):
    a,b = map(int,input().split())
    graph[a].append(b) 
    graph[b].append(a)

def bfs(start):
	global count
	q = deque(graph[start])
	while q:
		nxt = q.popleft()
		if not visited[nxt]:
			visited[nxt] = True
			bfs(nxt)
			count += 1

visited[1] =True
bfs(1)
print(count)