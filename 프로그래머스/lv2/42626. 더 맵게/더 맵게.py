import heapq as hq

def solution(scoville, K):
    answer = 0
    hq.heapify(scoville)
    
    while True:
        minVal = hq.heappop(scoville)
        if minVal >= K:
            break
        elif len(scoville) == 0:
            return -1
        secondVal = hq.heappop(scoville)
        hq.heappush(scoville, minVal + secondVal*2)
        answer+=1
    return answer 