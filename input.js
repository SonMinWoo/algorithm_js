const fs = require('fs');

//줄바꿈 input
const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');

//띄어쓰기 input
const stdin = fs.readFileSync('/dev/stdin').toString().split(' ');

//숫자 input list로 받기
const input = fs.readFileSync('/dev/stdin').toString().trim().split('').map(num => parseInt(num));