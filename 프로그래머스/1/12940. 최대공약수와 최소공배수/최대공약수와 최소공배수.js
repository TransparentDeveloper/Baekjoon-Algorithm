function solution(n, m) {
   const answer = [
       getGCD(n,m),
       getLCM(n,m)
   ]
   return answer
}


function getLCM(a,b){
    let max = Math.max(a,b)
    let min = Math.min(a,b)
    
    while(min){
        const mod = max%min
        max = min
        min = mod
    }
    return (a*b)/max
}

function getGCD(a,b){
    let max = Math.max(a,b)
    let min = Math.min(a,b)
    
    while(min){
        const mod = max%min
        max = min
        min = mod
    }
    return max
}