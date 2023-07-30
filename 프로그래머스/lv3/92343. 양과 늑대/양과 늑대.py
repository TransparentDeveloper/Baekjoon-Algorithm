def solution(info, edges):
    global visited ,answer
    answer = []
    visited = [False for _ in info]    
    def dfs(sheap, wolf):
        if sheap > wolf:
            answer.append(sheap)
        else:
            return
        for s,e in edges:
            if visited[s] and not visited[e]:
                visited[e] = True
                if info[e] == 0:
                    dfs(sheap+1,wolf)
                else:
                    dfs(sheap,wolf+1)
                visited[e] = False
    visited[0] = True
    dfs(1,0)
    return max(answer)