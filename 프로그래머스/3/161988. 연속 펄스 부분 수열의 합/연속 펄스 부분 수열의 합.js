// Kadane
function solution(sequence) {
    const arr1 = sequence.map((num, idx)=>{
        if(idx % 2 === 0)
            return num * -1
        return num
    })
    const arr2 = arr1.map((num,idx)=>{
        return num * -1
    })
    
    const sum1 = getMaxSubArr(arr1)
    const sum2 = getMaxSubArr(arr2)
    
    return Math.max(sum1, sum2)
}

// 합이 최고인 부분수열 구하기
function getMaxSubArr(arr){
   const _arr = [...arr]
   const arrSize = arr.length
   let maxSoFar = arr[0]
   
   for(let i = 1; i < arrSize; i++){
       _arr[i] = Math.max(_arr[i], _arr[i-1]+_arr[i])
       maxSoFar = Math.max(_arr[i], maxSoFar)
   }
   return maxSoFar
}