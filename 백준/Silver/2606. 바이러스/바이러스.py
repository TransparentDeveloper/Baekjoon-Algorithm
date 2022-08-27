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
	q = deque([start])
	visited[start] = True
	while q:
		nxt = q.popleft()
		for i in graph[nxt]:
			if not visited[i]:
				q.append(i)
				visited[i] = True
				count += 1

bfs(1)
print(count)