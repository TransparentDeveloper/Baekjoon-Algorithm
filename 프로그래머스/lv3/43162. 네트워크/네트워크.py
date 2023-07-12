def solution(n, computers):
    global parent
    parent = [i for i in range(len(computers))]
    answer = len(computers)
    for i in range(len(computers)):
        for j in range(len(computers[0])):
            if i == j: continue
            elif computers[i][j]:
                if findParent(i)!=findParent(j):
                    union(i,j);
                    answer-=1
    return answer


def findParent(x):
    if x != parent[x]:
        parent[x] = findParent(parent[x])
    return parent[x]

def union(x,y):
    x = findParent(x)
    y = findParent(y)
    if x<y:
        parent[y] = x
    elif y<x:
        parent[x] = y