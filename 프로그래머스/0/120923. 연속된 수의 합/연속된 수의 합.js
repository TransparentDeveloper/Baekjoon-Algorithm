function solution(num, total) {
    const answer = []
    const standard = Math.floor(total / num)
    if(isOdd(num)){
        const offset = Math.floor(num/2)
        const start = standard - offset
        for(let i = start; i < start+num;i++)
            answer.push(i)
    }
    else {
        const offset = Math.floor(num/2)
        const start = standard - Math.floor(num/2) + 1
        for(let i = start; i < start+num;i++)
            answer.push(i)
    }
    return answer;
}

function isOdd(num){
    return num%2 !== 0
}