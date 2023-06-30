import heapq

def solution(N, road, K):
    dist = [float('inf')] * (N+1)
    dist[1] = 0
    adj = [[] for _ in range(N+1)]
    for r in road:
        adj[r[0]].append([r[2],r[1]])
        adj[r[1]].append([r[2],r[0]])
    dijkstra(dist,adj)

    return len([i for i in dist if i<= K])
    
def dijkstra(dist, adj):
    heap = []
    heapq.heappush(heap,[0,1])
    while heap:
        cost,node = heapq.heappop(heap)
        for r in adj[node]:
            if cost + r[0] < dist[r[1]]:
                dist[r[1]] = cost+r[0]
                heapq.heappush(heap,[cost + r[0],r[1]])
    