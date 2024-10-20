function solution(tickets) {
    tickets.sort(([_1,dist1],[_2,dist2])=>{
        return dist1.localeCompare(dist2)
    })
    const n = tickets.length
    const used=new Array(n).fill(false)
    
    let answer = []
    function dfs(cur,history){
        if(history.length===n+1&&used.every((elem)=>elem)){
            answer=[...history]
            return
        }
        for(let i=0;i<n;i++){
            const [src,dist]=tickets[i]
            if(!used[i]&&src===cur){
                used[i]=true
                history.push(dist)
                dfs(dist,history)
                history.pop()
                used[i]=false
            }
            if(answer.length) return
        }
    }
    dfs("ICN",["ICN"])
    return answer
}