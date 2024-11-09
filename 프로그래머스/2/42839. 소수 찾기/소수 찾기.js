function solution(numbers) {
    const isPrime = sieve(10000000)
    const subNums = getSubNums(numbers)
    return subNums.filter((num)=>isPrime[num]).length
}

function sieve(n){
    const isPrime = new Array(n+1).fill(true)
    
    const sqrt = Math.floor(Math.sqrt(n))
    
    isPrime[0] = false
    isPrime[1] = false
    
    for(let i = 0; i <= sqrt ; i++) {
        if (!isPrime[i]) continue
        for(let j =i*i; j<=n; j+=i) 
            isPrime[j] = false
    }
    return isPrime
}

function getSubNums(numbers){
    const sizes = numbers.length
    const set = new Set()
    const visited = new Array(sizes).fill(false)
    
    function dfs(depth, subNums){
        if(subNums.join("") !== "")        
            set.add(Number(subNums.join("")))
        if(depth==sizes) return
        for(let i = 0; i< sizes; i++){
            if(visited[i]) continue
            visited[i] = true
            subNums.push(numbers[i])
            dfs(depth+1, subNums)
            subNums.pop()
            visited[i] = false
        }
    }
    
    dfs(0,[])
    
    const answers = Array.from(set)
    return answers
}