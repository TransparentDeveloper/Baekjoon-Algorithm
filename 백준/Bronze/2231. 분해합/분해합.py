number = int(input())

check = False
res = 0
for i in range(number-1,1,-1):
    num = i
    sum = 0
    while(num != 0):
        sum+=int(num%10)
        num=int(num/10)
    if(sum+i==number):
        res = i
        check = True
    
if(check):
    print(res)
else:
    print(0)