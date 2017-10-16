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

function getRecord(s) {
  var lowScore = s[0];
  var highScore = s[0];
  var result = [];
  var scoreIncreased = 0;
  var scoreDecreased = 0;
  for (var i = 1; i < s.length; i++) {
    if (s[i] > highScore) {
      scoreIncreased++;
      highScore = s[i];
    }
    if (s[i] < lowScore) {
      scoreDecreased++;
      lowScore = s[i];
    }
  }
  //console.log(scoreIncreased,scoreDecreased)
  result.push(scoreIncreased);
  result.push(scoreDecreased);
  return result;

}

function main() {
  var n = parseInt(readLine());
  s = readLine().split(' ');
  s = s.map(Number);
  var result = getRecord(s);
  console.log(result.join(" "));

}
