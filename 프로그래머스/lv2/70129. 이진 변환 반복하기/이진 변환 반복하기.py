def solution(s):
    newS = s
    totCnt = 0
    iterate = 0
    while newS != "1":
        zeroCnt = newS.count("0")
        totCnt += zeroCnt
        length = len(newS) - zeroCnt
        newS = bin(length)[2:]
        iterate += 1
    return [iterate,totCnt]
    