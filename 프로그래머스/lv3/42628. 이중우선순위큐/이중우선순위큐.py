import heapq as hq
def solution(operations):
    
    heap = []
    for oper in operations:
        op,da = oper.split()
        da = int(da)
        
        if op=='I':
            hq.heappush(heap,da)
        else:
            if da==1 and heap:
                maxNum = max(heap)
                heap.remove(maxNum)
                hq.heapify(heap)
            elif da == -1 and heap:
                hq.heappop(heap)
    if not heap:
        return [0,0]
    return [max(heap),min(heap)]