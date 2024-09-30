
function solution(record) {
    const logs = []
    const idNicknameMap = {}
    
    
    record.forEach((msg)=>{
        const {type, id, nickname} = parseInfo(msg)
        
        let notice = ''
        if (type === 'Enter'){
            notice = '님이 들어왔습니다.'
            idNicknameMap[id] = nickname
            logs.push({id, notice})
        }
        else if(type === 'Leave') {
            notice = '님이 나갔습니다.'
            logs.push({id, notice})
        }
        
        else if(type === 'Change') 
            idNicknameMap[id] = nickname
    })
    
    const answer = logs.map(({id, notice})=>{
        return idNicknameMap[id]+notice
    })
    return answer
}

function parseInfo(msg){
    const [type, id, nickname] = msg.split(" ")
    return {type, id, nickname}
}