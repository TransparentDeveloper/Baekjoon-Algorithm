function solution(numbers) {
    numbers.sort((a,b)=>{
        return ((b+"") + (a+"")) - ((a+"")+(b+""))
    })
    const result = (numbers.join("")+"")
    return result[0]=="0" ? "0" : result
}