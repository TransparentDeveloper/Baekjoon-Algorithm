const MAX_SUM=3000 + 1

const isPrime=new Array(MAX_SUM+1).fill(true)
isPrime[0]=false
isPrime[1]=false
const sqrt=Math.ceil(Math.sqrt(MAX_SUM))
for(let i=2;i<=sqrt;i++){
    if(!isPrime[i])continue
    for(let j=i*i;j<=MAX_SUM;j+=i)
        isPrime[j]=false
}

function solution(nums) {
    const sums = getAll3Sums(nums)
    return sums.filter((sum)=>isPrime[sum]).length
}

function getAll3Sums(nums){
    const answer = []
    const size = nums.length
    for(let i =0; i<size-2;i++){
        for(let j=i+1;j<size-1;j++){
            for(let k=j+1;k<size;k++){
                answer.push(nums[i]+nums[j]+nums[k])
            }
        }
    }
    return answer
}