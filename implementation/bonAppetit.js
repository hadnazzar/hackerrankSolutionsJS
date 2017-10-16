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

function bonAppetit(n, k, b, ar) {
  //console.log(n)
  //console.log(k)
  //console.log(b)
  //console.log(ar)


  var orderSum = 0;
  var result;
  for (var i = 0; i < ar.length; i++) {
    if (i != k) {
      orderSum += ar[i];
    }

  }
  //console.log(orderSum)

  if (orderSum / 2 == b) {
    result = "Bon Appetit";
  }
  else {
    result = b - orderSum / 2;
  }

  return result;


}

function main() {
  var n_temp = readLine().split(' ');
  var n = parseInt(n_temp[0]);
  var k = parseInt(n_temp[1]);
  ar = readLine().split(' ');
  ar = ar.map(Number);
  var b = parseInt(readLine());
  var result = bonAppetit(n, k, b, ar);
  process.stdout.write("" + result + "\n");

}
