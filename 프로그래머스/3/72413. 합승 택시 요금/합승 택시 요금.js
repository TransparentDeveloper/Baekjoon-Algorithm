const COST_UPPER_LIMIT=100000*200+1
function solution(n, s, a, b, fares) {
    const graph=Array.from({length:n+1},()=>new Array(n+1).fill(COST_UPPER_LIMIT))
    for(let i=1;i<n+1;i++) graph[i][i]=0
    fares.forEach(([start,end,cost])=>{
        graph[start][end]=cost
        graph[end][start]=cost
    })
    for(let k=1;k<n+1;k++){
        for(let i=1;i<n+1;i++){
            for(let j=1;j<n+1;j++){
                graph[i][j]=Math.min(graph[i][j],graph[i][k]+graph[k][j])
            }
        }
    }
    
    let answer=COST_UPPER_LIMIT
    for(let point=1;point<n+1;point++){
        const commonCost=graph[s][point]
        const aCost=graph[point][a]
        const bCost=graph[point][b]
        answer=Math.min(answer,commonCost+aCost+bCost)
    }
    return answer;
}