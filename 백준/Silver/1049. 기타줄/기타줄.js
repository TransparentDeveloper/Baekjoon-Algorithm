const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input.push(line)
}).on('close', function () {
  const [n, m] = input[0].split(" ").map(Number)
 
  let minPackageCost = Infinity
  let minEachCost = Infinity

  for (let i = 1; i <= m; i++) {
    const [packageCost, eachCost] = input[i].split(" ").map(Number)  
    minPackageCost = Math.min(minPackageCost, packageCost)
    minEachCost = Math.min(minEachCost, eachCost)
  }

  let answer = 0
  if (minEachCost * 6 < minPackageCost) 
    answer = n * minEachCost
  else {
    const packageBundle = Math.floor(n / 6)
    const left = n % 6
    
    if (minPackageCost < minEachCost * left) {
      if (left == 0)
        answer = packageBundle * minPackageCost
      else
        answer = (packageBundle + 1) * minPackageCost
    }
    else
      answer = packageBundle * minPackageCost + left * minEachCost
  }

  console.log(answer)
});