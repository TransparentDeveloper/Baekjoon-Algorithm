from collections import deque
import sys

def recursion(s, l, r, count):
    if l >= r: return (1,count)
    elif s[l] != s[r]: return (0,count)
    else: return recursion(s, l+1, r-1, count+1)

def isPalindrome(s):
    return recursion(s, 0, len(s)-1, 1)

n = int(sys.stdin.readline())

strings = []
for _ in range(n):
    s = str(sys.stdin.readline())
    s = s[:-1]
    strings.append(s)

for i in range(n):
    res,count = isPalindrome(strings[i])
    print(res,count)