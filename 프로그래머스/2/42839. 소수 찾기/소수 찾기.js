const SAFE_BIG_INTEGER=10000000
const isPrime=new Array(SAFE_BIG_INTEGER+1).fill(true)
isPrime[0]=false
isPrime[1]=false

const range=Math.floor(Math.sqrt(SAFE_BIG_INTEGER))
for(let i=2;i<range;i++){
    if(!isPrime[i])continue
    for(let j=i*i;j<SAFE_BIG_INTEGER;j+=i)
        isPrime[j]=false
}

function solution(numbers) {
    const subnumbers=getAllSubnumbers(numbers)
    
    return subnumbers.filter((num)=>isPrime[num]).length
}

function getAllSubnumbers(numbers){
    const split=numbers.split("")
    const splitSize=split.length
    const isVisited=new Array(splitSize).fill(false)
    
    const set = new Set()
    
    function dfs(depth, subnumbers){
        if(depth===splitSize){
            if(subnumbers!=='')
                set.add(parseInt(subnumbers))
            return
        }
        for(let i=0;i<splitSize;i++){
            if(isVisited[i]) continue
            
            isVisited[i]=true
            dfs(depth+1,subnumbers+split[i])
            isVisited[i]=false
            
            dfs(depth+1,subnumbers)
        }
    }
    
    dfs(0,'')
    return Array.from(set)
}