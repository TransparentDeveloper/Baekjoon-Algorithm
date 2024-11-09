function solution(n) {
    const set = new Set(getPrimeDivisors(n))
    return Array.from(set)
}

function getPrimeDivisors(n){
    const answers = []
    let divisor = 2
    
    while (n>1){
        if(n % divisor == 0){
            answers.push(divisor)
            n /= divisor
        }
        else
            divisor ++
    }
    return answers
}