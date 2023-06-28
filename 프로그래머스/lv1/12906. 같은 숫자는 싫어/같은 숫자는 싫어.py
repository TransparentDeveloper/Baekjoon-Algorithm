def solution(arr):
    answer = []
    for elem in arr:
        if elem not in answer:
            answer.append(elem)
        elif elem != answer[-1]:
            answer.append(elem)
    return answer