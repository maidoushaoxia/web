function encode(input){
    var result = {};
    var reg = /(\\w+)=(\\w+)&*/g;
    input.replace(reg,function(p1,key,value){
      result[key] = (result[key] === void 0 ? value : [].concat(result[key],value))
      })  
      return result; 
    }


var input = readline();

try{
  print(JSON.stringify(encode(JSON.parse(input))))
} catch(error){
  print(input + ' ' + error.message);
}
