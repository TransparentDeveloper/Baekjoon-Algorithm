function solution(arr) {
    return arr.reduce((acc, num) => getLCM(acc, num), 1);
}

function getLCM(a, b) {
    let gcd = getGCD(a, b);
    return (a * b) / gcd;
}

function getGCD(a, b) {
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    let mod = max%min;
    return mod === 0 ? min : getGCD(min, mod);
}