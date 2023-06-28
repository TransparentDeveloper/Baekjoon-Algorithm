def solution(genres, plays):
    # dic1 : key - genre, value - [(play,idx)..]
    dic1 = dict()
    idx = 0
    for g,p in zip(genres,plays):
        if g in dic1:
            dic1[g].append((p,idx))
        else:
            dic1[g] = [(p,idx)]
        idx += 1
    # dic2 : key - genre, value = total play
    dic2 = dict()
    for g,p in zip(genres,plays):
        dic2[g] = dic2.get(g,0) + p
    dic2 = sorted(dic2.items(), key = lambda x: x[1],reverse = True)
    
    answer = []
    for k,v in dic2:
        cnt = 0
        dic1[k] = sorted(dic1[k],key = lambda x:(-x[0],x[1]))
        for elem in dic1[k]:
            if cnt == 2:
                break
            answer.append(elem[1])
            cnt +=1
    
    
    return answer