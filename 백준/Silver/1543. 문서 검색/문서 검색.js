const filePath = 'dev/stdin';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let document = input[0]
const find = input[1]

console.log(document.split(find).length - 1)