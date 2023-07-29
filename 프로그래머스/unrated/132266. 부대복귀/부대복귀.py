from collections import deque

def solution(n, roads, sources, destination):
    graph = [[] for i in range(n+1)]
    for s,e in roads:
        graph[s].append(e)
        graph[e].append(s)
        
    q = deque()
    visited = [False for _ in range(n+1)]
    q.append((0,destination))
    visited[destination] = True
    answer = {source:-1 for source in sources}
    while q:
        curCost,curPos = q.popleft()
        if curPos in sources:
            answer[curPos] = curCost
        for nxtPos in graph[curPos]:
            if not visited[nxtPos]:
                visited[nxtPos] = True
                q.append((curCost+1,nxtPos))
    return list(answer.values())
    
                