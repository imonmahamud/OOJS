function Animal(name){
    this.name = name;
}
Animal.prototype.printName = function(){
    console.log(this.name)
}
function myNew(constructor){
    let obj={}
    Object.setPrototypeOf(obj,constructor.prototype)
    let argsArr=Array.prototype.slice.apply(arguments)
    constructor.apply(obj,argsArr.slice(1))
    return obj
}

let cat=myNew(Animal,'Cat')
let dog=myNew(Animal,'Dog')
console.log(cat)


//empty object
//prototype copy
//exectue constructor
//return
