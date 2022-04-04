N = int(input())
arr = [[0]*2]*N
for i in range(N):
    arr[i] = list(map(int,input().split()))
res = [1]*N
for i in range(N-1):
    for j in range(i+1,N):
        if(arr[i][0]<arr[j][0]):
            if(arr[i][1]<arr[j][1]):
                res[i] += 1
        elif(arr[i][0]>arr[j][0]):
            if(arr[i][1]>arr[j][1]):
                res[j] += 1

for n in range(len(res)):
    print(res[n],end=' ')