function solution(arr) {
    const totLCM = arr.reduce(getLCM)
    return totLCM
}

function getLCM(a,b){ 
    let max = Math.max(a,b)
    let min = Math.min(a,b)
    while(min !== 0){
        const mod = max % min
        max = min
        min = mod
    }
    const gcd = max
    return (a*b)/gcd
}