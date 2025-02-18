const filePath = 'dev/stdin'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n')

const N = Number(input[0])
const men = input[1].split(' ').map(Number)
const women = input[2].split(' ').map(Number)

const answer = solution(N, men, women)
console.log(answer)

function solution(N, men, women) {
  const posMen = []
  const negMen = []
  const posWomen = []
  const negWomen = []

  for (const man of men) {
    if (man < 0) {
      negMen.push(Math.abs(man))
    } else {
      posMen.push(man)
    }
  }
  for (const woman of women) {
    if (woman < 0) {
      negWomen.push(Math.abs(woman))
    } else {
      posWomen.push(woman)
    }
  }

  posMen.sort((m1, m2) => (m2 - m1))
  negMen.sort((m1, m2) => (m2 - m1))
  posWomen.sort((w1, w2) => (w2 - w1))
  negWomen.sort((w1, w2) => (w2 - w1))

  let answer = 0;

  let mi = 0;
  let wi = 0;
  while (mi < posMen.length && wi < negWomen.length) {
    if (posMen[mi] < negWomen[wi]) {
      mi++
      wi++
      answer++
    } else {
      mi++
    }
  }

  mi = 0;
  wi = 0;
  while (mi < negMen.length && wi < posWomen.length) {
    if (posWomen[wi] < negMen[mi]) {
      mi++
      wi++
      answer++
    } else {
      wi++
    }
  }
  
  return answer
}