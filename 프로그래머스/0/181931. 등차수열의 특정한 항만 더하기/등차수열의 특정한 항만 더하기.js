function solution(a, d, included) {
    let res = 0;

    for(let n=0; n<included.length; n++){
        const cur = a + d * n
        if(included[n])
            res += cur
    }
    
    return res
}