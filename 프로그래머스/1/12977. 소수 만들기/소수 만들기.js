function isPrime(num){
    if(num<2) return false
    if(num===2) return true
    if(num%2==0) return false
    
    const sqrt = Math.floor(Math.sqrt(num))
    for(let i=3; i<=sqrt; i+=2)
        if(num%i===0) 
            return false
    return true
}

function solution(nums) {
    const numsSize = nums.length
    let answer = 0
    
    for(let a=0; a<numsSize-2;a++){
        for(let b=a+1; b<numsSize-1;b++){
            for(let c=b+1; c<numsSize; c++){
                const aVal = nums[a]
                const bVal = nums[b]
                const cVal = nums[c]
                
                if(isPrime(aVal+bVal+cVal))
                    answer++
            }
        }
    }
    
    return answer
}