from collections import deque
import sys

n,m = map(int,sys.stdin.readline().split())

conn = [[] for _ in range(n+1)]
for _ in range(m):
    a,b = map(int,sys.stdin.readline().split())
    conn[a].append(b)
    conn[b].append(a)

def bfs(start,target):
	q = deque()
	for num in conn[start]:
		q.append((num,1))
	while q:
		friend,count = q.popleft()
		if friend == target:
			return count
		for num in conn[friend]:
			q.append((num,count+1))

res = [[0 for _ in range(n+1)] for _ in range(n+1)]
for i in range(1,n+1):
    for j in range(1,n+1):
        if i == j:
            continue
        if res[i][j] != 0:
            continue
        ans = bfs(i,j)
        res[i][j] = ans
        res[j][i] = ans

min_idx = 0
min_bacon = 5001
for i in range(1,n+1):
    if min_bacon > sum(res[i]):
        min_bacon = sum(res[i])
        min_idx = i
print(min_idx)