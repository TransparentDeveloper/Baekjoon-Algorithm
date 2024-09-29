function solution(dartResult) {
    const numQue = []
    const split = dartResult.split('')
    
    const attempts = [0,0,0]
    let curAttempt = 0
    
    split.forEach((char)=>{
        if(isNumber(char))
            numQue.push(parseInt(char))
        
        
        else if(char=='S' || char=='D' || char=='T'){
            let score = 0
            while(numQue.length > 0){
                score *= 10
                score += numQue.shift()
            }
            
            switch(char) {
                case 'S': 
                    score = Math.pow(score,1)
                    break;
                case 'D':
                    score = Math.pow(score,2)
                    break;
                case 'T':
                    score = Math.pow(score,3)
                    
                    break;
                default:
                    break;
            }
            
            attempts[curAttempt] = score
            curAttempt += 1
        }
        else if(char=='*'){
            const prevAttempt = curAttempt - 1
            const prevprevAttempt = curAttempt - 2
            
            if(0 <= prevAttempt) 
                attempts[prevAttempt] *= 2
            if(0 <= prevprevAttempt) 
                attempts[prevprevAttempt] *= 2
        }
        else if(char == '#'){
            const prevAttempt = curAttempt - 1
            
            if(0 <= prevAttempt) 
                attempts[prevAttempt] *= (-1)
        }
    })
    
    return attempts.reduce((acc,num)=>acc+num,0)
}

function isNumber(char){
    const paresed = parseInt(char)
    return paresed.toString()!=="NaN"
}