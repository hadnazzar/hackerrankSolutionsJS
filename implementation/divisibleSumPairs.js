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

function divisibleSumPairs(n, k, ar) {
  //console.log(n)
  //console.log(k)
  //console.log(ar)
  var result = 0;
  for (var i = 0; i < n; i++) {
    for (var j = i + 1; j < n; j++) {
      if ((ar[i] + ar[j]) % k == 0) {
        result++;
        //console.log(i,j)
      }
    }
  }

  return result;

}

function main() {
  var n_temp = readLine().split(' ');
  var n = parseInt(n_temp[0]);
  var k = parseInt(n_temp[1]);
  ar = readLine().split(' ');
  ar = ar.map(Number);
  var result = divisibleSumPairs(n, k, ar);
  process.stdout.write("" + result + "\n");

}
