
let sortbignum = function() {
  console.log(solution([3, 30, 34, 5, 9]));
}

function qsort(pivot, arr) {
  
  var left = [];
  var right = [];
  if(arr.length === 0) {
    if(pivot === undefined) return [];
    return [pivot];
  }
  if(arr.length === 1) {
    if(compare(pivot, arr[0])) return [arr[0], pivot];
    else return [pivot, arr[0]];
  }
  for(i in arr) {
    if(compare(pivot, arr[i])) left.push(arr[i]);
    else right.push(arr[i]);
  }
  console.log(pivot, arr, left, right)
  return qsort(left.shift(), left).concat([pivot], qsort(right.shift(), right));
}


//n이 m보다 우선순위가 높으면 true, 미만이면 false 
function compare(n, m) {
    var loop = Math.max(n.length, m.length);

    for(var i=0; i<loop; ++i) {
        if(n.length < i+1) {
          for(var j=0; j < n.length; ++j) {
            if(parseInt(n[j]) !== parseInt(m[i])) return (parseInt(n[j]) > parseInt(m[i]));
          }
        } else if (m.length < i+1){
          for(var j=0; j < m.length; ++j) {
            if(parseInt(n[i]) !== parseInt(m[j])) return (parseInt(n[i]) > parseInt(m[j]));
          }
        } else {
            if(parseInt(n[i]) > parseInt(m[i])) {
                return true;
            } else if(parseInt(n[i]) < parseInt(m[i])) {
                return false;
            }
        }
    }
    return true
}


function solution(numbers) {
    var answer = '';
    var str = numbers.map(x => String(x));
    var len = str.length;
    var tmp = 0;
    for(var i=0; i<len; ++i) {
      if(numbers[i] > tmp) tmp = numbers[i];
    }
    if(tmp === 0) return "0";

    var answer_list = qsort(str.shift(), str);
    console.log(answer_list)
    
    for(var i=len-1; i>-1; i--) answer += answer_list[i];
    
    
    return answer;
}

module.exports = sortbignum;
