const filePath = 'dev/stdin';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [n, c] = input.shift().split(' ').map(Number)
const m = Number(input.shift())

let answer = 0;
const boxInfos = []
input.forEach((boxInfo) => { 
  boxInfos.push(boxInfo.split(' ').map(Number))
})

boxInfos.sort((info1, info2) => { 
  if (info1[1] === info2[1]) {
    return info1[0] - info2[0]
  }
  return info1[1] - info2[1]
})

const amounts = new Array(n+1).fill(0)
boxInfos.forEach(([startRegion, endRegion, amount]) => {
  let maxAmount = 0;
  for (let region = startRegion; region < endRegion; region++){
    maxAmount = Math.max(amounts[region], maxAmount)
  }
  const loadableAmount = Math.min(c - maxAmount, amount);
  answer +=  loadableAmount
  for (let region = startRegion; region < endRegion; region++){
    amounts[region] += loadableAmount
  }
})

console.log(answer);