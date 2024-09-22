function solution(players, callings) {
    const cntPlayers = players.length

    const rankToId = new Array(cntPlayers).fill(0)
    const idToRankMap = {}
    const nameToIdMap = {}
    
    
    players.forEach((name,idx)=>{
        rankToId[idx] = idx
        idToRankMap[idx] = idx
        nameToIdMap[name] = idx
    })
    
    callings.forEach((name)=>{
        const id = nameToIdMap[name]
        const curRank = idToRankMap[id]
        const nxtRank = curRank - 1
        
        const prevId = rankToId[nxtRank]
        
        idToRankMap[id] = nxtRank
        rankToId[nxtRank] = id
        
        idToRankMap[prevId] = curRank
        rankToId[curRank] = prevId
    })
    
    const answer = []
    rankToId.forEach((id,rank)=>{
        const name = players[id]
        answer.push(name)
    })
    
    return answer 
}

