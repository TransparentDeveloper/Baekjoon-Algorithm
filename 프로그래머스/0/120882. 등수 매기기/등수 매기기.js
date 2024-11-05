function solution(score) {
    
    const cnts = new Array(201).fill(null).map(()=> ([]))
    score.forEach(([a,b], idx)=> {
        cnts[a+b].push(idx)
    })
    
    const answers = new Array(score.length).fill(-1)
    let rank = 1

    for(let i = 200; i >= 0; i--){
        if(!cnts[i].length) continue
        
        let adden = 0
        for (const idx of cnts[i]) {
            answers[idx] = rank
            adden ++
        }
        rank += adden
    }
    
    
    return answers
}