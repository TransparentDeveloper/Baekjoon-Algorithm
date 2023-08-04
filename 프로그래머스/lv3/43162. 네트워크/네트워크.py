def solution(n, computers):
    if n == 1:
        return 1
    if n == 2:
        if computers[0][1] == 1:
            return 1
        else: return 2
    
    
    global parent
    parent = [i for i in range(n)]
    for row in range(n):
        for col in range(n):
            if computers[row][col] == 1:
                union(row,col)
    for i in range(n): #이부분이 없으면 TC9번을 틀린다.
        findParent(i)
    return len(set(parent))

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