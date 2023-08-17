#Queue
def solution(bridge_length, weight, truck_weights):
    if bridge_length == 1:
        return len(truck_weights)+1
    que = [0 for _ in range(bridge_length)]
    completed = []
    totNum = len(truck_weights)
    sumWeight = 0
    answer = 0
    while len(completed) != totNum:
        truck = que.pop(0)
        sumWeight -= truck
        if truck != 0:
            completed.append(truck)
        if truck_weights and sumWeight+truck_weights[0] <= weight:
            sumWeight += truck_weights[0]
            que.append(truck_weights.pop(0))
        else:
            que.append(0)
        answer+=1
    return answer