def solution(s):
    new_strs = s.split(" ")
    answer = ""
    
    for i in new_strs:
        for j in range(len(i)):
            if j % 2 == 0:
                answer += i[j].upper()
            else:
                answer += i[j].lower()
        answer+=" "
    
    return answer[0:-1]