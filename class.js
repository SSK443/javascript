class emp{
  constructor(name,add){
this.name=name;
this.add=add;
this.intro=function(){
  console.log(`
    this is my ${this.name} and this is my ${this.add}
    `);
  
}
  }
}
const employeer=new emp("sharath","pondain house ")
console.log(employeer);
