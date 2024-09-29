function solution(N, road, K) {
    const graph = Array.from({length: N+1}, () => new Array(N+1).fill(500001))
    const visited = Array.from({length: N+1}, () => new Array(N+1).fill(false))
    
    road.forEach(([s,e,c])=>{
        graph[s][e] = Math.min(graph[s][e], c)
        graph[e][s] = graph[s][e]
    })
    for(let i=1; i < N+1; i++) graph[i][i] = 0
    

    for(let k = 1; k < N+1; k++){
        for(let i =1; i<N+1; i++){
            for(let j=1; j<N+1; j++){
                graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j])
            }
        }
    }
    
    let answer = 0
    graph[1].forEach( (cost)=>{
        if(cost <= K) answer++;
    } )

    return answer
}