from collections import defaultdict
import heapq as hq

def solution(n, edge):
    di = defaultdict(list);
    for n1,n2 in edge:
        di[n1].append(n2);
        di[n2].append(n1);
    distances = {i: float('inf') for i in range(1,n+1)}
    distances[1] = 0
    heap = list()
    hq.heappush(heap,(0,1))
    while heap:
        curWei,curNod = hq.heappop(heap)
        for nxtNod in di[curNod]:
            if curWei + 1 < distances[nxtNod] :
                distances[nxtNod] = curWei + 1
                hq.heappush(heap,(curWei + 1,nxtNod))
    maxWei = max(distances.values())
    return len(list(filter(lambda x: x==maxWei,distances.values())))
        