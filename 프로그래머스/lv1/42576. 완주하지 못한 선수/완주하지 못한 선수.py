def solution(participant, completion):
    dic = {}
    for part in participant:
        dic[part] = dic.get(part,0)+1
    
    for com in completion:
        if(dic.get(com,0)==0):
            del dic[com]
            continue
        dic[com] = dic.get(com)-1
    
    for key in dic.keys():
        if dic[key]==1:
            return key
    return ""