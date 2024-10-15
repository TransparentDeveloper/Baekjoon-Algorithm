function solution(arr) {
   const answer = arr.reduce((acc,num)=>(getLCM(acc,num)))
   return answer
}

function getLCM(a, b){
    let max = Math.max(a,b)
    let min = Math.min(a,b)
    
    let mod
    while(min!==0){
        mod = max%min
        max = min
        min = mod
    }
    
    const gcd = max
    return (a*b) / gcd
}

function getGCD(a,b){
    [a, b] = [Math.max(a,b), Math.min(a,b)]
    
    let c = a
    while(b!==0){
        c = a%b
        a = b
        b = c
    }

    return a
}