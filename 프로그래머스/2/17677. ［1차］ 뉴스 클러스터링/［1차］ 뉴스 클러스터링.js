function solution(str1, str2) {
    str1 = str1.toUpperCase()
    str2 = str2.toUpperCase()
    
    const arr1 = splitTwoChars(str1)
    const arr2 = splitTwoChars(str2)
    
    const dict1 = {}
    for(const elem of arr1){
        if(!(elem in dict1))
            dict1[elem] = 1
        else dict1[elem] ++
    }
    
    const dict2 = {}
    for(const elem of arr2){
        if(!(elem in dict2))
            dict2[elem] = 1
        else dict2[elem] ++
    }
    if(Object.keys(dict1).length===0 && Object.keys(dict2).length===0)
        return 65536

    const uni = getUni(dict1,dict2)
    const sub = getSub(dict1,dict2)
    
   
    return Math.floor((sub/uni) * 65536)
}

function splitTwoChars(arr){
    const answer = []
    
    const arrSize = arr.length
    for(let i =0; i<arrSize-1; i+=1){
        let joined = arr[i] + arr[i+1]
        joined = joined.replace(/[^A-Z]/g, '')
        if(joined.length == 2)
            answer.push(joined)
    }
    return answer
}

function getUni(dict1, dict2){
    const keys1 = Object.keys(dict1)
    const keys2 = Object.keys(dict2)
    
    const allKeys = Array.from(new Set(keys1.concat(keys2)))
    
    let answer = 0
    allKeys.forEach((key)=>{
        if(key in dict1 && key in dict2)
            answer += Math.max(dict1[key], dict2[key])
        
        else if (key in dict1)
            answer += dict1[key]
            
        else if(key in dict2)
            answer += dict2[key]
        else answer += 0
        
    })
    
    return answer
}
function getSub(dict1, dict2){
    const keys1 = Object.keys(dict1)
    const keys2 = Object.keys(dict2)
    
    const allKeys = Array.from(new Set(keys1.concat(keys2)))
    
    let answer = 0
    allKeys.forEach((key)=>{
        if(key in dict1 && key in dict2){
            answer += Math.min(dict1[key], dict2[key])
        }
    })
    
    return answer
}