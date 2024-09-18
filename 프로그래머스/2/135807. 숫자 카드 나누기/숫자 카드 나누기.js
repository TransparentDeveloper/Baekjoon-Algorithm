function solution(arrayA, arrayB) {
    const gcdA = getArrayGCD(arrayA)
    const gcdB = getArrayGCD(arrayB)
    
    const isValidA = cantDivideAll(arrayA, gcdB)
    const isValidB = cantDivideAll(arrayB, gcdA)
  
    if(isValidA && isValidB) return Math.max(gcdA, gcdB)
    if(isValidA) return gcdB
    if(isValidB) return gcdA
    
    return 0
    
}

function isSameArray(arrayA, arrayB) {
    const arraySize = arrayA.length
    
    for(let i = 0; i < arraySize; i++)
        if(arrayA[i] !== arrayB[i]) return false
    
    return true
}

function cantDivideAll(array, num){
    const arraySize = array.length
    
    for(let i =0; i< arraySize; i++)
        if(array[i]%num === 0) return false
    
    return true
}

function getArrayGCD(array){
    const arraySize = array.length
    let result = array[0]
    if(arraySize == 1) return result
    
    for(let i = 1; i<arraySize; i++)
        result = getGCD(result,array[i])    
    return result
}


function getGCD(a,b){
    [a,b] = [Math.max(a,b), Math.min(a,b)]
    
    while(b !== 0){
        const n = a % b
        a = b
        b = n
    }
    
    return a
}
