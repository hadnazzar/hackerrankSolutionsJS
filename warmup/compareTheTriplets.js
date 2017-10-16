process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
  input_stdin += data;
});

process.stdin.on('end', function () {
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function solve(a0, a1, a2, b0, b1, b2) {
  var aLast = 0;
  var bLast = 0;
  var result = [];
  if (a0 > b0) {
    aLast++;
  }
  if (a1 > b1) {
    aLast++;
  }
  if (a2 > b2) {
    aLast++;
  }
  if (a0 < b0) {
    bLast++;
  }
  if (a1 < b1) {
    bLast++;
  }
  if (a2 < b2) {
    bLast++;
  }
  //console.log(aLast,bLast);
  result = [aLast, bLast];
  return result;
}

function main() {
  var a0_temp = readLine().split(' ');
  var a0 = parseInt(a0_temp[0]);
  var a1 = parseInt(a0_temp[1]);
  var a2 = parseInt(a0_temp[2]);
  var b0_temp = readLine().split(' ');
  var b0 = parseInt(b0_temp[0]);
  var b1 = parseInt(b0_temp[1]);
  var b2 = parseInt(b0_temp[2]);
  var result = solve(a0, a1, a2, b0, b1, b2);
  console.log(result.join(" "));



}
