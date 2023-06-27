def solution(clothes):
    dic = {}
    for v,k in clothes:
        dic[k] = dic.get(k,0)+1
    
    cnt = list(map( (lambda x: x+1), dic.values()))
    result = 1
    for i in cnt:
        result *= i
    return result-1