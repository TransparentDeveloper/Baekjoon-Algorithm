import sys
from collections import deque
input = sys.stdin.readline

N, K = map(int,input().split())

visited = [0 for _ in range(100001)]

def bfs():
    q = deque()
    q.append(N)
    while q:
        x = q.popleft()
        if x == K:
            print(visited[x])
            break
        for nx in (x+1,x-1,x*2):
            if 0<=nx<=100000 and not visited[nx]:
                visited[nx] = visited[x] + 1
                q.append(nx)
bfs()