const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input.push(line)
}).on('close', function () {
  const [n, k] = input[0].split(" ").map(Number)
  console.log(solution(n,k))
});

function getDivisors(n) {
  if (n < 1) return [];
  const divisors = []
  const sqrt = Math.floor(Math.sqrt(n))

  for (let i = 1; i <= sqrt; i++){
    if (n % i === 0) {
      divisors.push(i)
      if(i*i!==n) divisors.push(n/i)
    }
  }
  return divisors.sort((a,b)=>a-b)
}

function solution(n,k){
  const divisors = getDivisors(n)
  if(!divisors[k-1]) return 0
  return divisors[k-1]
}