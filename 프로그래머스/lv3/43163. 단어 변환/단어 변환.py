from collections import deque

def solution(begin, target, words):
    
    wordLength = len(begin)
    answer = 0
    q = deque()
    q.appendleft((answer,begin))
    
    
    while q:
        cnt, curStr = q.pop()
        
        if curStr == target:
            answer = cnt
            break
        if cnt == len(words)+1:
            answer = 0
            break
        
        for word in words:
            tmpCnt = 0
            differenceIdx = 0 
            for i in range(wordLength):
                if curStr[i] != word[i]:
                    tmpCnt+=1
                    differenceIdx = i 
            if tmpCnt == 1:
                q.appendleft((cnt+1,word))
                    
    return answer