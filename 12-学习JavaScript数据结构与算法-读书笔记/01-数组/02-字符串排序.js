let  names = ['Ana','ana','john','John']

//忽略大小写比较
function comparePerson (a,b) {
  if(a.toLowerCase() < b.toLowerCase()) {
    return -1;
  } else if (a.toLowerCase() > b.toLowerCase()) {
    return 1;
  } else {
    return 0;
  }
}

//小写字母排在前面
function comparePerson1 (a,b) {
  return a.localeCompare(b);
}


console.log(names.sort(comparePerson));

console.log(names.sort(comparePerson1));
