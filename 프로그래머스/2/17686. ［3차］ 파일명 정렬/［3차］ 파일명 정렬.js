function solution(files) {
    const fileSignatures = files.map((file)=>{
        const [numStart, numEnd] = findNumberIdxs(file)
        
        const HEAD = file.substring(0,numStart)
        const NUMBER = file.substring(numStart, numEnd+1)
        const TAIL = file.substring(numEnd+1)
    
        return {HEAD, NUMBER, TAIL}
    })
    
    fileSignatures.sort((sig1, sig2)=>{
        const head1 = (sig1.HEAD).toUpperCase()
        const head2 = (sig2.HEAD).toUpperCase()
        
        const number1 = parseInt(sig1.NUMBER)
        const number2 = parseInt(sig2.NUMBER)
        
        if(head1 == head2 && number1 == number2)
            return 0
        if(head1 == head2)
            return number1 - number2
       return head1.localeCompare(head2)
    })
    
    const answer = fileSignatures.map(({HEAD,NUMBER,TAIL})=>{
        console.log(HEAD)
        return HEAD + NUMBER + TAIL})
    return answer
    
}

function findNumberIdxs(str){ 
    const strSize = str.length
    let startIdx = -1
    let endIdx = -1
    
    for(let i=0; i<strSize; i++) 
        if(isNumber(str[i])) {
            startIdx = i
            break;
        }
    
    endIdx = startIdx
    let checkChar = str[endIdx]
    while(isNumber(checkChar)){
        endIdx ++
        checkChar = str[endIdx]
    }
    endIdx --
    
    return [startIdx, endIdx]
}

function isNumber(char){
    return parseInt(char).toString() !== 'NaN'
}