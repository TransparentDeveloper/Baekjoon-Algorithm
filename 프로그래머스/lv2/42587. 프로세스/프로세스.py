def solution(priorities, location):
    heap = [(val,idx) for idx,val in enumerate(priorities)]
    silhang = 0
    while heap:
        Priority = max(priorities)
        deagi = heap.pop(0)
        if deagi[0] == Priority:
            silhang+=1
            if deagi[1] == location:
                return silhang
            priorities.remove(Priority)
            continue
        else:
            heap.append(deagi)
            
    