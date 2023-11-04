def solution(w,h):
    gcd = getGCD(w,h)
    gw = w//gcd
    gh = h//gcd
    return w*h - ((gw+gh-1) * gcd)
    
def getGCD(n,m):
    while (m!=0):
        r = n%m
        n = m
        m = r
    return n