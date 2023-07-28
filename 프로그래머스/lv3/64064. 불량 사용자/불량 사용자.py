from itertools import permutations

def solution(user_id, banned_id):
    lis = list(permutations(user_id, len(banned_id)))
    
    answer = []
    for li in lis:
        if check(li,banned_id):
            if set(li) not in answer: 
                answer.append(set(li))
    return len(answer)
def check(li,banned):
    for i in range(len(li)):
        if len(li[i]) != len(banned[i]):
            return False
        
        for j in range(len(li[i])):
            if banned[i][j] == "*":
                continue;
            if li[i][j] != banned[i][j]:
                return False
    return True