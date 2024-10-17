const UPPER_LIMIT = 10000000

const isPrime = new Array(UPPER_LIMIT+1).fill(true)

function initIsPrime(){
    const sqrt = Math.floor(Math.sqrt(UPPER_LIMIT))

    isPrime[0] = false
    isPrime[1] = false

    for(let i = 2; i<=sqrt; i++) {
        if(!isPrime[i]) continue
        for(let j = i*i; j<=UPPER_LIMIT; j+=i)
            isPrime[j] = false
    }   
}


function solution(numbers) {
    initIsPrime()
    const nums = getAllNums(numbers)
    return nums.filter((num)=>isPrime[num]).length
}

function getAllNums(numbers){
    const split = numbers.split("")
    const splitSize = split.length
    
    const set = new Set()
    const isVisited = new Array(splitSize).fill(false)
    function DFS(depth, nums){
        if(splitSize == depth){
            if(nums!=='') set.add(parseInt(nums))
            return
        }
        
        for(let i = 0; i<splitSize; i++){
            if(isVisited[i]) continue
            
            isVisited[i] = true
            DFS(depth+1, nums+split[i])
            isVisited[i] = false
            
            DFS(depth+1, nums)
        }
    }
    
    DFS(0,'')
    return Array.from(set)
}