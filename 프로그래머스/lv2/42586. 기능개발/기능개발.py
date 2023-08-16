def solution(progresses, speeds):
    answer = []
    while progresses:
        for idx in range(len(speeds)):
            progresses[idx] += speeds[idx]
        deploy = 0
        while progresses and progresses[0] >= 100:
            deploy +=1
            progresses.pop(0)
            speeds.pop(0)
        if deploy != 0:
            answer.append(deploy)
    return answer