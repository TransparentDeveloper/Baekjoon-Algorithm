function getTotalMinute(hour1,minu1){
    // console.log("getTot"+hour1,minu1)
    return (+hour1)*60 + (+minu1)
}
function solution(fees, records) {
    const obj = {}
    for(const record of records){
        const infos = record.split(" ")
        if (obj[infos[1]]){
            obj[infos[1]].push(infos[2],getTotalMinute(infos[0].split(":")[0],infos[0].split(":")[1]))
        }
        else
            obj[infos[1]] = [infos[2],getTotalMinute(infos[0].split(":")[0],infos[0].split(":")[1])]
        
    }
    for(const key in obj){
        if(obj[key][obj[key].length-2]==="IN"){
            obj[key].push("OUT",getTotalMinute(23,59))
        }
    }
    
    const totTimes = []
    for(const key of Object.keys(obj).sort() ){
        const stack = []
        let curCarTotTime = 0
        for(let i = 0 ; i< obj[key].length;i+=2){
            if(obj[key][i]=="IN")
                stack.push(obj[key][i+1])
            else
               curCarTotTime += (obj[key][i+1] - stack.pop())
        }
        totTimes.push(curCarTotTime)
    }
    const result = []
    for(let eachTime of totTimes){
        result.push(fees[1])
        
        if(eachTime < fees[0]){
            continue 
        }

        result[result.length-1] += Math.ceil((eachTime-fees[0])/fees[2]) * fees[3]
    }
    return (result)
}
   