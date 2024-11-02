const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input.push(line)
}).on('close', function () {
  const nums = input.map(Number);
  const t = nums.shift();
  const maxNum = Math.max(...nums);

  const divisorSum = new Array(maxNum + 1).fill(0);
  const g = new Array(maxNum + 1).fill(0);

  for (let i = 1; i <= maxNum; i++) {
    for (let j = i; j <= maxNum; j += i) {
      divisorSum[j] += i; 
    }
  }

  for (let i = 1; i <= maxNum; i++) {
    g[i] = g[i - 1] + divisorSum[i];
  }

  const results = nums.map(num => g[num]);
  console.log(results.join('\n'));
});
