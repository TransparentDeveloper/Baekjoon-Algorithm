function solution(n, t, m, p) {
    const arr = []
    let curNum = 0
    while(arr.length < t*m+1){
        
        const num = parseInt(""+curNum,10).toString(n)
            for(let i of num.split("")){
                arr.push(i.toUpperCase())
            }
        
        curNum++
    }
    const res = []
    
    arr.forEach((v,i)=>{
         if(i<t*m &&i%m === p-1){
            res.push(v)
        }
})
    
    return res.join("")
  
    
}