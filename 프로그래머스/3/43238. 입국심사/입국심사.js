function solution(n, times) {
    let right = Math.max(...times) * n
    let left = 1
    
    while(left <= right){
        const mid = Math.floor((left + right) / 2)
        
        let people = 0
        for(const costEachOne of times)
            people += Math.floor(mid / costEachOne)
        
        if(people >= n)
            right = mid-1
        else 
            left = mid+1
    }
    return left
}