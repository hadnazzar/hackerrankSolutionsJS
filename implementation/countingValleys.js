function processData(input) {
  var inputArray = input.split("");

  var heightLevel = 0;
  var valleyCount = 0;
  for (var i = 0; i < inputArray.length; i++) {
    var temp = heightLevel;
    //console.log(i)
    if (inputArray[i] == 'U') {
      heightLevel++;
    }
    else if (inputArray[i] == 'D') {
      heightLevel--;
    }
    if (heightLevel == -1 && temp == 0) {
      //console.log("countedValley")
      valleyCount++;
    }
  }

  console.log(valleyCount);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
