
def solution(priorities, location):
    max_len = len(priorities)
    li = []
    idx = 0
    for i in priorities:
        li.append((i,idx))
        idx += 1 
    priorities = sorted(priorities,key=lambda x: -x)
    
    max_prior = priorities.pop(0)
    order = 0
    while li and priorities:
        cur = li.pop(0)
        # 현재 프로세스가 가장 높은 우선순위를 가졌다면
        if cur[0] == max_prior:
            max_prior = priorities.pop(0)
            order += 1
            if cur[1] == location:
                return order
        else :
            li.append(cur)
    return max_len