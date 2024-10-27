const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input.push(line)
}).on('close', function () {
  const num = parseInt(input[0])
  const answer = solution(num).join(' ')
  console.log(answer)
});

function solution(num) {
  const isPrime = aratos(num)
  const primes = []
  for (let elem = 2; elem <= num ; elem++)
    if (isPrime[elem]) 
      primes.push(elem)
  
  const primesSize = primes.length
  for (let idx1 = 0; idx1 < primesSize; idx1++) {
    const val1 = primes[idx1]
    for (let idx2 = idx1; idx2 < primesSize; idx2++){
      const val2 = primes[idx2]
      if(val1 + val2 >= num) continue
      for (let idx3 = idx2; idx3 < primesSize; idx3++){
        const val3 = primes[idx3]
        if(val1 + val2+ val3 >= num) continue
        
        const val4 = num - (val1 + val2 + val3)
        if(isPrime[val4]) return [val1,val2,val3,val4]
      }
    }
  }
  
  return [-1]
}

function aratos(upperLimit) {
  const isPrime = new Array(upperLimit + 1).fill(true) 
  isPrime[0] = false
  isPrime[1] = false

  const sqrt = Math.sqrt(upperLimit)

  for (let i = 2; i < sqrt; i++){
    if (!isPrime[i]) continue
    for (let j = i * i; j <= upperLimit; j += i) 
      isPrime[j] = false
  }

  return isPrime
}