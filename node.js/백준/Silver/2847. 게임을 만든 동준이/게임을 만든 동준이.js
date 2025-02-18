const filePath = 'dev/stdin';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

const N = input.shift();
const arr = [...input];

const answer = solution(N, arr);
console.log(answer);

function solution(N, arr) {
  let answer = 0;  
  for (let i = N - 1; i > 0; i--) {
    if (arr[i] <= arr[i - 1]) {
      answer += (arr[i - 1] - arr[i] + 1)
      arr[i - 1] -= (arr[i - 1] - arr[i] + 1)
    }
  }
  return answer;
}