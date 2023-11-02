import sys
from collections import deque

input = sys.stdin.readline

r,c,t = map(int,input().split(" "))
graph = []

filterPos = []

for row in range(r):
    line = list(map(int,input().split(" ")))
    graph.append(line)
    for col in range(c):
        if(graph[row][col]==-1):
            filterPos.append([row,col])

def rotateClock(clingRow):
    d1List = deque([])

    for col in range(c):
        d1List.append(graph[clingRow][col])
    for row in range(clingRow+1,r):
        d1List.append(graph[row][c-1])
    for col in range(c-2,-1,-1):
        d1List.append(graph[r-1][col])
    for row in range(r-2,clingRow,-1):
        d1List.append(graph[row][0])
    d1List.appendleft(d1List.pop())

    for col in range(c):
        val = d1List.popleft()
        if val == -1:
            graph[clingRow][col] = 0
            continue
        graph[clingRow][col] = val

    for row in range(clingRow+1,r):
        val = d1List.popleft()
        if val == -1:
            graph[row][c-1] = 0
            continue
        graph[row][c-1] = val

    for col in range(c-2,-1,-1):
        val = d1List.popleft()
        if val == -1:
            graph[r-1][col] = 0
            continue
        graph[r-1][col] = val

    for row in range(r-2,clingRow,-1):
        val = d1List.popleft()
        if val == -1:
            graph[row][0] = 0
            continue
        graph[row][0] = val
    
    for posX,posY in filterPos: 
        graph[posX][posY] = -1



def rotateReverseClock(floorRow):
    d1List = deque([])

    for col in range(c):
        d1List.append(graph[0][col])
    for row in range(1,floorRow+1):
        d1List.append(graph[row][c-1])
    for col in range(c-2,-1,-1):
        d1List.append(graph[floorRow][col])
    for row in range(floorRow-1,0,-1):
        d1List.append(graph[row][0])

    d1List.append(d1List.popleft())

    for col in range(c):
        val = d1List.popleft()
        if val == -1:
            graph[0][col] = 0
            continue
        graph[0][col] = val

    for row in range(1,floorRow+1):
        val = d1List.popleft()
        if val == -1:
            graph[row][c-1] = 0
            continue
        graph[row][c-1] = val

    for col in range(c-2,-1,-1):
        val = d1List.popleft()
        if val == -1:
            graph[floorRow][col] = 0
            continue
        graph[floorRow][col] = val

    for row in range(floorRow-1,0,-1):
        val = d1List.popleft()
        if val == -1:
            graph[row][0] = 0
            continue
        graph[row][0] = val
    
    for posX,posY in filterPos: 
        graph[posX][posY] = -1



dx = [0,0,-1,1]
dy = [1,-1,0,0]

def spreadVirus():
    change = [[0] * c for _ in range(r)]
    for row in range(r):
        for col in range(c):
            if(graph[row][col]!=0 and graph[row][col]!=-1):
                splitAmount = graph[row][col] // 5 
                cnt  = 0
                for i in range(4):
                    nx = row+dx[i]
                    ny = col+dy[i]
                    if not (0<=nx<r):
                        continue
                    if not (0<=ny<c):
                        continue
                    if [nx,ny] in filterPos:
                        continue
                    change[nx][ny] += splitAmount
                    cnt+=1
                graph[row][col] -= splitAmount*cnt
    for row in range(r):
        for col in range(c):
            graph[row][col] += change[row][col]


while(t!=0):
    spreadVirus()
    rotateReverseClock(filterPos[0][0])
    rotateClock(filterPos[1][0])
    t-=1

result = 0
for row in range(r):
    for col in range(c):
        result += graph[row][col]
print(result+2)