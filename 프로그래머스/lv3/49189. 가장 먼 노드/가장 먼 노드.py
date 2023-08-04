from collections import defaultdict
import heapq as hq

def solution(n, edge):
    di = defaultdict(list)
    for s,e in edge:
        di[s].append(e)
        di[e].append(s)
    distances = {i: float('inf') for i in di}
    distances[1] = 0 
    heap = []
    hq.heappush(heap,(0,1))
    while heap:
        curWei, curPos = hq.heappop(heap)
        for nxtPos in di[curPos]:
            if curWei + 1 < distances[nxtPos]:
                distances[nxtPos] = curWei+1
                hq.heappush(heap ,(distances[nxtPos], nxtPos))
    maxVal = max(distances.values())
    return len(list(filter(lambda x : x == maxVal,distances.values())))
        