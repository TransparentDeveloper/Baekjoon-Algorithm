function solution(numer1, denom1, numer2, denom2) {
    const denomsLCM=getLCM(denom1,denom2)
    const numsSum=numer1*(denomsLCM/denom1)+numer2*(denomsLCM/denom2)
    
    const gcd=getGCD(denomsLCM,numsSum)
    
    return [numsSum/gcd, denomsLCM/gcd];
}

function getLCM(a,b){
    let max = Math.max(a,b)
    let min = Math.min(a,b)
    while(min!==0){
        const mod = max%min
        max = min
        min = mod
    }
    return (a*b)/max
}

function getGCD(a,b){
    let max = Math.max(a,b)
    let min = Math.min(a,b)
    while(min!==0){
        const mod = max%min
        max = min
        min = mod
    }
    return max
}