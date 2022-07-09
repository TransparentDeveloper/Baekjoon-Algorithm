import sys
from collections import deque
input = sys.stdin.readline

def bfs(idx):
    res = 0
    q = deque()
    q.append(idx)
    while q:
        now = q.popleft()
        visited[now] = True
        next = arr[now]
        if not visited[next]:
            q.append(next)
        else:
            res+=1
    return res

N = int(input())

for i in range(N):
    num = 0
    arr_len = int(input())
    arr = [0] + list(map(int,input().split()))
    visited = [True] + [False]*arr_len
    for j in range(1,arr_len+1):
        if not visited[j]:
            num += bfs(j)
    print(num)