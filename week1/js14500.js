const fs = require('fs');

let js14500 = function() {
  //const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');
  stdin = `4 10
1 2 1 2 1 2 1 2 1 2
2 1 2 1 2 1 2 1 2 1
1 2 1 2 1 2 1 2 1 2
2 1 2 1 2 1 2 1 2 1`
    console.log(solution(stdin.split('\n')))
};

let MAP = [];// global
let maxY// global
let maxX// global
let answer = 0; // global
let visited; //global
let shapeY = [-1, 0, 1, 0]; //global
let shapeX = [0, 1, 0, -1]; //global

let solution = function(s) {
  maxY = s[0].split(' ')[0];
  maxX = s[0].split(' ')[1];
  visited = Array(maxY);

  for(let i=1;i<=maxY;++i) {
    MAP.push(s[i]);
  }

  MAP.forEach(function(value, index){
      MAP[index] = value.split(' ').map(Number)
  })

  for(var i=0; i<maxY; i++){
    visited[i] = Array(maxX);
    for(var j=0; j<maxX; j++){
        visited[i][j] = false;
    }
  }
  
  for(let i=0; i<maxY; ++i) {
    for(let j=0; j<maxX; ++j) {
      visited[i][j] = true;
      dfs(i, j, MAP[i][j],1);
      extra(i,j);
      visited[i][j] = false;
    }
    
  }
  return answer
};

function dfs(y, x, sum, count){
    if(count === 4){
        answer = Math.max(answer, sum);
        return;
    }else{
        for(var i=0; i<4; i++){
            var nextX = x + shapeX[i];
            var nextY = y + shapeY[i];
            if(nextX<0 || nextY <0 || nextX>=maxX || nextY >=maxY) continue;
            if(!visited[nextY][nextX]){
                visited[nextY][nextX] = true;
                dfs(nextY, nextX, sum+MAP[nextY][nextX], count+1);
                visited[nextY][nextX] = false;
            }
        }
    }
}

function extra(y,x){
    for(let i=0; i<4; i++){
        let sum = MAP[y][x];
        for(let j=0; j<3; j++){
            let nextX = x + shapeX[(i+j)%4];
            let nextY = y + shapeY[(i+j)%4];
            if(0 <= nextX && nextX < maxX && 0 <= nextY && nextY < maxY){
                sum += MAP[nextY][nextX];
            }else{
                break;
            }
        }
        answer = Math.max(answer, sum);
    }
}

module.exports = js14500;