import heapq as hq

def solution(operations):
    maxli = []
    minli = []
    elCnt = 0

    for oper in operations:
        if elCnt == 0 and (oper == "D -1" or oper == "D 1"):
            continue
        if oper == "D -1":
            elCnt-=1
            hq.heappop(minli)
        elif oper == "D 1":
            elCnt-=1
            hq.heappop(maxli)
        else:
            elCnt+=1
            num = int(oper.split(" ")[1])
            hq.heappush(maxli,num*(-1))
            hq.heappush(minli,num)
            
    newli = [el*(-1) for el in maxli if el*(-1) in minli]

    if not newli or len(newli)==1:
        return [0,0]
    
    newli.sort(key=lambda x: x)
    return [newli[-1],newli[0]]
        