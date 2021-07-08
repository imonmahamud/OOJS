function Obj(a,b){
    this.a = a;
    this.b=b
}
function Obj1(a,b,c){
    Obj.call(this,a,b)
    this.c=c
}
Obj1.prototype=Object.create(Obj.prototype)
Obj1.prototype.constructor=Obj1
let obj1=new Obj(1,2);
let obj2=new Obj1(3,4,5)