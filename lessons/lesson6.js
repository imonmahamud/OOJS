// function Person(){
//     this.name ='Twinkle Cats'
// }
// function Teacher(){
//     Person.call(this)
//     this.subject ='JavaScript'
// }

// var teacher = new Teacher()
// let name=teacher.name
// console.log(name)
function extend(Parent,Child){
    Child.prototype=Object.create(Parent.prototype)
    Child.prototype.constructor=Child.prototype
}
function Person(name){
    this.name = name
}
Person.prototype.printName = function(){
    console.log('Name : ' +this.name)
}

function Student(name,id){
    Person.call(this,name)
    this.id = id
}

extend(Person, Student)
// Student.prototype=Object.create(Person.prototype)
// //Object.setPrototypeOf(Student.prototype,Person.prototype)
// Student.prototype.constructor=Student


let s1=new Student('Marjan',16)