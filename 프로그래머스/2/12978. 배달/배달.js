const UPPER_LIMIT = 500001

function solution(N, road, K) {
    const obj = {}
    road.forEach(([s,e,c])=>{
        if(s in obj) 
            obj[s].push([c,e])
        else 
            obj[s] = [[c,e]]
        if(e in obj) 
            obj[e].push([c,s])
        else 
            obj[e] = [[c,s]]
        
    })
    
    const distances = new Array(N+1).fill(UPPER_LIMIT)
    const que = []
    
    distances[1] = 0
    que.push([0,1])
    
    while(que.length){
        que.sort((e1,e2)=> e2[0] - e1[0])
        const [curCost, curNode] = que.pop()
        obj[curNode].forEach(([nxtCost, nxtNode])=>{
            if(curCost + nxtCost < distances[nxtNode]){
                distances[nxtNode] = curCost + nxtCost
                que.push([curCost+nxtCost,nxtNode])
            }
        })
    }
    
    return distances.filter((distance)=> distance <= K).length
}