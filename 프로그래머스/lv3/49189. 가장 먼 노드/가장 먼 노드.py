from collections import defaultdict
import heapq

# {
#     3: [(6, 1), (4, 1), (2, 1), (1, 1)], 
#     6: [(3, 1)], 
#     4: [(3, 1), (2, 1)], 
#     2: [(3, 1), (1, 1), (4, 1), (5, 1)], 
#     1: [(3, 1), (2, 1)], 
#     5: [(2, 1)]
# }


def solution(n, edge):
    graph = defaultdict(list)
    for n1,n2 in edge:
        graph[n1].append( (n2,1) )
        graph[n2].append( (n1,1) )
    
    distances = {node: float('inf') for node in graph} 
    distances[1] = 0
    queue = []
    heapq.heappush(queue, [distances[1],1] )
    
    while queue:
        current_distance, current_node = heapq.heappop(queue);      
        for next_node,next_distance in graph[current_node]:
            if (next_distance+distances[current_node] < distances[next_node]):
                distances[next_node] = next_distance+distances[current_node]
                heapq.heappush(queue,[distances[next_node],next_node])
    
    max_distance = max(distances.values())
    answer = list(filter(lambda x:max_distance==x[1],distances.items()))
    return len(answer)