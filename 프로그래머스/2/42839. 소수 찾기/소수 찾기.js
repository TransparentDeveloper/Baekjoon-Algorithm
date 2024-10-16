const UPPER_LIMIT = 10000000

function storeIsPrime(){
    const isPrime = new Array(UPPER_LIMIT+1).fill(true)
    
    isPrime[0] = false
    isPrime[1] = false
    
    const sqrt = Math.floor(Math.sqrt(UPPER_LIMIT))
    for(let i = 2; i<=sqrt; i++){
        if(!isPrime[i]) continue
        for(let j = i*i; j<=UPPER_LIMIT; j+=i)
            isPrime[j] = false
    }
    
    return () => isPrime
}

function solution(numbers) {
    const getIsPrime = storeIsPrime()
    const isPrime = getIsPrime()
    
    const subNumbers = getAllSubNumbers(numbers)
    const primes = subNumbers.filter((subNumber)=>isPrime[subNumber])
    return primes.length;
}

function getAllSubNumbers(numbers){
    const size = numbers.length
    const splited = numbers.split("")
    const isVisited = new Array(size).fill(false)
    
    const answerSet = new Set()
    
    function dfs(depth, subNumbers){
        
        if(depth === size){
            if(subNumbers !== '') 
                answerSet.add(parseInt(subNumbers))
            return
        }
        
        for(let i = 0; i < size; i++){
            if(isVisited[i])continue
            
            // 1. 지금 걸 가져간다.
            isVisited[i] = true
            dfs(depth+1, subNumbers+splited[i])
            isVisited[i] = false
            
            // 2. 놔두고 간다.
            dfs(depth+1, subNumbers)
        }
    }
    
    dfs(0,'')
    return Array.from(answerSet)
}