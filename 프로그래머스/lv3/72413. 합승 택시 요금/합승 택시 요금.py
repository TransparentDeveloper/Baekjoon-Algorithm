# dijkstra
from collections import defaultdict
import heapq as hq
def solution(n, s, a, b, fares):
    di = defaultdict(list)
    for start,end,fare in fares:
        di[start].append((fare,end))
        di[end].append((fare,start))
    
    def dijkstra(start):
        distances = {node:int(1e10) for node in range(1,n+1)}
        distances[start] = 0
        heap = []
        hq.heappush(heap,(0,start))
        while heap:
            curWei,curNod = hq.heappop(heap)
            for nxtWei,nxtNod in di[curNod]:
                if distances[nxtNod] > curWei + nxtWei:
                    distances[nxtNod] = curWei + nxtWei
                    hq.heappush(heap,(curWei + nxtWei,nxtNod))
        return distances
    
    s = dijkstra(s)
    a = dijkstra(a)
    b = dijkstra(b)
    answer = int(1e10)
    for i in range(1,n+1):
        answer = min(answer,s[i]+a[i]+b[i])
    return answer