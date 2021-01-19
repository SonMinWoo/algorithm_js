
let snqfunction = function() {
  console.log(solution([95, 90, 99, 99, 80, 99] ,[1, 1, 1, 1, 1, 1]));
}

function solution(progresses, speeds) {
    var answer = [];
    
    var dev = [];
    for(var i=0; i<progresses.length; i++) {
        dev.push(Math.ceil((100-progresses[i])/speeds[i]));
    }
    var wait = 0;
    var count = 1;
    var tmp = 0;

    while((tmp = dev.shift()) !== undefined) {
      if(tmp <= wait) {
        count += 1;
      } else {
        if(wait === 0) {
          wait = tmp;
          continue;
        }
        wait = tmp;
        answer.push(count);
        count = 1;
      }
    }
    answer.push(count);

    
    return answer;
}

module.exports = snqfunction;
