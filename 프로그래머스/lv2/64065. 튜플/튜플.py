def solution(s):
    s= s[2:-2]
    
    tu = []
    for elem in s.split("},{"):
        numList = elem.split(",")
        numList = list(map(int,numList))
        tu.append(numList)
    tu.sort(key = lambda x: len(x))
    answer = []
    for subList in tu:
        for elem in subList:
            if elem not in answer:
                answer.append(elem)
    return answer