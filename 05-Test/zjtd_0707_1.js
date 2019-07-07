while(line = readline()){
  var lines = line.split(' ')
  var arr = []
  for(let i=0;i<lines.length;i++){
    arr.push(parseInt(lines[i]))
  }
  var n = arr[0]
  var arr1 = arr.slice(1,n+1)
  var arr2 = arr.slice(n+1)
  for(let i=0;i<arr1.length;i++){
    arr1[i] = parseInt(arr1[i])
  }
  for(let i=0;i<arr2.length;i++){
    arr2[i] = parseInt(arr2[i])
  }
  function getScores(n,arr1,arr2) {
    arr1.sort((a,b) => a - b)
    arr2.sort((a,b) => a - b)
    console.log(arr1,arr2)
  
    var i=0, j=0, x=n-1, y=n-1,score=0; 
    var isLast = false
    while(!isLast) { 
      if(x == i) {
        isLast = true; 
      }
      if(arr1[x] > arr2[y]) {
        x--; 
        y--; 
        score += 1; 
      } 
      else if(arr1[i]> arr2[j]) {
        i++; 
        j++; 
        score += 1; 
      } else {
        if(arr1[i] < arr2[y]) {
          score -= 1; 
          i++; 
          y--; 
        }
      } 
    }
    return score
  }

  var output = getScores(n,arr1,arr2);
  print(output);
}
  