const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function (line) {
  input.push(line)
}).on('close', function () {
  const n = Number(input[0])
  const aArr = input[1].split(" ").map(Number)
  const bArr = input[2].split(" ").map(Number)
  
  const minHeap = new MinHeap()
  const maxHeap = new MaxHeap()
  
  aArr.forEach((aElem) => { minHeap.push(aElem) })
  bArr.forEach((bElem) => { maxHeap.push(bElem) })
  
  let answer = 0
  for (let i = 0; i < n; i++) 
    answer += minHeap.pop() * maxHeap.pop()
  console.log(answer)
});

class MaxHeap{
  constructor() {
    this.heap = []
  }
  _swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]]
  }
  _bubbleUp(idx) {
    let parentIdx = Math.floor((idx - 1) / 2)
    while (0 <= parentIdx && this.heap[idx] > this.heap[parentIdx]) {
      this._swap(idx, parentIdx)
      idx = parentIdx 
      parentIdx = Math.floor((idx - 1) / 2)
    }
  }
  _bubbleDown(idx) {
    const lastIdx = this.heap.length - 1
    
    while (idx < lastIdx) {
      const leftIdx = idx * 2 + 1
      const rightIdx = idx * 2 + 2

      let targetIdx = idx;
      if (leftIdx <= lastIdx && this.heap[leftIdx] > this.heap[targetIdx]) 
        targetIdx = leftIdx
      if (rightIdx <= lastIdx && this.heap[rightIdx] > this.heap[targetIdx]) 
        targetIdx = rightIdx
      
      if (targetIdx === idx) break
      
      this._swap(targetIdx, idx)
      idx = targetIdx
    }
  }
  push(newVal) {
    this.heap.push(newVal)
    this._bubbleUp(this.heap.length - 1)
  }
  pop() {
    if (!this.heap.length) return null
    const answer = this.heap[0]
    const lastVal = this.heap.pop()
    if (!!this.heap.length) {
      this.heap[0] = lastVal
      this._bubbleDown(0)
    }
    return answer
  }
}


class MinHeap{
  constructor() {
    this.heap = []
  }

  _swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]]
  }

  _bubbleUp(idx) {
    let parentIdx = Math.floor((idx - 1) / 2)
    while (parentIdx >= 0 && this.heap[idx] < this.heap[parentIdx]) {
      this._swap(parentIdx, idx)
      idx = parentIdx
      parentIdx = Math.floor((idx - 1) / 2)
    }
  }
  _bubbleDown(idx) {
    const lastIdx = this.heap.length - 1

    while (idx < lastIdx) {
      const leftIdx = idx * 2 + 1
      const rightIdx = idx * 2 + 2
      let targetIdx = idx

      if (leftIdx <= lastIdx && this.heap[leftIdx] < this.heap[targetIdx]) {
        targetIdx = leftIdx
      }
      if (rightIdx <= lastIdx && this.heap[rightIdx] < this.heap[targetIdx]) {
        targetIdx = rightIdx
      }

      if (targetIdx === idx) break

      this._swap(targetIdx, idx)
      idx = targetIdx
    }
  }

  push(newVal) {
    this.heap.push(newVal)
    this._bubbleUp(this.heap.length - 1)
  }
  
  pop() {
    if (!this.heap.length) return null
    const answer = this.heap[0]
    const lastVal = this.heap.pop()
    if (!!this.heap.length) {
      this.heap[0] = lastVal
      this._bubbleDown(0)
    }
    return answer
  }
}