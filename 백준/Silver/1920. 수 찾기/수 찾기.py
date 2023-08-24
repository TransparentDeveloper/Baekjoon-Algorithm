import sys

n = int(sys.stdin.readline())
A = list(map(int,sys.stdin.readline().split(" ")))
m = int(sys.stdin.readline())
nums = list(map(int,sys.stdin.readline().split(" ")))

di = {i: True for i in A}
for i in nums:
    if di.get(i,False):
        print(1)
    else:
        print(0)
