function solution(n, wires) {
    
    const wiresSize = wires.length
    let answer = wiresSize
    for(let exceptIdx = 0; exceptIdx < wiresSize; exceptIdx++){
        const parents = new Array(n+1).fill(0).map((_,idx)=>idx)
        wires.forEach(([s,e], wireIdx)=>{
            if(wireIdx !== exceptIdx)
                if(findParent(parents, s) !== findParent(parents, e))
                    union(s,e,parents)
        })
        
        for(let i = 1; i<n+1; i++){
            parents[i] = findParent(parents, i)
        }
        
        const mostNode = getCntMost(parents)
        const leastNode = n - mostNode
        
        answer = Math.min(answer, mostNode-leastNode)
    }
    return answer;
}

function findParent(parents, node){
    if(node !== parents[node])
        parents[node] = findParent(parents, parents[node])
    return parents[node]
}

function union(a,b, parents){
    a = findParent(parents,a)
    b = findParent(parents,b)
    
    if(a<b) parents[b] = a
    else parents[a] = b
}

function getCntMost(array){
    const di = {}
    let answer = -100000000000
    
    array.forEach((elem)=>{
        if(elem in di) di[elem]++
        else di[elem] = 1
        
        answer = Math.max(answer, di[elem])
    })
    
    return answer
}