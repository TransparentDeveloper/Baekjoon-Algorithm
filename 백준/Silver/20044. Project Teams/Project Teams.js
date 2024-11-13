const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input.push(line)
}).on('close', function () {
  const n = Number(input[0])
  const arr = input[1].split(" ").map(Number)
  const sortedArr = arr.sort((a, b) => a - b)
  
  let point1 = Math.floor((sortedArr.length - 1) / 2)
  let point2 = point1 + 1
  let answer = Infinity

  while (point2 < sortedArr.length) {
    answer = Math.min(answer, sortedArr[point1] + sortedArr[point2])
    point1--
    point2++
  }

  console.log(answer)
});