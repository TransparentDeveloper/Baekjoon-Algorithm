function solution(N, road, K) {
    const graph = Array.from({length: N+1}, () => ([]))
    
    road.forEach(([a,b,c])=>{
        graph[a].push([c,b])
        graph[b].push([c,a])
    })
    
    
    const dist = new Array(N+1).fill(500001);
    dist[1] = 0
    const pq = [[0,1]]
    
    while(pq.length){
        const [curCost, curNode] = pq.pop()
        
        for (const [nxtCost, nxtNode] of graph[curNode]) {
            const totalDist = nxtCost + curCost
            if ( totalDist < dist[nxtNode] ){
                dist[nxtNode] = totalDist
                pq.push([totalDist, nxtNode])
                pq.sort((arr1,arr2)=>(arr1[0] - arr2[0]))
            }
        }
        
    }
    
    return dist.filter((di)=>di<=K).length
    
}