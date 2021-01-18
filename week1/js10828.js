const fs = require('fs');

let js10828 = function() {
  //const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');
  stdin = `7
pop
top
push 123
top
pop
top
pop`
console.log(solution(stdin.split('\n')))
};


class Stack {
  constructor() {
    this._length = 0;
    this._data = [];
  };
  push(x) {
    this._data.push(x);
    this._length += 1;
  };
  pop() {
    if (this._length === 0) return -1;
    else {
      let elem = this._data[this._length-1];
      this._data.splice(this._length-1, 1);
      this._length -= 1;
      return elem;
    }
  };
  size() {
    return this._length;
  };
  empty() {
    if (this._length === 0) return 1;
    else return 0;
  };
  top() {
    if (this._length === 0) return -1;
    else return this._data[this._length-1];
  }
}

let solution = function(s) {
  let answer = new Stack();
  let tmp;
  let result = '';
  for (i=1; i<parseInt(s[0])+1;i++) {
    tmp = s[i].split(' ');
    if(tmp[0] === 'push') answer.push(tmp[1]);
    else switch(s[i]) {
      case 'pop':
        result += answer.pop() + '\n';
        break;
      case 'size':
        result += answer.size() + '\n';
        break;
      case 'empty':
        result += answer.empty() + '\n';
        break;
      case 'top':
        result += answer.top() + '\n';
        break;
    }
  }
  console.log(result);
};

module.exports = js10828;