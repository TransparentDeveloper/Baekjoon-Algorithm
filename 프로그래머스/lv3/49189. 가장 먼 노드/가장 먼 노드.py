from collections import defaultdict
import heapq as hq

def solution(n, edge):
    dic = defaultdict(list)
    for n1,n2 in edge:
        dic[n1].append(n2)
        dic[n2].append(n1)
    
    distances = {node: float('inf') for node in range(n+1)}
    distances[1] = 0
    heap = []
    hq.heappush(heap,(0,1))
    while heap:
        curWei,curNod = hq.heappop(heap)
        for nxtNod in dic[curNod]:
            if curWei+1 < distances[nxtNod]:
                distances[nxtNod] = curWei+1
                hq.heappush(heap,(curWei+1,nxtNod))
    del distances[0]
    maxDistance = max(distances.values())
    return len(list(filter(lambda x : x == maxDistance,distances.values())))
    