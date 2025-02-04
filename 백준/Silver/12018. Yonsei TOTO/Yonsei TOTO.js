const filePath = 'dev/stdin';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let [n, m] = input.shift().split(' ').map(Number);
const needTos = [];
for (let i = 0; i < n * 2; i+=2) {
  const [want, limit] = input[i].split(' ').map(Number);
  const mileages = input[i + 1].split(' ').map(Number);

  mileages.sort((mileage1, mileage2) => mileage1 - mileage2);
  if (want < limit) {
    needTos.push(1);
  } else {
    const targetIdx = (want === limit) ? 0 : (want - limit);
    needTos.push(mileages[targetIdx]);
  }
}

needTos.sort((needTo1, needTo2) => needTo1 - needTo2);

let answer = 0;
for (const needTo of needTos) {
  if (m < needTo) break;
  m -= needTo;
  answer++;
}
console.log(answer);