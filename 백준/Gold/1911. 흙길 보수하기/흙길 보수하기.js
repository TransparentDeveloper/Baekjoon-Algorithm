const filePath = 'dev/stdin';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [N, L] = input.shift().split(' ').map(Number)
const pools = input.map((str) => str.split(' ').map(Number)).map(([start,end]) => ([start, end-1]))

pools.sort((pool1, pool2) => pool1[0] - pool2[0])

let answer = 0;
let current = 0;
for (const [start, end] of pools) {
  if (current <= start) {
    plank = getPlank(start, end, L)
    answer += plank
    current = start + plank * L
  } 
  else {
    if (current <= end) {
      plank = getPlank(current, end, L)
      answer += plank
      current = current + plank * L
    }
  }
}

console.log(answer);

function getPlank(rStart, rEnd, length) {
  return Math.ceil((rEnd - rStart + 1) / length);
}