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

function sockMerchant(n, ar) {
  // Complete this function

  var colors = [];
  var pairs = 0;

  for (var i = 0; i < n; i++) {
    if (!colors.includes(ar[i])) {
      colors.push(ar[i]);
      //console.log(i);
      //console.log("added");
    } else {
      //console.log(i);
      //console.log("removed");
      pairs++;
      //console.log(colors);
      colors = colors.filter(function (el) {
        //console.log(ar[i]==el);
        //To remove from contain array: 
        //!toRemoveArray.includes( el );
        return !(ar[i] == el);
      })
      //console.log(colors);
    }
  }
  return (pairs);

  /*
  var stockArray=[];
   ar = ar.sort();
   var count=1;
   var canSell = 0;
   //console.log(ar);
   for(var i=0;i<n-1;i++){
       
       if(ar[i] == ar[i+1]){
           count++;
       }
       else{
           canSell += Math.floor(count/2)
           count=1;
       }
   }
   */
  return pairs;
}

function main() {
  var n = parseInt(readLine());
  ar = readLine().split(' ');
  ar = ar.map(Number);
  var result = sockMerchant(n, ar);
  process.stdout.write("" + result + "\n");

}
