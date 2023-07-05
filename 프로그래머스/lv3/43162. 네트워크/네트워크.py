def solution(n, computers):
    global parent
    parent = [ i for i in range(n)] 
    answer = n
    for i in range(len(computers)):
        for j in range(len(computers[i])):
            if i == j: continue
            if computers[i][j] == 1:
                if findParent(i) != findParent(j):
                    union(i,j)
                    answer -= 1
    return answer

def findParent(x):
    if x != parent[x]:
        parent[x] = findParent(parent[x])
    return parent[x]

def union(a,b):
    a = findParent(a)
    b = findParent(b)
    
    if a<b:
        parent[b] = a
    else:
        parent[a] = b
    return