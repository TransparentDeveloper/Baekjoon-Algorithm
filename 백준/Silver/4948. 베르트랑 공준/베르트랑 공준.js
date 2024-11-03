const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input.push(line)
}).on('close', function () {
  const ns = input.map(Number)
  const isPrime = sieve()
  let answer = []
  for (const n of ns) {
    if (n !== 0) {
      let count = 0;
      for (let i = n + 1; i <= 2 * n; i++) {
        if (isPrime[i])
          count++
      }
      answer.push(count)
    }
  }

  console.log(answer.join("\n"))
});

function sieve() {
  const MAX_NUM = 123456 * 2
  const isPrime = new Array(MAX_NUM + 1).fill(true)
  const sqrt = Math.sqrt(MAX_NUM)
  isPrime[0] = false
  isPrime[1] = false 
 
  for (let i = 2; i <= sqrt; i++) {
    if (!isPrime[i]) continue
    for (let j = i * i; j <= MAX_NUM; j += i) {
      isPrime[j] = false
    }
  }
  return isPrime
}