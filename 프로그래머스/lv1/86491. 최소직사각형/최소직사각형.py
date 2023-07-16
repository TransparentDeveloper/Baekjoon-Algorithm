def solution(sizes):
    newList = []
    for s in sizes:
        if s[0] < s[1]:
            newList.append([s[0],s[1]])
        else:
            newList.append([s[1],s[0]])
    maxWidth = 0
    maxHeight = 0
    for w,h in newList:
        if w > maxWidth:
            maxWidth=w
        if h > maxHeight:
            maxHeight=h
    
    return maxWidth * maxHeight