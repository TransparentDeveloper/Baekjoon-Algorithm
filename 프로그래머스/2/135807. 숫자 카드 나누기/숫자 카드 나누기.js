function solution(arrayA, arrayB) {
    const gcdA = arrayA.reduce(getGCD)
    const gcdB = arrayB.reduce(getGCD)
    
    const isA = cantDivide(arrayB,gcdA)
    const isB = cantDivide(arrayA,gcdB)
    
    if(!isA && !isB)
        return 0
    
    if(isA && !isB)
       return gcdA
     
    if(isB && !isA)
       return gcdB
    
    return Math.max(gcdA, gcdB)
}

function cantDivide(arr, num){
    return arr.every((elem)=> elem%num !== 0)
}

function getGCD(a,b){
    const max = Math.max(a,b)
    const min = Math.min(a,b)
    return min !== 0 ? getGCD(min, max%min): max
}