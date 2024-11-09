const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input.push(line)
}).on('close', function () {
  const n = Number(input.shift())
  const timeTable = input.map((row) => { 
    return row.split(" ").map(Number)
  })
  const answer = solution(n, timeTable)
  console.log(answer)
});


function solution(n, timeTable) {
  timeTable.sort(([s1,e1], [s2, e2]) => {
    if (s1 === s2) 
      return e1 - e2
    return s1 - s2
  })
  
  let answer = 0
  let endPoint = 0
  for (const [s,e] of timeTable) {
    if (endPoint <= s) {
      endPoint = e
      answer++
    }
    if (e < endPoint) {
      endPoint = e
    }
  }
  return answer
}