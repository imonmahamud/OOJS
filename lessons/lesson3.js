// let obj={
//     name:'Twinkle cats',

//     print:function(){
//         console.log(this)
//     }
// }
// obj.print()

// function myFunction(){
//     function inner(){
//         console.log(this)
//     }
//     new inner()
// }

// let person={
//     name:'Mahamud Hasan Imon',


//     print: function(){
//         console.log('Hello, '+this.name)
//     }
// }

// let myPrint=person.print.bind(person)
// console.log(myPrint)
//let myName=person.name
//person.print()

// console.log('I am your js')

// function add(num){
//     return this.value+num
// }

// var obj={
//     value:10
// }
// let obj2={
//     value:50
// }

// let binded=add.bind(obj)
// let result=binded(20)
// result

let person={
    name:'Mahamud Hasan Imon',


    print: function(){
        //const self=this
        setTimeout(function(){
            console.log(this.name)
        }.bind(this),5000)
    }
}

person.print()