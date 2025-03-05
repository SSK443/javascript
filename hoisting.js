// console.log(job);
// console.log(song);
// console.log(mario);
// console.log(emp['name']);
// console.log(add(10,2));

const suna = new sun("surah", 12);
var job="fvdv";
let song=1234
const mario=true

const emp={
  name:"vishuas"
}

function add(n,r){
  return n/r
}
class sun{
  constructor(name,age){
this.name=name;
this.age=age;
this.show()
  }
  show(){
    console.log(`
      ${this.name},
      ${this.age}
      `);
    
  }
}



