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

function main() {
  var n = parseInt(readLine());
  var unsorted = [];
  for (var unsorted_i = 0; unsorted_i < n; unsorted_i++) {
    unsorted[unsorted_i] = readLine();
  }
  // your code goes here
  /*
  var sorted = false;
  while(!sorted){
       for(var i = 0;i<unsorted.length-1;i++){
          var a = parseFloat(unsorted[i]);
          var b = parseFloat(unsorted[i+1]);
           var temp = unsorted[i+1];
          if(a>b){
              unsorted[i+1] = unsorted[i];
              unsorted[i] = temp;
              sorted = false;
          }
          else{
              sorted = true;
          }
      
      }
  }
  
  for(var i = 0;i<unsorted.length;i++){
      console.log(unsorted[i])
  }
  
  */

  function compare(a, b) {
    if (a.length > b.length) {
      return 1;
    }
    else if (a.length < b.length) {
      return -1;
    }
    else if (a.length === b.length) {
      for (var i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
          return 1;
        }
        if (a[i] < b[i]) {
          return -1;
        }
      }
    }
  }

  unsorted.sort(compare);
  for (item in unsorted) {
    console.log(unsorted[item]);
  }


}
