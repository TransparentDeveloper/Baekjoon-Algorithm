from collections import defaultdict
import heapq as hq

def solution(n, edge):
    
    graph = defaultdict(list)
    for n1,n2 in edge:
        graph[n1].append((1,n2))
        graph[n2].append((1,n1))
    
    distances = {node: float('inf') for node in graph.keys()}
    distances[1] = 0
    q = []
    hq.heappush(q,(0,1))
    while q:
        curWei,curNod = hq.heappop(q)
        for nxtWei,nxtNod in graph[curNod]:
            if curWei+nxtWei < distances[nxtNod]:
                distances[nxtNod] = curWei+nxtWei
                hq.heappush(q, (distances[nxtNod], nxtNod))
    
    max_distance = max(distances.values())
    return len(list(filter(lambda x: max_distance == x, distances.values())))


# {
#     3: [(1, 6), (1, 4), (1, 2), (1, 1)], 
#     6: [(1, 3)], 
#     4: [(1, 3), (1, 2)], 
#     2: [(1, 3), (1, 1), (1, 4), (1, 5)], 
#     1: [(1, 3), (1, 2)], 
#     5: [(1, 2)]
# }