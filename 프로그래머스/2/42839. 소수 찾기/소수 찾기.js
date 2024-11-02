const MAX_SAFE_INTEGER = 10000000
const isPrime = new Array(MAX_SAFE_INTEGER+1).fill(true)

const sqrt = Math.floor(Math.sqrt(MAX_SAFE_INTEGER))

isPrime[0]=false
isPrime[1]=false

for(let i=2; i<=sqrt;i++){
    if(!isPrime[i]) continue 
    for(let j=i*i;j<=MAX_SAFE_INTEGER;j+=i)
        isPrime[j] = false
}


function solution(numbers) {
    const nums = numbers.split("").map(Number)
    console.log(nums)
    const set = new Set()
    const n = nums.length
    for(let i = 1; i<=n; i++){
        const permus = permutation(nums, i)
        permus.forEach((elem)=>set.add(elem))
    }
    const candidate = Array.from(set)
    return candidate.filter((elem) => isPrime[elem]).length
}

// 순열
function permutation(arr, r) {
    const n = arr.length
    
    if(r<0 || n<r)
        return []
    
    const answers = []
    const visited = new Array(n).fill(false)
    
    function dfs(depth, subArr){
        if(depth==r){
            answers.push(Number(subArr.join("")))
            return 
        }
        
        for(let i = 0; i<n; i++){
            if(visited[i]) continue 
            const curVal = arr[i]
            
            visited[i] = true
            subArr.push(curVal)
            dfs(depth+1, subArr)
            subArr.pop()
            visited[i] = false
        }
    }
    dfs(0, [])
    return answers
}

