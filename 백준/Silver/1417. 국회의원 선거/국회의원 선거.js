const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input.push(line)
}).on('close', function () {
  const n = Number(input.shift())
  let dasom = Number(input.shift())
  const candidate = input.map(Number)
  
  const heap = new MaxHeap()
  candidate.forEach((elem) => { 
    heap.push(elem)
  })
  let answer = 0
  let maxVal = heap.pop()
  while (dasom <= maxVal) {
    dasom += 1
    heap.push(maxVal - 1)
    maxVal = heap.pop()
    answer++
  }

  console.log(answer)
});

class MaxHeap { 
  constructor() {
    this.heap = []
  }

  searchMax() {
    return this.heap[0]
  }

  searchAll() {
    return this.heap
  }

  push(newVal) {
    this.heap.push(newVal)
    this._bubbleUp(this.heap.length - 1)
  }

  pop() {
    if(!this.heap.length) return null
    const maxVal = this.heap[0]
    const lastVal = this.heap.pop()
    if (this.heap.length) {
      this.heap[0] = lastVal
      this._bubbleDown(0)
    } 
    return maxVal
  }
  
  _bubbleUp(idx) {
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2)
      if (this.heap[idx] > this.heap[parentIdx]) {
        this._swap(idx, parentIdx)
        idx = parentIdx
      } else break;
   } 
  }

  _bubbleDown(idx) {
    const lastIdx = this.heap.length - 1
    
    while (true) {
      const leftIdx = idx * 2 + 1
      const rightIdx = idx * 2 + 2
      
      let maxIdx = idx
      if (leftIdx <= lastIdx && this.heap[leftIdx] > this.heap[maxIdx])
        maxIdx = leftIdx
      if (rightIdx <= lastIdx && this.heap[rightIdx] > this.heap[maxIdx])
        maxIdx = rightIdx
      
      if (maxIdx === idx) break
      this._swap(maxIdx, idx)
      idx = maxIdx
    }
  }

  _swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]]
  }
}