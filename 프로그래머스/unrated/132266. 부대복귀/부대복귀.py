import heapq as hq
from collections import defaultdict
# 다익스트라
def solution(n, roads, sources, destination):
    di = defaultdict(list)
    for s,e in roads:
        di[s].append((1,e))
        di[e].append((1,s))
    distances = {i: float('inf') for i in range(1,n+1)}
    distances[destination] = 0
    heap = []
    hq.heappush(heap,(0,destination))
    while heap:
        curWei,curPos = hq.heappop(heap)
        for nxtWei,nxtPos in di[curPos]:
            if nxtWei+curWei < distances[nxtPos]:
                distances[nxtPos] = nxtWei+curWei
                hq.heappush(heap,(nxtWei+curWei,nxtPos))
    answer = []
    for source in sources:
        if distances[source] == float('inf'):
            answer.append(-1)
        else:
            answer.append(distances[source])
    return answer