
function isPrime(num){
    if (num < 2) return false

    const sqrt = Math.sqrt(num)
    for(let i = 2; i<= sqrt; i++)
        if(num%i === 0) 
            return false
    return true
}

function solution(n, k) {
    const kJinsu = n.toString(k)
    const nums = getSubNums(kJinsu)

    return nums.filter((num)=>isPrime(num)).length
}

function getSubNums(str){
    const subNums = str.split("0").filter((char)=>char!='').map(Number)
    return subNums
}