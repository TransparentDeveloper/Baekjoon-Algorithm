def solution(tickets):
    global preProcess,v,answer
    v = [False for i in range(len(tickets))]
    answer = []
    # 정렬
    tickets.sort(key=lambda x: (x[0],x[1]))
    preProcess = tickets.copy()
    print(dfs('ICN',0,['ICN']))

    
    return  answer[0]

def dfs(src,cnt,res):
    li = [];
    if(cnt == len(preProcess)):
        answer.append(res.copy())
        return
    
    for idx,pp in enumerate(preProcess):
        if pp[0] == src and not v[idx]:
            v[idx] = True
            temp = res.copy()
            temp.append(pp[1])
            dfs(pp[1],cnt+1,temp)
            v[idx] = False
    return 
    
    
            
            
        
    
    
    
    
    
    