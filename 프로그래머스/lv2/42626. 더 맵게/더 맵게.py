import heapq
def solution(scoville, K):
    heapq.heapify(scoville)
    
    answer =0
    while len(scoville) != 0:
        first_one = heapq.heappop(scoville)
        if first_one >= K:
            return answer
        elif len(scoville) == 0:
            return -1
        seconde_one = heapq.heappop(scoville)
        new_one = first_one + (seconde_one*2)
        heapq.heappush(scoville,new_one)
        answer+=1
    
    return answer