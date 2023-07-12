def solution(X, Y):
    answer = ''
    x=list(X)
    y=list(Y)
    x.sort()
    y.sort()
    candidate=[]
    i=0
    j=0
    while True:
        if i>=len(x) or j>=len(y):
            break
        elif x[i] < y[j]:
            i+=1
        elif x[i] > y[j]:
            j+=1
        elif x[i] == y[j]:
            candidate.append(x[i])
            i+=1
            j+=1
    candidate.sort(reverse=True)
    if not candidate:
        return "-1"
    if candidate[0] == "0":
        return "0"
    answer = "".join(candidate)
    return answer