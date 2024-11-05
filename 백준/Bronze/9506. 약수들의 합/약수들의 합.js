const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input.push(line)
}).on('close', function () {
  const answers = []
  for (const num of input) {
    const n = Number(num)
    if (n !== -1) {
      const divisors = getDivisors(n)
      divisors.sort((a, b) => a - b)
      const sum = divisors.reduce((acc, elem) => acc + elem, 0)
      if (sum == n) 
        answers.push(`${n} = ${divisors.join(" + ")}`)
      else
        answers.push(`${n} is NOT perfect.`)
    }
  }
  console.log(answers.join('\n'))
});

function getDivisors(n) {
  const divisors = [1]

  const sqrt = Math.floor(Math.sqrt(n))

  for (let i = 2; i <= sqrt; i++){
    if (n%i ===0) {
      divisors.push(i)
      if (i * i != n) 
        divisors.push(n/i)
    }
  }
  return divisors
}