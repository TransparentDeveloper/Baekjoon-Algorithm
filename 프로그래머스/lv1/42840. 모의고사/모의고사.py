def solution(answers):
    one = [1,2,3,4,5] * (10000//5)
    two = [2, 1, 2, 3, 2, 4, 2, 5] * (10000//8)
    three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5] * (10000//10)
    di = dict()
    for idx,correct in enumerate(answers):
        if one[idx] == correct:
       		di[1] = di.get(1,0) + 1
        if two[idx] == correct:
            di[2] = di.get(2,0) + 1
        if three[idx] == correct:
        	di[3] = di.get(3,0) + 1
    maxScore = max(di.values())
    answer = sorted(di.items(),key = lambda x: (x[1],x[0]))
    answer = [i[0] for i in answer if maxScore == i[1]]
    return answer