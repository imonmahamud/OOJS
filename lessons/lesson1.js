// let obj={}

// let obj1=new Object();
// console.log(obj)
// console.log(obj1)

let book={
    name:'Functional JavaScript',
    Author:'Mahamud Hasan Imon',
    Publisher:'O\'Reilly',
    pages:250,
    print:function(){
        console.log(this.name,this.Author)
    }
}
book.publishYear=2010
// console.log('Published Year : '+book.publishYear)
// book['prize']=250
// console.log('Prize : '+book.prize)
// //console
// console.log(book)
// book.print()
// console.log('Name : ' + book.name)
// console.log('Author Name : '+book['Author'])

for(props in book){
    //console.log(props)
    console.log(props+ '= '+book[props])
}
