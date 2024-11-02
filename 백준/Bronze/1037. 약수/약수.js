const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input.push(line)
}).on('close', function () {
  const n = Number(input[0])
  const divisors = input[1].split(" ").map(Number)
  const answer = solution(n, divisors)
  console.log(answer)
});

function solution(n, divisors) {
  const maxDivisor = Math.max(...divisors)
  const minDivisor = Math.min(...divisors)
  return maxDivisor*minDivisor
}