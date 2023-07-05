from collections import deque

def solution(maps):
    n = len(maps)
    m = len(maps[0])
    dx = [1,-1,0,0]
    dy = [0,0,-1,1]
    q = deque()
    q.append([0,0])
    answer = -1
    while q:
        cx,cy = q.pop()
        for nx,ny in zip(dx,dy):
            if not (0 <= cx + nx < n):
                continue
            if not (0 <= cy + ny < m):
                continue
            if maps[cx+nx][cy+ny] == 0:
                continue
            if maps[cx+nx][cy+ny] == 1:
                q.appendleft([cx+nx,cy+ny])
                maps[cx+nx][cy+ny] = maps[cx][cy] + 1
    
    return -1 if maps[n-1][m-1] == 1 else maps[n-1][m-1]