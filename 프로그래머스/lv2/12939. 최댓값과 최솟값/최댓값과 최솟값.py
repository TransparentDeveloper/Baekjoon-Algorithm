def solution(s):
    li = [int(c) for c in s.split(" ")]
    return str(min(li))+" "+str(max(li))
            