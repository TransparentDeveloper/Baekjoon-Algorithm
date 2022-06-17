N, K = tuple(map(int, input().split()))

values = list()
for i in range(N):
    values.append(int(input()))

res = 0
cur_idx = N-1
while(cur_idx >= 0):
    res += int(K/values[cur_idx])
    K = K%values[cur_idx]
    cur_idx -= 1;
    
print(res)