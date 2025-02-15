function solution(strArr) {
    const obj = {}
    
    strArr.forEach((str)=>{
        const len = str.length
        if (!obj[len]) {
          obj[len] = 0  
        }
        
        obj[len]++
    })
    
    let max = -Infinity
    Object.values(obj).forEach((val)=>{
        max = Math.max(val, max)
    })
    
    return max
}