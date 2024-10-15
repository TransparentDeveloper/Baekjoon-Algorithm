const MAX_NUMBER = 10000000
const IS_PRIME = new Array(MAX_NUMBER+1).fill(true)

function initIsPrime(){
    IS_PRIME[0] = false
    IS_PRIME[1] = false
    
    const sqrt = Math.floor(Math.sqrt(MAX_NUMBER))
    for(let i=2; i <= sqrt; i++){
        if (!IS_PRIME[i]) continue
        for (let j= i*i ; j <= MAX_NUMBER; j+=i)
            IS_PRIME[j] = false
    }    
}

function solution(numbers) {
    initIsPrime()
    const cadidate = getSubstring(numbers)
    
    const prime = cadidate.filter(num => IS_PRIME[num])
    return prime.length
}

function getSubstring(numbers){
    const chars = numbers.split("")
    const visited = new Array(numbers.length).fill(false)
    const set = new Set()
    
    function dfs(subNumbers, depth){
        if(depth === numbers.length){
            if(subNumbers!='') set.add(parseInt(subNumbers))
            return 
        }
        
        for(let i =0; i< numbers.length; i++){
            if(visited[i]) continue
            
            // 1. 추가한다.
            visited[i] = true
            dfs(subNumbers+chars[i], depth+1)
            visited[i] = false
        
            // 2. 추가안함.
            dfs(subNumbers, depth+1)
        }
    }
    
    dfs('',0)
    return Array.from(set)
}