const COST_UPPER_LIMIT=100000000000

class Heap{
    constructor(){
        this.heap=[]
    }
    bubbleUp(idx){
        const parentIdx=Math.floor((idx-1)/2)
        if(0<parentIdx&&this.heap[idx][0]<this.heap[parentIdx][0]){
            [this.heap[idx],this.heap[parentIdx]]=[this.heap[parentIdx],this.heap[idx]]
            this.bubbleUp(parentIdx)
        }
    }
    bubbleDown(idx){
        const leftIdx=idx*2+1
        const rightIdx=idx*2+2
        let childIdx=idx
        
        if(leftIdx<this.getSize()&&this.heap[leftIdx][0]<this.heap[childIdx][0])
            childIdx=leftIdx
        if(rightIdx<this.getSize()&&this.heap[rightIdx][0]<this.heap[childIdx][0])
            childIdx=rightIdx
        
        if(idx===childIdx) 
            return  
        [this.heap[childIdx],this.heap[idx]]=[this.heap[idx],this.heap[childIdx]]
        this.bubbleDown(childIdx)
    }
    getSize(){
        return this.heap.length
    }
    heappop() {
        if (this.getSize() === 0) 
            return null;
        const answer = this.heap[0];
        const lastOne = this.heap.pop();
        if (this.getSize() > 0) {
            this.heap[0] = lastOne;
            this.bubbleDown(0);
        }
        return answer;
    }
    heappush(newElem){
        this.heap.push(newElem)
        const lastIdx = this.getSize()-1
        this.bubbleUp(lastIdx)
    }
}
function solution(N, road, K) {
    const heap=new Heap()
    
    const obj={}
    for(const [s,e,c] of road){
        if(!obj[s])
            obj[s]=[]
        if(!obj[e])
            obj[e]=[]
        obj[s].push([c,e])
        obj[e].push([c,s])
    }
    
    const distances=new Array(N+1).fill(COST_UPPER_LIMIT)
    distances[1]=0
    heap.heappush([0,1])
    
    while(heap.getSize()!==0){
        const [curCost,curNode]=heap.heappop()
        obj[curNode].forEach(([nxtCost, nxtNode])=>{
            if(nxtCost+curCost<distances[nxtNode]){
                distances[nxtNode]=nxtCost+curCost
                heap.heappush([nxtCost+curCost,nxtNode])
            }
        })
    }
    return distances.filter((distance)=>distance<=K).length
}