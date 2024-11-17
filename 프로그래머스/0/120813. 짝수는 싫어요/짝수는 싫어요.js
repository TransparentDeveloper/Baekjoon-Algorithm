function solution(n) {
    return new Array(n+1).fill(0).map((_,idx) => idx).filter((num)=>num%2!==0)
}