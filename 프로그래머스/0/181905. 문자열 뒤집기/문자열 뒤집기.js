function solution(my_string, s, e) {
    const prev = my_string.slice(0,s)
    const target = my_string.slice(s,e+1)
    const post = my_string.slice(e+1)
    
    const reversedTarget = getReversedString(target)
    
    const result = [prev, reversedTarget, post].join("")
    
    return result
}

function getReversedString(str){
    return str.split("").reverse().join("")
}