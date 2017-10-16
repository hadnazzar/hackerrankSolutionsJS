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

function migratoryBirds(n, a) {
  // Complete this function


  /*
      var arraySorted = a.sort();
      var temp=a[0];
      var count=0;
      var maxCount=1;
      var tempArray=[];
      var popular=0;
      for(var i =0;i<arraySorted.length;i++){
          if(temp==arraySorted[i]){
              count++;
          }
          else{ 
              if (count > maxCount) {
                  popular = arraySorted[i-1];
                  maxCount = count;
                  //console.log(popular)
                  tempArray.pop();
                  tempArray.push(popular);
              }
              temp = arraySorted[i];
              count=1;
          }
      }
      tempArray.sort()
      return tempArray[0];
  */

  var temp = 1;
  var highest = 1;
  var arr = [0, 0, 0, 0, 0];
  //console.log(ar);
  for (var i = 0; i < a.length; i++) {
    if (a[i] == 1) {
      arr[0]++;
    }
    if (a[i] == 2) {
      arr[1]++;
    }
    if (a[i] == 3) {
      arr[2]++;
    }
    if (a[i] == 4) {
      arr[3]++;
    }
    if (a[i] == 5) {
      arr[4]++;
    }
  }
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > temp) {
      temp = arr[i];
      highest = i + 1;
    }
  }

  return highest;


}

function main() {
  var n = parseInt(readLine());
  ar = readLine().split(' ');
  ar = ar.map(Number);
  var result = migratoryBirds(n, ar);
  process.stdout.write("" + result + "\n");

}
