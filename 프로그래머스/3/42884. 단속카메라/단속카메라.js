function solution(routes) {
    routes.sort((route1, route2)=>{
        const start1 = route1[0]
        const end1 = route1[1]
        
        const start2 = route1[0]
        const end2 = route2[1]
        
        if(end1 == end2) 
            return start1 - start2
        return end1 - end2
    })
    
    console.log(routes)
    
    let point = routes[0][1]
    let answer = 1
    const totRoutes = routes.length
    for(let i = 0; i < totRoutes; i++){
        const curStart = routes[i][0]
        const curEnd = routes[i][1]
        
        if (point < curStart){
            answer ++
            point = curEnd
        }
    }
    return answer
}