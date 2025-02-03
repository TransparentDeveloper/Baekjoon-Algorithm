const filePath = 'dev/stdin';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const n = Number(input.shift());

const expects = input.map(Number);
expects.sort((expect1, expect2) => (expect1 - expect2));

let answer = 0;
for (let i = 0; i < n; i++) {
  const real = i + 1;
  answer += Math.abs(real - expects[i])
}

console.log(answer);