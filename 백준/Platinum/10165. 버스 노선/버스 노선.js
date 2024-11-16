const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input.push(line)
}).on('close', function () {
  const n = Number(input[0])
  const m = Number(input[1])
  
  const lines = []
  for (let i = 2; i < m+2; i++) {
    const [s, e] = input[i].split(" ").map(Number)
    
    if (e == 0)
      lines.push({ s: s, e: n, line: i - 1 })
    else if (e < s) {
      lines.push({ s: s - n, e, line: i - 1 })
      lines.push({ s, e: e + n, line: i - 1 })
    }
    else
      lines.push({ s, e, line: i - 1 })
  }

  lines.sort((line1, line2) => { 
    if (line1.s === line2.s) 
      return line2.e - line1.e
    return line1.s - line2.s
  })
  const set = new Set()
  let endPoint = lines[0].s - 1;
  lines.forEach((line) => { 
    if (endPoint < line.e) {
      set.add(line.line)
      endPoint = line.e
    }
  })
  
  const answer = Array.from(set)
  answer.sort((a,b) => a-b)
  console.log(answer.join(" "))
});