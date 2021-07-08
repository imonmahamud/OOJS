// function printMe(){
//     console.log('Hello, '+this.name)
// }
// var obj1={
//     name:'Mahamud Hasan imon',
//     age:25
// }
// var obj2={
//     name:'Marjan Naher',
//     age:24
// }
// // let print1=printMe.bind(obj1)
// // let print2=printMe.bind(obj2)
// // print1()
// // print2()
// printMe.call(obj1)
// printMe.call(obj2)

function add(a,b){
    return (a+b*this.c)
}

let obj1={
    c:3
}
let obj2={
    c:5
}
let result=add.call(obj1,5,10)
let result1=add.apply(obj2,[5,10])
result
result1