function solution(s){  
    s = s.toLowerCase().split("")
    
    let pCnt = 0
    let yCnt = 0
    
    s.forEach((char)=>{
        if(char=='p')
            pCnt += 1
        else if(char=='y')
            yCnt += 1
    }) 
    
    if(pCnt===0 && yCnt ===0) return true
    return pCnt==yCnt ? true : false;
}