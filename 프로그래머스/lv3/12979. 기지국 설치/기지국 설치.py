from math import ceil
def solution(n, stations, w):
    cnt = 0
    num = 2*w+1
    start = 1   
    for s in stations:
        cnt += ceil((s-w-start)/num)
        start = s+w+1
    if n>=start:
        cnt += ceil((n-start+1)/num)
    return cnt