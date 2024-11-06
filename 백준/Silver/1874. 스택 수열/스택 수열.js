const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
  input.push(line)
}).on('close', function () {
  const n = Number(input.shift())
  const stack = new Stack()
  
  let curNum = 1
  const answers = []

  for (const i of input) {
    const target = Number(i)
    
    while (curNum <= target) {
      stack.push(curNum)
      answers.push("+")
      curNum += 1
    } 
    if (!stack.isEmpty() && stack.peek() == target) {
      stack.pop()
      answers.push("-")

    }
  }

  if (!stack.isEmpty()) console.log("NO")
  else console.log(answers.join("\n"))
});

class Stack{
  constructor() {
    this.stack = []
  }
  push(num) {
    this.stack.push(num)
  }
  pop() {
    if (!this.stack.length) return null
    return this.stack.pop()
  }
  peek() {
    if (!this.stack.length) return null
    return this.stack[this.stack.length - 1]
  }
  isEmpty() {
    return this.stack.length === 0
  }
}