function solution(targets) {
    targets.sort((target1, target2)=>{
        const start1 = target1[0]
        const end1 = target1[1]
        
        const start2 = target2[0]
        const end2 = target2[1]
        
        if(end1 === end2) return start1 - start2
        return end1 - end2
    })
    const totTargets = targets.length
    let point = targets[0][1]
    let answer = 1
    
    for(let i = 1; i<totTargets; i++){
        const curStart = targets[i][0]
        const curEnd = targets[i][1]
        if(point <= curStart){
            point = curEnd
            answer ++
        }
    }
    return answer
}