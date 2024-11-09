function solution(numer1, denom1, numer2, denom2) {
    const number = (numer1*denom2) + (numer2*denom1)
    const denom =  (denom1 * denom2)
    
    const gcd = getGCD(number, denom)
    
    
    return [number/gcd, denom/gcd];
}

const getGCD = (a,b) => {
    const min = Math.min(a,b)
    const max = Math.max(a,b)
    return min === 0 ? max : getGCD(min, max%min)
}