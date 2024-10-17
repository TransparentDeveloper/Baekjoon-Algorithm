function solution(n, times) {
    let left = 0
    let right = Math.max(...times) * n
    
    
    while(left <= right){
        const mid = Math.floor((left+right)/2)
        let people = 0
        
        for(const time of times)
            people += Math.floor(mid / time)
        
        if(people < n)
            left = mid + 1
        else 
            right = mid -1    
    }
    
    return left
    
}