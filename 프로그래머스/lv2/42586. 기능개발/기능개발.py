def solution(progresses, speeds):
    answer = []
    cur = 0
    deploy = 1
    while cur < len(progresses):
        # 작업 진도 갱신
        for i in range(cur,len(progresses)):
            progresses[i] += speeds[i]
        
        deploy = 0
        while cur < len(progresses) and progresses[cur] >= 100:
            deploy +=1
            cur +=1
        
        if deploy != 0:
            answer.append(deploy)

    return answer