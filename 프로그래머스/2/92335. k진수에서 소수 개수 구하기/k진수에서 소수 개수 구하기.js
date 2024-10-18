function isPrime(number){
    if(number==2) 
        return true
    if(number<2) 
        return false
    if(number%2==0)
        return false
    const sqrt=Math.sqrt(number)
    for(let i=3;i<=sqrt;i+=2)
        if(number%i===0)
            return false
    return true
}
function solution(n, k) {
    const transed=n.toString(k)
    const nums=transed.split('0').filter((elem)=>elem!=='').map(Number)
    return nums.filter(isPrime).length
}