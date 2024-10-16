function solution(arr) {
    const totalLCM = arr.reduce((acc, num)=>{
        return getLCM(acc, num)
    })
    
    return totalLCM
}

function getLCM(a,b){
    let gcd = 0
    let min = Math.min(a,b)
    let max = Math.max(a,b)
    let mod = 1
    while(min != 0){
        mod = max % min
        max = min
        min = mod
    }
    gcd = max
    return (a*b) / gcd   
}