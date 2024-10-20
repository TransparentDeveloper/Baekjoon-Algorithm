function solution(tickets) {
    const set=new Set()
    const obj={}
    tickets.forEach(([start, end])=>{
        set.add(start)
        set.add(end)
        
        if(!obj[start]) obj[start]=[]
        obj[start].push(end)
    })
    const cities = Array.from(set)
    const visited = {}
    for(const city of cities){
        if(!visited[city]) visited[city]=false
    }
    const answer = []
    function backtracking(stack){
        if(cities.length===stack.length){
            console.log(stack)
            answer.push([...stack])
            return
        }
        const curCity=stack.at(-1)
        for(const nxtCity of obj[curCity]){
            if(!visited[nxtCity]){
                visited[nxtCity]=true
                stack.push(nxtCity)
                backtracking(stack)
                stack.pop(nxtCity)
            }
        }
    }
    backtracking(['ICN'])
    console.log(answer)   
}