function solution(numlist, n) {
    const cnts = new Array(10001).fill(0)

    numlist.forEach((num)=>{
        cnts[num] ++
    })
    
    let rPoint = n
    let lPoint = n
    const answers = []
    
    
    while(answers.length !== numlist.length){
        while(rPoint<10001 && cnts[rPoint] !== 0){
            answers.push(rPoint)
            cnts[rPoint]--
        }
        while(lPoint>0 && cnts[lPoint] !== 0){
            answers.push(lPoint)
            cnts[lPoint]--
        }
        rPoint++;
        lPoint--;
    }
    
    
    return answers
}