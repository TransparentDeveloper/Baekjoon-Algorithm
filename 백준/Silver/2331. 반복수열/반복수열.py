import sys
input = sys.stdin.readline

A,P = map(int,input().split())

list = [A]

num = A
res = 0 
while True:
    res = 0 
    while(int(num/10) != 0 ):
        res += (num%10)**P
        num = int(num/10)
    res+=num**P
    
    if res in list:
        break
    num = res
    list.append(num)

print(list.index(res))