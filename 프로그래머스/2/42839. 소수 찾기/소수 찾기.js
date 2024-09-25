const MAX_SAFTINTEGER = 10000000
const IS_PRIME = new Array(MAX_SAFTINTEGER+1).fill(true)


function adjustIsPrime(){
    IS_PRIME[0] = false
    IS_PRIME[1] = false
   
    const sqrt = Math.ceil(Math.sqrt(MAX_SAFTINTEGER))
    for(let i = 2; i<sqrt; i++)
        if(IS_PRIME[i])
            for(let j = i*i; j<MAX_SAFTINTEGER; j+=i)
                IS_PRIME[j] = false
    
}


function solution(numbers) {
    adjustIsPrime()
    
    const nums = stringSpliter(numbers)
    const combi = getPossibleCombi(nums)
    
    
    const result = combi.filter((num)=>IS_PRIME[num])
    return result.length
}

function stringSpliter(string){
    return string.split("").map(Number)
}

function getPossibleCombi(nums){
    const numsSize = nums.length
    const result = []
    const visited = new Array(numsSize).fill(false)
    
    function dfs(visited, acc){
        for(let i = 0; i < numsSize; i++){
            if(visited[i]) continue
            visited[i] = true
            
            const subRes = acc*10 + nums[i]
            result.push(subRes)
            dfs(visited, subRes)
            
            visited[i] = false
        }
    }
    
    dfs(visited, 0)
    return Array.from(new Set(result))
}