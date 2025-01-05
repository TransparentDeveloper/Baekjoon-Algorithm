function solution(arr) {
    return arr.reduce(getLCM)
}

function getLCM(a,b) {
    const gcd = getGCD(a,b)
    return (a*b) / gcd
}

function getGCD(a,b) {
    const max = Math.max(a,b)
    const min = Math.min(a,b)
    return min === 0 ? max : getGCD(min, max%min)
}