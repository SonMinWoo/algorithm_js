const fs = require('fs');

let js1100 = function() {
  //const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');
  stdin = `.F.F...F
F...F.F.
...F.F.F
F.F...F.
.F...F..
F...F.F.
.F.F.F.F
..FF..F.`
console.log(solution(stdin.split('\n')))
};

let solution = function(s) {
  var answer = 0;
  for(i=0; i<8; i++) {
    for(j=i%2; j<8; j+=2) {
      if(s[i][j] == 'F') answer+=1;
    }
  }
  return answer
};


module.exports = js1100