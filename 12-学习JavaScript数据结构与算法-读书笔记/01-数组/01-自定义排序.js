let friends = [
  {name:'John',age:30},
  {name:'Ana',age:20},
  {name:'Chris',age:25},
];

function comparePerson (a,b) {
  if(a.age < b.age) {
    return -1;
  } else if (a.age > b.age) {
    return 1;
  } else {
    return 0;
  }
}

console.log(friends.sort(comparePerson));
