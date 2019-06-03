while(input=readline()){

  function cowNum(n){
    if(n < 0){
      return 0;
    }
    var index = [];
    index[0] = 0;
    index[1] = 1;
    index[2] =1;
    for(var i = 3; i <= n; i++){
      if(i <= 7){
          index[i] = index[i-1] + index[i-2];
      }else if(i > 7 && i <= 10){
          index[i] = index[i-1] + index[i-2] - index[i-7];
      }else {
          index[i] = index[i-1] + index[i-2] - index[i-7]- index[i-11];
      }
    } 
    return index[n];
  };

  var output = cowNum(input);
  print(output);
}
  console.log(cowNum(1));
  console.log(cowNum(2));
  console.log(cowNum(3));
  console.log(cowNum(4));
  console.log(cowNum(5));
  console.log(cowNum(6));
  console.log(cowNum(7));
  console.log(cowNum(8));
  console.log(cowNum(9));
  console.log(cowNum(10));
  console.log(cowNum(11));
  console.log(cowNum(12));


