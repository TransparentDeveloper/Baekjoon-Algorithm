def solution(n, s):
    if s < n:
        return [-1]
    
    div = [s//n for _ in range(n)]
    left = s-sum(div)
    
    for i in range(len(div)-1,-1,-1):
        if left ==0:
            break
        div[i]+=1
        left-=1
    return div
        
    # return answer