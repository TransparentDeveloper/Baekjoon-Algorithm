function solution(n) {
    const result = []
    function hanoi(src,dst,cnt){
        if(cnt===1) {
            result.push([src,dst]); 
            return;
        }        
        hanoi(src,6-src-dst,cnt-1)
        hanoi(src,dst,1)
        hanoi(6-src-dst,dst,cnt-1)
    }
    hanoi(1,3,n)
    return result
}