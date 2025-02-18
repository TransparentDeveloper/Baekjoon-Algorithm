const filePath = 'dev/stdin';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

const A = input[0]
const B = input[1]

const answer = solution(A, B)
console.log(answer);

function solution(a, b) {
  let cnt = 1
  let tmp = b

  while (tmp !== a) {
    if (checkEven(tmp) && tmp > 0) {
      cnt++
      tmp /= 2
    } else if (checkIsLastOne(tmp)) {
      cnt++
      tmp = Math.floor(tmp / 10)
    } else {
      break
    }
  }

  if (tmp !==  a) {
    return -1;
  }

  return cnt;
}

function checkIsLastOne(input) {
  return input % 10 === 1;
}

function checkEven(input) {
  return input % 2 === 0
}