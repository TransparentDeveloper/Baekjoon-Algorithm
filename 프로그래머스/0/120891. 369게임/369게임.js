function solution(order) {
    let answer = 0
    for (const char of order.toString().split(""))
        if(char === '3' || char === '6' || char === '9')
            answer++
    
    return answer
}