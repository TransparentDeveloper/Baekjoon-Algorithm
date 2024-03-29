import heapq as hq
def solution(n, works):
    
    if n > sum(works):
        return 0
    hq.heapify(li := [-1*i for i in works])
    print(li)
    idx = 0
    while n > 0:
        if idx == len(li):
            idx = 0
        num = hq.heappop(li)
        num += 1
        hq.heappush(li, num)
        n -= 1
    
    return (sum([i*i for i in li]))
    