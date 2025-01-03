function solution(arr) {
    return arr.reduce(getLCM)
}

function getLCM (a,b) {
    let max = Math.max(a,b)
    let min = Math.min(a,b)
    
    while (min !== 0) {
        const mod = max % min
        max = min
        min = mod
    }

    return (a*b) / max
}