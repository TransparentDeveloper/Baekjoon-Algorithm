function solution(n, m) {
    const gcd = getGCD(n,m)
    const lcm = (n*m) / getGCD(n,m)
    return [gcd, lcm];
}

function getGCD(a,b){
    const min = Math.min(a,b)
    const max = Math.max(a,b)
    return min == 0 ? max : getGCD(min, max%min)
}