def solution(n):
    str_3 = ""
    while n != 0:
        str_3 = str(int(n%3))+str_3
        n = int(n/3)
        
    answer = 0
    for idx,su in enumerate(str_3):
        answer += int(su) * 3**idx
    return answer
        
    
    
    