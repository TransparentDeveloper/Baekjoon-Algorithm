def solution(t, p):
    t_len = len(t)
    p_len = len(p)

    res = 0
    
    for i in range(0,t_len -p_len+1):
        str = t[i:i+p_len]
        if(int(p) >= int(str)):
            res+=1
        
    return res
    