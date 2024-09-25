function solution(arr) {
    const answer = arr.reduce((acc,num)=>{
        const gcd = getGCD(acc,num)// gcd
        const lcm = getLCM(acc,num,gcd)
        return lcm
    })
    
    return answer
}

function getLCM(num1, num2, gcd){
    return (num1*num2) / gcd
}

function getGCD(a,b){
    [a,b] = [Math.max(a,b), Math.min(a,b)]
    
    while (b > 0) {
        const c = a % b
        a = b
        b = c
    }
    return a
}