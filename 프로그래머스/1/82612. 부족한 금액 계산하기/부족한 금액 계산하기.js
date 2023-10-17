function solution(price, money, count) {
    if (count ===1) return price-money
    let answer = 0
    for(let i =price; i<=count*price; i+=price){
        answer+=i
    }
    return answer<money?0:answer-money;
}