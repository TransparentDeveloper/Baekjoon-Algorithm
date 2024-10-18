function solution(n, times) {
    let left=1;
    let right=Math.max(...times) * n
    
    while(left<=right){
        const mid=Math.floor((left+right)/2)
        // 각 심사관이 mid 시간동안 처리할 수 있는 사람의 수
        let completed=0
        
        for(const time of times)
            completed+=Math.floor(mid/time)
        
        if(completed<n)
            left=mid+1
        else
            right=mid-1
    }
    
    return left;
}