    var lines = parseInt(readline());
    for(var i=0;i<lines;i++){
    var input = readline().split(" ");
    var m = input[0];
    var splitArr = [];
    var allLines = input.slice(1,input.length-1) ;
    splitArr.push(allLines);

    var newArr = (function(n,inputArr){
      var arr = [];
      for(var i=0;i<inputArr.length;i++){
        if(inputArr != null && inputArr.length > n){
          var arrList = inputArr.slice(0,n-1)
          arr.push(arrList);
        }
        if(inputArr !=null){
          arr.push(inputArr[i]);
        }
      }

    return arr;
  })(m,splitArr);
  
}
print(newArr);
    