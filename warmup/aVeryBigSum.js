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
var Sum = 0;
function aVeryBigSum(n, ar) {
  for (var i = 0; i < ar.length; i++) {
    Sum += ar[i];
  }
  return Sum;
}

function main() {
  var n = parseInt(readLine());
  ar = readLine().split(' ');
  ar = ar.map(Number);
  var result = aVeryBigSum(n, ar);
  process.stdout.write("" + result + "\n");

}
