class MinHeap{
    constructor(){
        this.heap = []
    }
    bubbleUp(idx){
        const parentIdx = Math.floor((idx-1)/2)
        if(parentIdx<0)return
        if(this.heap[idx][0]<this.heap[parentIdx][0]){
            this.swap(idx, parentIdx)
            this.bubbleUp(parentIdx)
        }
    }
    bubbleDown(idx){
        const leftIdx = idx*2 + 1
        const rightIdx = idx*2 + 2
        let targetIdx = idx
        const size = this.getSize()
        if(leftIdx<size&&this.heap[leftIdx][0]<this.heap[targetIdx][0])
            targetIdx=leftIdx
        if(rightIdx<size&&this.heap[rightIdx][0]<this.heap[targetIdx][0])
            targetIdx=rightIdx
        if(idx===targetIdx) return
        this.swap(targetIdx,idx)
        this.bubbleDown(targetIdx)
    }
    heapPush(newElem){
        this.heap.push(newElem)
        const size = this.getSize()
        if(size!==1) {
            this.bubbleUp(size-1)
        }
    }
    heapPop(){
        const size = this.getSize()
        if(!size) return null
        if(size==1) return this.heap.pop()
        const answer = this.heap[0]
        const lastElem = this.heap.pop()
        this.heap[0]=lastElem
        this.bubbleDown(0)
        return answer
    }
    swap(idx1, idx2){
        [this.heap[idx1],this.heap[idx2]] = [this.heap[idx2],this.heap[idx1]]
    }
    getSize(){
        return this.heap.length
    }
}
const MAX_COST = 50*10000
function solution(N, road, K) {
    const obj = {}
    road.forEach(([a,b,c])=> {
        if(!obj[a]) obj[a]=[]
        if(!obj[b]) obj[b]=[]
        obj[a].push([c,b])
        obj[b].push([c,a])
    })
    const minHeap = new MinHeap()
    const distances=new Array(N+1).fill(MAX_COST)
    distances[1]=0
    minHeap.heapPush([0,1])
    while(minHeap.getSize()){
        const [curCost, curNode] = minHeap.heapPop()
        for(const [nxtCost, nxtNode] of obj[curNode]){
            if(nxtCost+curCost<distances[nxtNode]) {
                distances[nxtNode] = nxtCost+curCost
                minHeap.heapPush([nxtCost+curCost, nxtNode])
            }
        }
    }
    return distances.filter((distance)=>distance<=K).length
}