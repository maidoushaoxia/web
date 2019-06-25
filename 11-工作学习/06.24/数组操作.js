let arr1 = [
    {name:'xx',age:0},
    {name:'xz',age:0},
    {name:'xa',age:0},
    {name:'xb',age:0},
    {name:'xc',age:0},
    {name:'xd',age:0},
]

let arr2 = [
    {name:'xz',age:1},
    {name:'xb',age:3},
    {name:'xd',age:5},
]

arr1.map(function(value){
    for(let i in arr2){
        if(value.name == arr2[i].name){
            value.age = arr2[i].age;
        }
    }
})


