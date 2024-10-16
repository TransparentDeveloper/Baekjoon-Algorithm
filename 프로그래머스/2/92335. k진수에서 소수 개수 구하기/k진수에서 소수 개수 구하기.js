function isPrime(num){
    if(num == 0 || num == 1) return false
    if(num == 2 || num == 3) return true
    const sqrt = Math.floor(Math.sqrt(num))
    for(let i = 2; i<=sqrt; i++)
        if(num%i==0) return false
    return true
}
function solution(n, k) {
    const transed = transFormation(n, k)
    const nums = transed.split('0').filter((elem)=>elem!=='')
    const primes = nums.filter((elem)=>isPrime(elem))
    
    return primes.length
}

function transFormation(n,k){
    const transed = n.toString(k)
    return transed
}