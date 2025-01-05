function getIsPrimes (maxNum) {
    const isPrimes = new Array(maxNum+1).fill(true);
    isPrimes[0] = false
    isPrimes[1] = false
    
    const sqrt = Math.sqrt(maxNum+1);
    
    for (let i = 2; i <= sqrt; i++){
        for (let j = i*i; j < maxNum+1; j+=i) {
            isPrimes[j] = false   
        }
    }
    return isPrimes
}


function solution(numbers) {
    const splits = numbers.split('').map(Number)
    
    const subNumArr = getSubNumArr(splits)
    
    const isPrimes = getIsPrimes(Math.max(...subNumArr))
    
    return subNumArr.filter((num)=>isPrimes[num]).length
}

function getSubNumArr(numArr) {
    const results = new Set();
    const numArrSize = numArr.length
    
    const visited = new Array(numArrSize).fill(false)
    function dfs(acc) {
        if (acc !== 0)
            results.add(acc)
        if (visited.every((tf)=>tf)) {
            return
        }
        for (let i = 0; i < numArrSize; i++) {
            if (visited[i])
                continue
            visited[i] = true
            dfs(acc*10+numArr[i])
            visited[i] = false
        }
    }
    dfs(0)
    return Array.from(results)
}