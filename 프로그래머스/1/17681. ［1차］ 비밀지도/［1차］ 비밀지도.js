function solution(n, arr1, arr2) {
    const map1 = arr1.map((num)=>{
        return getRow(num, n)
    })
    const map2 = arr2.map((num)=>{
        return getRow(num, n)
    })
    
    const final = map1.map((_,rowIdx)=>{
        const row1 = map1[rowIdx]
        const row2 = map2[rowIdx]
        
        const finalRow = []
        for(let colIdx=0; colIdx<n; colIdx++)
            finalRow.push(row1[colIdx] | row2[colIdx])
        return finalRow
    })
    
    const answer = []
    const dict = {
        1: '#',
        0: ' ',
    }
    
    for(let row = 0; row < n ; row++) {
        let str = ''
        for(let col=0; col<n; col++) 
            str += dict[final[row][col]]
        answer.push(str)
    }
    
    
    return answer
}

function getRow(num, n){
    const stringify = num.toString(2).padStart(n,'0')
    return stringify.split('').map(Number)
}