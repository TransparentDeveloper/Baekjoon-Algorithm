n = int(input())
p_time = list(map(int,input().split()))


p_time.sort()

wait_time = 0
cur = 0
pre_time =0

while(cur < len(p_time)+1):
    for i in range(0,cur):
        wait_time += p_time[i]
    cur+=1


print(wait_time)
