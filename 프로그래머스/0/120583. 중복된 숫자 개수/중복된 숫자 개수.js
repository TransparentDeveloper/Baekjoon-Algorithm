function solution(array, n) {
    const counts = new Array(100+1).fill(0)
    array.forEach((elem)=>{
        counts[elem]++
    })
    let answer = 0
    array.forEach((elem,idx)=>{
        if(elem === n)
            answer++
    })
    
    return answer
}