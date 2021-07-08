function Person(name,age){
    this.name=name;
    this.age=age;

    // Person.prototype.hello = function(){
    //     console.log("Hello "+this.name)
    // }
    // Person.prototype.print= function(){
    //     console.log(`My name is ${this.name} and I am ${age} years old`)
    // }

    Person.prototype={
        hello: function(){
            console.log("Hello "+this.name)
        },
        print: function(){
            console.log(`My name is ${this.name} and I am ${age} years old`);
        },
        email:'imonmahamud495@gmail.com'
    }

}

let p1=new Person('Mahamud Hasan Imon',25)
let p2=new Person('Marjan Naher',24)
console.log(p1)
console.log(p2)