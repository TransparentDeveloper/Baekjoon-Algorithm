const INF = 1000000
function solution(N, road, K) {
    
    const obj = {}

    road.forEach(([s,e,c])=>{
        if(s in obj) obj[s].push([e,c])
        else obj[s] = [[e,c]]
        
        if(e in obj) obj[e].push([s,c])
        else obj[e] = [[s,c]]
    })
    
    const distance = new Array(N+1).fill(INF)
    distance[1] = 0
    const que = [[1,0]]
    
    while(que.length){
        const [curNode, curCost] = que.pop()    

        obj[curNode].forEach(([nxtNode, nxtCost])=>{
            if(curCost + nxtCost < distance[nxtNode]){
                distance[nxtNode] = curCost + nxtCost
                que.push([nxtNode, curCost + nxtCost])
            }
        })
    }

    return distance.filter((dist) => dist<=K).length
}