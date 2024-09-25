function solution(k, ranges) {
    const yArr = getYArr(k)
    const n = yArr.length

    const answer = []
    
    for([x1,x2] of ranges){
        if (x2 <= 0) {
            x2 = n + x2 -1;  
        }
        
        if(x2 < x1 || n <= x1 || n < x2){
            answer.push(-1)
            continue
        }
        
        let rangeSize = 0;
        for(let i = x1; i<x2; i++){
            const y1 = yArr[i]
            const y2 = yArr[i+1]
            const unitSize = getUnitSize(y1,y2)    
            rangeSize += unitSize  
        }
        answer.push(rangeSize)
    }
    return answer
}

function getYArr(k){
    const answer = [k]
    
    while(1<k){
        if(k%2===0){
            k = k/2
        }
        else{
            k *= 3
            k += 1
        }
        answer.push(k)
    }
    return answer
}

function getUnitSize(y1,y2){
    const rectangle = y1*1
    const triangle = (y2-y1)*1*1/2
    return rectangle + triangle
}
