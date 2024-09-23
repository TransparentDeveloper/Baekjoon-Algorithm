// two-pointer
function solution(sequence, k) {
    
    let sum = 0
    let ptr1 = 0
    
    const candidate = []
    
    sequence.forEach((_, ptr2)=>{
        
        while (sum+sequence[ptr2] > k) {
            sum -= sequence[ptr1++]
        }
        
        if (sum+sequence[ptr2] === k) {
            sum += sequence[ptr2]
            candidate.push([ptr1, ptr2])
        }
        
        
        else if(sum+sequence[ptr2] < k)
            sum += sequence[ptr2]
        
    })
    
    candidate.sort((arr1, arr2)=>{
        const length1 = arr1[1] - arr1[0]
        const length2 = arr2[1] - arr2[0]
        
        if (length1 === length2){
            return arr1[0] - arr2[0]
        }
        else {
            return length1-length2
        }
    })
    
    return (candidate[0])
}