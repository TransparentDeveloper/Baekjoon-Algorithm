function solution(k, tangerine) {
    const kind = Math.max(...tangerine)
    const counts = new Array(kind+1).fill(0)
    
    tangerine.forEach((kind)=>{
        counts[kind] += 1
    })
    counts.sort((a,b)=>(b-a))
    
    let answer = 0
    for (let count of counts) {
        k -= count;  
        answer += 1;
        
        if (k <= 0) break;
    }
    return answer 
}