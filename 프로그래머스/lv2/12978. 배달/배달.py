from collections import defaultdict
import heapq as hq

def solution(N, road, K):
    dict = defaultdict(list)
    for n1,n2,w in road:
        dict[n1].append((w,n2))
        dict[n2].append((w,n1))
        
    distances = {node: float('inf') for node in dict }
    distances[1] = 0
    heap = []
    hq.heappush(heap,(0,1))
    
    while heap:
        curWei,curNod = hq.heappop(heap)
        for nexWei,nexNod in dict[curNod]:
            if nexWei + curWei < distances[nexNod]:
                distances[nexNod] = nexWei + curWei
                hq.heappush(heap,(nexWei + curWei, nexNod))
    
    return len(list(filter(lambda x:x[1]<=K,distances.items())))
    