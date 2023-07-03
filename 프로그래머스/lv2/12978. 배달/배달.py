from collections import defaultdict
import heapq as hq

def solution(N, road, K):
    dic = defaultdict(list)
    for n1,n2,w in road:
        dic[n1].append((w,n2))
        dic[n2].append((w,n1))
    distances = {node: float('inf') for node in range(1,N+1)}
    distances[1] = 0
    q = []
    hq.heappush(q,(0,1))
    while q:
        curWei,curNod = hq.heappop(q)
        for nexWei,nexNod in dic[curNod]:
            if nexWei+curWei < distances[nexNod]:
                distances[nexNod] = nexWei+curWei
                hq.heappush(q,(nexWei+curWei,nexNod))
    print(distances)
    return len(list(filter(lambda x:x[1]<=K,distances.items())))