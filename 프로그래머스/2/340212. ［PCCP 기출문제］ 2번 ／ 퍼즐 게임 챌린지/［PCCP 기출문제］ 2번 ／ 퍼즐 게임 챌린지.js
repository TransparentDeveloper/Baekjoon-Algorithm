function solution(diffs, times, limit) {
    let rightLevel = 100001
    let leftLevel = 1
    
     while (leftLevel <= rightLevel) {
        const midLevel = Math.floor((leftLevel + rightLevel) / 2);
        const cost = getCost(diffs, times, midLevel);
        
        if (cost <= limit) {
            rightLevel = midLevel - 1;
        } else {
            leftLevel = midLevel + 1;
        }
    }
    
    return leftLevel;
}

function getCost(diffs, times ,level){
    const iter = diffs.length
    let cost = 0

    for(let i =0; i< iter; i++){
        const diff = diffs[i]
        const time = times[i]
        
        if(diff<=level) cost += time
        else {
            const attempt = diff-level
            const prevTime = times[i-1]
            
            const sub = (attempt * (prevTime + time) + time)
            cost += sub
        }
    }
    return cost
}