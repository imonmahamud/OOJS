// function Person(name,email){
//     this.name=name;
//     this.email=email;
//     this.print=function(){
//         console.log('Name : '+this.name)
//     }
// }
// let p1=new Person('Mahamud Hasan Imon','imonmahamud495@gmail.com');
// let p2=new Person('Marjan Naher','marjannaher@gmail.com');
// let p3=new Person('samiamahamud','samiamahamud@gmail.com');

// let people=[p1,p2,p3]
// console.log(p1.name)
// console.log(p1.email)
// console.log(p1)
//console.log(people)
// people.forEach((person,no)=>{
//     console.log((no+1)+'.Email: '+person.email)
//     person.print()
// })

// for(props in p1){
//     console.log('Properties : '+props)
// }

function Book(name,author,price){
    this.name = name;
    this.author = author;
    this.price = price
}

let book=new Book('Mahamud Hasan Imon','BoiPoka',30)

console.log(book.constructor)