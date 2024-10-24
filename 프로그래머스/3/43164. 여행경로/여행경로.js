function solution(tickets) {
    console.log(tickets.length + 1)
    const pathCount = tickets.length + 1
    
    tickets.sort((a,b)=>{
        const dist1 = a[1]
        const dist2 = b[1]
        return dist2.localeCompare(dist1)
    })
    console.log(tickets)
    const isUsed = new Array(tickets.length).fill(false)
    
    let answer = []
    
    function dfs(curCity, route){
        if(route.length === pathCount){
            answer = [...route]
            return
        }
        for(let tIdx=0; tIdx<tickets.length; tIdx++){
            const [srcCity, distCity] = tickets[tIdx]

            if(!isUsed[tIdx] && srcCity == curCity){
                isUsed[tIdx] = true
                route.push(distCity)
                dfs(distCity, route)
                route.pop()
                isUsed[tIdx] = false
            }
        }
    }
    
    dfs("ICN", ["ICN"])
    return answer;
}