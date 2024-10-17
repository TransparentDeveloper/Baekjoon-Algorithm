class MinHeap{
    constructor(){
        this.heap = []
    }
    bubbleUp(idx){
        const parentIdx = Math.floor((idx-1) / 2)
        
        if(idx<=0) return
        if(this.heap[idx][0] < this.heap[parentIdx][0]){
            let tmp = this.heap[parentIdx]
            this.heap[parentIdx] = this.heap[idx]
            this.heap[idx] = tmp
            this.bubbleUp(parentIdx)
        }
    }
    bubbleDown(idx){
        const leftIdx = idx*2 + 1
        const rightIdx = idx*2 + 2
        
        let childIdx = idx
        if(leftIdx < this.heap.length && this.heap[leftIdx][0]<this.heap[childIdx][0])
            childIdx = leftIdx
        if(rightIdx < this.heap.length && this.heap[rightIdx][0]<this.heap[childIdx][0])
            childIdx = rightIdx
        
        if(childIdx == idx) return
        
        const tmp = this.heap[idx]
        this.heap[idx] = this.heap[childIdx]
        this.heap[childIdx] = tmp
        
        this.bubbleDown(childIdx)
        
        
    }
    heappush(pair){
        this.heap.push(pair)
        this.bubbleUp(this.heap.length-1)
    }
    heappop(){
        if(this.heap.length==0) return null
        if(this.heap.length==1) return this.heap.pop()
        
        const answer = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.bubbleDown(0)
        return answer
    }
    getSize(){
        return this.heap.length
    }
}

function solution(N, road, K) {
    const obj = {}
    
    road.forEach(([a,b,c])=>{
        if(!obj[a]) obj[a] = []
        if(!obj[b]) obj[b] = []
        
        obj[a].push([c,b])
        obj[b].push([c,a])
    })
    
    const heap = new MinHeap()
    const distances = new Array(N+1).fill(10001*N)
    distances[1] = 0
    heap.heappush([0,1])
    
    while(heap.getSize()){
        const [curCost, curNode] = heap.heappop()
        
        obj[curNode].forEach(([nxtCost, nxtNode])=>{
            if(nxtCost+curCost < distances[nxtNode]){
                distances[nxtNode] = nxtCost+curCost
                heap.heappush([nxtCost+curCost,nxtNode])
            }
        })
    }
    
    const answer = distances.filter((distance)=>distance<=K).length
    return answer
}