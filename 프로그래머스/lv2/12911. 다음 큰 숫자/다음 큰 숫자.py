def solution(n):
    target = str(bin(n)).count("1")
    answer = n+1
    while not isSameOneCnt(target,answer):
        answer+=1
    return answer


def isSameOneCnt(target,number):
    return target == str(bin(number)).count("1")