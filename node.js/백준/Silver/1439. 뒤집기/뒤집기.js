const filePath = 'dev/stdin'
const input = require('fs').readFileSync(filePath).toString().trim()

const answer = solution(input)
console.log(answer)

function solution(bitString) {
  if (bitString.length === 1) {
    return 0
  }
  
  const bits = bitString.split('').map(Number);
  const chunkCounts = [0, 0]
  for (let i = 1; i < bits.length; i++){
    if (bits[i] !== bits[i-1]) {
      chunkCounts[bits[i - 1]]++
    }
  }
  chunkCounts[bits[bits.length - 1]]++
  return Math.min(...chunkCounts) 
}