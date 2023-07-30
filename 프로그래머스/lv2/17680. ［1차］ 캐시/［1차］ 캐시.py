from collections import deque

def solution(cacheSize, cities):
    if cacheSize == 0:
        return len(cities)*5;
    q = deque()
    answer = 0 
    for idx,city in enumerate(cities):
        city = city.upper()
        if city in q:
            answer += 1
            q.remove(city)
        else:
            answer+=5
            if len(q) >= cacheSize:
                q.popleft()
        q.append(city)
    return answer