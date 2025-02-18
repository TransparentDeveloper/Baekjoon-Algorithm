const filePath = 'dev/stdin';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const units = [25, 10, 5, 1];

const T = Number(input.shift());
const answers = [];

for (let i = 0; i < T; i++){
  let returnBack = Number(input[i])
  const answer = []
  
  for (const unit of units) {
    const cnt = Math.floor(returnBack / unit)
    answer.push(cnt)
    returnBack -= (cnt * unit) 
  }

  answers.push(answer.join(' '));
}

console.log(answers.join('\n'));