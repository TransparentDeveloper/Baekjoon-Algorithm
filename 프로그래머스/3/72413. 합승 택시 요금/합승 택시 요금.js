const MAX_COST = 200 * 100000 
function solution(n, s, a, b, fares) {
    const graph = Array.from({length: n+1},()=>{
        return new Array(n+1).fill(MAX_COST)
    })
    for(let i =0; i<n+1; i++)
        graph[i][i]=0
    fares.forEach(([c,d,f])=>{
        graph[c][d]=f
        graph[d][c]=f
    })
    
    
    for(let k=1; k<n+1; k++){
        for(let i=1; i<n+1; i++){
            for(let j=1;j<n+1;j++){
                graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j])
            }
        }
    }
    let answer = MAX_COST
    for(let i=1;i<n+1;i++){
        const commonCost = graph[s][i]
        const aCost = graph[i][a]
        const bCost = graph[i][b]
        answer = Math.min(answer, aCost + bCost + commonCost)
    }  
    
    return answer;
}