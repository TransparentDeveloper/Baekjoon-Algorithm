function solution(s) {
    const sSize = s.length
    
    let minLength = sSize
    for(let chunkSize=1; chunkSize<=Math.floor(sSize/2); chunkSize++) {
        const chunks = splitToChunk(s, chunkSize)
        
        const stack = []
        let resultStr = ''
        chunks.forEach((chunk)=>{
            if(stack.length !== 0 && stack.at(-1) !== chunk) { 
                if(stack.length !== 1) resultStr += stack.length
                resultStr += stack.at(-1)
                while(stack.length) stack.pop()
            }
            stack.push(chunk)
        })
        
        if(stack.length) {
            if(stack.length !== 1) resultStr += stack.length
            resultStr += stack.at(-1)
        }
        if(resultStr.length < minLength)
            minLength = resultStr.length
    }
    
    return minLength
}

function splitToChunk(str,chunkSize){
    const strSize = str.length
    if(strSize <= chunkSize) return [str]
    
    const answer = []
    let substring = ''
    for(let i =0; i< strSize;i++) {
        const char = str[i]
        if(i!==0 && i%chunkSize===0) {
            answer.push(substring)
            substring = ''
        }
        substring += char
    }
    if (substring !== '') 
        answer.push(substring)
    
    
    return answer
}