const filePath = 'dev/stdin'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n')

const N = Number(input[0])
const A = input[1].split(' ').map(Number)

const answer = solution(N, A)
console.log(answer)

function solution(N, A) {
  let cost = 0;

  for (let i = 0; i < N; i++){
    if (i + 2 < N && A[i + 1] > A[i + 2]) {
      const minimum = Math.min(A[i], A[i + 1] - A[i + 2])
      A[i] -= minimum
      A[i + 1] -= minimum
      cost += 5 * minimum
      
      while (i + 2 < N && A[i] > 0 && A[i + 1] > 0 && A[i + 2] > 0) {
        for (let j = i; j < i + 3; j++){
          A[j]--;
        }
        cost += 7;
      }
      while (A[i] > 0) {
        A[i]--;
        cost += 3;
      }
    } else {
      while (i + 2 < N && A[i] > 0 && A[i + 1] > 0 && A[i + 2] > 0) {
        for (let j = i; j < i + 3; j++){
          A[j]--;
        }
        cost += 7;
      }
      while (i + 1 < N && A[i] > 0 && A[i + 1] > 0) {
        for (let j = i; j < i + 2; j++){
          A[j]--;
        }
        cost += 5;
      }
      while (A[i] > 0) {
        A[i]--;
        cost += 3;
      }
    }
  }
  return cost;
}