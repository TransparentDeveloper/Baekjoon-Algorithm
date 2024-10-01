function isPrime(num){
    if(num == 0 || num == 1) return false
    
    const sqrt = Math.sqrt(num)
    
    for(let i=2; i<=sqrt; i++)
        if (num%i===0) return false
    return true
}

function solution(n, k) {
    const kJinsu = convertToJinsu(n,k)
    const pArr = getPArr(kJinsu)
    
    const primeP = pArr.filter((p)=>isPrime(p))
    return (primeP.length)
}

function convertToJinsu(n,k){
    return (n).toString(k)
}

function getPArr(str){
    return str.split("0").map(Number)
}