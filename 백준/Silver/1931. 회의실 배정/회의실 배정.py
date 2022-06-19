n = int(input())
meetings = list()
for i in range(n):
    meetings.append(tuple(map(int, input().split())))

meetings.sort(key = lambda x: x[0])
meetings.sort(key = lambda x: x[1])
result = 1
last_element = 0

for i in range(1,n):
    if(meetings[last_element][1] <= meetings[i][0]):
        result += 1
        last_element = i
        
print(result)