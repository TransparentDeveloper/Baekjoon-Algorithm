def solution(participant, completion):
    di = {name:0 for name in participant}
    for name in participant:
        di[name]+=1
    for name in completion:
        di[name]-=1
    # print(di.items())
    return [name[0] for name in di.items() if name[1]>0][0]