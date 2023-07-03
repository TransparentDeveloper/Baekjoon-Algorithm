from collections import defaultdict

def findParent(x):
    if parent[x] != x:
        parent[x] = findParent(parent[x])
    return parent[x]

def union(x,y):
    x = findParent(x)
    y = findParent(y)
    if x < y :
        parent[y] = x
    else:
        parent[x] = y
        

def solution(n, computers):
    answer = n
    global parent
    parent = [ i for i in range(n+1)]
    
    for i in range(len(computers)):
        for j in range(len(computers[i])):
            if computers[i][j] == 1:
                if findParent(i) != findParent(j):
                    union(i,j)
                    answer-=1
    return answer