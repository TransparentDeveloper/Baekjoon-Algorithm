const filePath = 'dev/stdin';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const answers = []
for (const info of input) {
  const [L, P, V] = info.split(' ').map(Number)
  if (L === 0 && P === 0 && V === 0) {
    break;
  }
  
  let answer = L * Math.floor(V / P);
  answer += Math.min(V % P, L);  
  
  answers.push(answer)
}

console.log(answers.map((answer, idx) => `Case ${idx + 1}: ${answer}`).join('\n'))