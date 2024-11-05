const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input.push(line)
}).on('close', function () {
  const n = Number(input.shift())
  
  const timeTable = input.map((schedule) => schedule.split(" ").map(Number))
  timeTable.sort(([s1, e1], [s2, e2]) => {
    if (s1 === s2) 
      return e1 - e2
    return s1-s2
  })
  
  let answer = 1
  let endPoint = timeTable.shift()[1]
  for (const [s, e] of timeTable) {
    
    if (endPoint <= s) {
      answer++
      endPoint = e
    }
    else {
      if (e < endPoint)
        endPoint = e
    } 
  }
  console.log(answer)
});