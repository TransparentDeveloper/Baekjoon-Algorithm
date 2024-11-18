function solution(n) {
    return new Array(n+1).fill(0).map((num,idx)=>idx).filter((num)=>num%2==0).reduce((acc,num)=>acc+num)
}