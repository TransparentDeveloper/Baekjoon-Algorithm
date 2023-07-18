    # 6 8 9 20 32 67 90
    # 1 2 3 7  23 35 80
    # a == b -> b 만 다음으로?
    # a 보다 b 가 작을 경우 -> b 만 다음으로 넘어간다.
    # a 보다 b 가 클 경우 -> count 하고 둘다 다음으로 넘어간다.
def solution(A, B):
    A.sort()
    B.sort()
    
    a,b = 0,0
    length = len(A)
    answer = 0
    while True:
        if a == length or b == length:
            break
        if(A[a]==B[b]):
            b+=1
        elif(A[a]>B[b]):
            b+=1
        elif(A[a]<B[b]):
            answer+=1
            a+=1
            b+=1
    return answer