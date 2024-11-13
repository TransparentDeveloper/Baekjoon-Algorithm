const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input.push(line)
}).on('close', function () {
  const [n, m] = input[0].split(" ").map(Number)
  
  const arr = []
  const pairs = []
  
  for (let i = 1; i <= n; i++)
    arr.push(Number(input[i]))
  for (let i = n + 1; i <= n + m; i++){
    const [lower, upper] = input[i].split(" ").map(Number)
    pairs.push([lower, upper])
  }

  const segmentTree = new SegmentTree(arr)
  const answer = []
  pairs.forEach(([left, right]) => {
    const [min, max] = segmentTree.getSubMinMax(left-1, right-1)
    
    answer.push(`${min} ${max}`)
   })

  console.log(answer.join("\n"))
});

class SegmentTree {
  constructor(arr) {
    this.arr = [...arr]
    this.tree = new Array(arr.length * 4).fill(0)
    
    if (arr.length > 1) {
      this._build(0, 0, this.arr.length - 1)
    }
  }
  _build(cur, start, end) {
    if (start == end) {
      this.tree[cur] = [this.arr[start], this.arr[start]]
      return this.tree[cur]
    }
    
    const mid = Math.floor((start + end) / 2)
    
    const leftMinMax = this._build(cur * 2 + 1, start, mid)
    const rightMinMax = this._build(cur * 2 + 2, mid + 1, end)
    
    this.tree[cur] = [
      Math.min(leftMinMax[0], rightMinMax[0]),
      Math.max(leftMinMax[1], rightMinMax[1])
    ]
    return this.tree[cur]
  }

  getSubMinMax(left, right) {
    if (right < left || left < 0 || this.arr.length <= right) {
      throw new Error("입력 범위가 잘못되었다.")
    }

    return this._getSubMinMax(0,0,this.arr.length-1, left, right)
  }

  _getSubMinMax(cur, start, end, left, right) {
    if (right < start || end < left) return [Infinity, -Infinity]
    if (left <= start && end <= right)
      return this.tree[cur]

    const mid = Math.floor((start + end) / 2)
    const leftMinMax = this._getSubMinMax(2 * cur + 1, start, mid, left, right)
    const rightMinMax = this._getSubMinMax(2 * cur + 2, mid + 1, end, left, right)

    return [
      Math.min(leftMinMax[0], rightMinMax[0]),
      Math.max(leftMinMax[1], rightMinMax[1])
    ]
  }
}