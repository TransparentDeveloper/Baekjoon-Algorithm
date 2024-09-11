function solution(name, yearning, photo) {
    const yearningMap = {}
    const friends = name.length
    for(let i =0; i<friends; i++){
        yearningMap[name[i]] = yearning[i]
    }
    
    const result = []
    
    photo.forEach((inPhoto)=>{
        let total = 0
        inPhoto.forEach((friend)=> {
            if(name.includes(friend)) 
                total += yearningMap[friend]
        })
        result.push(total)
    })
    return result
}