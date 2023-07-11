from collections import deque

def solution(rectangle, characterX, characterY, itemX, itemY):
    
    global arr2
    arr2 = rectangle.copy()
    
    q = deque()
    q.append((characterX,characterY,0))
    
    dx = [1,-1,0,0]
    dy = [0,0,-1,1]
    v = [[False for _ in range(51)] for _ in range(51) ]
    v[characterY][characterX] = True
    
    answer = 0
    while q:
        cx,cy,cnt = q.pop()
        # print(f"cx:{cx} cy:{cy}")
        if (cx == itemX and cy == itemY):
            answer = cnt
            break
        for nx,ny in zip(dx,dy):
            if 1<=cx+nx<=50 and 1<=cy+ny<=50 and (not v[ny+cy][nx+cx]) and check(nx+cx,ny+cy):
                if check(float(cx)+nx/2.0,float(cy)+ny/2.0):
                    v[ny+cy][nx+cx] = True
                    q.appendleft((nx+cx,ny+cy,cnt+1))
    return answer

def check(x,y):
    cnt = 0
    for x1,y1,x2,y2 in arr2:
        if x1 < x < x2 and y1 < y < y2:
            return False
        if x == x1 and y1<=y<=y2:
            cnt+=1
        elif y == y1 and x1<=x<=x2:
            cnt+=1
        elif x == x2 and y1<=y<=y2:
            cnt+=1
        elif y == y2 and x1<=x<=x2:
            cnt+=1
    return True if cnt == 1 or cnt==2 else False