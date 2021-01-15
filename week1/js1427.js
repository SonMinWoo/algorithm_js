const fs = require('fs');

let js1427 = function() {
  //const input = fs.readFileSync('/dev/stdin').toString().trim().split('').map(num => parseInt(num));
  stdin = `3`
console.log(solution(stdin))
};

let solution = function(s) {
  var answer = '';
  arr = [];
  for(i=0;i<s.length;i++) arr.push(parseInt(s[i]));
  arr.sort();
  for(i=arr.length-1;i>-1;i--) answer += String(arr[i]);
  return answer
};


module.exports = js1427