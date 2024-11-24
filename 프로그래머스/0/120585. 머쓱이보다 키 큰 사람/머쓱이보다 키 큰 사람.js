function solution(array, height) {
    let answer = 0
    array.filter((elem)=>{
        if(elem > height)
            answer++
    })
    return answer
}
                 