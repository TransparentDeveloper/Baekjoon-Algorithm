function solution(n) {
    const set = new Set()
    const primeFactors = primeFactorization(n)
    primeFactors.forEach((factor)=>{
        set.add(factor)
    })
    return Array.from(set)
}

function primeFactorization(n){
    const factors = []
    let divisor = 2
    
    while(n>1){
        if(n % divisor === 0){
            factors.push(divisor)
            n /= divisor
        } else divisor++
    }
    
    return factors
}