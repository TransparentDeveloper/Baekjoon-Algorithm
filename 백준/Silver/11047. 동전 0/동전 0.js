const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input.push(line)
}).on('close', function () {
  let [n, k] = input.shift().split(" ").map(Number)

  let answer = 0
  input.reverse()
  for (const coin of input) {
    const cnt = Math.floor(k / coin)
    k -= (cnt * coin)
    answer += cnt
  }

  console.log(answer)
});